export{}
let message = 'Welcome Back';
console.log(message);


let x = 10;
let y = 20;

// variable declaration
let sum ;
const  title = 'codevolution';

//variable type 
let isbeginner: boolean  = true;
let total: number = 0;
let name: string = 'Aish';

let sentence: string = 'My name is ${name}
I am beginner in Typescript';

console.log(sentence);
let n: null = null;
let u: undefined= undefined;

let isNew: boolean = null;
let myName: string = undefined;

// Array
let list1: number[] =[1,2,3];
//OR
let list2: Array<number> =[1,2,3];
let person1: [string, number] = ['Aish', 24];
//Enum type
//Enum type
enum Color {blue, yellow, orange}
let e: Color = Color.blue;
console.log(e); //0

//Any Type 
let value: any = 10;
value = true;
value = 'Aish';

//Unknown type
let myVariable: any = 10;
console.log(myVariable.name.firstName);
myVariable(); // it can be called as function
myVariable.toUpperCase();

//Type inference
let z;
z = 10;
z = true;

let y = 10;

//////Union Types //use of pipeline charater to integrate 2 types
let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;
anyType = true;

//Functions in typescript
function add(num1: number, num2: number = 10): number {
  return(
      num1 + num2
  )
}

add(5, 10);
add(5);// if number2 is optional
//to make parameter optional add "?" at last
//to make a parameter default pass the value


//Interfaces
interface Person {
  firstName: string;
  lastName?: string; //optional
}

function fullName(person: Person) {
  console.log(person.firstName + ' ' + person.lastName);
}

let p = {
  firstName: 'Crown',
  lastName: 'stack'
};
fullName(p);


//lasses is typeScript
class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log('Good morning ' + this.employeeName);
  }
}

let emp1 = new Employee('Mesh');
console.log(emp1.employeeName); //Mesh
emp1.greet();  //Good morning Mesh

// class Manager extends Employee{
//   constructor(managerName: string) {
//     super(managerName);
//   }
//   delegateWork() {
//     console.log('Manager delgating tasks' + this.employeeName);
//   }
// }

// let a1 = new Manager('Brave');
// a1.delegateWork();
// a1.greet();
// console.log(a1.employeeName);}

////////Access Modifiers////////
//set accessibility of property & method of class
//default value = "public"

//public //can be accessable by everywhere
class bcd {
    public name;
}

//private //cant be accessed outside the class //cant be access in derived class
class dec {
    private name;
}

//protected cant be accessed outside the class //cant be access
class hic {
    protected name;
}

