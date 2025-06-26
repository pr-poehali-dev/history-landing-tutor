import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-sky-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-amber-900 mb-12 text-center font-montserrat">
          Получить консультацию
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-300">
            <h3 className="text-2xl font-semibold text-amber-900 mb-6 font-montserrat">
              Свяжитесь с нами
            </h3>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-slate-700 font-open-sans">
                  Ваше имя
                </Label>
                <Input
                  id="name"
                  className="mt-2 border-blue-200 focus:border-orange-400 focus:ring-orange-400"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <Label
                  htmlFor="contact"
                  className="text-slate-700 font-open-sans"
                >
                  Телефон или email
                </Label>
                <Input
                  id="contact"
                  className="mt-2 border-blue-200 focus:border-orange-400 focus:ring-orange-400"
                  placeholder="Введите телефон или email"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Получить консультацию
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-300">
              <h3 className="text-2xl font-semibold text-amber-900 mb-6 font-montserrat">
                Контакты
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon
                    name="Mail"
                    size={20}
                    className="text-orange-500 mr-3"
                  />
                  <span className="text-slate-700 font-open-sans">
                    german_bemm@mail.ru
                  </span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="text-orange-500 mr-3"
                  />
                  <span className="text-slate-700 font-open-sans">
                    WhatsApp: +79528385413
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-300">
              <h3 className="text-xl font-semibent text-amber-900 mb-4 font-montserrat">
                Быстрая связь
              </h3>
              <p className="text-slate-700 mb-4 font-open-sans">
                Ответим на все вопросы в течение часа
              </p>
              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
