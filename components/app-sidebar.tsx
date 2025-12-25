"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconShield,
  IconUsers,
} from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Admin",
    email: "admin@entropy.bank",
    avatar: "/avatars/admin.jpg",
  },
  navMain: [
    {
      title: "Overview",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Live Transactions",
      url: "/dashboard/transactions",
      icon: IconListDetails,
    },
    {
      title: "Fraud Alerts",
      url: "/dashboard/alerts",
      icon: IconReport,
    },
    {
      title: "Risk Analytics",
      url: "/dashboard/analytics",
      icon: IconChartBar,
    },
    {
      title: "Model Insights",
      url: "/dashboard/model-insights",
      icon: IconFileAi,
    },
  ],
  navSecondary: [
    {
      title: "Admin Actions",
      url: "/dashboard/actions",
      icon: IconUsers,
    },
    {
      title: "Audit Logs",
      url: "/dashboard/audit-logs",
      icon: IconFileDescription,
    },
    {
      title: "System Health",
      url: "/dashboard/health",
      icon: IconDatabase,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: IconSettings,
    },
  ],
  documents: [],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <IconShield className="!size-5 text-primary" />
                <span className="text-base font-bold tracking-tight uppercase text-primary">Entropy</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
