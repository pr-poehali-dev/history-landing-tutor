import Icon from "@/components/ui/icon";

const Progress = () => {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-amber-900 mb-8 font-montserrat">
          Система отслеживания прогресса
        </h2>
        <div className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-2xl p-8 shadow-lg border border-blue-100">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Icon name="BarChart3" size={32} className="text-gray-900" />
          </div>
          <h3 className="text-2xl font-semibold text-amber-900 mb-4 font-montserrat">
            Регулярное тестирование
          </h3>
          <p className="text-lg text-slate-700 leading-relaxed font-open-sans">
            Провожу пробные тестирования по каждому пройденному блоку. Это
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
