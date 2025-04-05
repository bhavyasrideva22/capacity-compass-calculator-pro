
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalculatorComponent } from '@/components/CalculatorComponent';
import { UtilizationChart } from '@/components/UtilizationChart';
import { ExportOptions } from '@/components/ExportOptions';
import { InfoSection } from '@/components/InfoSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-primary text-white py-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Capacity Utilization Calculator
          </h1>
          <p className="text-center mt-2 max-w-2xl mx-auto">
            Optimize your business operations by measuring and improving your capacity utilization rate
          </p>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-lg bg-white border-none animate-fade-in">
              <CardContent className="pt-6">
                <Tabs defaultValue="calculator" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="calculator">Calculator</TabsTrigger>
                    <TabsTrigger value="results">Results & Insights</TabsTrigger>
                  </TabsList>
                  <TabsContent value="calculator">
                    <CalculatorComponent />
                  </TabsContent>
                  <TabsContent value="results">
                    <UtilizationChart />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <ExportOptions />
            
            <Card className="shadow-lg bg-white border-none mt-8 animate-fade-in">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">Quick Tips</h2>
                <ul className="space-y-3 text-charcoal">
                  <li className="flex items-start">
                    <div className="bg-gold h-6 w-6 rounded-full flex items-center justify-center text-charcoal font-bold mr-3 flex-shrink-0">1</div>
                    <p>Enter your total production capacity in units or hours</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold h-6 w-6 rounded-full flex items-center justify-center text-charcoal font-bold mr-3 flex-shrink-0">2</div>
                    <p>Input your actual production volume for the same period</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gold h-6 w-6 rounded-full flex items-center justify-center text-charcoal font-bold mr-3 flex-shrink-0">3</div>
                    <p>Review the capacity utilization rate and visualize your efficiency</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <InfoSection />
      </main>
      
      <footer className="bg-primary text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Capacity Compass Calculator Pro</h2>
              <p className="text-sm opacity-75 mt-1">© {new Date().getFullYear()} All rights reserved</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition duration-200">Terms</a>
              <a href="#" className="hover:text-gold transition duration-200">Privacy</a>
              <a href="#" className="hover:text-gold transition duration-200">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
