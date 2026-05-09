"use client";

import * as React from "react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";
import { AudioLinesIcon, BookOpenIcon, BriefcaseIcon, FileTextIcon, LayoutDashboard, UsersIcon } from "lucide-react";
import { NavbarLogo } from "./ui/resizable-navbar";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/actions/auth";

const data = {
  user: {
    name: "User",
    email: "user@example.com",
    avatar: "",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      title: "Create Jobs",
      url: "/admin/dashboard/create",
      icon: <BriefcaseIcon />,
    },
    {
      title: "Jobs Listing",
      url: "/admin/dashboard/jobs",
      icon: <FileTextIcon />,
    },
    {
      title: "Applications",
      url: "/admin/dashboard/applications",
      icon: <UsersIcon />,
    },
    {
      title: "Public Site",
      url: "/",
      icon: <AudioLinesIcon />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: user } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  });

  const userData = user ? {
    name: `${user.profile.firstName ?? ""} ${user.profile.lastName ?? ""}`.trim() || "User",
    email: user.email,
    avatar: user.profile.avatarUrl ?? "",
  } : data.user;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="px-4 pt-1">
          <NavbarLogo />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} label="Administration" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
