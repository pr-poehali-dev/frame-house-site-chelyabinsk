
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-primary font-bold text-xl flex items-center">
              <Icon name="Home" className="mr-2 h-6 w-6" />
              <span>СтройДом Челябинск</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Главная</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Проекты</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Технологии</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">О компании</a>
            <a href="#" className="text-gray-700 hover:text-primary font-medium">Контакты</a>
          </nav>
          
          <div className="hidden md:flex items-center">
            <a href="tel:+73517123456" className="flex items-center text-gray-700 hover:text-primary mr-6">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              <span>+7 (351) 712-34-56</span>
            </a>
            <Button>Заказать звонок</Button>
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-700">
              <Icon name="Menu" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
