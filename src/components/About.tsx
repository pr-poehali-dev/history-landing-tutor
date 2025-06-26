const About = () => {
  return (
    <section className="py-16 px-4 bg-orange-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-amber-900 mb-8 text-center font-montserrat">
          О преподавателе
        </h2>
        <div className="bg-orange-50 rounded-2xl p-8 shadow-lg border border-orange-300">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0 md:w-64">
              <img
                src="https://cdn.poehali.dev/files/25887e73-7c6f-4202-983a-42637166a955.JPG"
                alt="Герман Владимирович - преподаватель истории"
                className="w-64 h-80 object-cover rounded-xl shadow-lg mx-auto md:mx-0"
              />
            </div>
            <div className="flex-1 md:pt-4">
              <p className="text-lg text-slate-700 leading-relaxed font-open-sans">
                Герман Владимирович — опытный преподаватель истории с
                многолетним стажем подготовки к ЕГЭ, кандидат исторических наук.
                За годы работы помог сотням учеников успешно сдать экзамен и
                поступить в престижные вузы. Специализируется на системном
                подходе к изучению истории, развитии аналитического мышления и
                эффективных техниках запоминания.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
