
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Calculator, ArrowRight, ArrowDown } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export const CalculatorComponent = () => {
  const [maxCapacity, setMaxCapacity] = useState<number>(0);
  const [actualProduction, setActualProduction] = useState<number>(0);
  const [capacityUtilization, setCapacityUtilization] = useState<number | null>(null);
  const [downtime, setDowntime] = useState<number | null>(null);
  const [potentialRevenue, setPotentialRevenue] = useState<number | null>(null);
  const [revenuePerUnit, setRevenuePerUnit] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Calculate capacity utilization percentage
  const calculateUtilization = () => {
    if (maxCapacity <= 0) {
      toast({
        title: "Invalid Input",
        description: "Maximum capacity must be greater than zero.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate calculation delay for better user experience
    setTimeout(() => {
      const utilizationRate = (actualProduction / maxCapacity) * 100;
      setCapacityUtilization(Number(utilizationRate.toFixed(2)));
      
      // Calculate downtime (unused capacity)
      const unusedCapacity = maxCapacity - actualProduction;
      setDowntime(Number(unusedCapacity.toFixed(2)));
      
      // Calculate potential revenue if operating at 100% capacity
      if (revenuePerUnit > 0) {
        const potential = unusedCapacity * revenuePerUnit;
        setPotentialRevenue(Number(potential.toFixed(2)));
      }
      
      setIsLoading(false);
      
      toast({
        title: "Calculation Complete",
        description: "Your capacity utilization metrics have been updated."
      });
    }, 800);
  };

  // Reset form fields
  const handleReset = () => {
    setMaxCapacity(0);
    setActualProduction(0);
    setRevenuePerUnit(0);
    setCapacityUtilization(null);
    setDowntime(null);
    setPotentialRevenue(null);
  };

  return (
    <div className="space-y-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label htmlFor="maxCapacity" className="text-charcoal">
            Maximum Production Capacity (Units)
          </Label>
          <div className="flex items-center">
            <Input 
              id="maxCapacity" 
              type="number" 
              min="0"
              className="border-secondary focus:border-primary"
              value={maxCapacity || ''}
              onChange={(e) => setMaxCapacity(Number(e.target.value))}
              placeholder="Enter maximum capacity"
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="actualProduction" className="text-charcoal">
            Actual Production (Units)
          </Label>
          <div className="flex items-center">
            <Input 
              id="actualProduction" 
              type="number"
              min="0"
              max={maxCapacity || undefined}
              className="border-secondary focus:border-primary"
              value={actualProduction || ''}
              onChange={(e) => setActualProduction(Number(e.target.value))}
              placeholder="Enter actual production"
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="revenuePerUnit" className="text-charcoal">
            Revenue Per Unit (₹)
          </Label>
          <div className="flex items-center">
            <Input 
              id="revenuePerUnit" 
              type="number"
              min="0"
              className="border-secondary focus:border-primary"
              value={revenuePerUnit || ''}
              onChange={(e) => setRevenuePerUnit(Number(e.target.value))}
              placeholder="Enter revenue per unit"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
        <Button 
          onClick={calculateUtilization}
          className="bg-gold hover:bg-gold/80 text-charcoal"
          disabled={isLoading}
        >
          <Calculator className="mr-2 h-4 w-4" />
          {isLoading ? 'Calculating...' : 'Calculate Utilization'}
        </Button>
        
        <Button 
          onClick={handleReset}
          variant="outline"
          className="border-secondary text-primary hover:bg-secondary/20"
          disabled={isLoading}
        >
          Reset
        </Button>
      </div>

      {capacityUtilization !== null && (
        <div className="mt-8 space-y-6 animate-fade-in">
          <Separator className="bg-secondary/50" />
          
          <h3 className="text-xl font-semibold text-primary text-center">Results</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 bg-primary text-white">
              <div className="flex flex-col items-center">
                <h4 className="text-sm font-medium opacity-80">Capacity Utilization</h4>
                <p className="text-3xl font-bold mt-2">{capacityUtilization}%</p>
                <div className="text-xs mt-1 opacity-70">{capacityUtilization < 70 ? "Below Optimal" : capacityUtilization < 90 ? "Optimal Range" : "Near Maximum"}</div>
              </div>
            </Card>
            
            <Card className="p-4 bg-secondary text-black">
              <div className="flex flex-col items-center">
                <h4 className="text-sm font-medium opacity-80">Unused Capacity</h4>
                <p className="text-3xl font-bold mt-2">{downtime} Units</p>
                <div className="text-xs mt-1 opacity-70">{capacityUtilization < 70 ? "Significant Opportunity" : capacityUtilization < 90 ? "Moderate Buffer" : "Minimal Slack"}</div>
              </div>
            </Card>
            
            {potentialRevenue !== null && (
              <Card className="p-4 bg-gold text-charcoal">
                <div className="flex flex-col items-center">
                  <h4 className="text-sm font-medium opacity-80">Lost Revenue Opportunity</h4>
                  <p className="text-3xl font-bold mt-2">₹{potentialRevenue.toLocaleString('en-IN')}</p>
                  <div className="text-xs mt-1 opacity-70">{potentialRevenue > 100000 ? "High Impact" : potentialRevenue > 10000 ? "Medium Impact" : "Low Impact"}</div>
                </div>
              </Card>
            )}
          </div>
          
          <div className="flex justify-center">
            <ArrowDown className="text-primary animate-bounce" />
          </div>
          
          <p className="text-center text-charcoal">
            Switch to <span className="font-bold text-primary">Results & Insights</span> tab to visualize your capacity utilization metrics.
          </p>
        </div>
      )}
    </div>
  );
};
