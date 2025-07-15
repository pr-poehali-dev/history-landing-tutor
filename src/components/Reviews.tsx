import React, { useState } from 'react';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      image: '/img/1332bafa-12c7-4c0e-95c9-b408211cdc11.jpg',
      name: 'Анна Петрова',
      rating: 5,
      text: 'Герман Владимирович — потрясающий преподаватель! Благодаря его методике я сдала ЕГЭ по истории на 92 балла. Четкая структура, понятные объяснения и постоянная поддержка.'
    },
    {
      id: 2,
      image: '/img/106bb0c7-57d1-408b-be4a-e3e0751bc710.jpg',
      name: 'Михаил Сергеев',
      rating: 5,
      text: 'Занимался в мини-группе. Отличная подготовка, много практики и разбора сложных заданий. Результат — 89 баллов! Рекомендую всем, кто серьезно готовится к ЕГЭ.'
    },
    {
      id: 3,
      image: '/img/6cfeb6ff-ecb1-441b-b9cc-6dd88822d250.jpg',
      name: 'Елена Иванова',
      rating: 5,
      text: 'Мама благодарит за подготовку дочери! Индивидуальный подход, регулярные тестирования и детальная обратная связь дали отличный результат — 95 баллов по истории.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Отзывы учеников
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мои ученики регулярно показывают высокие результаты на ЕГЭ по истории
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      <div className="flex-shrink-0">
                        <img
                          src={review.image}
                          alt={`Отзыв ${review.name}`}
                          className="w-80 h-64 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      
                      <div className="flex-1 text-center lg:text-left">
                        <div className="flex justify-center lg:justify-start gap-1 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                          ))}
                        </div>
                        
                        <blockquote className="text-lg text-gray-700 mb-6 italic">
                          "{review.text}"
                        </blockquote>
                        
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                          <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center">
                            <Icon name="User" className="text-white" size={24} />
                          </div>
                          <div>
                            <p className="font-semibold text-navy">{review.name}</p>
                            <p className="text-gray-600">Выпускница 2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <Icon name="ChevronLeft" className="text-navy" size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <Icon name="ChevronRight" className="text-navy" size={24} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-orange' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;