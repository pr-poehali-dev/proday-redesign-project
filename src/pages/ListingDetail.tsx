import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
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
  { id: 'animals', name: 'Животные', icon: 'Dog' },
  { id: 'forHome', name: 'Для дома и дачи', icon: 'Sofa' },
  { id: 'fashion', name: 'Одежда и обувь', icon: 'Shirt' },
  { id: 'children', name: 'Детские товары', icon: 'Baby' },
  { id: 'business', name: 'Бизнес и оборудование', icon: 'Building2' },
  { id: 'dating', name: 'Знакомства', icon: 'Users' },
];

const listings = [
  { 
    id: 1, 
    title: 'Toyota Camry 2020', 
    price: 2500000, 
    category: 'transport', 
    location: 'Москва', 
    image: 'https://cdn.poehali.dev/projects/cf688e9f-c2ff-4376-8a35-970e2e2fa625/files/c792cedb-e7d7-4e4b-9ca8-896c29d90ff8.jpg',
    description: 'Продается Toyota Camry 2020 года выпуска в отличном состоянии. Пробег 45 000 км. Один владелец. Полная комплектация, кожаный салон, камера заднего вида, парктроники. ТО пройдено. Все документы в порядке.',
    seller: 'Александр',
    phone: '+7 (999) 123-45-67',
    views: 245,
    date: '15 октября 2024'
  },
  { 
    id: 2, 
    title: '2-комнатная квартира', 
    price: 8500000, 
    category: 'realty', 
    location: 'Санкт-Петербург', 
    image: 'https://cdn.poehali.dev/projects/cf688e9f-c2ff-4376-8a35-970e2e2fa625/files/b450bbce-e6e7-4b18-ab4c-a8d6afae731c.jpg',
    description: 'Продается двухкомнатная квартира в центре Санкт-Петербурга. Площадь 58 кв.м. Этаж 5/9. Современный ремонт, мебель и техника остаются. Развитая инфраструктура, метро в 5 минутах пешком.',
    seller: 'Мария',
    phone: '+7 (911) 234-56-78',
    views: 412,
    date: '14 октября 2024'
  },
  { 
    id: 3, 
    title: 'Менеджер по продажам', 
    price: 80000, 
    category: 'jobs', 
    location: 'Казань', 
    image: '/placeholder.svg',
    description: 'Требуется менеджер по продажам в динамично развивающуюся компанию. Опыт работы от 1 года. Оклад + проценты. Официальное трудоустройство, соцпакет.',
    seller: 'ООО "Компания"',
    phone: '+7 (843) 345-67-89',
    views: 156,
    date: '13 октября 2024'
  },
  { 
    id: 4, 
    title: 'iPhone 14 Pro', 
    price: 85000, 
    category: 'electronics', 
    location: 'Москва', 
    image: 'https://cdn.poehali.dev/projects/cf688e9f-c2ff-4376-8a35-970e2e2fa625/files/e3cd10ce-857e-4746-9b15-d0c001e78849.jpg',
    description: 'Продается iPhone 14 Pro 256GB в идеальном состоянии. Куплен 3 месяца назад, полный комплект, чек и гарантия. Без царапин и сколов. Защитное стекло наклеено с первого дня использования.',
    seller: 'Дмитрий',
    phone: '+7 (926) 456-78-90',
    views: 389,
    date: '15 октября 2024'
  },
];

const ListingDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const listing = listings.find(l => l.id === Number(id));

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Объявление не найдено</h1>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <Icon name="ArrowLeft" size={20} />
            </Button>
            <div className="flex-1">
              <h1 className="text-xl font-bold text-sidebar-primary">ПРОДАЙ СОСЕДУ</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="MapPin" size={16} />
                          {listing.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Eye" size={16} />
                          {listing.views} просмотров
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          {listing.date}
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary">
                      {categories.find(c => c.id === listing.category)?.name}
                    </Badge>
                  </div>

                  <Separator className="my-6" />

                  <div>
                    <h2 className="text-xl font-semibold mb-3">Описание</h2>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {listing.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-6">
                    {listing.price === 0 ? 'Договорная' : `${listing.price.toLocaleString()} ₽`}
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      <Icon name="Phone" size={18} className="mr-2" />
                      Позвонить
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <Icon name="MessageCircle" size={18} className="mr-2" />
                      Написать
                    </Button>
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    <h3 className="font-semibold">Продавец</h3>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {listing.seller.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{listing.seller}</div>
                        <div className="text-sm text-muted-foreground">На сайте с 2020 года</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Icon name="ShieldCheck" size={20} className="text-primary mt-0.5 shrink-0" />
                    <div className="text-sm text-muted-foreground">
                      Будьте внимательны при совершении сделок. Проверяйте товар перед покупкой.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListingDetail;
