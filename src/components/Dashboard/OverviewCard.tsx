
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MetricCard from "../ui/MetricCard";
import { useToast } from "@/hooks/use-toast";
import { Search, Database, Zap, Layers } from "lucide-react";

export const OverviewCard = () => {
  const { toast } = useToast();

  const handleScanNow = () => {
    toast({
      title: "Scan Started",
      description: "Web crawler analysis has started. Results will be available soon.",
    });
  };

  return (
    <Card className="col-span-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Dashboard Overview</CardTitle>
        <Button onClick={handleScanNow} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md">
          <Search className="mr-2 h-4 w-4" />
          Scan Now
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="metrics" className="space-y-4">
          <TabsList className="grid grid-cols-3 gap-2 mb-2">
            <TabsTrigger value="metrics" className="transition-all hover:bg-blue-50 dark:hover:bg-blue-900/20">Key Metrics</TabsTrigger>
            <TabsTrigger value="insights" className="transition-all hover:bg-blue-50 dark:hover:bg-blue-900/20">AI Insights</TabsTrigger>
            <TabsTrigger value="tasks" className="transition-all hover:bg-blue-50 dark:hover:bg-blue-900/20">Recommended Tasks</TabsTrigger>
          </TabsList>
          
          <TabsContent value="metrics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <MetricCard
                title="Websites Crawled"
                value="5,432"
                description="Total crawled sites in database"
                icon={<Database className="h-4 w-4" />}
                trend={{ value: 12, isPositive: true }}
                className="transition-all hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-white to-blue-50"
              />
              <MetricCard
                title="Data Points"
                value="1.2M"
                description="Analyzed data points"
                icon={<Database className="h-4 w-4" />}
                trend={{ value: 8.5, isPositive: true }}
                className="transition-all hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-white to-purple-50"
              />
              <MetricCard
                title="Marketing ROI"
                value="214%"
                description="Overall marketing return"
                icon={<Zap className="h-4 w-4" />}
                trend={{ value: 24.3, isPositive: true }}
                className="transition-all hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-white to-green-50"
              />
              <MetricCard
                title="Opportunities"
                value="15"
                description="New growth opportunities"
                icon={<Layers className="h-4 w-4" />}
                trend={{ value: 5, isPositive: true }}
                className="transition-all hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-white to-yellow-50"
              />
            </div>

            <div className="text-sm text-muted-foreground border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-md shadow-sm hover:shadow-md transition-all">
              <p className="font-medium text-blue-700">AI Recommendation</p>
              <p>Based on your recent data, consider reallocating 15% of your PPC budget to content marketing for a potential 24% ROI improvement.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="insights">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200 transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-sm">Market Trend Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p>AI analysis shows a growing trend in voice search optimization. Competitors are increasing voice search content by 34%.</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200 transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-sm">Financial Prediction</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p>Based on current growth patterns, revenue is projected to increase by 18% in Q3 if current marketing strategy continues.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tasks">
            <div className="space-y-4">
              <Card className="transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3 mt-0.5">1</div>
                      <div>
                        <h4 className="font-medium">Update social media content strategy</h4>
                        <p className="text-sm text-muted-foreground">Video content is outperforming other formats by 3.5x. Review and adjust content calendar.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3 mt-0.5">2</div>
                      <div>
                        <h4 className="font-medium">Optimize Google Ads campaigns</h4>
                        <p className="text-sm text-muted-foreground">CPC has increased 12% in the last month. Review keywords and bid strategy.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mr-3 mt-0.5">3</div>
                      <div>
                        <h4 className="font-medium">Review SWOT analysis</h4>
                        <p className="text-sm text-muted-foreground">New market opportunities in Asia-Pacific region identified. Update strategy accordingly.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
