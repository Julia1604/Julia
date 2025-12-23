import React from 'react';
import { Phone, Clock } from 'lucide-react';
import { Button } from './ui/button';

export const Header = ({ companyData }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img 
              src={companyData.logo} 
              alt={companyData.name}
              className="h-12 w-auto object-contain"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{companyData.workingHours}</span>
            </div>
            <Button 
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 transition-all"
              onClick={() => window.location.href = `tel:${companyData.phone}`}
            >
              <Phone className="w-4 h-4 mr-2" />
              {companyData.phone}
            </Button>
          </div>

          <Button 
            className="md:hidden bg-gray-800 hover:bg-gray-900 text-white"
            size="sm"
            onClick={() => window.location.href = `tel:${companyData.phone}`}
          >
            <Phone className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};