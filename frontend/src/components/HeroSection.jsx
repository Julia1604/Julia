import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export const HeroSection = ({ companyData, onContactClick }) => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Професійний автопідбір
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
            Обираємо як для себе
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg"
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-6 text-lg w-full sm:w-auto transition-all"
              onClick={onContactClick}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Отримати консультацію
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-gray-800 text-gray-800 hover:bg-gray-100 font-semibold px-8 py-6 text-lg w-full sm:w-auto transition-all"
              onClick={() => window.location.href = `tel:${companyData.phone}`}
            >
              <Phone className="w-5 h-5 mr-2" />
              Замовити огляд
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};