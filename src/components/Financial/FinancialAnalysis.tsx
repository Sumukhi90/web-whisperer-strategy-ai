
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MetricCard from "../ui/MetricCard";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock revenue data
const revenueData = [
  { name: 'Jan', value: 42000 },
  { name: 'Feb', value: 38000 },
  { name: 'Mar', value: 45000 },
  { name: 'Apr', value: 52000 },
  { name: 'May', value: 49000 },
  { name: 'Jun', value: 58000 },
];

// Mock expense breakdown
const expenseData = [
  { name: 'Marketing', value: 15000 },
  { name: 'Operations', value: 12000 },
  { name: 'R&D', value: 8000 },
  { name: 'Salaries', value: 22000 },
  { name: 'Other', value: 4000 },
];

export const FinancialAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Monthly Revenue"
          value="$58,200"
          trend={{ value: 12.4, isPositive: true }}
          description="Last 30 days"
        />
        <MetricCard
          title="Expenses"
          value="$36,450"
          trend={{ value: 4.2, isPositive: false }}
          description="Last 30 days"
        />
        <MetricCard
          title="Net Profit"
          value="$21,750"
          trend={{ value: 18.3, isPositive: true }}
          description="Last 30 days"
        />
        <MetricCard
          title="Profit Margin"
          value="37.4%"
          trend={{ value: 2.1, isPositive: true }}
          description="Last 30 days"
        />
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projections">Projections</TabsTrigger>
          <TabsTrigger value="optimization">Optimization</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Monthly revenue over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                      <Legend />
                      <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} name="Revenue" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
                <CardDescription>Distribution of expenses by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={expenseData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value}`, 'Amount']} />
                      <Legend />
                      <Bar dataKey="value" fill="#82ca9d" name="Expense" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="projections">
          <Card>
            <CardHeader>
              <CardTitle>6-Month Financial Projections</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                AI-generated financial projections based on historical performance and market trends.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Conservative</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-bold text-2xl">$345,000</p>
                    <p className="text-muted-foreground text-sm">Estimated 6-month revenue</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      5% growth rate with minimal market expansion
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-primary">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Moderate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-bold text-2xl">$412,000</p>
                    <p className="text-muted-foreground text-sm">Estimated 6-month revenue</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      12% growth rate with expected market conditions
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Aggressive</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-bold text-2xl">$498,000</p>
                    <p className="text-muted-foreground text-sm">Estimated 6-month revenue</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      18% growth rate with favorable market conditions
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="optimization">
          <Card>
            <CardHeader>
              <CardTitle>Cost Optimization Opportunities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Marketing Spend Optimization</h4>
                <p className="text-sm text-muted-foreground">
                  Reallocate 15% of PPC budget to higher-ROI channels like content marketing 
                  and email campaigns. Estimated annual savings: $24,000.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Operational Efficiency</h4>
                <p className="text-sm text-muted-foreground">
                  Implement automation for repetitive tasks in customer service and order processing.
                  Estimated cost reduction: 12% of operational expenses.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Vendor Consolidation</h4>
                <p className="text-sm text-muted-foreground">
                  Consolidate SaaS subscriptions and negotiate volume discounts with top vendors.
                  Potential annual savings: $18,500.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Tax Strategy</h4>
                <p className="text-sm text-muted-foreground">
                  Optimize tax structure by leveraging R&D credits and reviewing international tax implications.
                  Estimated tax savings: 8-12% of total tax burden.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FinancialAnalysis;
