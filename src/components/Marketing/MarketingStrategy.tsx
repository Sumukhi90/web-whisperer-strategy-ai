
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MetricCard from "../ui/MetricCard";
import { Progress } from "@/components/ui/progress";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for the chart
const channelPerformanceData = [
  { name: 'Jan', organic: 400, paid: 240, referral: 180 },
  { name: 'Feb', organic: 300, paid: 450, referral: 210 },
  { name: 'Mar', organic: 500, paid: 360, referral: 260 },
  { name: 'Apr', organic: 450, paid: 420, referral: 230 },
  { name: 'May', organic: 600, paid: 390, referral: 320 },
  { name: 'Jun', organic: 750, paid: 510, referral: 350 },
];

export const MarketingStrategy = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard
          title="Conversion Rate"
          value="3.6%"
          trend={{ value: 0.8, isPositive: true }}
          description="Overall website conversion"
        />
        <MetricCard
          title="Avg. CAC"
          value="$42.35"
          trend={{ value: 2.4, isPositive: false }}
          description="Customer acquisition cost"
        />
        <MetricCard
          title="ROI"
          value="216%"
          trend={{ value: 12.3, isPositive: true }}
          description="Return on marketing investment"
        />
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="channels">Channels</TabsTrigger>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Channel Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-80 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={channelPerformanceData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="organic" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="paid" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="referral" stackId="1" stroke="#ffc658" fill="#ffc658" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Budget Allocation</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>SEO</span>
                      <span>35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>PPC</span>
                      <span>25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Social Media</span>
                      <span>20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Content Marketing</span>
                      <span>15%</span>
                    </div>
                    <Progress value={15} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Email</span>
                      <span>5%</span>
                    </div>
                    <Progress value={5} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="channels">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium">Channel Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Detailed breakdown of marketing channels and their performance.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="campaigns">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium">Campaign Performance</h3>
              <p className="text-sm text-muted-foreground">
                Analysis of individual marketing campaigns and their results.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recommendations">
          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Increase SEO Content Production</h4>
                <p className="text-sm text-muted-foreground">
                  Analysis shows a 22% increase in organic traffic when publishing 2+ articles weekly.
                  Focus on long-tail keywords with competitive difficulty below 35.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Optimize PPC Campaigns</h4>
                <p className="text-sm text-muted-foreground">
                  Reduce cost-per-click by implementing negative keywords and adjusting bid strategy
                  to maximize for conversions rather than clicks.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Leverage Video Content</h4>
                <p className="text-sm text-muted-foreground">
                  Data indicates your audience responds 3.5x better to video content than static images.
                  Consider allocating 15% of marketing resources to short-form video production.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Retargeting Optimization</h4>
                <p className="text-sm text-muted-foreground">
                  Current retargeting campaigns show diminishing returns after 14 days.
                  Adjust frequency caps and create specialized messaging for different abandonment stages.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketingStrategy;
