
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, Plus, X, RefreshCw } from "lucide-react";

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

  // SWOT section configurations
  const swotSections = [
    { 
      title: "Strengths", 
      category: "strengths" as keyof typeof swotData,
      bgClass: "from-green-100 to-green-200", 
      borderClass: "border-green-300",
      iconBgClass: "bg-green-100",
      icon: "S",
      textClass: "text-green-800"
    },
    { 
      title: "Weaknesses", 
      category: "weaknesses" as keyof typeof swotData,
      bgClass: "from-red-100 to-red-200", 
      borderClass: "border-red-300",
      iconBgClass: "bg-red-100",
      icon: "W",
      textClass: "text-red-800"
    },
    { 
      title: "Opportunities", 
      category: "opportunities" as keyof typeof swotData,
      bgClass: "from-blue-100 to-blue-200", 
      borderClass: "border-blue-300",
      iconBgClass: "bg-blue-100",
      icon: "O",
      textClass: "text-blue-800"
    },
    { 
      title: "Threats", 
      category: "threats" as keyof typeof swotData,
      bgClass: "from-yellow-100 to-yellow-200", 
      borderClass: "border-yellow-300",
      iconBgClass: "bg-yellow-100",
      icon: "T",
      textClass: "text-yellow-800"
    }
  ];

  // Render SWOT section
  const renderSection = (config: typeof swotSections[0]) => (
    <Card className={`bg-gradient-to-br ${config.bgClass} ${config.borderClass} h-full transition-transform hover:scale-[1.01]`}>
      <CardHeader className="pb-2 flex flex-row items-center">
        <div className={`w-8 h-8 rounded-full ${config.iconBgClass} flex items-center justify-center mr-2 font-bold ${config.textClass}`}>
          {config.icon}
        </div>
        <CardTitle className={config.textClass}>{config.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {swotData[config.category].map((item, index) => (
          <div key={index} className="relative group">
            <Textarea
              value={item}
              onChange={(e) => handleSwotChange(config.category, index, e.target.value)}
              className="min-h-[80px] bg-white bg-opacity-70 text-gray-800 border-opacity-50 focus-visible:ring-2 focus-visible:ring-opacity-50"
              style={{
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
              }}
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeItem(config.category, index)}
              className="absolute top-2 right-2 h-6 w-6 p-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white bg-opacity-80 hover:bg-opacity-100"
            >
              <X size={14} />
            </Button>
          </div>
        ))}
        <Button
          variant="outline" 
          size="sm"
          onClick={() => addItem(config.category)}
          className={`w-full bg-white bg-opacity-50 ${config.borderClass} ${config.textClass} hover:bg-opacity-70`}
        >
          <Plus size={14} className="mr-1" />
          Add Item
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center">
            <div className="flex h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 items-center justify-center mr-2">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm9 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-6 12h12v-1.24A6 6 0 0 0 12 12a6 6 0 0 0-6 4.76V18z" fill="currentColor"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">SWOT Analysis</h2>
          </div>
          <p className="text-muted-foreground mt-1">
            Edit or regenerate your company's SWOT analysis
          </p>
        </div>
        <Button 
          onClick={generateSwot} 
          disabled={loading}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all shadow-md"
        >
          {loading ? (
            <>
              <RefreshCw size={16} className="mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles size={16} className="mr-2" />
              Generate with AI
            </>
          )}
        </Button>
      </div>
      
      {/* SWOT Matrix Diagram */}
      <div className="bg-white p-4 rounded-lg border shadow-sm mb-4">
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full max-w-2xl">
            <div className="text-center p-4 bg-green-100 border border-green-300 rounded-lg">
              <h3 className="font-bold text-green-800">Strengths</h3>
              <p className="text-xs text-green-700">Internal Positive</p>
            </div>
            <div className="text-center p-4 bg-red-100 border border-red-300 rounded-lg">
              <h3 className="font-bold text-red-800">Weaknesses</h3>
              <p className="text-xs text-red-700">Internal Negative</p>
            </div>
            <div className="text-center p-4 bg-blue-100 border border-blue-300 rounded-lg">
              <h3 className="font-bold text-blue-800">Opportunities</h3>
              <p className="text-xs text-blue-700">External Positive</p>
            </div>
            <div className="text-center p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
              <h3 className="font-bold text-yellow-800">Threats</h3>
              <p className="text-xs text-yellow-700">External Negative</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {swotSections.map((section) => renderSection(section))}
      </div>
    </div>
  );
};

export default SwotAnalysis;
