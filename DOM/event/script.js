const text = document.querySelector(".text");
const button = document.querySelector(".button");
const input = document.querySelector(".input");

button.addEventListener("click", (event) => {
  text.textContent = "클릭 됨!";
});

button.addEventListener("mouseover", (event) => {
  text.textContent = "버튼 위에 마우스 위에 올라감";
});

input.addEventListener("keyup", (event) => {
  text.textContent = `입력한 키 : ${event.key}`;
});
