let img1 = document.querySelector("#p0");
let btn1 = document.querySelector("#b0");
let img2 = document.querySelector("#p1");
let btn2 = document.querySelector("#b1");
let img3 = document.querySelector("#p2");
let btn3 = document.querySelector("#b2");
let img4 = document.querySelector("#p3");
let btn4 = document.querySelector("#b3");
let img5 = document.querySelector("#p4");
let btn5 = document.querySelector("#b4");
let img6 = document.querySelector("#p5");
let btn6 = document.querySelector("#b5");
let img7 = document.querySelector("#p6");
let btn7 = document.querySelector("#b6");
let text = document.querySelector("h1");

let health = 0;

btn1.addEventListener("click", function () {
  img1.src = "Assets/0.png";
});

btn2.addEventListener("click", () => {
  img2.src = "Assets/1.png";
});

btn3.addEventListener("click", () => {
  img3.src = "Assets/2.png";
});

btn4.addEventListener("click", () => {
  img4.src = "Assets/3.png";
});

btn5.addEventListener("click", () => {
  img5.src = "Assets/4.png";
});

btn6.addEventListener("click", () => {
  img6.src = "Assets/5.png";
});

btn7.addEventListener("click", () => {
  img7.src = "Assets/6.png";
});

const endGame = function () {
  text.textContent = "Wygrałeś";
};

// if ((health = 3)) {
// endGame();
// }
