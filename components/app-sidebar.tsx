"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { AudioLinesIcon, BookOpenIcon, GalleryVerticalEndIcon, TerminalIcon, LayoutDashboard} from "lucide-react";
import { NavbarLogo } from "./ui/resizable-navbar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: <GalleryVerticalEndIcon />,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: <AudioLinesIcon />,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: <TerminalIcon />,
      plan: "Free",
    },
  ],
  NavMain: [
    {
      isActive: true,
      title: "Portal",
      url: "#",
      icon: <LayoutDashboard />,
      items: [
        {
          title: "Dashboard",
          url: "/admin/dashboard",
        },
      ],
    },
  ],
  navMain: [
    {
      isActive: true,
      title: "Jobs & Applications",
      url: "#",
      icon: <BookOpenIcon />,
      items: [

        {
          title: "Create Jobs",
          url: "/admin/dashboard/create",
        },
        {
          title: "Jobs listing",
          url: "/admin/dashboard/jobs",
        },
        {
          title: "Applications",
          url: "/admin/dashboard/applications",
        },
        {
          title: "landing page",
          url: "/",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className=" px-4 pt-1">

        <NavbarLogo />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.NavMain} />
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
