import React from 'react';
import { Shield, Award } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Про нас
          </h2>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Безпека та надійність</h3>
                <p className="text-gray-600">Ми завжди на боці клієнта</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Професіонали своєї справи</h3>
                <p className="text-gray-600">Багаторічний досвід в автоіндустрії</p>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-900">ProAuto Expert</span> — це команда досвідчених автоекспертів, які допомагають українцям купувати автомобілі без ризиків. Ми підбираємо авто так, ніби обираємо для себе.
          </p>
          
          <p className="text-gray-700 leading-relaxed mt-4">
            Наша місія — зробити процес купівлі авто прозорим, чесним та безпечним. Кожна перевірка проводиться за понад 50 параметрами, а наш детальний звіт допоможе вам прийняти правильне рішення.
          </p>
        </div>
      </div>
    </section>
  );
};