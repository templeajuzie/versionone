import React from "react";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

function AdminNavbar() {
  return (
    <nav className="border-border bg-background/80 supports-backdrop-filter:bg-background/60 sticky top-0 z-30 flex min-h-14 w-full items-center border-b px-6 py-3 backdrop-blur">
      <span className="text-foreground text-lg font-semibold tracking-tight">Admin Portal</span>
    </nav>
  );
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full grid-cols-[auto_1fr]">
        <AppSidebar />
        <div className="flex h-screen w-full flex-col">
          <AdminNavbar />
          <div className="min-h-0 w-full flex-1 overflow-y-auto">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
}
