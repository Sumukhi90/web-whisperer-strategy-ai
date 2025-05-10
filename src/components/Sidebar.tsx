
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
  ChevronRight,
  Code
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
    { icon: Code, label: "Nimbus API", href: "#nimbus", description: "AI Integration & Controls" },
    { icon: Settings, label: "Settings", href: "#settings", description: "Configuration & Preferences" },
  ];

  return (
    <SidebarComponent>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center shadow-lg">
            <Search className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
            Nimbus AI
          </span>
        </div>
        <div className="mt-3 bg-sidebar-accent/20 text-xs text-sidebar-foreground/70 py-1 px-3 rounded-md flex items-center justify-center space-x-1">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Enterprise Plan</span>
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
        <div className="rounded-md bg-gradient-to-r from-indigo-600/10 to-blue-500/10 p-3 text-center border border-indigo-600/20">
          <p className="text-xs text-sidebar-foreground/70 mb-2">Nimbus AI Assistant</p>
          <button className="w-full text-xs py-1.5 rounded-md bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium transition-all hover:opacity-90 shadow-md">
            Ask Nimbus
          </button>
        </div>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
