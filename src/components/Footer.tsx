import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">О сервисе</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="#" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="Info" size={14} />
                  О компании
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="FileText" size={14} />
                  Правила пользования
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="Shield" size={14} />
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="AlertCircle" size={14} />
                  Безопасность сделок
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Помощь</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="#" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="HelpCircle" size={14} />
                  Как разместить объявление
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="MessageCircle" size={14} />
                  FAQ - Часто задаваемые вопросы
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="Star" size={14} />
                  Платные услуги
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="Sparkles" size={14} />
                  Продвижение объявлений
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Служба поддержки</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:support@prodaysosedu.ru" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  support@prodaysosedu.ru
                </a>
              </li>
              <li>
                <a href="tel:+78001234567" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="Phone" size={14} />
                  8 (800) 123-45-67
                </a>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="Clock" size={14} />
                  Пн-Пт: 9:00 - 18:00
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="Send" size={14} />
                  Написать в поддержку
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Мы в соцсетях</h3>
            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
              <li>
                <a href="#" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="MessageSquare" size={14} />
                  ВКонтакте
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="Send" size={14} />
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="Instagram" size={14} />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors flex items-center gap-2">
                  <Icon name="Youtube" size={14} />
                  YouTube
                </a>
              </li>
            </ul>
            
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Скачайте наше приложение
              </p>
              <div className="flex gap-2 mt-2">
                <a href="#" className="bg-background hover:bg-accent px-3 py-1.5 rounded text-xs flex items-center gap-1.5">
                  <Icon name="Apple" size={14} />
                  App Store
                </a>
                <a href="#" className="bg-background hover:bg-accent px-3 py-1.5 rounded text-xs flex items-center gap-1.5">
                  <Icon name="PlayCircle" size={14} />
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            <strong className="text-foreground">ПРОДАЙ СОСЕДУ</strong> — доска объявлений для всех регионов России
          </p>
          <p>© 2024 Все права защищены. Сделано с ❤️ для соседей</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
