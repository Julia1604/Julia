import React from 'react';
import { Phone, MessageCircle, Star } from 'lucide-react';
import { Button } from './ui/button';

export const HeroSection = ({ companyData, onContactClick }) => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
            <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
            <span className="text-sm font-semibold text-gray-700">
              {companyData.rating} / 5 — {companyData.reviewsCount} відгуків
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Професійний підбір та огляд<br />
            <span className="text-blue-600">автомобілів в Україні</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Допомагаємо купити безпечне та чесне авто без ризиків
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-6 text-lg w-full sm:w-auto"
              onClick={onContactClick}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Отримати консультацію
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold px-8 py-6 text-lg w-full sm:w-auto"
              onClick={() => window.location.href = `tel:${companyData.phone}`}
            >
              <Phone className="w-5 h-5 mr-2" />
              Замовити огляд
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">10+</div>
              <div className="text-sm text-gray-600 mt-1">років досвіду</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">100+</div>
              <div className="text-sm text-gray-600 mt-1">параметрів перевірки</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">4.9</div>
              <div className="text-sm text-gray-600 mt-1">рейтинг</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">69</div>
              <div className="text-sm text-gray-600 mt-1">відгуків</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};