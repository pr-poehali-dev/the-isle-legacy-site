import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Skull" className="text-amber-500" size={32} />
              <h1 className="text-2xl font-bold text-amber-500">
                The Isle Legacy
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-amber-500 transition-colors">
                Главная
              </a>
              <a
                href="#news"
                className="hover:text-amber-500 transition-colors"
              >
                Новости
              </a>
              <a
                href="#shop"
                className="hover:text-amber-500 transition-colors"
              >
                Товары
              </a>
              <a
                href="#community"
                className="hover:text-amber-500 transition-colors"
              >
                Сообщество
              </a>
              <a
                href="#rules"
                className="hover:text-amber-500 transition-colors"
              >
                Правила
              </a>
            </nav>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              <Icon name="LogIn" className="mr-2" size={16} />
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage:
              "url('/img/f9e66e54-14e7-47a8-9b01-48de86cec845.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-900" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            THE ISLE
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            LEGACY
          </h3>
          <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-2xl mx-auto">
            Выживай в мире доисторических хищников. Создай свой клан и покори
            остров динозавров.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Играть сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white px-8 py-4 text-lg"
            >
              <Icon name="Users" className="mr-2" size={20} />
              Присоединиться к серверу
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-500">
            <Icon name="Newspaper" className="inline mr-3" size={36} />
            Последние новости
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-900 border-slate-700 hover:border-amber-500 transition-all duration-300">
              <CardHeader>
                <Badge className="w-fit bg-green-700 text-white">
                  Обновление
                </Badge>
                <CardTitle className="text-amber-500">
                  Новая карта "Древние земли"
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Исследуйте загадочные руины и откройте новые виды динозавров
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 mb-4">
                  Обновление добавляет огромную новую территорию с уникальными
                  биомами и опасными хищниками.
                </p>
                <Button
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
                >
                  Читать далее
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-700 hover:border-amber-500 transition-all duration-300">
              <CardHeader>
                <Badge className="w-fit bg-blue-700 text-white">Событие</Badge>
                <CardTitle className="text-amber-500">Кланвые войны</CardTitle>
                <CardDescription className="text-slate-300">
                  Сражайтесь за территории и ресурсы в эпическом PvP событии
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 mb-4">
                  Присоединитесь к своему клану и докажите превосходство в битве
                  за контроль над островом.
                </p>
                <Button
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
                >
                  Читать далее
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-700 hover:border-amber-500 transition-all duration-300">
              <CardHeader>
                <Badge className="w-fit bg-purple-700 text-white">Гайд</Badge>
                <CardTitle className="text-amber-500">
                  Руководство по выживанию
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Основные советы для новичков в мире The Isle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 mb-4">
                  Изучите основы охоты, строительства убежищ и взаимодействия с
                  другими игроками.
                </p>
                <Button
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
                >
                  Читать далее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-500">
            <Icon name="ShoppingCart" className="inline mr-3" size={36} />
            Магазин
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-slate-800 border-slate-600 hover:border-green-500 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-green-500 text-center">
                  Премиум аккаунт
                </CardTitle>
                <CardDescription className="text-center text-slate-300">
                  Доступ к эксклюзивным динозаврам
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white mb-4">599₽</div>
                <ul className="text-slate-300 mb-6 space-y-2">
                  <li>• Эксклюзивные скины</li>
                  <li>• Быстрый рост</li>
                  <li>• Приоритетная поддержка</li>
                </ul>
                <Button className="w-full bg-green-700 hover:bg-green-800">
                  Купить
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-600 hover:border-amber-500 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-amber-500 text-center">
                  Альфа-пакет
                </CardTitle>
                <CardDescription className="text-center text-slate-300">
                  Для лидеров стай
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white mb-4">999₽</div>
                <ul className="text-slate-300 mb-6 space-y-2">
                  <li>• Альфа-статус</li>
                  <li>• Уникальные способности</li>
                  <li>• Кланивые бонусы</li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Купить
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-600 hover:border-purple-500 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-purple-500 text-center">
                  Стартовый набор
                </CardTitle>
                <CardDescription className="text-center text-slate-300">
                  Идеально для новичков
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white mb-4">299₽</div>
                <ul className="text-slate-300 mb-6 space-y-2">
                  <li>• Дополнительные слоты</li>
                  <li>• Стартовые ресурсы</li>
                  <li>• Обучающие материалы</li>
                </ul>
                <Button className="w-full bg-purple-700 hover:bg-purple-800">
                  Купить
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-600 hover:border-red-500 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-red-500 text-center">
                  Хищник
                </CardTitle>
                <CardDescription className="text-center text-slate-300">
                  Доминируй на острове
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-white mb-4">1299₽</div>
                <ul className="text-slate-300 mb-6 space-y-2">
                  <li>• Топ-хищники</li>
                  <li>• Эксклюзивные территории</li>
                  <li>• VIP-поддержка</li>
                </ul>
                <Button className="w-full bg-red-700 hover:bg-red-800">
                  Купить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-500">
            <Icon name="Users" className="inline mr-3" size={36} />
            Сообщество
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Топ кланы</h3>
              <div className="space-y-4">
                <Card className="bg-slate-900 border-slate-700 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                        <Icon name="Crown" className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-white">
                          Apex Predators
                        </div>
                        <div className="text-slate-400">45 участников</div>
                      </div>
                    </div>
                    <Badge className="bg-amber-600 text-white">Лидер</Badge>
                  </div>
                </Card>

                <Card className="bg-slate-900 border-slate-700 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
                        <Icon name="Trees" className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-white">
                          Forest Guardians
                        </div>
                        <div className="text-slate-400">38 участников</div>
                      </div>
                    </div>
                    <Badge className="bg-green-600 text-white">Элита</Badge>
                  </div>
                </Card>

                <Card className="bg-slate-900 border-slate-700 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
                        <Icon name="Zap" className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-white">Blood Pack</div>
                        <div className="text-slate-400">32 участника</div>
                      </div>
                    </div>
                    <Badge className="bg-red-600 text-white">Агрессивный</Badge>
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Статистика сервера
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-slate-900 border-slate-700 p-6 text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">
                    1,247
                  </div>
                  <div className="text-slate-400">Активных игроков</div>
                </Card>
                <Card className="bg-slate-900 border-slate-700 p-6 text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-2">
                    89
                  </div>
                  <div className="text-slate-400">Кланов</div>
                </Card>
                <Card className="bg-slate-900 border-slate-700 p-6 text-center">
                  <div className="text-3xl font-bold text-purple-500 mb-2">
                    156
                  </div>
                  <div className="text-slate-400">Онлайн сейчас</div>
                </Card>
                <Card className="bg-slate-900 border-slate-700 p-6 text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">
                    24/7
                  </div>
                  <div className="text-slate-400">Аптайм</div>
                </Card>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4 text-white">
                  Социальные сети
                </h4>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <Icon name="MessageSquare" className="mr-2" size={16} />
                    Discord
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <Icon name="Users" className="mr-2" size={16} />
                    Telegram
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <Icon name="Youtube" className="mr-2" size={16} />
                    YouTube
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="rules" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-500">
            <Icon name="Shield" className="inline mr-3" size={36} />
            Правила проекта
          </h2>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-slate-800 border-slate-700">
                <TabsTrigger
                  value="general"
                  className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                >
                  Общие правила
                </TabsTrigger>
                <TabsTrigger
                  value="gameplay"
                  className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                >
                  Игровой процесс
                </TabsTrigger>
                <TabsTrigger
                  value="clans"
                  className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                >
                  Кланы
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="mt-8">
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <div className="space-y-4 text-slate-300">
                      <div className="flex items-start space-x-3">
                        <Icon
                          name="Check"
                          className="text-green-500 mt-1 flex-shrink-0"
                          size={16}
                        />
                        <div>
                          <strong className="text-white">
                            Уважение к игрокам:
                          </strong>{" "}
                          Запрещены оскорбления, угрозы и токсичное поведение
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon
                          name="Check"
                          className="text-green-500 mt-1 flex-shrink-0"
                          size={16}
                        />
                        <div>
                          <strong className="text-white">Честная игра:</strong>{" "}
                          Использование читов, багов и эксплойтов строго
                          запрещено
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon
                          name="Check"
                          className="text-green-500 mt-1 flex-shrink-0"
                          size={16}
                        />
                        <div>
                          <strong className="text-white">
                            Соблюдение ролевой игры:
                          </strong>{" "}
                          Играйте в рамках выбранного динозавра
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon
                          name="Check"
                          className="text-green-500 mt-1 flex-shrink-0"
                          size={16}
                        />
                        <div>
                          <strong className="text-white">
                            Запрет на спам:
                          </strong>{" "}
                          Не флудите в чат и не злоупотребляйте голосовой связью
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gameplay" className="mt-8">
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <div className="space-y-4 text-slate-300">
                      <div className="flex items-start space-x-3">
                        <Icon
                          name="Sword"
                          className="text-red-500 mt-1 flex-shrink-0"
                          size={16}
                        />
                        <div>
                          <strong className="text-white">PvP правила:</strong>{" "}
                          Разрешено только в специальных зонах и по взаимному
                          согласию
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon
                          name="Users"
                          className="text-blue-500 mt-1 flex-shrink-0"
                          size={16}
                        />
                        <div>
                          <strong className="text-white">
                            Групповая игра:
                          </strong>{" "}
                          Максимум 6 игроков в одной стае
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon
                          name="MapPin"
                          className="text-purple-500 mt-1 flex-shrink-0"
                          size={16}
                        />
                        <div>
                          <strong className="text-white">Территории:</strong>{" "}
                          Уважайте границы других игроков и кланов
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon
                          name="Timer"
                          className="text-orange-500 mt-1 flex-shrink-0"
                          size={16}
                        />
                        <div>
                          <strong className="text-white">Время роста:</strong>{" "}
                          Не прерывайте процесс роста других игроков
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="clans" className="mt-8">
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-6">
                    <div className="space-y-4 text-slate-300">
                      <div className="flex items-start space-x-3">
                        <Icon
                          name="Crown"
                          className="text-amber-500 mt-1 flex-shrink-0"
                          size={16}
                        />
                        <div>
                          <strong className="text-white">Лидерство:</strong>{" "}
                          Лидер клана несет ответственность за действия
                          участников
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon
                          name="Shield"
                          className="text-green-500 mt-1 flex-shrink-0"
                          size={16}
                        />
                        <div>
                          <strong className="text-white">Альянсы:</strong>{" "}
                          Разрешены временные союзы между кланами
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon
                          name="Zap"
                          className="text-red-500 mt-1 flex-shrink-0"
                          size={16}
                        />
                        <div>
                          <strong className="text-white">Войны кланов:</strong>{" "}
                          Только с предварительным объявлением
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon
                          name="UserPlus"
                          className="text-blue-500 mt-1 flex-shrink-0"
                          size={16}
                        />
                        <div>
                          <strong className="text-white">Вступление:</strong>{" "}
                          Каждый клан устанавливает свои требования
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Skull" className="text-amber-500" size={24} />
                <h3 className="text-xl font-bold text-amber-500">
                  The Isle Legacy
                </h3>
              </div>
              <p className="text-slate-400">
                Переживи эпоху динозавров. Выживай, охотись и властвуй в мире
                первобытных хищников.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Игра</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Скачать
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Системные требования
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Обновления
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Сообщество
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Форум
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Поддержка
              </h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Помощь
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Баг-репорты
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-500 transition-colors"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 The Isle Legacy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
