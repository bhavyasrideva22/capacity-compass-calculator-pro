
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

export const UtilizationChart = () => {
  // Get the utilization data from sessionStorage or use default values
  const getUtilizationData = () => {
    const storedMaxCapacity = sessionStorage.getItem('maxCapacity');
    const storedActualProduction = sessionStorage.getItem('actualProduction');
    const storedUtilizationRate = sessionStorage.getItem('utilizationRate');
    
    const maxCapacity = storedMaxCapacity ? Number(storedMaxCapacity) : 1000;
    const actualProduction = storedActualProduction ? Number(storedActualProduction) : 700;
    const utilizationRate = storedUtilizationRate ? Number(storedUtilizationRate) : 70;
    
    return { maxCapacity, actualProduction, utilizationRate };
  };
  
  const { maxCapacity, actualProduction, utilizationRate } = getUtilizationData();
  const unusedCapacity = maxCapacity - actualProduction;
  
  // Data for pie chart
  const pieData = [
    { name: 'Utilized Capacity', value: actualProduction },
    { name: 'Unused Capacity', value: unusedCapacity }
  ];
  
  // Colors for pie chart
  const COLORS = ['#245e4f', '#7ac9a7'];
  
  // Data for bar chart (industry comparison)
  const industryData = [
    { name: 'Your Company', utilization: utilizationRate },
    { name: 'Industry Avg', utilization: 75 },
    { name: 'Top Performers', utilization: 90 },
    { name: 'Low Performers', utilization: 60 },
  ];
  
  // Data for trend chart
  const trendData = [
    { month: 'Jan', utilization: utilizationRate - Math.random() * 10 },
    { month: 'Feb', utilization: utilizationRate - Math.random() * 5 },
    { month: 'Mar', utilization: utilizationRate - Math.random() * 2 },
    { month: 'Apr', utilization: utilizationRate },
    { month: 'May', utilization: utilizationRate + Math.random() * 3 },
    { month: 'Jun', utilization: utilizationRate + Math.random() * 5 }
  ];
  
  // Format utilization rate for display
  const formattedUtilizationRate = utilizationRate.toFixed(1);
  
  // Determine utilization status
  const getUtilizationStatus = () => {
    if (utilizationRate < 60) return { label: 'Low', description: 'Significant unused capacity', color: '#e74c3c' };
    if (utilizationRate < 80) return { label: 'Moderate', description: 'Room for improvement', color: '#f39c12' };
    if (utilizationRate < 95) return { label: 'Optimal', description: 'Balanced capacity usage', color: '#27ae60' };
    return { label: 'Maximum', description: 'Near full capacity', color: '#2980b9' };
  };
  
  const utilizationStatus = getUtilizationStatus();

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-cream col-span-1">
          <h3 className="text-lg font-medium text-primary mb-2">Capacity Utilization Rate</h3>
          <div className="text-4xl font-bold text-charcoal">{formattedUtilizationRate}%</div>
          <div className="mt-1 text-sm flex items-center">
            <span className="inline-block h-3 w-3 rounded-full mr-2" style={{ backgroundColor: utilizationStatus.color }}></span>
            <span className="font-medium">{utilizationStatus.label}:</span>
            <span className="ml-1 text-gray-600">{utilizationStatus.description}</span>
          </div>
        </Card>
        
        <Card className="p-6 col-span-2">
          <h3 className="text-lg font-medium text-primary mb-4">Production Capacity Breakdown</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value} units`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      
      <Tabs defaultValue="industry" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="industry">Industry Comparison</TabsTrigger>
          <TabsTrigger value="trend">Utilization Trend</TabsTrigger>
        </TabsList>
        <TabsContent value="industry" className="py-4">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={industryData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Bar dataKey="utilization" name="Utilization Rate (%)" fill="#245e4f" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Compare your capacity utilization to industry benchmarks and see where you stand.
          </p>
        </TabsContent>
        <TabsContent value="trend" className="py-4">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={trendData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
                <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="utilization"
                  name="Utilization Rate (%)"
                  stroke="#245e4f"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Track how your capacity utilization has changed over the past 6 months.
          </p>
        </TabsContent>
      </Tabs>
      
      <div className="bg-primary/5 p-6 rounded-lg">
        <h3 className="font-medium text-primary mb-3">Analysis & Recommendations</h3>
        
        <div className="space-y-3 text-charcoal">
          <p>
            Your current capacity utilization is <span className="font-semibold">{formattedUtilizationRate}%</span>, which indicates 
            {utilizationRate < 60 ? ' significant room for improvement.' : 
             utilizationRate < 80 ? ' a moderate utilization level with opportunity for growth.' :
             utilizationRate < 95 ? ' healthy utilization with some flexibility for unexpected demand.' :
             ' you are operating near maximum capacity and may need expansion.'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h4 className="font-medium text-primary">Potential Actions:</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                {utilizationRate < 80 ? (
                  <>
                    <li>Consider marketing initiatives to increase demand</li>
                    <li>Evaluate pricing strategies to attract more customers</li>
                    <li>Explore new market segments or product offerings</li>
                  </>
                ) : (
                  <>
                    <li>Optimize production processes to increase efficiency</li>
                    <li>Consider capacity expansion for future growth</li>
                    <li>Review maintenance schedules to minimize downtime</li>
                  </>
                )}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-primary">Business Impact:</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>Increasing utilization by just 5% could significantly improve profitability</li>
                <li>Balanced utilization leads to optimal resource allocation</li>
                <li>Regular monitoring helps identify seasonal trends and adjust accordingly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
