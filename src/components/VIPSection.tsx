import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const vipListings = [
  {
    id: 1,
    title: 'Mercedes-Benz E-Class 2023',
    price: 5500000,
    category: 'Транспорт',
    location: 'Москва',
    image: 'https://cdn.poehali.dev/projects/cf688e9f-c2ff-4376-8a35-970e2e2fa625/files/c792cedb-e7d7-4e4b-9ca8-896c29d90ff8.jpg',
    isVIP: true,
    views: 1254
  },
  {
    id: 2,
    title: '3-комнатная квартира в центре',
    price: 15000000,
    category: 'Недвижимость',
    location: 'Санкт-Петербург',
    image: 'https://cdn.poehali.dev/projects/cf688e9f-c2ff-4376-8a35-970e2e2fa625/files/b450bbce-e6e7-4b18-ab4c-a8d6afae731c.jpg',
    isVIP: true,
    views: 2341
  },
  {
    id: 3,
    title: 'iPhone 15 Pro Max 1TB',
    price: 145000,
    category: 'Электроника',
    location: 'Москва',
    image: 'https://cdn.poehali.dev/projects/cf688e9f-c2ff-4376-8a35-970e2e2fa625/files/e3cd10ce-857e-4746-9b15-d0c001e78849.jpg',
    isVIP: true,
    views: 856
  }
];

const VIPSection = () => {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-lg">
            <Icon name="Crown" size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              VIP объявления
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                Премиум
              </Badge>
            </h2>
            <p className="text-sm text-muted-foreground">Избранные предложения от проверенных продавцов</p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="hidden sm:flex">
          <Icon name="Sparkles" size={16} className="mr-2" />
          Добавить в VIP
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vipListings.map((listing) => (
          <Card 
            key={listing.id} 
            className="overflow-hidden border-2 border-yellow-400/40 hover:border-yellow-400 transition-all hover:shadow-xl bg-gradient-to-b from-yellow-50/50 to-background relative group"
          >
            <div className="absolute top-3 right-3 z-10">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0 shadow-lg">
                <Icon name="Crown" size={12} className="mr-1" />
                VIP
              </Badge>
            </div>
            
            <CardHeader className="p-0 relative">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute bottom-3 left-3 flex gap-2">
                <Badge variant="secondary" className="bg-black/60 text-white border-0 backdrop-blur-sm">
                  <Icon name="Eye" size={12} className="mr-1" />
                  {listing.views.toLocaleString()}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <CardTitle className="text-lg line-clamp-2">{listing.title}</CardTitle>
              </div>
              <div className="flex items-center gap-2 mb-3 text-muted-foreground text-sm">
                <Icon name="MapPin" size={14} />
                {listing.location}
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  {listing.price.toLocaleString()} ₽
                </span>
                <Badge variant="outline" className="border-yellow-400/40">
                  {listing.category}
                </Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1" size="sm">
                  <Icon name="MessageCircle" size={14} className="mr-1" />
                  Написать
                </Button>
                <Button className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600" size="sm">
                  <Icon name="Phone" size={14} className="mr-1" />
                  Позвонить
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400/40 rounded-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-1 flex items-center gap-2 justify-center sm:justify-start">
              <Icon name="Sparkles" size={20} className="text-yellow-600" />
              Хотите выделить свое объявление?
            </h3>
            <p className="text-sm text-muted-foreground">
              VIP-размещение увеличивает количество просмотров в 5 раз
            </p>
          </div>
          <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold px-6">
            <Icon name="Crown" size={18} className="mr-2" />
            Добавить в VIP
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VIPSection;
