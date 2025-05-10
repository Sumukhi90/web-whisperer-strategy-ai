
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Play, RefreshCw, X, Code, Database, Zap, Search, Settings } from "lucide-react";

export const CrawlerForm = () => {
  const { toast } = useToast();
  const [url, setUrl] = useState("");
  const [depth, setDepth] = useState(2);
  const [crawlType, setCrawlType] = useState("full");
  const [followExternalLinks, setFollowExternalLinks] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Nimbus AI Crawler Started",
        description: `Started crawling ${url} with depth ${depth}`,
      });
    }, 1500);
  };

  const handleReset = () => {
    setUrl("");
    setDepth(2);
    setCrawlType("full");
    setFollowExternalLinks(false);
    setAiAnalysis(true);
  };

  return (
    <Card className="w-full shadow-lg border-indigo-100 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 border-b border-indigo-100">
        <div className="flex items-center space-x-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-r from-indigo-600 to-blue-500 flex items-center justify-center shadow-sm">
            <Search className="h-4 w-4 text-white" />
          </div>
          <CardTitle className="text-xl text-indigo-800">Nimbus AI Web Crawler</CardTitle>
        </div>
        <CardDescription className="text-indigo-600">
          Configure your AI-powered web crawler for in-depth analysis
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="url" className="text-indigo-700">Target URL</Label>
              <Input
                id="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="focus-visible:ring-indigo-500 border-indigo-200"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="crawlType" className="text-indigo-700">Crawl Type</Label>
              <Select value={crawlType} onValueChange={setCrawlType}>
                <SelectTrigger id="crawlType" className="focus-visible:ring-indigo-500 border-indigo-200">
                  <SelectValue placeholder="Select crawl type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full">Full Site</SelectItem>
                  <SelectItem value="section">Section Only</SelectItem>
                  <SelectItem value="single">Single Page</SelectItem>
                  <SelectItem value="api">API Endpoints</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label className="text-indigo-700">Crawl Depth: {depth}</Label>
              <div className="pt-2">
                <Slider
                  value={[depth]}
                  min={1}
                  max={5}
                  step={1}
                  onValueChange={(values) => setDepth(values[0])}
                  className="[&>span]:bg-indigo-600"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Higher values will take longer but gather more comprehensive data
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="followExternal"
                  checked={followExternalLinks}
                  onCheckedChange={setFollowExternalLinks}
                  className="data-[state=checked]:bg-indigo-600"
                />
                <Label htmlFor="followExternal" className="text-indigo-700">Follow External Links</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="aiAnalysis"
                  checked={aiAnalysis}
                  onCheckedChange={setAiAnalysis}
                  className="data-[state=checked]:bg-indigo-600"
                />
                <Label htmlFor="aiAnalysis" className="text-indigo-700">Enable Nimbus AI Analysis</Label>
              </div>
            </div>
            
            <div className="rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50 p-5 border border-indigo-100 shadow-sm">
              <h3 className="text-sm font-medium text-indigo-800 mb-3">Nimbus AI Crawler Flow</h3>
              <div className="flex items-center justify-between text-xs">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-600 to-indigo-500 flex items-center justify-center mb-2 shadow-md">
                    <Play size={20} className="text-white ml-1" />
                  </div>
                  <span className="text-indigo-700">Initialize</span>
                </div>
                <ArrowRight size={16} className="text-indigo-400" />
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-2 shadow-md">
                    <Search size={20} className="text-white" />
                  </div>
                  <span className="text-indigo-700">Crawl</span>
                </div>
                <ArrowRight size={16} className="text-indigo-400" />
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-2 shadow-md">
                    <Zap size={20} className="text-white" />
                  </div>
                  <span className="text-indigo-700">Analyze</span>
                </div>
                <ArrowRight size={16} className="text-indigo-400" />
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-600 to-green-500 flex items-center justify-center mb-2 shadow-md">
                    <Database size={20} className="text-white" />
                  </div>
                  <span className="text-indigo-700">Report</span>
                </div>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex items-center justify-between">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleReset}
                className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 transition-all"
              >
                <X size={16} className="mr-1" />
                Reset
              </Button>
              <Button 
                type="submit" 
                disabled={loading} 
                className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white hover:from-indigo-700 hover:to-blue-600 transition-all shadow-md"
              >
                {loading ? (
                  <>
                    <RefreshCw size={16} className="mr-2 animate-spin" />
                    Initializing Nimbus...
                  </>
                ) : (
                  <>
                    <Play size={16} className="mr-2" />
                    Start Nimbus Crawler
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CrawlerForm;
