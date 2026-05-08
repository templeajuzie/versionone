import { NextRequest, NextResponse } from "next/server";

export default async function proxy(req: NextRequest): Promise<NextResponse> {
  const host = req.headers.get("host");

  if (!host) return new NextResponse("Missing Host header", { status: 400 });

  const url = req.nextUrl.clone();
  //   let prefix = "";

  //   if (host === new URL(process.env.NEXT_PUBLIC_API_URL!).host) {
  //     prefix = "/admin";
  //   }
  //   if (prefix) {
  //     url.pathname = `${prefix}${url.pathname}`;
  //     return NextResponse.rewrite(url);
  //   }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /_next (Next.js internals)
     * 2. /_static (inside /public)
     * 3. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!_next/|_static/|images/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};
