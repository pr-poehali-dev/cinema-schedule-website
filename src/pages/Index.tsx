import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Movie {
  id: number;
  title: string;
  subtitle: string;
  ageRating: string;
  showtimes: string[];
  poster: string;
  trailer?: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Супермен",
    subtitle: "предсеанс. обсл. & Куда уходят папы?",
    ageRating: "12+",
    showtimes: ["11:25", "14:50", "15:55", "18:15", "19:55", "21:50", "23:30"],
    poster: "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000370/150373_68838c0648f575.63712540.webp",
    trailer: "https://media.cinemabox.team/net/c5/movies/1000000000370/trailer-supermen-predseans-obsl-kuda-ukhodyat-papy.mp4"
  },
  {
    id: 2,
    title: "Мир Юрского периода: Возрождение",
    subtitle: "предсеанс. обсл. & Куда уходят папы?",
    ageRating: "12+",
    showtimes: ["12:30", "15:55", "17:00", "18:10", "19:15", "21:30"],
    poster: "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000372/150382_68839a177f0045.13347366.webp",
    trailer: "https://media.cinemabox.team/net/c5/movies/1000000000372/trailer-mir-yurskogo-perioda-vozrozhdenie-predseans-obsl-kuda-ukhodyat-papy.mp4"
  },
  {
    id: 3,
    title: "Как приручить дракона",
    subtitle: "предсеанс. обсл. & Куда уходят папы?",
    ageRating: "12+",
    showtimes: ["15:30", "18:05", "19:40", "21:25", "22:10"],
    poster: "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000363/150386_68839a197b9355.14320741.webp",
    trailer: "https://media.cinemabox.team/net/c5/movies/1000000000363/trailer-kak-priruchit-drakona-predseans-obsl-kuda-ukhodyat-papy.mp4"
  },
  {
    id: 4,
    title: "Смурфики в кино",
    subtitle: "предсеанс. обсл. & Куда уходят папы?",
    ageRating: "6+",
    showtimes: ["10:15", "11:15", "12:25", "13:30"],
    poster: "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000371/150379_68839a15253bc7.75263215.webp"
  },
  {
    id: 5,
    title: "Формула 1",
    subtitle: "предсеанс. обсл. & Куда уходят папы?",
    ageRating: "16+",
    showtimes: ["12:40", "17:20", "22:15"],
    poster: "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000369/150390_68839a1b4fbc62.23466555.webp",
    trailer: "https://media.cinemabox.team/net/c5/movies/1000000000369/trailer-formula-1-predseans-obsl-kuda-ukhodyat-papy.mp4"
  },
  {
    id: 6,
    title: "Лило и Стич",
    subtitle: "предсеанс. обсл. & Куда уходят папы?",
    ageRating: "6+",
    showtimes: ["12:35", "15:00", "20:15"],
    poster: "https://kinosfera-baltika.ru/media_files/movies/vertical_poster_preview/1000000000354/150394_68839a1d5305c2.63377399.webp",
    trailer: "https://media.cinemabox.team/net/c5/movies/1000000000354/trailer-lilo-i-stich-predseans-obsl-kuda-ukhodyat-papy.mp4"
  },
  {
    id: 7,
    title: "Дюна 2",
    subtitle: "предсеанс. обсл. & Куда уходят папы?",
    ageRating: "12+",
    showtimes: ["19:30", "22:15"],
    poster: "https://i.postimg.cc/63mKWsC8/7.png"
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('movies');

  const MovieCard = ({ movie }: { movie: Movie }) => (
    <Card className="bg-gradient-to-b from-gray-800 to-black border-gray-700 overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="relative group cursor-pointer">
        <img 
          src={movie.poster} 
          alt={movie.title}
          className="w-full h-96 object-cover"
        />
        <Badge className="absolute top-4 left-4 bg-orange-500 text-white font-bold">
          {movie.ageRating}
        </Badge>
        {movie.trailer && (
          <Dialog>
            <DialogTrigger asChild>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-orange-500 rounded-full p-4 hover:bg-orange-600 transition-colors">
                  <Icon name="Play" size={32} className="text-black ml-1" />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full p-0 bg-black border-gray-700">
              <div className="relative pb-[56.25%] h-0">
                <video 
                  controls 
                  autoPlay
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={movie.trailer}
                >
                  Ваш браузер не поддерживает видео.
                </video>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-white text-xl font-bold mb-2">{movie.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{movie.subtitle}</p>
        <div className="flex flex-wrap gap-2">
          {movie.showtimes.map((time, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black"
            >
              {time}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 bg-black/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-3xl font-bold text-orange-500">КИНО</div>
              <div className="text-3xl font-bold text-white">СФЕРА</div>
              <Badge className="bg-orange-500 text-black font-bold">IMAX</Badge>
            </div>
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'movies', label: 'Фильмы' },
                { id: 'promotions', label: 'Акции' },
                { id: 'imax', label: 'IMAX' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-2 rounded transition-colors ${
                    activeSection === item.id
                      ? 'text-orange-500 border-b-2 border-orange-500'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Movies Section */}
      {activeSection === 'movies' && (
        <main className="container mx-auto px-6 py-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-white">СЕЙЧАС В </span>
              <span className="text-orange-500">КИНО</span>
            </h1>
            <p className="text-gray-400 text-lg">Погрузитесь в мир кинематографа с технологией IMAX</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </main>
      )}

      {/* Promotions Section */}
      {activeSection === 'promotions' && (
        <main className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">
            <span className="text-orange-500">АКЦИИ</span> И ПРЕДЛОЖЕНИЯ
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-orange-500 to-red-600 border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">🎬 Студенческие билеты</h3>
                <p className="text-lg mb-4">Скидка 50% для студентов в будние дни до 17:00</p>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-purple-600 to-blue-600 border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">🍿 Комбо предложения</h3>
                <p className="text-lg mb-4">Попкорн + напиток + билет со скидкой 30%</p>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      )}

      {/* IMAX Section */}
      {activeSection === 'imax' && (
        <main className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">
            ТЕХНОЛОГИЯ <span className="text-orange-500">IMAX</span>
          </h1>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-800 to-black border-gray-700 mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-500">Что такое IMAX?</h3>
                <p className="text-lg text-gray-300 mb-6">
                  IMAX – это революционная кинотехнология, которая погружает зрителей в мир фильма с помощью 
                  кристально чистого изображения, мощного звука и огромных экранов.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Icon name="Eye" size={48} className="mx-auto mb-4 text-orange-500" />
                    <h4 className="font-bold mb-2">Визуальный опыт</h4>
                    <p className="text-sm text-gray-400">На 40% больше изображения</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Volume2" size={48} className="mx-auto mb-4 text-orange-500" />
                    <h4 className="font-bold mb-2">Звук</h4>
                    <p className="text-sm text-gray-400">12-канальная система</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Monitor" size={48} className="mx-auto mb-4 text-orange-500" />
                    <h4 className="font-bold mb-2">Экран</h4>
                    <p className="text-sm text-gray-400">Высота до потолка</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      )}

      {/* Contacts Section */}
      {activeSection === 'contacts' && (
        <main className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">
            <span className="text-orange-500">КОНТАКТЫ</span>
          </h1>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-gray-800 to-black border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-orange-500">Информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-orange-500" />
                    <span>ул. Кинематографа, 123, Москва</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-orange-500" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-orange-500" />
                    <span>info@kinosfera-imax.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-orange-500" />
                    <span>Ежедневно с 10:00 до 00:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-gray-800 to-black border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-orange-500">Как добраться</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="Train" size={20} className="text-orange-500 mt-1" />
                    <div>
                      <div className="font-semibold">Метро</div>
                      <div className="text-gray-400">Станция "Кинематографическая", выход 2</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Car" size={20} className="text-orange-500 mt-1" />
                    <div>
                      <div className="font-semibold">Парковка</div>
                      <div className="text-gray-400">Подземный паркинг, 500 мест</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Bus" size={20} className="text-orange-500 mt-1" />
                    <div>
                      <div className="font-semibold">Автобус</div>
                      <div className="text-gray-400">Маршруты 123, 456, остановка "Киноцентр"</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="text-2xl font-bold text-orange-500">КИНО</div>
              <div className="text-2xl font-bold text-white">СФЕРА</div>
            </div>
            <div className="text-gray-400">
              © 2024 КиноСфера IMAX. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}