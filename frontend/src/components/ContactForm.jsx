import React, { useState } from 'react';
import { Send, User, Phone, MessageSquare, Loader2, CheckCircle, X } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Success Modal Component
const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Content */}
        <div className="text-center">
          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-gray-800" />
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Дякуємо!
          </h3>
          
          {/* Message */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Ваше звернення вже у нас. Майстер зв'яжеться з вами найближчим часом.
          </p>
          
          {/* Close Button */}
          <Button 
            onClick={onClose}
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3"
          >
            Зрозуміло
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    contactMethod: 'phone'
  });
  
  const contactMethods = [
    { value: 'phone', label: 'По телефону' },
    { value: 'telegram', label: 'Telegram' },
    { value: 'viber', label: 'Viber' },
    { value: 'whatsapp', label: 'WhatsApp' }
  ];
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      // Show success modal
      setShowSuccessModal(true);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        contactMethod: 'phone'
      });
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: 'Помилка',
        description: error.response?.data?.detail || 'Помилка при відправці заявки. Спробуйте пізніше.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
      
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Зв'яжіться з нами
          </h2>
          <p className="text-lg text-gray-600">
            Залишіть заявку і ми зв'яжемося з вами зручним способом
          </p>
        </div>
        
        <Card className="shadow-xl border-gray-200 bg-white">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Форма зворотного зв'язку</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">
                  <User className="w-4 h-4 inline mr-2" />
                  Ваше ім'я
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Введіть ваше ім'я"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="border-gray-300 placeholder:text-[#b7b7b7]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Номер телефону
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+38 (0XX) XXX XX XX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="border-gray-300 placeholder:text-[#b7b7b7]"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-gray-700">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Як зручніше зв'язатись?
                </Label>
                <div className="grid grid-cols-2 gap-3">
                  {contactMethods.map((method) => (
                    <button
                      key={method.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, contactMethod: method.value })}
                      disabled={isSubmitting}
                      className={`py-3 px-4 rounded-lg border-2 transition-all duration-200 font-medium ${
                        formData.contactMethod === method.value
                          ? 'border-gray-800 bg-gray-100 text-gray-900'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-400'
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {method.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Відправка...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Відправити заявку
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};