
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
        
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <div className="container mx-auto py-6 px-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-gradient-start to-blue-gradient-end">
                AI Web Crawler & Analytics
              </h1>
              <SidebarTrigger />
            </div>

            <div className="space-y-8">
              {/* Dashboard Section */}
              <section id="dashboard" className="scroll-mt-20">
                <OverviewCard />
              </section>
              
              {/* Web Crawler Section */}
              <section id="crawler" className="scroll-mt-20 pt-4">
                <h2 className="text-2xl font-semibold mb-4">Web Crawler Configuration</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <CrawlerForm />
                  </div>
                  <div className="md:col-span-1">
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Quick Tip</h3>
                        <p className="text-sm opacity-90">Crawling depth beyond 3 can significantly increase processing time but provides more comprehensive data.</p>
                      </div>
                      
                      <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-medium mb-2">Recent Crawls</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">example.com</span>
                            <span className="text-gray-400">2 hours ago</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">yourwebsite.com</span>
                            <span className="text-gray-400">Yesterday</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">competitor.org</span>
                            <span className="text-gray-400">3 days ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Marketing Strategy Section */}
              <section id="marketing" className="scroll-mt-20 pt-6">
                <h2 className="text-2xl font-semibold mb-4">Marketing Strategy</h2>
                <MarketingStrategy />
              </section>
              
              {/* Financial Analysis Section */}
              <section id="financial" className="scroll-mt-20 pt-6">
                <h2 className="text-2xl font-semibold mb-4">Financial Analysis</h2>
                <FinancialAnalysis />
              </section>
              
              {/* SWOT Analysis Section */}
              <section id="swot" className="scroll-mt-20 pt-6">
                <h2 className="text-2xl font-semibold mb-4">SWOT Analysis</h2>
                <SwotAnalysis />
              </section>
              
              {/* Social Media Analysis Section */}
              <section id="social" className="scroll-mt-20 pt-6 pb-20">
                <h2 className="text-2xl font-semibold mb-4">Social Media Analysis</h2>
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
