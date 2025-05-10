
import React from "react";
import { Link } from "react-router-dom";
import { 
  Database, 
  LayoutDashboard, 
  Search, 
  Settings, 
  Layers, 
  Network, 
  Zap 
} from "lucide-react";
import { 
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

export const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "#dashboard" },
    { icon: Search, label: "Web Crawler", href: "#crawler" },
    { icon: Zap, label: "Marketing", href: "#marketing" },
    { icon: Database, label: "Financial", href: "#financial" },
    { icon: Layers, label: "SWOT Analysis", href: "#swot" },
    { icon: Network, label: "Social Media", href: "#social" },
    { icon: Settings, label: "Settings", href: "#settings" },
  ];

  return (
    <SidebarComponent>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <Database className="h-6 w-6 text-purple-500" />
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-gradient-start to-purple-gradient-end">
            AI Analytics
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3 py-2">
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton asChild>
                    <Link to={item.href}>
                      <item.icon className="h-5 w-5 mr-2" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarComponent>
  );
};

export default Sidebar;
