import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardHeader, CardContent } from './ui/card';

export const ReviewsSection = ({ reviews }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Відгуки клієнтів
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Чесність, економія грошей та спокій — ось що цінують наші клієнти
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card 
              key={review.id} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 bg-white"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gray-800 fill-gray-800" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};