"use client";

import Image from "next/image";
import {
  Search,
  LeaderboardOutlined,
  ImageOutlined,
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
    <Card className="flex flex-col gap-4 bg-card text-primary border border-border p-4">
      <div className="flex flex-col gap-0">
        <p className="text-[#747474] text-[0.9rem]">Next sale</p>
        <p className="text-[#c1c1c1] text-[1.2rem] font-semibold">30th of July, 2pm UTC</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[#747474] text-[0.9rem]">28d 23h 29m 38s</p>
        <Progress value={65} className="h-3" />
      </div>
      <Button className="rounded-[0.4rem] bg-[#303032] text-[#c1c1c1] hover:bg-[#46464B] cursor-pointer mt-2">
        Register
      </Button>
    </Card>
  );
}

function UserProfile() {
  return (
    <Card className="bg-card text-primary border border-border px-4 py-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/julo.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-[#c1c1c1] font-semibold">Julo</p>
            <p className="text-[#747474] text-[0.7rem]">0xF138...FD90C</p>
          </div>
        </div>
        <SettingsOutlined className="text-[#6B6B6B] cursor-pointer" />
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
          className="bg-card rounded-lg border border-border mb-1"
        >
          <SidebarMenuButton asChild>
            <a href={item.url} className="block px-3 py-6 rounded-lg hover:!bg-[#292929]">
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
      className="w-full text-primary flex items-center justify-between !bg-card !border !border-border pl-2 pr-5 py-6 rounded-lg hover:!bg-[#292929] cursor-pointer"
    >
      <div className="flex items-center gap-2">
        <Search className="h-4 w-4" />
        Ask anything
      </div>
      <span className="text-[#6B6B6B]">⌘K</span>
    </Button>
  );
}

// The sidebar component

export function AppSidebar() {
  return (
    <Sidebar
      className="fixed left-0 top-0 h-screen border-r border-border z-50"
      collapsible="none"
    >
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
          <SidebarGroupContent className="mt-2">
            <SearchButton />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
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
