
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
import { ArrowRight, Play, RefreshCw, X } from "lucide-react";

export const CrawlerForm = () => {
  const { toast } = useToast();
  const [url, setUrl] = useState("");
  const [depth, setDepth] = useState(2);
  const [crawlType, setCrawlType] = useState("full");
  const [followExternalLinks, setFollowExternalLinks] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Web Crawler Started",
        description: `Started crawling ${url} with depth ${depth}`,
      });
    }, 1500);
  };

  const handleReset = () => {
    setUrl("");
    setDepth(2);
    setCrawlType("full");
    setFollowExternalLinks(false);
  };

  return (
    <Card className="w-full shadow-lg border-blue-100 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
        <CardTitle className="text-xl text-blue-800">Web Crawler Configuration</CardTitle>
        <CardDescription className="text-blue-600">
          Set up parameters for the AI-powered crawler
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="url" className="text-blue-700">Target URL</Label>
              <Input
                id="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="focus-visible:ring-blue-500"
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="crawlType" className="text-blue-700">Crawl Type</Label>
              <Select value={crawlType} onValueChange={setCrawlType}>
                <SelectTrigger id="crawlType" className="focus-visible:ring-blue-500">
                  <SelectValue placeholder="Select crawl type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full">Full Site</SelectItem>
                  <SelectItem value="section">Section Only</SelectItem>
                  <SelectItem value="single">Single Page</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label className="text-blue-700">Crawl Depth: {depth}</Label>
              <div className="pt-2">
                <Slider
                  value={[depth]}
                  min={1}
                  max={5}
                  step={1}
                  onValueChange={(values) => setDepth(values[0])}
                  className="[&>span]:bg-blue-600"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Higher values will take longer but gather more data
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="followExternal"
                checked={followExternalLinks}
                onCheckedChange={setFollowExternalLinks}
                className="data-[state=checked]:bg-blue-600"
              />
              <Label htmlFor="followExternal" className="text-blue-700">Follow External Links</Label>
            </div>
            
            <div className="rounded-lg bg-blue-50 p-4 border border-blue-200">
              <h3 className="text-sm font-medium text-blue-800 mb-2">Crawler Flow</h3>
              <div className="flex items-center justify-between text-xs text-blue-700">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                    <Play size={20} className="text-blue-700" />
                  </div>
                  <span>Start</span>
                </div>
                <ArrowRight size={16} className="text-blue-400" />
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-1">
                    <RefreshCw size={20} className="text-blue-700" />
                  </div>
                  <span>Process</span>
                </div>
                <ArrowRight size={16} className="text-blue-400" />
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="#047857" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>Complete</span>
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
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
              >
                {loading ? (
                  <>
                    <RefreshCw size={16} className="mr-2 animate-spin" />
                    Starting Crawler...
                  </>
                ) : (
                  <>
                    <Play size={16} className="mr-2" />
                    Start Crawler
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
