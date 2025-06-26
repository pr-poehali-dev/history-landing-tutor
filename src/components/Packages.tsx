import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Packages = () => {
  const packages = [
    {
      title: "Индивидуальные занятия",
      description: "Персональный подход, максимум внимания",
      features: [
        "1-на-1 с преподавателем",
        "Гибкое расписание",
        "Персональная программа",
        "Постоянная обратная связь",
      ],
      price: "Договорная",
      popular: true,
    },
    {
      title: "Мини-группы",
      description: "До 4 человек в группе",
      features: [
        "Малые группы до 4 человек",
        "Интерактивные занятия",
        "Соревновательный элемент",
        "Постоянная обратная связь",
        "Доступная цена",
      ],
      price: "Договорная",
      popular: false,
    },
    {
      title: "Групповые занятия",
      description: "До 10 человек в группе",
      features: [
        "Группы до 10 человек",
        "Обмен опытом с другими",
        "Постоянная обратная связь",
        "Самая доступная цена",
        "Мотивирующая среда",
      ],
      price: "Договорная",
      popular: false,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-sky-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-amber-900 mb-4 text-center font-montserrat">
          Форматы занятий
        </h2>
        <p className="text-xl text-slate-600 mb-12 text-center font-open-sans">
          Онлайн-обучение в удобном формате
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 relative ${
                pkg.popular
                  ? "ring-2 ring-orange-400 shadow-2xl bg-gradient-to-br from-white to-orange-50"
                  : "shadow-lg bg-white"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-400 to-amber-500 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Популярный
                  </div>
                </div>
              )}
              <h3 className="text-2xl font-bold text-amber-900 mb-3 font-montserrat">
                {pkg.title}
              </h3>
              <p className="text-slate-600 mb-6 font-open-sans">
                {pkg.description}
              </p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-slate-600 font-open-sans"
                  >
                    <Icon
                      name="Check"
                      size={16}
                      className="text-orange-500 mr-3 flex-shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-900 mb-4 font-montserrat">
                  {pkg.price}
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Выбрать формат
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
