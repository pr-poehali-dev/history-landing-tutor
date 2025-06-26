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
        "Самая доступная цена",
        "Мотивирующая среда",
      ],
      price: "Договорная",
      popular: false,
    },
  ];

  return (
    <section className="py-16 px-4 bg-[#F9F5EE]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2F4F7F] mb-4 text-center font-montserrat">
          Форматы занятий
        </h2>
        <p className="text-xl text-[#3A3A3A] mb-12 text-center font-open-sans">
          Онлайн-обучение в удобном формате
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 relative ${
                pkg.popular ? "ring-2 ring-[#E67E22] shadow-xl" : "shadow-lg"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#E67E22] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                </div>
              )}
              <h3 className="text-2xl font-bold text-[#2F4F7F] mb-3 font-montserrat">
                {pkg.title}
              </h3>
              <p className="text-[#3A3A3A] mb-6 font-open-sans">
                {pkg.description}
              </p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-[#3A3A3A] font-open-sans"
                  >
                    <Icon
                      name="Check"
                      size={16}
                      className="text-[#E67E22] mr-3 flex-shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2F4F7F] mb-4 font-montserrat">
                  {pkg.price}
                </div>
                <Button className="w-full bg-[#D9534F] hover:bg-[#C9302C] text-white">
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
