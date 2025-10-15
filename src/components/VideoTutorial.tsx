import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import Icon from '@/components/ui/icon';

const VideoTutorial = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all">
      <CardContent className="p-0 relative">
        <div className="relative aspect-video bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
          {!isPlaying ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl text-center">
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-white/30 rounded-full">
                  <Icon name="Play" size={40} className="ml-1" />
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Как пользоваться сайтом?
                </h2>
                <p className="text-lg text-white/90 mb-6">
                  Простой видео-гид: регистрация → добавление объявления → публикация
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-white/80">
                  <span className="flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    2 минуты
                  </span>
                  <span className="flex items-center gap-2">
                    <Icon name="Subtitles" size={16} />
                    С субтитрами
                  </span>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-xl mb-1">Видео-инструкция</h3>
                    <p className="text-white/80 text-sm">Узнайте, как быстро разместить объявление</p>
                  </div>
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
                  >
                    <Icon name="Play" size={20} />
                    Смотреть
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <div className="text-center text-white space-y-6 p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
                    <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Регистрация</h3>
                      <p className="text-sm text-white/80">Нажмите на иконку профиля → Введите имя и email → Создайте пароль</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
                    <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Добавление объявления</h3>
                      <p className="text-sm text-white/80">Кликните "Разместить" → Заполните форму → Загрузите фото → Выберите категорию</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-left">
                    <div className="bg-pink-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Публикация</h3>
                      <p className="text-sm text-white/80">Проверьте данные → Нажмите "Опубликовать" → Ваше объявление в сети!</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="text-white/60 hover:text-white text-sm flex items-center gap-2 mx-auto"
                  >
                    <Icon name="X" size={16} />
                    Закрыть
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoTutorial;
