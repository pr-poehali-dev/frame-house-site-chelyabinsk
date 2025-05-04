
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470" 
          alt="Каркасный дом" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl">
          Каркасные дома под ключ в Челябинске и области
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Строим теплые, комфортные и экологичные дома по современным технологиям от 25 000 ₽/м²
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Рассчитать стоимость
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Каталог проектов
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 bg-black/30 p-4 rounded-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">8+</div>
            <div className="text-gray-300">лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">150+</div>
            <div className="text-gray-300">построенных домов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">3</div>
            <div className="text-gray-300">месяца строительство</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">5</div>
            <div className="text-gray-300">лет гарантии</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
