export {}
//Enum defined a set of named constants
//the value of  enum can't change
enum isConstants {
    pi = 3.14,
    e = 2.73
}
let radius:number = 5;
console.log("Circumference of the circle is" , 2 * isConstants.pi * radius);

// enum isDirections {
//     up=1,
//     down,
//     left,
//     right