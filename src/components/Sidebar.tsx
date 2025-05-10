
import React from "react";
import { Link } from "react-router-dom";
import { 
  Database, 
  LayoutDashboard, 
  Search, 
  Settings, 
  Layers, 
  Network, 
  Zap,
  ChevronRight
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
  SidebarFooter,
} from "@/components/ui/sidebar";

export const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "#dashboard", description: "Overview & Key Metrics" },
    { icon: Search, label: "Web Crawler", href: "#crawler", description: "Configure & Run Crawls" },
    { icon: Zap, label: "Marketing", href: "#marketing", description: "Strategy & Performance" },
    { icon: Database, label: "Financial", href: "#financial", description: "Analysis & Projections" },
    { icon: Layers, label: "SWOT Analysis", href: "#swot", description: "Strengths, Weaknesses, Opportunities, Threats" },
    { icon: Network, label: "Social Media", href: "#social", description: "Analytics & Insights" },
    { icon: Settings, label: "Settings", href: "#settings", description: "Configuration & Preferences" },
  ];

  return (
    <SidebarComponent>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
            <Database className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            AI Analytics
          </span>
        </div>
        <div className="mt-3 bg-sidebar-accent/20 text-xs text-sidebar-foreground/70 py-1 px-3 rounded-md">
          Pro Plan
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-2 py-2">
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-sidebar-foreground/60">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton 
                    asChild
                    tooltip={item.description}
                    className="group transition-all duration-300 hover:bg-sidebar-accent/50"
                  >
                    <Link to={item.href} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <item.icon className="h-5 w-5 mr-3 text-sidebar-foreground/70 group-hover:text-sidebar-foreground transition-colors" />
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-70 transition-opacity" />
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="rounded-md bg-sidebar-accent/20 p-3 text-center">
          <p className="text-xs text-sidebar-foreground/70 mb-2">24/7 AI Assistant</p>
          <button className="w-full text-xs py-1.5 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium transition-all hover:opacity-90">
            Ask Questions
          </button>
        </div>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
