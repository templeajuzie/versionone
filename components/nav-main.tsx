"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

export function NavMain({
  items,
  label = "Administration",
}: {
  items: {
    title: string;
    url: string;
    icon?: React.ReactNode;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
  label?: string;
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup className="bg-transparent px-2">
      <SidebarGroupLabel className="px-2 pb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-muted-foreground/70">
        {label}
      </SidebarGroupLabel>
      <SidebarMenu className="gap-2.5">
        {items.map((item) => {
          const isActive = pathname === item.url;
          
          return (
            <React.Fragment key={item.title}>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive}
                  tooltip={item.title}
                  className={`h-11 px-3 rounded-xl transition-all duration-200 hover:bg-muted/60 ${isActive ? "text-primary font-bold bg-primary/5" : "text-muted-foreground bg-transparent! hover:text-foreground"}`}
                >
                  <Link href={item.url} className="flex items-center gap-3.5">
                    {item.icon && React.cloneElement(item.icon as React.ReactElement)}
                    <span className="text-[15px]">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </React.Fragment>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
