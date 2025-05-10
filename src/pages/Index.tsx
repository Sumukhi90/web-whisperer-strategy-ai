
import React, { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/Sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OverviewCard from "@/components/Dashboard/OverviewCard";
import CrawlerForm from "@/components/WebCrawler/CrawlerForm";
import MarketingStrategy from "@/components/Marketing/MarketingStrategy";
import FinancialAnalysis from "@/components/Financial/FinancialAnalysis";
import SwotAnalysis from "@/components/Analysis/SwotAnalysis";
import SocialMediaAnalysis from "@/components/SocialMedia/SocialMediaAnalysis";
import { Database, Search, Zap } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  
  const goToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden w-full">
        <Sidebar />
        
        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-blue-50/40">
          <div className="container mx-auto py-6 px-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold nimbus-text">
                  Nimbus AI Web Intelligence
                </h1>
                <p className="text-gray-600 text-sm md:text-base">Professional web analysis powered by artificial intelligence</p>
              </div>
              <SidebarTrigger />
            </div>

            <div className="space-y-8">
              {/* Dashboard Section */}
              <section id="dashboard" className="scroll-mt-20">
                <OverviewCard />
              </section>
              
              {/* Web Crawler Section - Enhanced with Nimbus AI styling */}
              <section id="crawler" className="scroll-mt-20 pt-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="h-8 w-8 rounded-md nimbus-gradient flex items-center justify-center shadow-md">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold nimbus-text">Nimbus AI Web Crawler</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <CrawlerForm />
                  </div>
                  <div className="md:col-span-1">
                    <div className="space-y-4">
                      <div className="nimbus-gradient text-white p-5 rounded-lg shadow-md">
                        <h3 className="font-medium mb-2 flex items-center">
                          <Zap className="h-4 w-4 mr-2" />
                          Nimbus AI Insights
                        </h3>
                        <p className="text-sm opacity-90">Nimbus AI's advanced algorithms analyze web content to provide detailed insights on SEO, content quality, and user engagement metrics.</p>
                      </div>
                      
                      <div className="bg-white shadow-md rounded-lg p-5 border border-indigo-100">
                        <h3 className="font-medium mb-2 text-indigo-800 flex items-center">
                          <Database className="h-4 w-4 mr-2 text-indigo-600" /> 
                          Recent Crawls
                        </h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center text-sm p-2 hover:bg-indigo-50 rounded-md transition-colors">
                            <span className="text-indigo-700">techcrunch.com</span>
                            <span className="text-indigo-400 text-xs">10 min ago</span>
                          </div>
                          <div className="flex justify-between items-center text-sm p-2 hover:bg-indigo-50 rounded-md transition-colors">
                            <span className="text-indigo-700">yourwebsite.com</span>
                            <span className="text-indigo-400 text-xs">2 hours ago</span>
                          </div>
                          <div className="flex justify-between items-center text-sm p-2 hover:bg-indigo-50 rounded-md transition-colors">
                            <span className="text-indigo-700">competitor.org</span>
                            <span className="text-indigo-400 text-xs">Yesterday</span>
                          </div>
                          <div className="flex justify-between items-center text-sm p-2 hover:bg-indigo-50 rounded-md transition-colors">
                            <span className="text-indigo-700">example.com</span>
                            <span className="text-indigo-400 text-xs">3 days ago</span>
                          </div>
                        </div>
                        <button className="mt-4 text-xs py-1.5 px-3 rounded-md border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition-colors w-full">
                          View All Crawls
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Marketing Strategy Section */}
              <section id="marketing" className="scroll-mt-20 pt-6">
                <h2 className="text-2xl font-semibold mb-4 nimbus-text">Marketing Strategy</h2>
                <MarketingStrategy />
              </section>
              
              {/* Financial Analysis Section */}
              <section id="financial" className="scroll-mt-20 pt-6">
                <h2 className="text-2xl font-semibold mb-4 nimbus-text">Financial Analysis</h2>
                <FinancialAnalysis />
              </section>
              
              {/* SWOT Analysis Section */}
              <section id="swot" className="scroll-mt-20 pt-6">
                <h2 className="text-2xl font-semibold mb-4 nimbus-text">SWOT Analysis</h2>
                <SwotAnalysis />
              </section>
              
              {/* Social Media Analysis Section */}
              <section id="social" className="scroll-mt-20 pt-6 pb-20">
                <h2 className="text-2xl font-semibold mb-4 nimbus-text">Social Media Analysis</h2>
                <SocialMediaAnalysis />
              </section>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
