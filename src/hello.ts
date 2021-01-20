/*
 * @Author: your name
 * @Date: 2020-12-29 11:24:48
 * @LastEditTime: 2021-01-20 10:46:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\hello.ts
 */

function sayHello1(person: string) {
    return 'Hello, ' + person;
}

let user1 = 'Tom';
let bool: boolean = Boolean(1);
// console.log(sayHello1(user1));

function kong(): void {
    console.log("qwe");
}

let num;
num = 1;
// num.sayHello1(user1);

let a: number | string | boolean = false;
a = "qwe";
a = 1;
function fun(something: number | string): string {
    return something.toString();
}
console.log(typeof fun(123));

interface Person {
    readonly id: string,
    name: string,
    age: number,
    height?: number,
    [something: string]: any
}
let b: Person = {
    id: "q13432",
    name: 'qwe',
    age: 21,
    gender: 'female',
    score: null
}

let num2: any[] = [1, 2, 3, "34"]
interface Num {
    [index: number]: number,
    name: string
}
let num3: Num = {
    1: 1,
    name: "qwe"
}

function fun2(x1: number, x2: number) {
    return x1 + x2;
}

fun2(1, 2)

let num4: (x1: number, x2: number) => number = function (y1: number, y2: number) {
    return y1 + y2
}

interface Fun {
    (x1: string, x2?: string): number
}
let fun3: Fun = function (y1: string, y2: string): number {
    return y1.length + y2.length
}
console.log(fun3("qwe", 'asd'));

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === "number") {
        return x.toString().split('').reverse().join('');
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

console.log(reverse(1234));
console.log(reverse("qwe"));

function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
    });
}

let c: any[] = [];
push(c, 1, 2, 3);

// let d: [number, string];
// d.push(1);
// d.push(2);
// d.push(4);

enum days {sun, mon, tue, wed, thu, fri, sat = 'S' as any};

enum msg {a, b = 'qwe'.length}

class Animal {
    constructor(public readonly name){}
    sayHei(){
        return `my name is ${this.name}`
    }
}
let cat = new Animal('qwe');
console.log(cat.sayHei());

function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']

/**
 * this is lengthwise
 */
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

// loggingIdentity(7);





