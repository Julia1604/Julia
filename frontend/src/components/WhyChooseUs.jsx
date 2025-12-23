import React from 'react';
import { Shield, Star, CheckCircle, Heart } from 'lucide-react';

const iconMap = {
  Shield,
  Star,
  CheckCircle,
  Heart
};

export const WhyChooseUs = ({ reasons }) => {
  const icons = [Shield, Star, CheckCircle, Heart];
  
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Чому обирають ProAuto Expert
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ми допомагаємо уникнути дорогих помилок при купівлі автомобіля
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={reason.id} 
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-gray-50 to-white border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};