"use strict";
exports.__esModule = true;
var message = 'Welcome Back';
console.log(message);
var x = 10;
var y = 20;
// variable declaration
var sum;
var title = 'codevolution';
//variable type 
var isbeginner = true;
var total = 0;
var name = 'Aish';
var sentence = 'My name is ${name};
I;
am;
beginner in Typescript;
';;
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// Array
var list1 = [1, 2, 3];
//OR
var list2 = [1, 2, 3];
var person1 = ['Aish', 24];
//Enum type
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
var e = Color.blue;
console.log(e); //0
//Any Type //unsure what will be the var value only then use "Any"//  not a best practise
var value = 10;
// value = true;
// value = 'Aish';
// //Unknown type
// var myVariable = 10;
// console.log(myVariable.name.firstName);
// myVariable(); //can be called as function
// myVariable.toUpperCase();
///////Type inference///////
var z;
z = 10;
z = true;
var y = 10;
//////Union Types////// //use of pipeline chrater to integrate 2 types
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
///////Functions in typescript///////
function add(num1, num2) {
    if (num2 === void 0) {
        num2 = 10;
    }
    return (num1 + num2);
}
add(5, 10);
// if num2 is optional
function fullName(person) {
    console.log(person.firstName + ' ' + person.lastName);
}
var p = {
    firstName: 'Aish',
    lastName: 'Shukla'
};
fullName(p);
///////Classes is typeScript//////
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log('Good afternoon ' + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Mee');
console.log(emp1.employeeName); //Mee
emp1.greet(); //Good afternoon Mee
// class Manager extends Employee{
//   constructor(managerName: string) {
//     super(managerName);
//   }
//   delegateWork() {
//     console.log('Manager delgating tasks' + this.employeeName);
//   }
// }
// let m1 = new Manager('Bruce');
// m1.delegateWork();
// m1.greet();
// console.log(m1.employeeName);}
////////Access Modifiers////////
//set accessibility of property & method of class
//default value = "public"
//public //can be accessable by everyone
var Abc = /** @class */ (function () {
    function Abc() {
    }
    return Abc;
}());
//private //cant be accessed outside the class //cant be access in derived class
var Def = /** @class */ (function () {
    function Def() {
    }
    return Def;
}());
//protected //cant be accessed outside the class //cant be access
var Ghi = /** @class */ (function () {
    function Ghi() {
    }
    return Ghi;
}());
