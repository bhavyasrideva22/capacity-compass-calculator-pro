
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download, Mail, Copy, Check } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import jsPDF from 'jspdf';

export const ExportOptions = () => {
  const [email, setEmail] = useState('');
  const [isEmailSending, setIsEmailSending] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const { toast } = useToast();
  
  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsEmailSending(true);
    
    // Simulate sending email
    setTimeout(() => {
      setIsEmailSending(false);
      setEmail('');
      
      toast({
        title: "Email Sent!",
        description: "Capacity utilization report has been sent to your email.",
      });
    }, 1500);
  };
  
  const generatePDF = () => {
    setIsDownloading(true);
    
    // Simulate PDF generation delay
    setTimeout(() => {
      try {
        const doc = new jsPDF();
        
        // Add corporate header
        doc.setFillColor(36, 94, 79); // primary color
        doc.rect(0, 0, 210, 30, "F");
        
        // Add title
        doc.setFont("helvetica", "bold");
        doc.setFontSize(20);
        doc.setTextColor(255, 255, 255);
        doc.text("Capacity Utilization Report", 105, 15, { align: "center" });
        
        // Add company info
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(0, 0, 0);
        doc.text("Generated on: " + new Date().toLocaleDateString('en-IN'), 20, 40);
        doc.text("Company: Your Company Name", 20, 50);
        
        // Add utilization data
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text("Capacity Utilization Analysis", 105, 70, { align: "center" });
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        
        const utilizationData = getUtilizationData();
        
        doc.text("Maximum Production Capacity: " + utilizationData.maxCapacity.toLocaleString('en-IN') + " units", 20, 90);
        doc.text("Actual Production: " + utilizationData.actualProduction.toLocaleString('en-IN') + " units", 20, 100);
        doc.text("Capacity Utilization Rate: " + utilizationData.utilizationRate.toFixed(1) + "%", 20, 110);
        doc.text("Unused Capacity: " + (utilizationData.maxCapacity - utilizationData.actualProduction).toLocaleString('en-IN') + " units", 20, 120);
        
        // Add recommendations
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text("Recommendations", 105, 150, { align: "center" });
        
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        
        const recommendations = getRecommendations(utilizationData.utilizationRate);
        doc.text("• " + recommendations[0], 20, 170);
        doc.text("• " + recommendations[1], 20, 180);
        doc.text("• " + recommendations[2], 20, 190);
        
        // Add footer
        doc.setFillColor(36, 94, 79); // primary color
        doc.rect(0, 277, 210, 20, "F");
        
        doc.setFont("helvetica", "italic");
        doc.setFontSize(10);
        doc.setTextColor(255, 255, 255);
        doc.text("Capacity Compass Calculator Pro | www.capacitycompass.com", 105, 287, { align: "center" });
        
        // Save PDF
        doc.save("capacity_utilization_report.pdf");
        
        setIsDownloading(false);
        toast({
          title: "PDF Downloaded",
          description: "Your report has been successfully downloaded.",
        });
      } catch (error) {
        setIsDownloading(false);
        toast({
          title: "Download Failed",
          description: "There was an error generating your report. Please try again.",
          variant: "destructive"
        });
      }
    }, 1500);
  };
  
  const copyReportToClipboard = async () => {
    try {
      const utilizationData = getUtilizationData();
      const recommendations = getRecommendations(utilizationData.utilizationRate);
      
      const reportText = `CAPACITY UTILIZATION REPORT
      
Date: ${new Date().toLocaleDateString('en-IN')}

ANALYSIS RESULTS:
- Maximum Production Capacity: ${utilizationData.maxCapacity.toLocaleString('en-IN')} units
- Actual Production: ${utilizationData.actualProduction.toLocaleString('en-IN')} units
- Capacity Utilization Rate: ${utilizationData.utilizationRate.toFixed(1)}%
- Unused Capacity: ${(utilizationData.maxCapacity - utilizationData.actualProduction).toLocaleString('en-IN')} units

RECOMMENDATIONS:
• ${recommendations[0]}
• ${recommendations[1]}
• ${recommendations[2]}

Generated by Capacity Compass Calculator Pro
www.capacitycompass.com`;
      
      await navigator.clipboard.writeText(reportText);
      setCopySuccess(true);
      
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
      
      toast({
        title: "Report Copied",
        description: "The report has been copied to your clipboard.",
      });
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy the report to clipboard.",
        variant: "destructive"
      });
    }
  };
  
  // Helper function to get utilization data
  const getUtilizationData = () => {
    const storedMaxCapacity = sessionStorage.getItem('maxCapacity');
    const storedActualProduction = sessionStorage.getItem('actualProduction');
    const storedUtilizationRate = sessionStorage.getItem('utilizationRate');
    
    const maxCapacity = storedMaxCapacity ? Number(storedMaxCapacity) : 1000;
    const actualProduction = storedActualProduction ? Number(storedActualProduction) : 700;
    const utilizationRate = storedUtilizationRate ? Number(storedUtilizationRate) : 70;
    
    return { maxCapacity, actualProduction, utilizationRate };
  };
  
  // Helper function to get recommendations based on utilization rate
  const getRecommendations = (utilizationRate: number) => {
    if (utilizationRate < 60) {
      return [
        "Implement marketing campaigns to increase demand for your products",
        "Explore new market segments to expand your customer base",
        "Consider temporarily reducing capacity to align with current demand"
      ];
    } else if (utilizationRate < 80) {
      return [
        "Fine-tune production scheduling to improve resource allocation",
        "Analyze and remove bottlenecks in your production process",
        "Investigate opportunities to increase sales in existing markets"
      ];
    } else if (utilizationRate < 95) {
      return [
        "Maintain current operations while monitoring for potential bottlenecks",
        "Consider selective capacity expansion for high-demand products",
        "Optimize maintenance schedules to minimize planned downtime"
      ];
    } else {
      return [
        "Consider capacity expansion to meet high demand",
        "Implement premium pricing strategies to maximize profitability",
        "Review quality control processes to ensure standards are maintained at high production rates"
      ];
    }
  };

  return (
    <Card className="shadow-lg bg-white border-none animate-fade-in">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">Export Results</h2>
        <p className="text-charcoal mb-6">Share or download your capacity utilization analysis</p>
        
        <div className="grid grid-cols-1 gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-softblue hover:bg-softblue/90 text-white">
                <Mail className="mr-2 h-4 w-4" />
                Email Report
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Email Your Report</DialogTitle>
                <DialogDescription>
                  Enter your email address to receive the capacity utilization report.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleEmailSend}>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-charcoal">Email address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="border-secondary focus:border-primary"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isEmailSending}>
                    {isEmailSending ? 'Sending...' : 'Send Report'}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
          
          <Button 
            className="w-full bg-gold hover:bg-gold/90 text-charcoal"
            onClick={generatePDF}
            disabled={isDownloading}
          >
            <Download className="mr-2 h-4 w-4" />
            {isDownloading ? 'Generating PDF...' : 'Download PDF Report'}
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full border-secondary text-primary hover:bg-secondary/20"
            onClick={copyReportToClipboard}
          >
            {copySuccess ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
            {copySuccess ? 'Copied!' : 'Copy Report to Clipboard'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
