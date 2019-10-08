// получить canvas
const canvas = document.querySelector(".custom");

// указать контекст для canvas и присвоить в переменную
let context = canvas.getContext("2d");

// даёт возможность разделять элементы в canvas
context.beginPath();

// задать линии цвет
context.strokeStyle = "red";
// толщина линии
context.lineWidth = "1";
// указать координаты начала линии
context.moveTo(100, 50);
// указать координаты конца линии
context.lineTo(150, 150);
// нарисовать линию
context.stroke();

// рисование можно продолжить, задав коордианты конца новой линии
context.lineTo(250, 100);
context.stroke();


// третья линия
// даёт возможность разделять элементы в canvas
context.beginPath();
context.moveTo(250, 100);
context.lineTo(300, 150);
context.strokeStyle = "blue";
context.lineWidth = "3"
context.stroke()

// четвёртая линия
context.beginPath();
context.moveTo(300, 100);
context.lineTo(350, 100);
context.strokeStyle = "green";
context.lineWidth = 10;

// округлить концы линии удобно, когда линии нужно друг сдругом соединять | так как они жёстко обрубаются по-умолчанию
context.lineCap = "round"; // опционально

context.lineTo(350, 150);

context.stroke();

// сотрём всё
context.clearRect(0, 0, 400, 200);

// новая фигура - треугольник
context.beginPath();
context.moveTo(50, 150);
context.lineTo(150, 50);
context.lineTo(250, 150);
// Нижняя грань фигуры
//context.lineTo(50, 150);
context.strokeStyle = "green";
context.lineCap = "round";
context.lineWidth = "2";

// ещё можно и так замкнуть фигуру
context.closePath();

context.stroke();

// заливка
context.fillStyle = "orange";
context.fill();