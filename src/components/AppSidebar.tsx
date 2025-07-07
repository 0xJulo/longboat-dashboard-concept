"use client";

import Image from "next/image";
import { Search, LeaderboardOutlined, ImageOutlined, Settings, StarBorder, CheckCircleOutline, HelpOutline } from "@mui/icons-material";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    title: "Leaderboard",
    url: "/",
    icon: LeaderboardOutlined,
  },
  {
    title: "Assets",
    url: "/analytics",
    icon: ImageOutlined,
  },
  {
    title: "Rewards",
    url: "/users",
    icon: StarBorder,
  },
  {
    title: "Goals",
    url: "/settings",
    icon: CheckCircleOutline,
  },
  {
    title: "Help Centre",
    url: "/settings",
    icon: HelpOutline,
  },
];

// Navigation items

interface NavigationItemProps {
  title: string;
  icon?: React.ReactNode;
  href?: string;
}

function NavigationItem({ title, icon, href }: NavigationItemProps) {
  return <Card>{title}</Card>;
}

function NavigationMenu() {
  return (
    <SidebarMenu>
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.title} className="bg-card px-1 py-2 rounded-lg border border-border">
          <SidebarMenuButton asChild>
            <a href={item.url}>
              <item.icon className="text-primary" />
              <span className="text-[1rem] text-primary">{item.title}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

function SearchButton() {
  // This should be a button, it is not a menu item
  return (
    <Button variant="outline" className="w-full bg-card px-1 py-5 rounded-lg">
      <Search className="mr-2 h-4 w-4" />
      Search
    </Button>
  )
}

// The sidebar component

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-4 py-2 flex items-center gap-2">
          <Image
            src="/longboat-logo.png"
            alt="Longboat Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <h2 className="text-lg font-semibold">Longboat</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SearchButton />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <NavigationMenu />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Card>Next Sale</Card>
        <Card>Profile Name</Card>
      </SidebarFooter>
    </Sidebar>
  );
}
