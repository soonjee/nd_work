// #2.5 array 배열
// array의 규칙은 시작과 끝에 [ ] 를 사용해야 함
// array는 0부터 시작
// array의 목적 : variable 안의 데이터의 list를 가지는 것
// push 배열 끝에 추가하는 기능

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// 아이템으로부터 배열 받아오기
console.log(daysOfWeek);

// array안에 요일 더 추가해보기
daysOfWeek.push("sun");
console.log(daysOfWeek);

// 배열 안 데이터 추가도 가능
daysOfWeek[2] = "vacation"
console.log(daysOfWeek);

// push로 배열 끝 데이터 추가
daysOfWeek.push("plus");
console.log(daysOfWeek);