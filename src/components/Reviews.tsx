import React, { useState } from 'react';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/files/4b430665-0fe5-4176-84ae-9e5db252b7ac.png',
      name: 'Наталья Кулабухова',
      rating: 5,
      text: 'Я, как мама Вероники Масаловой, хочу Вас, поблагодарить за такие знания по Истории. Вы сделали очень много для неё. Два года с вами, это целая жизнь. Она будет очень скучать. Пять томов её рукописей останутся долго в её голове. Она за 11 школьных лет, столько не писала! Огромное спасибо, за знания. Побольше таких талантливых людей. Вы преподаватель от Бога.'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/files/77684751-eb02-46ee-b105-f33774b38ca1.png',
      name: 'Варвара',
      rating: 5,
      text: 'Герман Владимирович, пришли результаты, я прямо на выпускном завершала от радости. Я очень довольно баллами, но без вас бы у меня ничего не получилось. Спасибо вам большое за все занятия, за ваше понимание. Вы прекрасный учитель и человек! Вы перевернули мой взгляд на историю! Спасибо вам большое!'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/files/0a21e7f4-2a87-4661-b1c4-5189b5bd64ce.png',
      name: 'Алексей',
      rating: 5,
      text: 'История - 100 баллов! Невероятный результат благодаря качественной подготовке. Герман Владимирович помог достичь максимального балла на ЕГЭ по истории. Профессиональный подход и отличная методика дали свои плоды.'
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
                            <p className="text-gray-600">Ученик</p>
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