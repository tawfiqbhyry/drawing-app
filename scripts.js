const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const addBtn = document.getElementById("increase");
const decBtn = document.getElementById("decrease");
const toolBox = document.querySelector(".tootlbox");
const sizeEL = document.getElementById("size");
const clearCanvas = document.querySelector(".clear-canvas");
const colorEL = document.getElementById("color");

let size = 1;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;

canvas.addEventListener("mousemove", (event) => {
  if (isPressed) {
    const x2 = event.offsetX;
    const y2 = event.offsetY;

    //drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

canvas.addEventListener("mousedown", (event) => {
  isPressed = true;
  x = event.offsetX;
  y = event.offsetY;
});

canvas.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = size;
  ctx.strokeStyle = color;
  ctx.stroke();
}

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.strokeStyle = color;
  ctx.stroke();
}

window.addEventListener("resize", () => {
  console.log(canvas.width);
  if (window.innerWidth < 762 && window.innerWidth > 650) {
    canvas.setAttribute("width", "600px");
    canvas.setAttribute("height", "600px");
    toolBox.style.width = "600px";
    clearCanvas.style.width = "70%";
  } else if (window.innerWidth > 762) {
    canvas.setAttribute("width", "800px");
    canvas.setAttribute("height", "800px");
    toolBox.style.width = "800px";
    clearCanvas.style.width = "50%";
  } else if (window.innerWidth < 655) {
    canvas.setAttribute("width", `${window.innerWidth - 50}px`);
    canvas.setAttribute("height", canvas.width);
    toolBox.style.width = `${window.innerWidth - 50}px`;
    clearCanvas.style.width = "90%";
  }
});

addBtn.addEventListener("click", () => {
  size += 1;
  if (size > 50) {
    size = 50;
  }
  sizeEL.innerHTML = size;
});

decBtn.addEventListener("click", () => {
  size -= 1;
  if (size < 1) {
    size = 1;
  }
  sizeEL.innerHTML = size;
});

clearCanvas.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorEL.addEventListener("change", (event) => {
  color = event.target.value;
});
