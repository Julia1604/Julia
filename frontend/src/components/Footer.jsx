import React from 'react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { Button } from './ui/button';

export const Footer = ({ companyData }) => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={companyData.logo} 
                alt={companyData.name}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Професійний підбір та огляд автомобілів в Україні
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакти</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                <div>
                  <a href={`tel:${companyData.phone}`} className="hover:text-gray-300 transition-colors">
                    {companyData.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                <div>
                  <a href={`mailto:${companyData.email}`} className="hover:text-gray-300 transition-colors">
                    {companyData.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">{companyData.workingHours}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Адреса</h3>
            <div className="flex items-start space-x-3 mb-4">
              <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
              <span className="text-gray-400">{companyData.address}</span>
            </div>
            <Button 
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition-all w-full"
              onClick={() => window.open('https://maps.google.com/?q=проспект+Дмитра+Яворницького+8+Дніпро', '_blank')}
            >
              Відкрити на карті
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 {companyData.name}. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};