
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Преимущества */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают каркасные дома</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Icon name="Clock" className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Быстрое строительство</h3>
              </div>
              <p className="text-gray-600">Каркасный дом можно построить за 2-3 месяца — в 2-3 раза быстрее, чем из других материалов.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Icon name="Banknote" className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Экономичность</h3>
              </div>
              <p className="text-gray-600">Стоимость строительства каркасного дома на 20-30% ниже, чем кирпичного или бетонного.</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Icon name="Thermometer" className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Энергоэффективность</h3>
              </div>
              <p className="text-gray-600">Современные утеплители обеспечивают отличную теплоизоляцию при меньшей толщине стен.</p>
            </Card>
          </div>
        </section>
        
        {/* Наши проекты */}
        <section className="py-16 bg-gray-100 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">Популярные проекты</h2>
            <p className="text-center text-gray-600 mb-12">Выберите готовый проект или закажите индивидуальное решение</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Комфорт", area: 85, price: 1650000, imageUrl: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=500" },
                { name: "Уютный", area: 110, price: 2100000, imageUrl: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=500" },
                { name: "Семейный", area: 145, price: 2850000, imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=500" }
              ].map((project, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-w-16 aspect-h-10">
                    <img 
                      src={project.imageUrl} 
                      alt={`Проект ${project.name}`} 
                      className="object-cover w-full h-64"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      <span>Площадь: {project.area} м²</span>
                      <span>от {project.price.toLocaleString()} ₽</span>
                    </div>
                    <Button className="w-full">Подробнее</Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button variant="outline" size="lg">Смотреть все проекты</Button>
            </div>
          </div>
        </section>
        
        {/* Этапы работ */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Как мы работаем</h2>
          <div className="space-y-6">
            {[
              { step: 1, title: "Консультация и выбор проекта", description: "Бесплатная консультация, подбор оптимального проекта под ваши потребности и бюджет." },
              { step: 2, title: "Заключение договора", description: "Составление сметы, согласование всех деталей и подписание договора." },
              { step: 3, title: "Строительство", description: "Строительство дома под ключ с соблюдением всех технологий и сроков." }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row items-start py-6">
                <div className="bg-primary text-white font-bold text-xl rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  {idx < 2 && <Separator className="mt-6 md:hidden" />}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Форма связи */}
        <section className="py-16 bg-primary/5 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-gray-600 mb-8">Оставьте заявку, и мы свяжемся с вами для бесплатной консультации</p>
            <Card className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input 
                    type="tel" 
                    placeholder="Ваш телефон" 
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <textarea 
                  placeholder="Ваше сообщение" 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                <Button size="lg" className="w-full md:w-auto">Отправить заявку</Button>
              </form>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
