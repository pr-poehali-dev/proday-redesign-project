import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ads = [
  {
    id: 1,
    image: 'https://cdn.poehali.dev/projects/cf688e9f-c2ff-4376-8a35-970e2e2fa625/files/b4fe426a-883b-481d-92bf-e3665bc77bbc.jpg',
    title: 'Реклама 1',
    link: '#'
  },
  {
    id: 2,
    image: 'https://cdn.poehali.dev/projects/cf688e9f-c2ff-4376-8a35-970e2e2fa625/files/9f22cf17-75cc-49d1-99f5-beb046aeae36.jpg',
    title: 'Реклама премиум услуг',
    link: '#'
  },
  {
    id: 3,
    image: 'https://cdn.poehali.dev/projects/cf688e9f-c2ff-4376-8a35-970e2e2fa625/files/c792cedb-e7d7-4e4b-9ca8-896c29d90ff8.jpg',
    title: 'Специальное предложение',
    link: '#'
  },
  {
    id: 4,
    image: 'https://cdn.poehali.dev/projects/cf688e9f-c2ff-4376-8a35-970e2e2fa625/files/b450bbce-e6e7-4b18-ab4c-a8d6afae731c.jpg',
    title: 'Акция недели',
    link: '#'
  },
  {
    id: 5,
    image: 'https://cdn.poehali.dev/projects/cf688e9f-c2ff-4376-8a35-970e2e2fa625/files/e3cd10ce-857e-4746-9b15-d0c001e78849.jpg',
    title: 'Новинки',
    link: '#'
  }
];

const AdSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slidesToShow = 3;
  const maxIndex = Math.max(0, ads.length - slidesToShow);

  useEffect(() => {
    if (!isAutoPlaying || maxIndex === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative group">
      <div className="overflow-hidden">
        <div 
          className="flex gap-4 transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow + 1.33)}%)` }}
        >
          {ads.map((ad) => (
            <div key={ad.id} className="flex-shrink-0 w-[calc(33.333%-0.67rem)]">
              <Card className="overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
                <CardContent className="p-0">
                  <a href={ad.link} className="block">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={ad.image}
                        alt={ad.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-white font-semibold">{ad.title}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {maxIndex > 0 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/90 hover:bg-background border-2 border-border text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg z-10"
            aria-label="Предыдущий слайд"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/90 hover:bg-background border-2 border-border text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg z-10"
            aria-label="Следующий слайд"
          >
            <Icon name="ChevronRight" size={20} />
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Перейти к группе ${index + 1}`}
              />
            ))}
          </div>

          {isAutoPlaying && (
            <div className="absolute top-2 right-2 bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs flex items-center gap-1">
              <Icon name="Play" size={10} />
              Авто
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdSlider;