import React, { useState, useRef } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Phone } from "lucide-react";
import { mockData } from "./mock";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { ServicesSection } from "./components/ServicesSection";
import { HowWeWork } from "./components/HowWeWork";
import { ReviewsSection } from "./components/ReviewsSection";
import { AboutSection } from "./components/AboutSection";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { Button } from "./components/ui/button";

const Home = () => {
  const [isFloatingVisible, setIsFloatingVisible] = useState(true);
  const contactRef = useRef(null);
  
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="relative">
      <Header companyData={mockData.company} />
      <HeroSection 
        companyData={mockData.company} 
        onContactClick={scrollToContact}
      />
      <WhyChooseUs reasons={mockData.whyChooseUs} />
      <ServicesSection 
        services={mockData.services} 
        onContactClick={scrollToContact}
      />
      <HowWeWork steps={mockData.howWeWork} />
      <ReviewsSection reviews={mockData.reviews} />
      <AboutSection />
      <div ref={contactRef}>
        <ContactForm />
      </div>
      <Footer companyData={mockData.company} />
      
      {/* Floating Call Button */}
      {isFloatingVisible && (
        <Button
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-2xl animate-pulse"
          onClick={() => window.location.href = `tel:${mockData.company.phone}`}
        >
          <Phone className="w-7 h-7" />
        </Button>
      )}
      
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
