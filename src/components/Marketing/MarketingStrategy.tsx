
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MetricCard from "../ui/MetricCard";
import { Progress } from "@/components/ui/progress";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { ArrowRight } from "lucide-react";

// Mock data for the chart
const channelPerformanceData = [
  { name: 'Jan', organic: 400, paid: 240, referral: 180 },
  { name: 'Feb', organic: 300, paid: 450, referral: 210 },
  { name: 'Mar', organic: 500, paid: 360, referral: 260 },
  { name: 'Apr', organic: 450, paid: 420, referral: 230 },
  { name: 'May', organic: 600, paid: 390, referral: 320 },
  { name: 'Jun', organic: 750, paid: 510, referral: 350 },
];

// Pie chart data
const budgetData = [
  { name: 'SEO', value: 35 },
  { name: 'PPC', value: 25 },
  { name: 'Social Media', value: 20 },
  { name: 'Content', value: 15 },
  { name: 'Email', value: 5 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe'];

// Marketing funnel data
const funnelData = [
  { stage: "Awareness", value: 10000, color: "#8884d8" },
  { stage: "Interest", value: 5000, color: "#83a6ed" },
  { stage: "Consideration", value: 2500, color: "#8dd1e1" },
  { stage: "Intent", value: 1500, color: "#82ca9d" },
  { stage: "Purchase", value: 750, color: "#a4de6c" },
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
          className="bg-gradient-to-br from-white to-purple-50 transition-all hover:shadow-lg hover:-translate-y-1"
        />
        <MetricCard
          title="Avg. CAC"
          value="$42.35"
          trend={{ value: 2.4, isPositive: false }}
          description="Customer acquisition cost"
          className="bg-gradient-to-br from-white to-red-50 transition-all hover:shadow-lg hover:-translate-y-1"
        />
        <MetricCard
          title="ROI"
          value="216%"
          trend={{ value: 12.3, isPositive: true }}
          description="Return on marketing investment"
          className="bg-gradient-to-br from-white to-green-50 transition-all hover:shadow-lg hover:-translate-y-1"
        />
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="overview" className="transition-all hover:bg-blue-50 dark:hover:bg-blue-900/20">Overview</TabsTrigger>
          <TabsTrigger value="channels" className="transition-all hover:bg-blue-50 dark:hover:bg-blue-900/20">Channels</TabsTrigger>
          <TabsTrigger value="campaigns" className="transition-all hover:bg-blue-50 dark:hover:bg-blue-900/20">Campaigns</TabsTrigger>
          <TabsTrigger value="recommendations" className="transition-all hover:bg-blue-50 dark:hover:bg-blue-900/20">Recommendations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <Card className="shadow-md border-blue-100 transition-all hover:shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
              <CardTitle className="text-blue-800">Channel Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={channelPerformanceData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "rgba(255, 255, 255, 0.95)", 
                        borderRadius: "8px", 
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", 
                        border: "1px solid #e2e8f0" 
                      }} 
                    />
                    <Area type="monotone" dataKey="organic" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="paid" stackId="1" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="referral" stackId="1" stroke="#ffc658" fill="#ffc658" fillOpacity={0.6} />
                    <Legend verticalAlign="top" height={36}/>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-blue-800">Marketing Funnel</h4>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    {funnelData.map((item, index) => (
                      <div key={item.stage} className="relative">
                        <div 
                          className="h-12 flex items-center justify-center rounded-md mb-2" 
                          style={{ 
                            width: `${(item.value / funnelData[0].value) * 100}%`, 
                            backgroundColor: item.color,
                            margin: '0 auto'
                          }}
                        >
                          <span className="text-white font-medium">{item.stage}: {item.value}</span>
                        </div>
                        {index < funnelData.length - 1 && (
                          <div className="flex justify-center mb-1">
                            <ArrowRight className="text-gray-400" size={16} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-sm font-medium text-blue-800">Budget Allocation</h4>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={budgetData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {budgetData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value) => `${value}%`}
                          contentStyle={{ 
                            backgroundColor: "rgba(255, 255, 255, 0.95)", 
                            borderRadius: "8px", 
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", 
                            border: "1px solid #e2e8f0" 
                          }} 
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="channels">
          <Card className="shadow-md border-blue-100">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
              <CardTitle className="text-blue-800">Channel Analysis</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Detailed breakdown of marketing channels and their performance.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="campaigns">
          <Card className="shadow-md border-blue-100">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
              <CardTitle className="text-blue-800">Campaign Performance</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                Analysis of individual marketing campaigns and their results.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recommendations">
          <Card className="shadow-md border-blue-100">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
              <CardTitle className="text-blue-800">AI-Generated Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <div className="space-y-2 bg-green-50 p-4 rounded-lg border border-green-100 transition-all hover:shadow-md">
                <h4 className="text-sm font-semibold text-green-800">Increase SEO Content Production</h4>
                <p className="text-sm text-green-700">
                  Analysis shows a 22% increase in organic traffic when publishing 2+ articles weekly.
                  Focus on long-tail keywords with competitive difficulty below 35.
                </p>
              </div>
              
              <div className="space-y-2 bg-blue-50 p-4 rounded-lg border border-blue-100 transition-all hover:shadow-md">
                <h4 className="text-sm font-semibold text-blue-800">Optimize PPC Campaigns</h4>
                <p className="text-sm text-blue-700">
                  Reduce cost-per-click by implementing negative keywords and adjusting bid strategy
                  to maximize for conversions rather than clicks.
                </p>
              </div>
              
              <div className="space-y-2 bg-purple-50 p-4 rounded-lg border border-purple-100 transition-all hover:shadow-md">
                <h4 className="text-sm font-semibold text-purple-800">Leverage Video Content</h4>
                <p className="text-sm text-purple-700">
                  Data indicates your audience responds 3.5x better to video content than static images.
                  Consider allocating 15% of marketing resources to short-form video production.
                </p>
              </div>
              
              <div className="space-y-2 bg-yellow-50 p-4 rounded-lg border border-yellow-100 transition-all hover:shadow-md">
                <h4 className="text-sm font-semibold text-yellow-800">Retargeting Optimization</h4>
                <p className="text-sm text-yellow-700">
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
