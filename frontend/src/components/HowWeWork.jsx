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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step) => (
            <div 
              key={step.step} 
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full text-white text-3xl font-bold shadow-lg">
                {step.step}
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};