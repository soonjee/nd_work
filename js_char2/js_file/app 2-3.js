// #2.3 variable만드는 법 2가지
// const 와 let 그리고 var

// const로 만든 변수값은 절대 바뀌지 않을 값을 할때 사용
// let은 변수값을 수정해야할 때 주로 사용
// 주로 프로그래머들 또한 const를 주사용 하고 있으며 variable을 업데이트
// 하고싶을 때 let을 사용한다 함. 
// var는 어떠한 규칙도 가지고 있지 않고 특정 오류가 발생해도 나타나지 않아
// 불편하고 뭐가 잘못된 건지도 파악이 안되므로 const나 let을 사용하는 것.

const a = 10;
const b = 4;
let myName = "soonji";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);

myName = "Choisoonji";
console.log("your new name is" + myName);