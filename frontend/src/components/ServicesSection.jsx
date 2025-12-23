import React from 'react';
import { Search, Clock, DollarSign, Car, FileText, Video } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { Button } from './ui/button';

const iconMap = {
  Search,
  Clock,
  DollarSign,
  Car,
  FileText,
  Video
};

export const ServicesSection = ({ services, onContactClick }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наші послуги
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Повний спектр послуг для безпечної купівлі автомобіля
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Card 
                key={service.id} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 bg-white"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-gray-800 text-gray-800 hover:bg-gray-100"
                      onClick={onContactClick}
                    >
                      Замовити
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};