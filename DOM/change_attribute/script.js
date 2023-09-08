const item = document.querySelector("a");
console.log(item);
console.log(item.getAttribute("href"));
item.setAttribute("href", "https://www.naver.com");
console.log(item.getAttribute("href"));
