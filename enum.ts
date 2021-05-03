export {}
//Enum defined a set of named constants
//the value of  enum can't change
enum isConstants {
    pi = 3.14,
    e = 2.73
}
console.log('Finding  Circumference of the circle');
let radius:number = 10;
console.log( 2 * isConstants.pi * radius);

