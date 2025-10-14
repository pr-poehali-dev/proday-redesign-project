import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const categories = [
  { id: 'all', name: 'Все объявления', icon: 'Grid' },
  { id: 'transport', name: 'Транспорт', icon: 'Car' },
  { id: 'realty', name: 'Недвижимость', icon: 'Home' },
  { id: 'jobs', name: 'Работа и Резюме', icon: 'Briefcase' },
  { id: 'services', name: 'Услуги', icon: 'Wrench' },
  { id: 'electronics', name: 'Электроника', icon: 'Smartphone' },
  { id: 'goods', name: 'Товары', icon: 'ShoppingBag' },
  { id: 'hobby', name: 'Хобби и отдых', icon: 'Heart' },
];

const myListings = [
  { 
    id: 1, 
    title: 'Toyota Camry 2020', 
    price: 2500000, 
    category: 'transport', 
    image: 'https://cdn.poehali.dev/projects/cf688e9f-c2ff-4376-8a35-970e2e2fa625/files/c792cedb-e7d7-4e4b-9ca8-896c29d90ff8.jpg',
    status: 'active',
    views: 245,
    date: '15 октября 2024'
  },
  { 
    id: 4, 
    title: 'iPhone 14 Pro', 
    price: 85000, 
    category: 'electronics', 
    image: 'https://cdn.poehali.dev/projects/cf688e9f-c2ff-4376-8a35-970e2e2fa625/files/e3cd10ce-857e-4746-9b15-d0c001e78849.jpg',
    status: 'active',
    views: 389,
    date: '15 октября 2024'
  },
];

const favoriteListings = [
  { 
    id: 2, 
    title: '2-комнатная квартира', 
    price: 8500000, 
    category: 'realty', 
    image: 'https://cdn.poehali.dev/projects/cf688e9f-c2ff-4376-8a35-970e2e2fa625/files/b450bbce-e6e7-4b18-ab4c-a8d6afae731c.jpg',
    location: 'Санкт-Петербург',
  },
];

const Profile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('listings');
  const [profileData, setProfileData] = useState({
    name: 'Александр Иванов',
    email: 'alex@example.com',
    phone: '+7 (999) 123-45-67',
    city: 'Москва'
  });

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
              <Icon name="ArrowLeft" size={20} />
            </Button>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-sidebar-primary">ПРОДАЙ СОСЕДУ</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-6">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                      {profileData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold mb-1">{profileData.name}</h2>
                  <p className="text-sm text-muted-foreground">На сайте с 2020 года</p>
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <button
                    onClick={() => setActiveTab('listings')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === 'listings'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <Icon name="ListChecks" size={20} />
                    <span>Мои объявления</span>
                    <Badge variant="secondary" className="ml-auto">
                      {myListings.length}
                    </Badge>
                  </button>

                  <button
                    onClick={() => setActiveTab('favorites')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === 'favorites'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <Icon name="Heart" size={20} />
                    <span>Избранное</span>
                    <Badge variant="secondary" className="ml-auto">
                      {favoriteListings.length}
                    </Badge>
                  </button>

                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === 'settings'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <Icon name="Settings" size={20} />
                    <span>Настройки</span>
                  </button>

                  <Separator className="my-4" />

                  <button
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-destructive hover:bg-destructive/10 transition-colors"
                  >
                    <Icon name="LogOut" size={20} />
                    <span>Выход</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="lg:col-span-3">
            {activeTab === 'listings' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Мои объявления</h2>
                    <p className="text-muted-foreground mt-1">
                      Всего {myListings.length} активных объявлений
                    </p>
                  </div>
                  <Button onClick={() => navigate('/')}>
                    <Icon name="Plus" size={18} className="mr-2" />
                    Новое объявление
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {myListings.map((listing) => (
                    <Card key={listing.id} className="group hover:shadow-lg transition-shadow">
                      <CardHeader className="p-0">
                        <div className="aspect-video bg-muted overflow-hidden rounded-t-lg relative">
                          <img
                            src={listing.image}
                            alt={listing.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge className="absolute top-3 right-3 bg-green-500">
                            Активно
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{listing.title}</h3>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xl font-bold text-primary">
                            {listing.price.toLocaleString()} ₽
                          </span>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Icon name="Eye" size={14} />
                            {listing.views}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1" onClick={() => navigate(`/listing/${listing.id}`)}>
                            <Icon name="Eye" size={14} className="mr-2" />
                            Просмотр
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Icon name="Edit" size={14} className="mr-2" />
                            Изменить
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Избранное</h2>
                  <p className="text-muted-foreground mt-1">
                    {favoriteListings.length} сохраненных объявлений
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {favoriteListings.map((listing) => (
                    <Card 
                      key={listing.id} 
                      className="group hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => navigate(`/listing/${listing.id}`)}
                    >
                      <CardHeader className="p-0">
                        <div className="aspect-video bg-muted overflow-hidden rounded-t-lg relative">
                          <img
                            src={listing.image}
                            alt={listing.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Button
                            size="icon"
                            variant="secondary"
                            className="absolute top-3 right-3"
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            <Icon name="Heart" size={18} className="fill-current text-destructive" />
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{listing.title}</h3>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xl font-bold text-primary">
                            {listing.price.toLocaleString()} ₽
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="MapPin" size={14} />
                          {listing.location}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Настройки профиля</h2>
                  <p className="text-muted-foreground mt-1">
                    Управление личной информацией
                  </p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Личная информация</CardTitle>
                    <CardDescription>
                      Обновите свои контактные данные
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Имя</Label>
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="city">Город</Label>
                      <Input
                        id="city"
                        value={profileData.city}
                        onChange={(e) => setProfileData({...profileData, city: e.target.value})}
                      />
                    </div>
                    <Button>
                      <Icon name="Save" size={18} className="mr-2" />
                      Сохранить изменения
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Безопасность</CardTitle>
                    <CardDescription>
                      Настройки безопасности аккаунта
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline">
                      <Icon name="Lock" size={18} className="mr-2" />
                      Изменить пароль
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Уведомления</CardTitle>
                    <CardDescription>
                      Управление уведомлениями
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Email уведомления</div>
                        <div className="text-sm text-muted-foreground">Получать уведомления на почту</div>
                      </div>
                      <Button variant="outline" size="sm">Включено</Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Сообщения о новых объявлениях</div>
                        <div className="text-sm text-muted-foreground">Уведомления о публикации</div>
                      </div>
                      <Button variant="outline" size="sm">Включено</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
