const item = document.querySelector("#item");
console.log(item); // DOM이 잘 선택됐는 지 확인
console.log(item.textContent); // 선택된 DOM의 textContent에 어떤 값이 들어있는 지 확인
item.textContent = "새로 입력한 문자!";
console.log(item.textContent); // 선택된 DOM의 textContent 값이 잘 바뀌었는 지 확인
