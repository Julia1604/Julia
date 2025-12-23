import React from 'react';
import { Phone, Clock } from 'lucide-react';
import { Button } from './ui/button';

export const Header = ({ companyData }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">PA</span>
            </div>
            <span className="font-bold text-xl text-gray-900">{companyData.name}</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{companyData.workingHours}</span>
            </div>
            <Button 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6"
              onClick={() => window.location.href = `tel:${companyData.phone}`}
            >
              <Phone className="w-4 h-4 mr-2" />
              {companyData.phone}
            </Button>
          </div>

          <Button 
            className="md:hidden bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
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