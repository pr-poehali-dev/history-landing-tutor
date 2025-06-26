import Icon from "@/components/ui/icon";

const Progress = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#2F4F7F] mb-8 font-montserrat">
          Система отслеживания прогресса
        </h2>
        <div className="bg-[#F9F5EE] rounded-2xl p-8">
          <div className="w-16 h-16 bg-[#E67E22] rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="BarChart3" size={32} className="text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-[#2F4F7F] mb-4 font-montserrat">
            Регулярное тестирование
          </h3>
          <p className="text-lg text-[#3A3A3A] leading-relaxed font-open-sans">
            Проводим пробные тестирования по каждой изученной теме. Это
            позволяет отслеживать прогресс, выявлять слабые места и
            корректировать программу обучения. Каждый ученик получает детальную
            обратную связь и рекомендации по улучшению результатов.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Progress;
