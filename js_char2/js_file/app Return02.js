// 계산기 2022.09.11
// #2.11 consol.log 대신 Returns 을 사용해 function값 불러오기(2)
// return 시 코드가 끝나버려 그 뒤의 코드들은 실행 X.

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
