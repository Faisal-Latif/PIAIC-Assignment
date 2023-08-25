"use strict";
console.log("Burhan");
//1- Develop a program that calculates and prints the sum of the first n even numbers
//using a for loop.
function sumCalculator(n) {
    var sum1 = 0;
    for (let i = 1; i <= n; i++) {
        var evenNumber = 2 * i;
        sum1 += evenNumber;
    }
    return sum1;
}
console.log(sumCalculator(7));
let evenNum = 7;
function sumOfEvenNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * 2;
    }
    return sum;
}
const result = sumOfEvenNumbers(evenNum);
console.log(`The sum of the first ${evenNum} even numbers is: ${result}`);
//2- Implement a program that uses a for loop to iterate through an array of numbers
//and print only the even numbers.
//3- Implement a program that uses a loop to iterate through an array of numbers and
//remove all the even numbers from them and just leave the odd ones
//4- Write a program that defines a function to calculate the area of a circle.
//The function should take the radius as input and return the calculated area.
//5- Develop a program that reads a list of grades and uses the splice method to
//remove failing grades (below 50) from the array.
//6- Write a program that uses a function to find the largest element in an array of numbers.
