# libS

[![Made by xfaaan](https://img.shields.io/badge/Made%20by-xfaaan-blueviolet)](https://github.com/xfancode)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## Доступные библиотеки

| Библиотека | Описание | Ссылка для подключения |
|------------|----------|------------------------|
| `ls.js` | Работа с localStorage | `https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/ls.js` |
| `avlet.js` | Генерация аватарки из буквы | `https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/avlet.js` |
| `material3.css` | Material3 Design | `https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/material3.css` |
| `oshelper.js` | Характеристики устройства | `https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/oshelper.js` |
| `rounded.css` | Закругление объектов HTML | `https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/rounded.css` |
| `speech.js` | Озвучка | `https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/speech.js` |
| `svgph.js` | SVG-пейзажи | `https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/svgph.js` |
| `xclip.js` | Библиотека для буфера обмена | `https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/xclip.js` |
| `dox.js` | Парсер страницы | `https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/dox.js` |

---

## Как использовать

Просто скопируйте ссылку из таблицы и вставьте в ваш HTML:

```html
<script src="https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/название_библиотеки.js"></script>
<link rel="stylesheet" href="https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/название_библиотеки.css">
```

---

## Описание всех библиотек

### avlet.js
[![libray](https://img.shields.io/badge/Ссылка%20на%20библиотеку-black)](https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/avlet.js)

Создаёт круглый аватар с первой буквой текста и автоматически подобранным цветом фона.

<details>
<summary><b>Особенности</b></summary>
<br>
• Детерминированность — <i><b>одинаковый текст всегда даёт одинаковый аватар.</b></i>

• Автоподбор цвета — <i><b>строка хешируется, из палитры из 10 тёмных оттенков выбирается подходящий.</b></i>

• Работает офлайн — <i><b>никаких внешних API, только canvas.</b></i>

• Гибкий размер — <i><b>размер задаётся вторым параметром.</b></i>

• Корректная обработка пустого текста — <i><b>вернёт аватар со знаком "?".</b></i>
</details>

<details>
<summary><b>Функции</b></summary>
<br>

| Функция | Что делает |
| :--- | :--- |
| `avlet.getImage(text, size = 64)` | Генерирует аватар и возвращает dataURL |
</details>

<details>
<summary><b>Пример</b></summary>
<br>

```js
const avatar = avlet.getImage("Иван", 96);
document.querySelector("#avatar").src = avatar;
```
</details>

---

### dox.js
[![libray](https://img.shields.io/badge/Ссылка%20на%20библиотеку-black)](https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/dox.js)

Парсер страницы. Собирает контент текущей страницы и сохраняет его в текстовый файл.

<details>
<summary><b>Особенности</b></summary>
<br>
• Один вызов — весь контент — <i><b>dox.get() парсит страницу и скачивает результат.</b></i>

• Охват ключевых элементов — <i><b>заголовки, параграфы, ссылки, картинки, кнопки, поля и формы.</b></i>

• Понятный формат — <i><b>каждая строка помечена тегом ([P], [A], [IMG] и т.д.).</b></i>

• Работает без зависимостей — <i><b>только нативный DOM API.</b></i>
</details>

<details>
<summary><b>Функции</b></summary>
<br>

| Функция | Что делает |
| :--- | :--- |
| `dox.get()` | Парсит страницу и скачивает site_analysis.txt |
</details>

<details>
<summary><b>Что собирается</b></summary>
<br>

| Элемент | Формат вывода |
| :--- | :--- |
| Заголовки | `[H1] текст` |
| Параграфы | `[P] текст` |
| Ссылки | `[A] url (текст)` |
| Изображения | `[IMG] src (alt: текст)` |
| Кнопки | `[BUTTON] текст` |
| Поля ввода| `[INPUT] type=... name=... placeholder="..."` |
| Формы | `[FORM] method=... action=...` |
</details>

<details>
<summary><b>Пример</b></summary>
<br>

```js
dox.get();
```
</details>

---

### ls.js
[![libray](https://img.shields.io/badge/Ссылка%20на%20библиотеку-black)](https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/ls.js)

Минималистичный API для работы с localStorage с автосериализацией объектов.

<details>
<summary><b>Особенности</b></summary>
<br>
• Автоматический JSON — <i><b>объекты сохраняются как JSON, строки — как есть.</b></i>

• Чтение с парсингом — <i><b>lsLoad пытается распарсить JSON, а при неудаче возвращает строку.</b></i>

• Короткий API — <i><b>четыре однострочные функции вместо громоздких setItem/getItem.</b></i>

• Простота — <i><b>не нужен импорт, доступно сразу.</b></i>
</details>

<details>
<summary><b>Функции</b></summary>
<br>

| Функция | Что делает |
| :--- | :--- |
| `lsLoad(key)` | Читает значение |
| `lsSave(key, value)` | Сохраняет значение |
| `lsRemove(key)` | Удаляет ключ |
| `lsClear()` | Очищает весь localStorage |
</details>

<details>
<summary><b>Пример</b></summary>
<br>

```js
lsSave('user', { name: 'Иван', age: 25 });
const user = lsLoad('user');
lsRemove('user');
lsClear();
```
</details>

---

### material3.css
[![libray](https://img.shields.io/badge/Ссылка%20на%20библиотеку-black)](https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/material3.css)

Готовый набор компонентов в стиле Material 3: кнопки, контейнеры, карточки, поля ввода, типографика, статусы и бейджи.

<details>
<summary><b>Особенности</b></summary>
<br>
• Единый стиль — <i><b>тёмная тема с фиолетовыми акцентами.</b></i>

• Множество размеров — <i><b>кнопки, контейнеры и карточки имеют варианты small, default, large.</b></i>

• Плавные анимации — <i><b>transition, hover и active эффекты для отзывчивости интерфейса.</b></i>

• Полный набор — <i><b>от кнопок и карточек до статусов, разделителей и бейджей.</b></i>

• Готовые утилиты — <i><b>flex-группы, строки и тулбары для быстрой вёрстки.</b></i>

• Градиентный текст — <i><b>класс material3-gradient-text для акцентных заголовков.</b></i>
</details>

<details>
<summary><b>Классы</b></summary>
<br>

| Группа | Классы |
| :--- | :--- |
| Body | `material3-body` |
| Кнопки | `material3-button`, `-outline`, `-small`, `-large`, `-icon` |
| Контейнеры | `material3-container`, `-sm`, `-lg` |
| Карточки | `material3-card`, `-sm`, `-lg` |
| Поля ввода | `material3-input`, `material3-textarea` |
| Типографика | `material3-title`, `-subtitle`, `-text`, `-text-muted`, `-gradient-text` |
| Раскладка | `material3-group`, `-row`, `-toolbar` |
| Статусы | `material3-status`, `-success`, `-error`, `-warning` |
| Прочее | `material3-divider`, `material3-badge` |
</details>

<details>
<summary><b>Пример</b></summary>
<br>

```html
<div class="material3-body">
  <h1 class="material3-title">Заголовок</h1>
  <p class="material3-text">Описание в стиле Material 3.</p>

  <div class="material3-card">
    <h2 class="material3-subtitle">Карточка</h2>
    <input class="material3-input" placeholder="Введите текст...">
    <div class="material3-toolbar">
      <button class="material3-button">Основная</button>
      <button class="material3-button material3-button-outline">Вторичная</button>
      <button class="material3-button material3-button-small">Маленькая</button>
    </div>
  </div>

  <span class="material3-badge">NEW</span>
  <div class="material3-status material3-status-success">Успешно</div>
</div>
```
</details>

---

### oshelper.js
[![libray](https://img.shields.io/badge/Ссылка%20на%20библиотеку-black)](https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/oshelper.js)

Определяет ОС, платформу, характеристики устройства и состояние сети.

<details>
<summary><b>Особенности</b></summary>
<br>
• API — <i><b>использует navigator.userAgentData, если он доступен.</b></i>

• Умные фолбэки — <i><b>при отсутствии API возвращает 'Unknown', не ломается.</b></i>

• Готовый объект — <i><b>getFullInfo() отдаёт всё одним вызовом.</b></i>

• Инкапсуляция — <i><b>весь код обёрнут в IIFE, не засоряет глобальную область.</b></i>
</details>

<details>
<summary><b>Функции</b></summary>
<br>

| Функция | Что возвращает |
| :--- | :--- |
| `oshelper.getUA()` | User-Agent |
| `oshelper.getOS()` | Windows / macOS / Linux / Android / iOS |
| `oshelper.getProduct()` | navigator.product |
| `oshelper.getProcCores()` | Кол-во ядер CPU |
| `oshelper.getRam()` | Объём RAM (ГБ) |
| `oshelper.isMobile()` | Мобильное ли устройство |
| `oshelper.getPlatformString()` | Платформа |
| `oshelper.getLang()` | Язык |
| `oshelper.isOnline()` | Онлайн ли |
| `oshelper.getG()` | Тип соединения (4g, 3g, …) |
| `oshelper.cookie()` | Включены ли cookies |
| `oshelper.getFullInfo()` | Все данные одним объектом |
</details>

<details>
<summary><b>Пример</b></summary>
<br>

```js
console.log(oshelper.getOS());    // "Windows"
console.log(oshelper.isMobile()); // false
console.log(oshelper.getFullInfo());
```
</details>

---

### rounded.css
[![libray](https://img.shields.io/badge/Ссылка%20на%20библиотеку-black)](https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/rounded.css)

Набор утилит для быстрого задания скругления углов на любых элементах.

<details>
<summary><b>Особенности</b></summary>
<br>
• Готовые шкалы — <i><b>от xs (4px) до full (9999px).</b></i>

• Флаг !important — <i><b>перекрывает стили любых компонентов.</b></i>

• Автонасследование — <i><b>дочерние элементы получают border-radius: inherit.</b></i>

• Специальные правила — <i><b>кнопки и .btn всегда получают радиус 40px внутри .rounded-*.</b></i>

• Обрезка контента — <i><b>overflow: hidden гарантирует аккуратный край.</b></i>
</details>

<details>
<summary><b>Классы</b></summary>
<br>

| Класс | Радиус |
| :--- | :--- |
| `.rounded-xs` | 4px |
| `.rounded-sm` | 8px |
| `.rounded-st` | 16px |
| `.rounded-md` | 24px |
| `.rounded-lg` | 32px |
| `.rounded-xl` | 48px |
| `.rounded-full` | 9999px (круг) |
</details>

<details>
<summary><b>Пример</b></summary>
<br>

```html
<div class="rounded-md">
  <img src="photo.jpg" alt="Пример">
</div>

<button class="rounded-full">Круглая кнопка</button>

<div class="rounded-lg">
  <button>Наследует радиус контейнера</button>
</div>
```
</details>

---

### speech.js
[![libray](https://img.shields.io/badge/Ссылка%20на%20библиотеку-black)](https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/speech.js)

Обёртка над встроенным Web Speech API. Русский язык по умолчанию.

<details>
<summary><b>Особенности</b></summary>
<br>
• Автопрогрев — <i><b>обходит баг Chrome, из-за которого первый вызов speak может не сработать.</b></i>

• Автоотмена — <i><b>предыдущая речь прерывается при новом запуске.</b></i>

• Настройки голоса — <i><b>скорость, тон и громкость задаются отдельно.</b></i>

• Чистый API — <i><b>простые функции вместо прямого использования SpeechSynthesisUtterance.</b></i>
</details>

<details>
<summary><b>Функции</b></summary>
<br>

| Функция | Что делает |
| :--- | :--- |
| `speechSetText(text)` | Задать текст для озвучки |
| `speechSetRate(rate)` | Скорость (по умолчанию 1.0) |
| `speechSetPitch(pitch)` | Тон (по умолчанию 1.0) |
| `speechSetVolume(volume)` | Громкость (по умолчанию 1.0) |
| `speechStart()` | Начать озвучку |
| `speechStop()` | Остановить |
| `speechGetText()` | Получить текущий текст |
</details>

<details>
<summary><b>Пример</b></summary>
<br>

```js
speechSetText("Привет, мир!");
speechSetRate(1.2);
speechSetPitch(1.0);
speechSetVolume(0.8);
speechStart();

// ... позже
speechStop();
```
</details>

---

### svgph.js
[![libray](https://img.shields.io/badge/Ссылка%20на%20библиотеку-black)](https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/svgph.js)

Набор готовых векторных иллюстраций 800×600 в виде inline-SVG строк.

<details>
<summary><b>Особенности</b></summary>
<br>
• Ноль зависимостей — <i><b>никаких внешних запросов, картинки всегда под рукой.</b></i>

• Векторная графика — <i><b>масштабируется без потери качества.</b></i>

• ~50 сцен — <i><b>природа, город, архитектура, атмосферные пейзажи.</b></i>

• Простое подключение — <i><b>вставляй через innerHTML.</b></i>
</details>

<details>
<summary><b>Функции</b></summary>
<br>

| Свойство | Что содержит |
| :--- | :--- |
| `photos.<name>` | Строка с SVG-разметкой |
</details>

<details>
<summary><b>Доступные сцены</b></summary>
<br>

| Категория | Названия |
| :--- | :--- |
| Природа | sunset, morning, night, ocean, forest, desert, space, waterfall, rainbow, winter, autumn, cherry, tropic, storm, canyon, island, fog, glacier, volcano, bamboo, lotus, ricefield, reef, geyser, hedge, vineyard, orchard, dinosaur, iceberg, aurora, eclipse, rainbow_falls |
| Город и архитектура | city, venice, future, medieval, lanterns, windmill, fountain, ruins, lighthouse, observatory, dam, quarry, castle, colosseum, bridge, tent, desert_temple, japanese_garden |
</details>

<details>
<summary><b>Пример</b></summary>
<br>

```js
document.querySelector("#pic").innerHTML = photos.sunset;
```
</details>

---

### xclip.js
[![libray](https://img.shields.io/badge/Ссылка%20на%20библиотеку-black)](https://raw.githubusercontent.com/xfancode/libs/refs/heads/main/xclip.js)

Набор быстрых утилит: буфер обмена, дата, localStorage, случайные числа, URL.

<details>
<summary><b>Особенности</b></summary>
<br>
• Chainable — <i><b>xclip.copy(...) возвращает сам объект, можно вызывать цепочкой.</b></i>

• Локализация ru-RU — <i><b>дата и время сразу в привычном формате.</b></i>

• Всё в одном месте — <i><b>копирование, дата, случайные числа, доступ к DOM и localStorage.</b></i>

• Лёгкость — <i><b>ничего лишнего, только самые нужные мелочи.</b></i>
</details>

<details>
<summary><b>Функции</b></summary>
<br>

| Метод | Что делает |
| :--- | :--- |
| `xclip.copy(text)` | Копирует текст в буфер обмена (chainable) |
| `xclip.date(format)` | Дата: 'time', 'full' или обычная |
| `xclip.time()` | Текущее время (ru-RU) |
| `xclip.from(selector)` | Значение/текст элемента |
| `xclip.storage(key)` | Значение из localStorage |
| `xclip.random(min, max)` | Случайное целое число в диапазоне |
| `xclip.url()` | Текущий URL |
| `xclip.title()` | Заголовок страницы |
</details>

<details>
<summary><b>Пример</b></summary>
<br>

```js
xclip.copy("Привет, мир!");
xclip.copy(xclip.url()).copy(xclip.title()); // цепочкой

console.log(xclip.date('full'));   // "21.09.2026, 14:30:00"
console.log(xclip.time());         // "14:30:00"
console.log(xclip.random(1, 100)); // 42
console.log(xclip.from('#login')); // значение input
```
</details>

---

Приятного использования! :)

Связи со мной:

✉️ sz.2506.mail@gmail.com - для идей, предложений

💸 https://donationalerts.com/r/xfan_yt - донатик

💎 https://github.com/xfancode — GitHub
