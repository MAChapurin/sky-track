# ✈️ Sky Track

**Sky Track** — это веб-приложение для визуального отслеживания авиарейсов на интерактивной карте.  
Позволяет видеть положение самолётов, детали рейса и взаимодействовать с картой в реальном времени.

![Sky Track Screenshot](/screen-1.png)

---

## 🚀 Возможности

- Отображение маршрутов самолётов на карте
- Смена темы (светлая/тёмная)
- Кликабельные маркеры с интерактивными действиями
- Поиск и фильтрация по авиакомпаниям
- Сохранение избранных рейсов
- Прогресс перемещения самолёта по маршруту

---

## 🛠️ Технологии

| Технология                                                       | Назначение                               |
| ---------------------------------------------------------------- | ---------------------------------------- |
| [React 19](https://react.dev/)                                   | UI библиотека                            |
| [Vite](https://vitejs.dev/)                                      | Быстрый билд/разработка проекта          |
| [Redux Toolkit](https://redux-toolkit.js.org/)                   | Состояние приложения                     |
| [Redux Persist](https://github.com/rt2zz/redux-persist)          | Хранение избранных рейсов в localStorage |
| [React Leaflet](https://react-leaflet.js.org/)                   | Работа с картами и маркерами             |
| [Tailwind CSS 4](https://tailwindcss.com/)                       | Адаптивная стилизация и темы             |
| [TypeScript](https://www.typescriptlang.org/)                    | Статическая типизация                    |
| [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/) | Автоматическая проверка и форматирование |

---

## 🗂 Структура проекта

src/
├── entities/ # Redux slices + типы сущностей
├── features/ # Изолированные фичи (favorites, theme switcher и т.д.)
├── shared/ # Общие утилиты, хуки, стили
├── app/ # Конфигурация хранилища, маршруты, глобальные обёртки
├── pages/ # Страницы
├── widgets/ # Большие UI-блоки с логикой
└── public/
└── screen-1.png # Скриншот для README

## 📦 Установка

```bash
git clone https://github.com/your-username/sky-track.git
cd sky-track
npm install
npm run dev



```
