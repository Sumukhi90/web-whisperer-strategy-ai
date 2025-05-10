
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

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Web Crawler Configuration</CardTitle>
        <CardDescription>
          Set up parameters for the AI-powered crawler
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="url">Target URL</Label>
              <Input
                id="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="crawlType">Crawl Type</Label>
              <Select value={crawlType} onValueChange={setCrawlType}>
                <SelectTrigger id="crawlType">
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
              <Label>Crawl Depth: {depth}</Label>
              <Slider
                value={[depth]}
                min={1}
                max={5}
                step={1}
                onValueChange={(values) => setDepth(values[0])}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Higher values will take longer but gather more data
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="followExternal"
                checked={followExternalLinks}
                onCheckedChange={setFollowExternalLinks}
              />
              <Label htmlFor="followExternal">Follow External Links</Label>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex items-center justify-between">
              <Button type="button" variant="outline">
                Reset
              </Button>
              <Button type="submit" disabled={loading} className="bg-gradient-to-r from-blue-gradient-start to-blue-gradient-end text-white">
                {loading ? "Starting Crawler..." : "Start Crawler"}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CrawlerForm;
