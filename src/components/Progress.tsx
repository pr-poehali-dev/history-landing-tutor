import Icon from "@/components/ui/icon";

const Progress = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-emerald-800 mb-8 font-montserrat">
          Система отслеживания прогресса
        </h2>
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-emerald-100">
          <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Icon name="BarChart3" size={32} className="text-gray-900" />
          </div>
          <h3 className="text-2xl font-semibold text-emerald-800 mb-4 font-montserrat">
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
