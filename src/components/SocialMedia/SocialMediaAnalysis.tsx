
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MetricCard from "../ui/MetricCard";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Sample data for social media engagement
const engagementData = [
  { date: "May 01", facebook: 240, instagram: 380, twitter: 120, linkedin: 180 },
  { date: "May 08", facebook: 280, instagram: 390, twitter: 110, linkedin: 220 },
  { date: "May 15", facebook: 250, instagram: 420, twitter: 130, linkedin: 240 },
  { date: "May 22", facebook: 290, instagram: 460, twitter: 140, linkedin: 250 },
  { date: "May 29", facebook: 320, instagram: 480, twitter: 150, linkedin: 280 },
  { date: "Jun 05", facebook: 340, instagram: 520, twitter: 160, linkedin: 310 },
];

// Sample data for audience demographics
const demographicsData = [
  { name: "18-24", value: 15 },
  { name: "25-34", value: 35 },
  { name: "35-44", value: 25 },
  { name: "45-54", value: 15 },
  { name: "55+", value: 10 },
];

// Sample data for sentiment analysis
const sentimentData = [
  { name: "Positive", value: 62 },
  { name: "Neutral", value: 28 },
  { name: "Negative", value: 10 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];
const SENTIMENT_COLORS = ["#4CAF50", "#9E9E9E", "#F44336"];

export const SocialMediaAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Total Followers"
          value="28.4K"
          trend={{ value: 8.3, isPositive: true }}
          description="Across all platforms"
        />
        <MetricCard
          title="Engagement Rate"
          value="4.7%"
          trend={{ value: 1.2, isPositive: true }}
          description="Average across platforms"
        />
        <MetricCard
          title="Click Through Rate"
          value="2.3%"
          trend={{ value: 0.5, isPositive: true }}
          description="From social to website"
        />
        <MetricCard
          title="Conversion Rate"
          value="1.8%"
          trend={{ value: 0.3, isPositive: true }}
          description="Social media visitors"
        />
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="content">Content Analysis</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Engagement Trends</CardTitle>
                <CardDescription>Last 6 weeks across platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={engagementData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="instagram" stroke="#E1306C" strokeWidth={2} />
                      <Line type="monotone" dataKey="facebook" stroke="#4267B2" strokeWidth={2} />
                      <Line type="monotone" dataKey="twitter" stroke="#1DA1F2" strokeWidth={2} />
                      <Line type="monotone" dataKey="linkedin" stroke="#0077B5" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Audience Demographics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-40">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={demographicsData}
                          cx="50%"
                          cy="50%"
                          outerRadius={60}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {demographicsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Sentiment Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-40">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={sentimentData}
                          cx="50%"
                          cy="50%"
                          outerRadius={60}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {sentimentData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={SENTIMENT_COLORS[index % SENTIMENT_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="platforms">
          <Card>
            <CardHeader>
              <CardTitle>Platform Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-[#E1306C] rounded-full mr-2"></div>
                      <span className="font-medium">Instagram</span>
                    </div>
                    <span>520 engagements</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>8.5k followers</span>
                    <span>6.1% engagement rate</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-[#4267B2] rounded-full mr-2"></div>
                      <span className="font-medium">Facebook</span>
                    </div>
                    <span>340 engagements</span>
                  </div>
                  <Progress value={65} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>12.3k followers</span>
                    <span>2.8% engagement rate</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-[#0077B5] rounded-full mr-2"></div>
                      <span className="font-medium">LinkedIn</span>
                    </div>
                    <span>310 engagements</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>5.6k followers</span>
                    <span>5.5% engagement rate</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-[#1DA1F2] rounded-full mr-2"></div>
                      <span className="font-medium">Twitter</span>
                    </div>
                    <span>160 engagements</span>
                  </div>
                  <Progress value={32} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>2.0k followers</span>
                    <span>8.0% engagement rate</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Content Types</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="font-medium">Video</div>
                        <div className="text-2xl font-bold">78%</div>
                        <div className="text-xs text-muted-foreground">highest engagement</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="font-medium">Images</div>
                        <div className="text-2xl font-bold">65%</div>
                        <div className="text-xs text-muted-foreground">engagement rate</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="font-medium">Carousels</div>
                        <div className="text-2xl font-bold">59%</div>
                        <div className="text-xs text-muted-foreground">engagement rate</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="font-medium">Text</div>
                        <div className="text-2xl font-bold">32%</div>
                        <div className="text-xs text-muted-foreground">engagement rate</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Popular Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      #AITechnology
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      #DataAnalytics
                    </div>
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      #BusinessStrategy
                    </div>
                    <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                      #MarketTrends
                    </div>
                    <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                      #Innovation
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Best Posting Times</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Instagram</span>
                        <span className="text-sm font-medium">Tuesday, 12-2PM</span>
                      </div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Facebook</span>
                        <span className="text-sm font-medium">Thursday, 1-3PM</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">LinkedIn</span>
                        <span className="text-sm font-medium">Wednesday, 9-11AM</span>
                      </div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm">Twitter</span>
                        <span className="text-sm font-medium">Monday, 3-5PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="audience">
          <Card>
            <CardHeader>
              <CardTitle>Audience Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold">Geographic Distribution</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>United States</span>
                      <span>42%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <span>United Kingdom</span>
                      <span>18%</span>
                    </div>
                    <Progress value={18} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <span>Canada</span>
                      <span>12%</span>
                    </div>
                    <Progress value={12} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <span>Germany</span>
                      <span>8%</span>
                    </div>
                    <Progress value={8} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <span>Australia</span>
                      <span>6%</span>
                    </div>
                    <Progress value={6} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <span>Other</span>
                      <span>14%</span>
                    </div>
                    <Progress value={14} className="h-2" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold">Interest Categories</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span>Technology</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <span>Business</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <span>Marketing</span>
                      <span>52%</span>
                    </div>
                    <Progress value={52} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <span>Finance</span>
                      <span>35%</span>
                    </div>
                    <Progress value={35} className="h-2" />
                    
                    <div className="flex items-center justify-between">
                      <span>Education</span>
                      <span>28%</span>
                    </div>
                    <Progress value={28} className="h-2" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Audience Growth</h4>
                <p className="text-sm text-muted-foreground">
                  Your audience has grown by 14.2% in the last 30 days, primarily from organic content.
                  Instagram saw the highest growth rate at 18.5%, followed by LinkedIn at 12.8%.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Audience Behavior</h4>
                <p className="text-sm text-muted-foreground">
                  Most engaged users visit your social profiles 2-3 times weekly, with an average session duration of 4.2 minutes.
                  Video content drives 3.5x more follower acquisition than other content types.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SocialMediaAnalysis;
