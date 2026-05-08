/* eslint-disable @typescript-eslint/no-explicit-any */
import "server-only";

import { getCorsHeaders } from "@/constant";
import { Result } from "better-result";
import { NextRequest, NextResponse } from "next/server";
import { z as Schema } from "zod";

import { validateSchema } from "./utils";

export type AuthScope = "session";

const AUTH_SCOPE_LABELS: Record<AuthScope, string> = {
  session: "Session Token",
};

function authRequiredMessage(scopes: Array<AuthScope>): string {
  const labels = scopes.map((s) => AUTH_SCOPE_LABELS[s]);
  return `${labels.join(" or ")} required`;
}

type HandlerConfig<TBody, TParams, TQuery> = {
  schema?: {
    body?: Schema.ZodSchema<TBody>;
    params?: Schema.ZodSchema<TParams>;
    query?: Schema.ZodSchema<TQuery>;
  };
  auth?: Array<AuthScope> | null;
  handler: (args: {
    body: TBody;
    params: TParams;
    query: TQuery;
    req: NextRequest;
    accessToken?: string | null;
    refreshToken?: string | null;
  }) => Promise<Result<any, Error>>;
  headers?: Record<string, string>;
  convertToSnakeCase?: boolean;
};

export const apiHandler = <TBody = any, TParams = any, TQuery = any>(config: HandlerConfig<TBody, TParams, TQuery>) => {
  return async (req: NextRequest, context: { params: Promise<any> }) => {
    const origin = req.headers.get("origin");
    const corsHeaders = getCorsHeaders(origin);

    try {
      const rawParams = await context.params;
      const { searchParams } = new URL(req.url);
      const rawQuery = Object.fromEntries(searchParams.entries());

      const accessToken = req.cookies.get("accessToken")?.value || req.headers.get("x-access-token");
      const refreshToken = req.cookies.get("refreshToken")?.value || req.headers.get("x-refresh-token");
      const allowedScopes = config.auth?.length ? config.auth : null;

      if (allowedScopes) {
        const hasSession = allowedScopes.includes("session") && !!accessToken;
        if (!hasSession) {
          return NextResponse.json(
            { error: authRequiredMessage(allowedScopes) },
            { status: 401, headers: corsHeaders }
          );
        }
      }

      let rawBody: any = {};
      if (["POST", "PUT", "PATCH", "DELETE"].includes(req.method)) {
        const contentType = req.headers.get("content-type") || "";
        if (contentType.includes("multipart/form-data")) {
          rawBody = await req.formData().catch(() => new FormData());
        } else {
          rawBody = await req.json().catch(() => ({}));
        }
      }

      let body: TBody = rawBody as TBody;
      if (config.schema?.body) {
        const v = validateSchema(config.schema.body, rawBody);
        if (v.isErr()) return NextResponse.json({ error: v.error.message }, { status: 400, headers: corsHeaders });
        body = v.value;
      }

      let params: TParams = rawParams;
      if (config.schema?.params) {
        const v = validateSchema(config.schema.params, rawParams);
        if (v.isErr()) return NextResponse.json({ error: v.error.message }, { status: 400, headers: corsHeaders });
        params = v.value;
      }

      let query: TQuery = rawQuery as any;
      if (config.schema?.query) {
        const v = validateSchema(config.schema.query, rawQuery);
        if (v.isErr()) return NextResponse.json({ error: v.error.message }, { status: 400, headers: corsHeaders });
        query = v.value;
      }

      const result = await config.handler({ body, params, query, req, accessToken, refreshToken });
      if (result.isErr()) {
        return NextResponse.json({ error: result.error.message }, { status: 400, headers: corsHeaders });
      }
      const value = result.value;
      if (value && typeof value === "object" && ("accessToken" in value || "refreshToken" in value)) {
        return NextResponse.json(value, { headers: corsHeaders });
      }
      return NextResponse.json(value, { headers: corsHeaders });
    } catch (error: any) {
      console.error("[API_ERROR]", error);
      return NextResponse.json(
        { error: error.message || "Internal Server Error" },
        { status: 500, headers: corsHeaders }
      );
    }
  };
};

export const createOptionsHandler = () => (req: NextRequest) =>
  new NextResponse(null, { status: 204, headers: getCorsHeaders(req.headers.get("origin")) });
