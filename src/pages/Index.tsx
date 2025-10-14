import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
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

const cities = ['Все города', 'Москва', 'Санкт-Петербург', 'Казань', 'Екатеринбург', 'Новосибирск'];

const listings = [
  { id: 1, title: 'Toyota Camry 2020', price: 2500000, category: 'transport', location: 'Москва', image: 'https://cdn.poehali.dev/projects/cf688e9f-c2ff-4376-8a35-970e2e2fa625/files/c792cedb-e7d7-4e4b-9ca8-896c29d90ff8.jpg' },
  { id: 2, title: '2-комнатная квартира', price: 8500000, category: 'realty', location: 'Санкт-Петербург', image: 'https://cdn.poehali.dev/projects/cf688e9f-c2ff-4376-8a35-970e2e2fa625/files/b450bbce-e6e7-4b18-ab4c-a8d6afae731c.jpg' },
  { id: 3, title: 'Менеджер по продажам', price: 80000, category: 'jobs', location: 'Казань', image: '/placeholder.svg' },
  { id: 4, title: 'iPhone 14 Pro', price: 85000, category: 'electronics', location: 'Москва', image: 'https://cdn.poehali.dev/projects/cf688e9f-c2ff-4376-8a35-970e2e2fa625/files/e3cd10ce-857e-4746-9b15-d0c001e78849.jpg' },
  { id: 5, title: 'Ремонт квартир', price: 0, category: 'services', location: 'Екатеринбург', image: '/placeholder.svg' },
  { id: 6, title: 'Диван угловой', price: 25000, category: 'goods', location: 'Новосибирск', image: '/placeholder.svg' },
];

const Sidebar = ({ activeCategory, setActiveCategory }: { activeCategory: string; setActiveCategory: (id: string) => void }) => (
  <div className="h-full bg-sidebar border-r border-sidebar-border">
    <div className="p-6 border-b border-sidebar-border">
      <h1 className="text-2xl font-bold text-sidebar-primary">ПРОДАЙ СОСЕДУ</h1>
      <p className="text-sm text-muted-foreground mt-1">Доска объявлений</p>
    </div>
    <nav className="p-4 space-y-1">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
            activeCategory === category.id
              ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
              : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
          }`}
        >
          <Icon name={category.icon as any} size={20} />
          <span>{category.name}</span>
        </button>
      ))}
    </nav>
  </div>
);

const Index = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('Все города');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [newListing, setNewListing] = useState({
    title: '',
    price: '',
    category: '',
    location: '',
    description: ''
  });

  const filteredListings = listings.filter(listing => {
    const matchesCategory = activeCategory === 'all' || listing.category === activeCategory;
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = selectedCity === 'Все города' || listing.location === selectedCity;
    const matchesPriceFrom = !priceFrom || listing.price >= Number(priceFrom);
    const matchesPriceTo = !priceTo || (listing.price > 0 && listing.price <= Number(priceTo));
    
    return matchesCategory && matchesSearch && matchesCity && matchesPriceFrom && matchesPriceTo;
  });

  const handleSubmitListing = () => {
    setIsDialogOpen(false);
    setNewListing({ title: '', price: '', category: '', location: '', description: '' });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="hidden lg:block w-64 shrink-0">
        <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </aside>

      <main className="flex-1 overflow-y-auto">
        <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="lg:hidden">
                    <Icon name="Menu" size={20} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64">
                  <Sidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                </SheetContent>
              </Sheet>

              <div className="flex-1 max-w-xl">
                <div className="relative">
                  <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Поиск объявлений..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <Button 
                variant="ghost" 
                size="icon" 
                className="hidden sm:flex"
                onClick={() => {
                  const isAuth = localStorage.getItem('isAuthenticated');
                  navigate(isAuth ? '/profile' : '/auth');
                }}
              >
                <Icon name="User" size={20} />
              </Button>

              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="hidden sm:flex">
                    <Icon name="Plus" size={18} className="mr-2" />
                    Разместить
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Разместить объявление</DialogTitle>
                    <DialogDescription>
                      Заполните информацию о вашем объявлении
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="title">Название</Label>
                      <Input
                        id="title"
                        placeholder="Например: Toyota Camry 2020"
                        value={newListing.title}
                        onChange={(e) => setNewListing({...newListing, title: e.target.value})}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="category">Категория</Label>
                      <Select value={newListing.category} onValueChange={(value) => setNewListing({...newListing, category: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.filter(c => c.id !== 'all').map(cat => (
                            <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="price">Цена (₽)</Label>
                        <Input
                          id="price"
                          type="number"
                          placeholder="0"
                          value={newListing.price}
                          onChange={(e) => setNewListing({...newListing, price: e.target.value})}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="location">Город</Label>
                        <Select value={newListing.location} onValueChange={(value) => setNewListing({...newListing, location: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите город" />
                          </SelectTrigger>
                          <SelectContent>
                            {cities.filter(c => c !== 'Все города').map(city => (
                              <SelectItem key={city} value={city}>{city}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="description">Описание</Label>
                      <Textarea
                        id="description"
                        placeholder="Расскажите подробнее о вашем предложении..."
                        rows={4}
                        value={newListing.description}
                        onChange={(e) => setNewListing({...newListing, description: e.target.value})}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Отмена
                    </Button>
                    <Button onClick={handleSubmitListing}>
                      Опубликовать
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          
          <div className="lg:hidden border-b bg-background">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 px-4 py-3 min-w-max">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm transition-colors shrink-0 ${
                      activeCategory === category.id
                        ? 'bg-primary text-primary-foreground font-medium'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    <Icon name={category.icon as any} size={16} />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <section className="mb-12">
            <Card className="overflow-hidden border-2 border-primary/20">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src="https://proday-sosedu.ru/"
                    className="w-full h-full border-0"
                    title="Навигация по сайту"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
                    <h2 className="text-2xl font-bold text-white mb-2">Оригинальный сайт ПРОДАЙ СОСЕДУ</h2>
                    <p className="text-white/90">Попробуйте новый современный интерфейс</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <div className="flex items-start justify-between mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-bold">
                  {categories.find(c => c.id === activeCategory)?.name || 'Все объявления'}
                </h2>
                <p className="text-muted-foreground mt-1">
                  Найдено {filteredListings.length} {filteredListings.length === 1 ? 'объявление' : 'объявлений'}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="shrink-0"
              >
                <Icon name="Filter" size={16} className="mr-2" />
                Фильтры
              </Button>
            </div>

            {showFilters && (
              <Card className="mb-6 p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Город</Label>
                    <Select value={selectedCity} onValueChange={setSelectedCity}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {cities.map(city => (
                          <SelectItem key={city} value={city}>{city}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Цена от (₽)</Label>
                    <Input
                      type="number"
                      placeholder="0"
                      value={priceFrom}
                      onChange={(e) => setPriceFrom(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Цена до (₽)</Label>
                    <Input
                      type="number"
                      placeholder="∞"
                      value={priceTo}
                      onChange={(e) => setPriceTo(e.target.value)}
                    />
                  </div>
                </div>
              </Card>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredListings.map((listing) => (
                <Card 
                  key={listing.id} 
                  className="group hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/listing/${listing.id}`)}
                >
                  <CardHeader className="p-0">
                    <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg line-clamp-1">{listing.title}</CardTitle>
                    </div>
                    <CardDescription className="flex items-center gap-2 mb-3">
                      <Icon name="MapPin" size={14} />
                      {listing.location}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {listing.price === 0 ? 'Договорная' : `${listing.price.toLocaleString()} ₽`}
                      </span>
                      <Badge variant="secondary">
                        {categories.find(c => c.id === listing.category)?.name}
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="outline" className="w-full">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Написать
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;