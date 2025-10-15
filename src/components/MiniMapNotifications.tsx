import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

interface Notification {
  id: string;
  city: string;
  category: string;
  timestamp: Date;
}

const MiniMapNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: '1', city: 'Москва', category: 'Продажа автомобилей', timestamp: new Date(Date.now() - 120000) },
    { id: '2', city: 'Санкт-Петербург', category: 'Недвижимость', timestamp: new Date(Date.now() - 240000) },
    { id: '3', city: 'Казань', category: 'Электроника', timestamp: new Date(Date.now() - 360000) },
  ]);

  const [showNewNotification, setShowNewNotification] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const cities = ['Москва', 'Санкт-Петербург', 'Казань', 'Екатеринбург', 'Новосибирск', 'Краснодар'];
      const categories = ['Продажа автомобилей', 'Недвижимость', 'Электроника', 'Одежда', 'Мебель', 'Услуги'];
      
      const newNotification: Notification = {
        id: Date.now().toString(),
        city: cities[Math.floor(Math.random() * cities.length)],
        category: categories[Math.floor(Math.random() * categories.length)],
        timestamp: new Date(),
      };

      setNotifications(prev => [newNotification, ...prev.slice(0, 4)]);
      setShowNewNotification(true);
      
      setTimeout(() => setShowNewNotification(false), 3000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const getTimeAgo = (date: Date) => {
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    if (seconds < 60) return 'только что';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} мин назад`;
    const hours = Math.floor(minutes / 60);
    return `${hours} ч назад`;
  };

  return (
    <Card className="h-full overflow-hidden border-2 border-primary/20">
      <CardContent className="p-0 h-full flex flex-col">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="MapPin" size={20} />
            <h3 className="font-bold text-lg">Активность</h3>
          </div>
          <p className="text-xs text-white/80">Новые объявления в реальном времени</p>
        </div>

        <div className="flex-1 overflow-y-auto">
          {notifications.map((notification, index) => (
            <div
              key={notification.id}
              className={`p-3 border-b border-border hover:bg-muted/50 transition-all ${
                index === 0 && showNewNotification ? 'bg-green-50 animate-pulse' : ''
              }`}
            >
              <div className="flex items-start gap-2">
                <div className="bg-primary/10 rounded-full p-1.5 mt-0.5">
                  <Icon name="MapPin" size={12} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground leading-tight mb-1">
                    {notification.city}
                  </p>
                  <p className="text-xs text-muted-foreground leading-tight">
                    {notification.category}
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-1">
                    {getTimeAgo(notification.timestamp)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 bg-muted/30 border-t">
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Обновляется автоматически</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MiniMapNotifications;
