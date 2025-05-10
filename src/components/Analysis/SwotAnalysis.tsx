
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const SwotAnalysis = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  // Initial SWOT data
  const [swotData, setSwotData] = useState({
    strengths: [
      "Proprietary AI technology with 98% accuracy",
      "Strong customer retention rate of 85%",
      "Diverse revenue streams across multiple sectors",
      "Experienced leadership team with industry expertise",
      "Scalable infrastructure supporting rapid growth"
    ],
    weaknesses: [
      "Limited market presence in Asia-Pacific region",
      "High customer acquisition costs compared to industry average",
      "Technical debt in legacy code systems",
      "Dependency on third-party data providers",
      "Staff turnover above industry average"
    ],
    opportunities: [
      "Emerging markets in Southeast Asia",
      "Strategic partnerships with complementary service providers",
      "New product verticals utilizing existing AI technology",
      "Increased demand for data analytics solutions",
      "Potential acquisition targets for vertical integration"
    ],
    threats: [
      "Increasing competition from well-funded startups",
      "Regulatory changes affecting data collection practices",
      "Economic downturn impacting client budgets",
      "Rapid technological advances requiring continuous innovation",
      "Potential security breaches and data privacy concerns"
    ]
  });
  
  // Function to generate new SWOT with AI
  const generateSwot = () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "SWOT Analysis Updated",
        description: "AI has generated a new SWOT analysis based on latest data"
      });
      setLoading(false);
    }, 2000);
  };
  
  // Function to handle manual edits
  const handleSwotChange = (category: keyof typeof swotData, index: number, value: string) => {
    const updatedItems = [...swotData[category]];
    updatedItems[index] = value;
    
    setSwotData({
      ...swotData,
      [category]: updatedItems
    });
  };
  
  // Function to add a new item
  const addItem = (category: keyof typeof swotData) => {
    setSwotData({
      ...swotData,
      [category]: [...swotData[category], ""]
    });
  };
  
  // Function to remove an item
  const removeItem = (category: keyof typeof swotData, index: number) => {
    const updatedItems = swotData[category].filter((_, i) => i !== index);
    
    setSwotData({
      ...swotData,
      [category]: updatedItems
    });
  };

  // Render SWOT section
  const renderSection = (title: string, items: string[], category: keyof typeof swotData, bgClass: string) => (
    <Card className={`${bgClass} h-full`}>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="relative group">
            <Textarea
              value={item}
              onChange={(e) => handleSwotChange(category, index, e.target.value)}
              className="min-h-[80px] bg-white bg-opacity-70 text-gray-800"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeItem(category, index)}
              className="absolute top-2 right-2 h-6 w-6 p-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ✕
            </Button>
          </div>
        ))}
        <Button
          variant="outline" 
          size="sm"
          onClick={() => addItem(category)}
          className="w-full bg-white bg-opacity-50"
        >
          + Add Item
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">SWOT Analysis</h2>
          <p className="text-muted-foreground">
            Edit or regenerate your company's SWOT analysis
          </p>
        </div>
        <Button 
          onClick={generateSwot} 
          disabled={loading}
          className="bg-gradient-to-r from-purple-gradient-start to-purple-gradient-end text-white"
        >
          {loading ? "Generating..." : "Generate with AI"}
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderSection("Strengths", swotData.strengths, "strengths", "bg-gradient-to-br from-green-100 to-green-200 border-green-300")}
        {renderSection("Weaknesses", swotData.weaknesses, "weaknesses", "bg-gradient-to-br from-red-100 to-red-200 border-red-300")}
        {renderSection("Opportunities", swotData.opportunities, "opportunities", "bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300")}
        {renderSection("Threats", swotData.threats, "threats", "bg-gradient-to-br from-yellow-100 to-yellow-200 border-yellow-300")}
      </div>
    </div>
  );
};

export default SwotAnalysis;
