console.log("Burhan");
//1- Develop a program that calculates and prints the sum of the first n even numbers
//using a for loop.
function sumCalculator(n: number) {
    var sum1: number = 0;
    for (let i = 1; i <= n; i++) {
      var evenNumber: number = 2 * i;
      sum1 +=evenNumber;
    }
    return sum1;
  }
   console.log(sumCalculator(5));

//2- Implement a program that uses a for loop to iterate through an array of numbers
//and print only the even numbers.
var array1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenArray: number[] = [];

for (let i = 0; i <= array1.length; i++) {
  if (array1[i] % 2 == 0) {
    evenArray.push(array1[i]);
  }
}
console.log(evenArray);
//3- Implement a program that uses a loop to iterate through an array of numbers and
//remove all the even numbers from them and just leave the odd ones
var array2: number[] = [1, 2, 3, 11, 4, 5, 6, 7, 8, 12, 9, 10];
for (let i = array1.length - 1; i >= 0; i--) {
  if (array2[i] % 2 == 0) {
    array2.splice(i, 1);
  }
}
console.log(array2);
//4- Write a program that defines a function to calculate the area of a circle.
//The function should take the radius as input and return the calculated area.
function areaOfCircle(rad: number): number {
    let pi: number = 22 / 7;
    let area: number = pi * rad ** 2;
    return area;
  }
  console.log(areaOfCircle(5));  
//5- Develop a program that reads a list of grades and uses the splice method to
//remove failing grades (below 50) from the array.
var gradesArray: number[] = [100, 20, 83, 54, 45, 65, 37, 28, 91, 80];
for (let i = gradesArray.length - 1; i >= 0; i--) {
  if (gradesArray[i] < 50) {
    gradesArray.splice(i, 1);
  }
}
console.log(gradesArray);
//6- Write a program that uses a function to find the largest element in an array of numbers.
function findLargestElement(array3: number[]): number {
    let largestElement: number = array3[0];
    for (let i = 0; i < array3.length; i++) {
      if (largestElement < array3[i]) {
        largestElement = array3[i];
      }
    }
    return largestElement;
  }
  var array3: number[] = [1, 2, 10, 5, 6, 22, 78, 90, 67];
  var largestElement: number = findLargestElement(array3);
  