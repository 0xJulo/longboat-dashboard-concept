"use client";

import Image from "next/image";
import {
  Search,
  LeaderboardOutlined,
  ImageOutlined,
  Settings,
  StarBorder,
  CheckCircleOutline,
  HelpOutline,
  SettingsOutlined,
} from "@mui/icons-material";
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
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

function NextSale() {
  return (
    <Card className="bg-card text-primary border border-border px-2 py-2">
      <p>Next sale</p>
      <p>30th of July, 2pm UTC</p>
      <p>28d 23h 29m 38s</p>
      <Progress value={65} />
      <Button>Register</Button>
    </Card>
  );
}

function UserProfile() {
  return (
    <Card className="bg-card text-primary border border-border px-2 py-2">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="/julo.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p>Julo</p>
          <p>0xF138...FD90C</p>
        </div>
        </div>
        <SettingsOutlined />
      </div>
      
    </Card>
  );
}

function NavigationMenu() {
  return (
    <SidebarMenu>
      {menuItems.map((item) => (
        <SidebarMenuItem
          key={item.title}
          className="bg-card px-1 py-2 rounded-lg border border-border mb-1"
        >
          <SidebarMenuButton asChild>
            <a href={item.url}>
              <item.icon className="text-primary" fontSize="medium" />
              <span className="text-[0.9rem] text-primary">{item.title}</span>
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
    <Button
      variant="outline"
      className="w-full flex items-center justify-start bg-card px-1 py-6 rounded-lg"
    >
      <Search className="mr-2 h-4 w-4" />
      Ask anything
    </Button>
  );
}

// The sidebar component

export function AppSidebar() {
  return (
    <Sidebar className="h-screen border-r border-border" collapsible="none">
      <SidebarHeader className="h-[5rem] border-b border-border flex items-start justify-center px-2">
        <div className="px-1 py-2 flex items-center gap-2">
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
      <SidebarContent className="px-2">
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
      <SidebarFooter className="px-4 pb-4 flex flex-col gap-4">
        <NextSale />
        <UserProfile />
      </SidebarFooter>
    </Sidebar>
  );
}
