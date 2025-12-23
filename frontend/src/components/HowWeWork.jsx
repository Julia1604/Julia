import React from 'react';

export const HowWeWork = ({ steps }) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Як ми працюємо
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Простий та зрозумілий процес перевірки автомобіля
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={step.step} 
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 text-center md:text-right" style={{ order: index % 2 === 0 ? 1 : 2 }}>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full text-white text-2xl font-bold shadow-lg" style={{ order: index % 2 === 0 ? 2 : 1 }}>
                  {step.step}
                </div>
                
                <div className="flex-1" style={{ order: index % 2 === 0 ? 3 : 0 }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};