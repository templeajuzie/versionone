"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";

export default function CreateAccountPage() {
  const { handleGoogleSignIn } = useAuth();

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-linear-to-br from-amber-100 via-orange-50 to-teal-100 p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-130 overflow-hidden bg-transparent shadow-none md:rounded-[2.5rem]">
        <div className="grid min-h-175 gap-0 lg:grid-cols-1">
          <div className="relative m-0 overflow-hidden lg:m-4 lg:rounded-4xl">
            <Image
              src="/images/travel.png"
              alt="Stylish portrait with headphones and sunglasses"
              className="absolute inset-0 size-24 h-full w-full object-cover"
              height={200}
              width={200}
            />

            {/* Bottom Caption/Description Card */}
            <div className="bg-background absolute right-6 bottom-6 left-6 space-y-3 rounded-2xl p-4 shadow-lg">
              <div className="flex flex-col items-center justify-center p-6 lg:p-10">
                <div className="w-full max-w-[420px] space-y-6">
                  <div className="text-left">
                    <h1 className="text-[32px] font-normal tracking-tight">Continue with Google</h1>
                  </div>

                  <div className="space-y-4">
                    {/* Google Sign Up Button */}
                    <Button
                      variant="outline"
                      className="bg-muted hover:bg-muted/80 text-foreground border-border h-12.5 w-full rounded-xl border font-normal"
                      onClick={handleGoogleSignIn}
                    >
                      <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                      Sign up with Google
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        a
      </div>
    </div>
  );
}
