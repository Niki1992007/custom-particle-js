// получить canvas
const canvas = document.querySelector(".custom");

// указать контекст для canvas и присвоить в переменную
let context = canvas.getContext("2d");

// цвет заливки
context.fillStyle = "red";
// метод рисует прямоугольник для контекста canvas
context.fillRect(100, 50, 150, 75);


// ещё прямоугольник
context.fillStyle = "blue";
context.fillRect(150, 100, 100, 50);

// стереть предъидущие фигуры контекста | очистить canvas
context.clearRect(0, 0, 400, 200);


// обозначить прямоугольник, но не залить
context.rect(50, 10, 100, 100);
// цвет обводки
context.strokeStyle = "green";
// задать ширину обводки
context.lineWidth = "10";
// Атрибут обводки определяет цвет контура в данном графическом элементе | по-умолчанию серый или черный цвет обводки
context.stroke();
// установить цвет заливк
context.fillStyle = "orange";
// залить фигуру
context.fill();

//console.log(context);