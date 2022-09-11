// 계산기 2022.09.11

const calculator = {
    add : function(a, b) {
        console.log(a + b);
    },
    minus : function(a, b) {
        console.log(a - b);
    },
    divide : function(a, b) {
        console.log(a / b);
    },
    multiply : function(a, b) {
        console.log(a*b);
    },
    powerof : function(a, b) {
        console.log(a**b);
    }
};

calculator.add(1, 2);
calculator.minus(1, 2);
calculator.divide(1, 2);
calculator.multiply(1, 2);
calculator.powerof(1, 2);