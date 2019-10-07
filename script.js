// Видео урок https://www.youtube.com/watch?v=D296M6ilFgM | получилось не так как в оригинале (возможно дело в порядке объявлений функций в коде)

// кол-во точек | Значение можно менять
const NUMBER = 50;
const canvas = document.querySelector("canvas");
// Скорость движения точек
const SPEED = 3;
// Определяет на каком расстоянии между точками появятся линии
const DIST = 75;

// https://developer.mozilla.org/ru/docs/Web/API/HTMLCanvasElement/getContext
const context = canvas.getContext("2d");

// Пусть canvas займёт всю ширину окна
canvas.width = window.innerWidth;

// Пусть canvas займёт всю высоту окна
canvas.height = window.innerHeight;

// Массив точек
const points = [];

// создадим отдельные точки
for (let i = 0; i < NUMBER; i++) {
    // коордиаты объекта
    const point = {
        x: getRandom(0, canvas.width),
        y: getRandom(0, canvas.height),
        // Угол точки | Случано сгенерированый при помощи getRandom()
        angle: getRandom(0, 2 * Math.PI) // Угол от 0 до 360 градусов
    }
    // метод для работы с массивом
    points.push(point);
}

tick();

function tick() {
    // функция рисует холст
    drawBackground();
    // задаёт движение точкам
    movePoints();
    // функция рисует точки на холсте
    drawPoints();
    // функция рисует линии между точками
    drawLines();
    // https://developer.mozilla.org/ru/docs/DOM/window.requestAnimationFrame | вызов функций соотв-т частоте обновления кадров монитора
    requestAnimationFrame(tick);
}


function drawBackground() {
    // Canvas 2D API свойство, залить фигуру цветом
    context.fillStyle = "#000000";

    // Canvas 2D API метод, рисует прямогуольник по заданым параметрам
    // https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/fillRect
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawPoints() {
    // выберем каждый элемент массива
    for (const point of points) {
        context.beginPath();
        // зальём элемент белым
        context.fillStyle = "#ffffff";
        // https://msiter.ru/references/html5-canvas/arc | Метод arc() создает дугу/кривую (используется для создания окружностей или их части)
        context.arc(point.x, point.y, 2, 0, Math.PI * 2);
        // Метод fill() заполняет все элементы массива от начального до конечного индексов
        context.fill();
    }
}

function getRandom(min, max) {
    return min + Math.random() * (max - min + 1);
}

function movePoints() {
    for (const point of points) {
        point.x = point.x + SPEED + Math.cos(point.angle);
        point.y = point.y + SPEED + Math.sin(point.angle);

        if (point.x < 0) {
            point.x = canvas.width + point.x;
        }
        if (point.x > canvas.width) {
            point.x = point.x - canvas.width;
        }
        if (point.y < 0) {
            point.y = canvas.height + point.y;
        }
        if (point.y > canvas.height) {
            point.y = point.y - canvas.height;
        }
    }
}

function drawLines() {
    for (let i = 0; i < NUMBER - 1; i++) {
        for (let j = i + 1; j < NUMBER; j++) {
            const pointA = points[i];
            const pointB = points[j];
            const dist = getDist(pointA, pointB);

            // если расстояние в константе меньше указаной в DIST, то рисуем линию
            if (dist <= DIST) {
                // цвет линии
                context.strokeStyle = "#ffffff";
                // толщина линии
                context.lineWidth = (1 - dist / DIST) ** 1.5;
                // нужно для отрисовки линий, методы Canvas 2D API
                context.moveTo(pointA.x, pointA.y); // передвинуть перо из точки в точку
                context.lineTo(pointB.x, pointB.y);
                context.stroke();
            }
        }
    }
}

// функция ищет расстояние между точками
// ** - возведение в степень
// **0.5 - получить корень по сумме кординат x и y
function getDist(a, b) {
    return ((a.x - b.x) ** 2 + (a.y - b.y) ** 2) ** 0.5;
}