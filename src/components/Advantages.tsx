import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "Target",
      title: "Высокие результаты",
      description: "Средний балл учеников — 85+ баллов на ЕГЭ",
    },
    {
      icon: "BookOpen",
      title: "Индивидуальный подход",
      description: "Программа адаптируется под уровень каждого ученика",
    },
    {
      icon: "Clock",
      title: "Удобное расписание",
      description: "Гибкий график занятий онлайн",
    },
    {
      icon: "Award",
      title: "Проверенные методики",
      description: "Авторские техники запоминания и анализа",
    },
    {
      icon: "Users",
      title: "Опытный преподаватель",
      description: "Более 10 лет успешной подготовки к ЕГЭ",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-emerald-800 mb-12 text-center font-montserrat">
          Преимущества обучения
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-emerald-100"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                <Icon
                  name={advantage.icon}
                  size={24}
                  className="text-gray-900"
                />
              </div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-3 font-montserrat">
                {advantage.title}
              </h3>
              <p className="text-slate-600 font-open-sans">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
