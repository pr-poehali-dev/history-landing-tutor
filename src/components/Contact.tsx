import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-16 px-4 bg-[#F9F5EE]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2F4F7F] mb-12 text-center font-montserrat">
          Получить консультацию
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-[#2F4F7F] mb-6 font-montserrat">
              Свяжитесь с нами
            </h3>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-[#3A3A3A] font-open-sans">
                  Ваше имя
                </Label>
                <Input
                  id="name"
                  className="mt-2 border-gray-300 focus:border-[#E67E22]"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <Label
                  htmlFor="contact"
                  className="text-[#3A3A3A] font-open-sans"
                >
                  Телефон или email
                </Label>
                <Input
                  id="contact"
                  className="mt-2 border-gray-300 focus:border-[#E67E22]"
                  placeholder="Введите телефон или email"
                />
              </div>
              <Button className="w-full bg-[#D9534F] hover:bg-[#C9302C] text-white py-3 text-lg">
                Получить консультацию
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[#2F4F7F] mb-6 font-montserrat">
                Контакты
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="text-[#E67E22] mr-3" />
                  <span className="text-[#3A3A3A] font-open-sans">
                    german_bemm@mail.ru
                  </span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="text-[#E67E22] mr-3"
                  />
                  <span className="text-[#3A3A3A] font-open-sans">
                    WhatsApp: +79528385413
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[#2F4F7F] mb-4 font-montserrat">
                Быстрая связь
              </h3>
              <p className="text-[#3A3A3A] mb-4 font-open-sans">
                Ответим на все вопросы в течение часа
              </p>
              <Button className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white">
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
