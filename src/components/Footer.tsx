
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="font-bold text-xl flex items-center mb-4">
              <Icon name="Home" className="mr-2 h-6 w-6" />
              <span>СтройДом Челябинск</span>
            </div>
            <p className="text-gray-400 mb-4">
              Строительство каркасных домов в Челябинске и области под ключ
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="MapPin" className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <span>г. Челябинск, ул. Строителей, 123</span>
              </li>
              <li className="flex items-start">
                <Icon name="Phone" className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <span>+7 (351) 712-34-56</span>
              </li>
              <li className="flex items-start">
                <Icon name="Mail" className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <span>info@стройдом74.рф</span>
              </li>
              <li className="flex items-start">
                <Icon name="Clock" className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                <span>Пн-Пт: 9:00-19:00, Сб: 10:00-17:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Главная</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Проекты домов</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Технологии</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Фотогалерея</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">О компании</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Контакты</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Каркасные дома под ключ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Проектирование</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Фундаментные работы</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Инженерные коммуникации</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Отделочные работы</a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} СтройДом Челябинск. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
