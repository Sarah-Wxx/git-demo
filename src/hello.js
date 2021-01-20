/*
 * @Author: your name
 * @Date: 2020-12-29 11:24:48
 * @LastEditTime: 2020-12-31 15:50:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\hello.ts
 */
function sayHello1(person) {
    return 'Hello, ' + person;
}
var user1 = 'Tom';
var bool = Boolean(1);
// console.log(sayHello1(user1));
function kong() {
    console.log("qwe");
}
var num;
num = 1;
// num.sayHello1(user1);
var a = false;
a = "qwe";
a = 1;
function fun(something) {
    return something.toString();
}
console.log(typeof fun(123));
var b = {
    id: "q13432",
    name: 'qwe',
    age: 21,
    gender: 'female',
    score: null
};
var num2 = [1, 2, 3, "34"];
var num3 = {
    1: 1,
    name: "qwe"
};
function fun2(x1, x2) {
    return x1 + x2;
}
fun2(1, 2);
var num4 = function (y1, y2) {
    return y1 + y2;
};
var fun3 = function (y1, y2) {
    return y1.length + y2.length;
};
console.log(fun3("qwe", 'asd'));
function reverse(x) {
    if (typeof x === "number") {
        return x.toString().split('').reverse().join('');
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
console.log(reverse(1234));
console.log(reverse("qwe"));
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
var c = [];
push(c, 1, 2, 3);
// let d: [number, string];
// d.push(1);
// d.push(2);
// d.push(4);
var days;
(function (days) {
    days[days["sun"] = 0] = "sun";
    days[days["mon"] = 1] = "mon";
    days[days["tue"] = 2] = "tue";
    days[days["wed"] = 3] = "wed";
    days[days["thu"] = 4] = "thu";
    days[days["fri"] = 5] = "fri";
    days[days["sat"] = 'S'] = "sat";
})(days || (days = {}));
;
var msg;
(function (msg) {
    msg[msg["a"] = 0] = "a";
    msg[msg["b"] = 'qwe'.length] = "b";
})(msg || (msg = {}));
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;   
    }
    Animal.prototype.sayHei = function () {
        return "my name is " + this.name;
    };
    return Animal;
}());
var cat = new Animal('qwe');
console.log(cat.sayHei());

