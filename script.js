// Находим canvas
let canvas = document.querySelector(".canvas");

// опредили соотношение сторон canvas
var heightRatio = 1;

// зададим контекст
let context = canvas.getContext("2d");

// Получим ширину холста
var w = canvas.width;

// Получим высоту холста из отношения 1 к 1
var h = canvas.height = canvas.width * heightRatio;
/*var h = canvas.height;*/

// здесь можно задать скорость движения частицы по орбите
var dd = 0.4;

// Угол вращения первого шара
var angle = 50;

// Угол вращения второго шара
var angleTwo = 30;

// Угол вращения тертьего шара
var angleThree = -200;

// Точка x для орбиты
/*var cx = 335;*/
var cx = 150;

// Точка y для орбиты
/*var cy = 335;*/
var cy = 150;

// Радиус орбиты
var radius = 141;

// Стили
context.strokeStyle = "#B5BBC9";

// Функция отрисовывает первый шар
function drawOne(x, y, xTwo, yTwo, xThree, yThree) {
    // очистить холст
    context.clearRect(0, 0, w, h);

    // Отрисовать первый шар
    context.beginPath();
    context.arc(x, y, 9, 0, Math.PI * 2, false);
    context.fillStyle = "#0ED0FA";
    context.fill();
    context.closePath();

    // Отрисовать второй шар
    context.beginPath();
    context.arc(xTwo, yTwo, 9, 0, Math.PI * 2, false);
    context.fillStyle = "#0ED0FA";
    context.fill();
    context.closePath();

    // Отрисовать третий шар
    context.beginPath();
    context.arc(xThree, yThree, 9, 0, Math.PI * 2, false);
    context.fillStyle = "#0ED0FA";
    context.fill();
    context.closePath();
};

// 60 кадров в секунду
var fps = 60;

// https://developer.mozilla.org/ru/docs/DOM/window.requestAnimationFrame - вроде как, кроссбраузерно
window.requestAnimFrame = (function (callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / fps);
    };
})();

//
function animate() {
    setTimeout(function () {
        requestAnimFrame(animate);

        // увеличить угол поворота для первого шара
        angle += Math.acos(1 - Math.pow(dd / radius, 2) / 2);

        // увеличить угол поворота для второго шара
        angleTwo += Math.acos(1 - Math.pow(dd / radius, 2) / 2);

        // увеличить угол поворота для второго шара
        angleThree += Math.acos(1 - Math.pow(dd / radius, 2) / 2);

        // рассчитать новые ball.x / ball.y
        var newX = cx + radius * Math.cos(angle);
        var newY = cy + radius * Math.sin(angle);

        var newXTwo = cx + radius * Math.cos(angleTwo);
        var newYTwo = cy + radius * Math.sin(angleTwo);

        var newXThree = cx + radius * Math.cos(angleThree);
        var newYThree = cy + radius * Math.sin(angleThree);


        // draw
        drawOne(newX, newY, newXTwo, newYTwo, newXThree, newYThree);

        // нарисуем орбиту для шаров
        context.beginPath();
        context.arc(cx, cy, radius, 0, Math.PI * 2, false);

        // Для z-index эфекта
        context.globalCompositeOperation = "destination-over";
        context.lineWidth = "0.8";
        context.closePath();
        context.stroke();
        context.closePath();

        /*Фон слайдера*/
        context.beginPath();
        context.arc(cx, cy, 120, 0, Math.PI * 2, false);

        // тень второй окружности START по сss box-shadow элемента в макете
        //context.shadowColor = "rgba(11,106,248,0.5)"; // цвет
        //context.shadowBlur = "100"; // Степень размытия тени
        //context.shadowOffsetX = "0"; // Смещение по оси x
        //context.shadowOffsetY = "2"; // Смещение по оси y
        // тень второй окружности END

        // заливка окружности START
        let gradient = context.createLinearGradient(0, 850, 0, 0)
        gradient.addColorStop(1, "#0ED0FA");
        gradient.addColorStop(0.1, "#5530EA");
        context.fillStyle = gradient;
        context.fill();
        // заливка второй окружности END
        context.closePath();

    }, 1000 / fps);
}

animate();