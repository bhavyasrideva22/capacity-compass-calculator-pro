
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const InfoSection = () => {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-primary text-center">Understanding Capacity Utilization</h2>
      <div className="w-20 h-1 bg-gold mx-auto mt-4 mb-8"></div>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full md:w-fit mx-auto grid-cols-3 mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
          <TabsTrigger value="strategies">Strategies</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="animate-fade-in">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">What is Capacity Utilization?</h3>
              
              <p className="text-charcoal mb-4">
                Capacity utilization is a crucial manufacturing and business metric that measures the relationship between 
                actual output produced and the potential output that could be produced with existing resources under normal 
                working conditions. It is typically expressed as a percentage and provides valuable insights into operational 
                efficiency and resource management.
              </p>
              
              <div className="bg-cream p-5 rounded-lg my-6 border-l-4 border-primary">
                <h4 className="text-lg font-medium text-primary mb-2">Key Formula</h4>
                <div className="flex flex-col items-center">
                  <p className="text-lg font-bold mb-2">Capacity Utilization Rate = (Actual Output ÷ Maximum Potential Output) × 100</p>
                  <p className="text-sm text-gray-600">Where maximum potential output represents the highest achievable production level under normal operating conditions</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-3">Why Capacity Utilization Matters</h3>
              
              <p className="text-charcoal mb-4">
                In today's competitive business landscape, optimizing capacity utilization has become essential for 
                manufacturers and service providers alike. This metric serves as a vital indicator of operational health, 
                providing insights into how efficiently a business is using its available resources and infrastructure.
              </p>
              
              <p className="text-charcoal mb-4">
                For Indian businesses navigating complex market dynamics, monitoring capacity utilization can help 
                identify inefficiencies, guide expansion decisions, and improve overall profitability. Whether you're 
                managing a small-scale manufacturing unit or overseeing operations for a large corporation, understanding 
                your capacity utilization rate offers valuable guidance for strategic planning.
              </p>
              
              <h3 className="text-xl font-semibold text-primary mb-3">Industry Applications</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-medium text-primary mb-2">Manufacturing Sector</h4>
                  <p className="text-sm text-charcoal">
                    In manufacturing, capacity utilization helps optimize production scheduling, manage inventory levels, 
                    and make informed decisions about equipment maintenance or expansion. It's particularly valuable for 
                    industries with high fixed costs, such as automotive, textile, and electronics manufacturing.
                  </p>
                </div>
                
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-medium text-primary mb-2">Service Industry</h4>
                  <p className="text-sm text-charcoal">
                    Service businesses like hotels, hospitals, and call centers use capacity utilization to optimize 
                    staffing levels, improve resource allocation, and enhance customer service. For example, a hotel 
                    tracking its occupancy rate can make better decisions about pricing and promotions.
                  </p>
                </div>
                
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-medium text-primary mb-2">Energy Sector</h4>
                  <p className="text-sm text-charcoal">
                    Power plants monitor capacity utilization to ensure they meet demand efficiently while managing 
                    operational costs. This is crucial for both conventional and renewable energy producers to maximize 
                    output and maintain grid stability.
                  </p>
                </div>
                
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h4 className="font-medium text-primary mb-2">Transportation & Logistics</h4>
                  <p className="text-sm text-charcoal">
                    Airlines, shipping companies, and logistics providers track capacity utilization to optimize routes, 
                    improve load factors, and enhance operational efficiency. This helps reduce costs while meeting 
                    service level agreements with customers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="benefits" className="animate-fade-in">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">Benefits of Optimizing Capacity Utilization</h3>
              
              <p className="text-charcoal mb-6">
                Maintaining optimal capacity utilization levels offers numerous advantages for businesses across industries. 
                By finding the right balance between underutilization and overutilization, companies can unlock significant 
                operational and financial benefits.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-primary text-white p-5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">Financial Benefits</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-gold rounded-full mr-2"></div>
                      <span>Increased profit margins</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-gold rounded-full mr-2"></div>
                      <span>Reduced cost per unit</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-gold rounded-full mr-2"></div>
                      <span>Better return on assets</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-gold rounded-full mr-2"></div>
                      <span>Improved capital efficiency</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-gold rounded-full mr-2"></div>
                      <span>Enhanced investment planning</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-secondary p-5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">Operational Benefits</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                      <span>Improved productivity</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                      <span>Reduced bottlenecks</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                      <span>Better resource allocation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                      <span>Enhanced maintenance planning</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                      <span>Reduced operational waste</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gold p-5 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3">Strategic Benefits</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                      <span>Informed expansion decisions</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                      <span>Better competitive positioning</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                      <span>Improved market responsiveness</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                      <span>Enhanced demand forecasting</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                      <span>Long-term sustainability</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-primary mb-4">Case Study: Impact of Optimized Capacity Utilization</h3>
              
              <div className="bg-cream p-5 rounded-lg mb-6">
                <p className="italic text-charcoal">
                  "A medium-sized textile manufacturer in Maharashtra was operating at 65% capacity utilization, facing rising costs 
                  and shrinking margins. After implementing our capacity optimization framework, they increased utilization to 83% 
                  within six months, resulting in a 24% reduction in cost per unit and a 31% improvement in overall profitability.
                  The company was able to fulfill larger orders without additional capital investment, significantly improving their 
                  competitive position in the market."
                </p>
                <p className="font-medium text-primary mt-3">— Industry Expert Analysis, 2023</p>
              </div>
              
              <p className="text-charcoal">
                By regularly monitoring and optimizing capacity utilization, businesses can identify inefficiencies, reduce costs, 
                and make informed decisions about investments, staffing, and resource allocation. This comprehensive approach to 
                capacity management translates directly into improved financial performance and enhanced competitive advantage
                in today's challenging business landscape.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="strategies" className="animate-fade-in">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">Strategies to Improve Capacity Utilization</h3>
              
              <p className="text-charcoal mb-6">
                Whether you're facing underutilization or approaching maximum capacity, implementing targeted strategies 
                can help optimize your capacity utilization levels and drive better business outcomes. Here are proven 
                approaches to consider based on your current situation.
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-medium text-primary mb-4">When Capacity Utilization is Low (Below 70%)</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-cream p-4 rounded-lg">
                    <h5 className="font-medium text-primary mb-2">Market Expansion Strategies</h5>
                    <ul className="space-y-2 text-sm text-charcoal">
                      <li>• Explore new geographic markets or customer segments</li>
                      <li>• Implement promotional campaigns to drive demand</li>
                      <li>• Consider price adjustments to increase market share</li>
                      <li>• Develop complementary products using existing capacity</li>
                    </ul>
                  </div>
                  
                  <div className="bg-cream p-4 rounded-lg">
                    <h5 className="font-medium text-primary mb-2">Operational Right-sizing</h5>
                    <ul className="space-y-2 text-sm text-charcoal">
                      <li>• Temporarily reduce operating hours to match demand</li>
                      <li>• Consider leasing unused equipment or facilities</li>
                      <li>• Implement flexible staffing models</li>
                      <li>• Consolidate operations to optimize resource use</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-medium text-primary mb-4">When Capacity Utilization is Moderate (70-85%)</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <h5 className="font-medium text-primary mb-2">Efficiency Improvement</h5>
                    <ul className="space-y-2 text-sm text-charcoal">
                      <li>• Conduct process optimization studies</li>
                      <li>• Implement preventive maintenance programs</li>
                      <li>• Provide targeted employee training</li>
                      <li>• Adopt lean manufacturing principles</li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/20 p-4 rounded-lg">
                    <h5 className="font-medium text-primary mb-2">Balanced Growth</h5>
                    <ul className="space-y-2 text-sm text-charcoal">
                      <li>• Develop selective marketing campaigns</li>
                      <li>• Optimize product mix to favor higher-margin items</li>
                      <li>• Implement dynamic pricing strategies</li>
                      <li>• Focus on customer retention to ensure stable demand</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-medium text-primary mb-4">When Capacity Utilization is High (Above 85%)</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-gold/20 p-4 rounded-lg">
                    <h5 className="font-medium text-primary mb-2">Strategic Expansion</h5>
                    <ul className="space-y-2 text-sm text-charcoal">
                      <li>• Evaluate capacity expansion opportunities</li>
                      <li>• Consider outsourcing non-critical processes</li>
                      <li>• Implement technological improvements for higher output</li>
                      <li>• Assess merger or acquisition opportunities</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gold/20 p-4 rounded-lg">
                    <h5 className="font-medium text-primary mb-2">Demand Management</h5>
                    <ul className="space-y-2 text-sm text-charcoal">
                      <li>• Implement premium pricing for peak demand periods</li>
                      <li>• Focus on high-margin customers and products</li>
                      <li>• Use incentives to shift demand to off-peak periods</li>
                      <li>• Review and optimize customer service levels</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 p-5 rounded-lg">
                <h4 className="text-lg font-medium text-primary mb-3">Implementation Framework</h4>
                
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="bg-primary text-white font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                    <div>
                      <h5 className="font-medium text-primary">Assess Current State</h5>
                      <p className="text-sm text-charcoal mt-1">Measure your current capacity utilization accurately across different periods and segments.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <span className="bg-primary text-white font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                    <div>
                      <h5 className="font-medium text-primary">Identify Root Causes</h5>
                      <p className="text-sm text-charcoal mt-1">Determine whether utilization issues stem from market conditions, operational inefficiencies, or other factors.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <span className="bg-primary text-white font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                    <div>
                      <h5 className="font-medium text-primary">Select Appropriate Strategies</h5>
                      <p className="text-sm text-charcoal mt-1">Choose the most relevant strategies based on your utilization level and business context.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <span className="bg-primary text-white font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                    <div>
                      <h5 className="font-medium text-primary">Implement With Clear Metrics</h5>
                      <p className="text-sm text-charcoal mt-1">Set specific goals and establish key performance indicators to track progress.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <span className="bg-primary text-white font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 flex-shrink-0">5</span>
                    <div>
                      <h5 className="font-medium text-primary">Monitor and Adjust</h5>
                      <p className="text-sm text-charcoal mt-1">Regularly review performance and refine your approach as market conditions and business needs evolve.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};
