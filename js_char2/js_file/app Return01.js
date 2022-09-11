// 계산기 2022.09.11
// #2.11 consol.log 대신 Returns 을 사용해 function값 불러오기

const calculator = {
    add : function(a, b) {
        return a + b;
    },
    minus : function(a, b) {
        return a - b;
    },
    divide : function(a, b) {
        return a / b;
    },
    multiply : function(a, b) {
        return a * b;
    },
    powerof : function(a, b) {
        return a**b;
    },
};

const addResult = calculator.add(2, 3);
const minusResult = calculator.minus(addResult, 10);
const divideResult = calculator.divide(10, minusResult);
const multiplyResult = calculator.multiply( divideResult, addResult);
const powerofResult = calculator.powerof(divideResult, multiplyResult);