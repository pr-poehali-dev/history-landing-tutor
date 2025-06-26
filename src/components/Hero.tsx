import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="https://cdn.poehali.dev/files/290c1975-bcac-47f6-90bd-d5597513e9f9.jpg"
            alt="Репетитор по истории Герман Владимирович"
            className="w-48 h-48 mx-auto rounded-full shadow-lg"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-montserrat drop-shadow-lg">
          Подготовься к ЕГЭ по истории с Германом Владимировичем!
        </h1>
        <p className="text-xl text-orange-50 mb-8 max-w-3xl mx-auto font-open-sans">
          Эффективная подготовка к ЕГЭ по истории с опытным преподавателем.
          Индивидуальный подход, проверенные методики, высокие результаты.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-gray-900 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Записаться на курс
        </Button>
      </div>
    </section>
  );
};

export default Hero;
