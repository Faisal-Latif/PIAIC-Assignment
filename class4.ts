console.log("hello");
// Array
var rollno0:number=1;
var rollno1:number=2;
var rollno2:number=3;
var rollno3:number=4;
var rollno4:number=5;
var studentrollno:number[]=[10,20,30,40,50]
studentrollno.pop();
studentrollno.push(100);
studentrollno.shift();
studentrollno.unshift(10);
studentrollno.splice(1,1,200);
studentrollno[0]=20;
console.log(studentrollno[0]);
console.log(studentrollno[1]);
studentrollno[0]=60;
console.log(studentrollno[0]);
var sum0:number=studentrollno[0]+studentrollno[1];
console.log(sum0);
var studentnames:string[]=["ali", "burhan", "aslam","hussain"];
//slice
var studentgames=studentnames.slice(1);
console.log("studentgames", studentgames);
//function
function PushNewItemInArray(studentname:string) {
    studentnames[studentnames.length]=studentname;
}
console.log(studentnames);
PushNewItemInArray("haider");
PushNewItemInArray("akber");

console.log(studentnames);


studentnames.pop()
studentnames.push("amjad")
studentnames.shift()
studentnames.unshift("murtaza")
studentnames.shift()
studentnames.unshift("ilyas")
studentnames.splice(3,1,"fareed")
studentnames[2]="jawwad";
console.log(studentnames[2]);
var studentrollnos=new Array(6)
//loop
console.log("after loop");
for (let i = 0; i < 5; i++) {
    console.log("for loop 1", 1);
}
console.log("before loop")
var index:number=1;
while (index<10) {
    console.log("index", index);
    index=index+1;
}
console.log("after loop")
for (let i=0;i<=5;i++) {
    console.log("best of luck")
}
//write a ts programe,that print the table of 2.
let start:number=1;
while (start<=10) {
    let result=2*start;
    console.log("2*"+start+"="+result);
    start=start+1;
}
let index1:number=1;
do {
    console.log("faisal");
    index1++
} while (index1<10);
//write a ts programe,that print the table of 5.
let start5:number=1;
while (start5<=10) {
    let result=5*start5;
    console.log("5*"+start5+"="+result);
    start5=start5+1;
}

/* 1. a function that takes an array, an index and a value as parameters. 
inside the function use splice method to insert the value at specific index
return the modified array. */

// this function deletes no values from the given array

function splicer(anArray:string[], anIndex:number, aValue:string) {
    anArray.splice(anIndex,0,aValue);
    return anArray
}

console.log(splicer(['faisal', 'a', 'program'], 1, 'writes'),'\n');


/* 2. Shopping Cart program using an array.
create a function to add items, remove items and update quantities using splice method.
print contents of cart after each operation. */

let shoppingCart:string[] = ['Eggs', 'Rice', 'Cookies'];

// Function for Adding items in ShoppingCart
function addItems(itemIndex:number, itemName:string) {
    shoppingCart.splice(itemIndex,0,itemName);
    return shoppingCart;
}

console.log(addItems(0,'Meat'));

// Function for removing items from the ShoppingCart
function removeItems(itemIndex:number, numberOfItemsToRemove:number) {
    shoppingCart.splice(itemIndex,numberOfItemsToRemove);
    return shoppingCart;
}

console.log(removeItems(1,1));

// Function for updating items in the ShoppingCart
function updateQuantities(itemIndex:number,updatedItem:string){
    let i = 0;
    while(i < shoppingCart.length){
        if (itemIndex === i) {
            shoppingCart.splice(i,1,updatedItem);
        }
        i++;
    }
    return shoppingCart;
}

console.log(updateQuantities(1,"Apples"));


/* 3. A Program that uses a while-loop to print first 25 integers. */
// whenever I use the program inside function the last value of output is undefined.
// How can I fix it?
console.log("First 25 Integers are:");

let initialValue:number = 1;
while (initialValue <= 25) {
    console.log(initialValue);
    initialValue += 1;
}
/* 4. A Program that uses a while-loop to print first 10 even numbers. */

console.log("First 10 Even Numbers are:");

let initialVal:number = 0;
while (initialVal < 20) {
    if (initialVal % 2 === 0) {
        console.log(initialVal);
    }
    initialVal += 1;
}


/* 5. a function that takes a positive interger as parameter 
and uses a while loop to calculate and return the factorial of that number. */

function factorialOfNumber(num:number): number {
    if(num > 0){
        var factorial:number = 1;
        while(num >= 1){
            factorial = factorial * num;
            num -= 1;
        }
        return factorial;
    }
    else{
        return 1
    }
}

console.log('\nFactorial of the given Number is: ',factorialOfNumber(5));


/* 6. Write a program having a array of numbers.
If the number is negative it should remove the negative number from the array. */

let aNumberArray:number[] = [1, -2, 3, 4, 5, -6, 7 ,8]
let ia = 0;
while(ia < aNumberArray.length){
    if(aNumberArray[ia] < 0){
        aNumberArray.splice(ia,1);
    }
    ia++;
}
console.log('Array without Negative Numbers is: ',aNumberArray);

/* 7. create a function that takes an array of numbers as parameter.
Use while loop to calculate and return sum of all the number in that array. */

function sumFromArrayValues(num:number[]) {
    let i = 0;
    let arraySum = 0
    while(i < num.length){
        arraySum += num[i] 
        i++;
    }
    return arraySum;
}

console.log('Sum of the numbers in given Array is: ',sumFromArrayValues([1,2,-3,4,-5,6,7,8,-9]));

/* 8. A Program that takes a list of temperatures in celsius as input from the user,
and convert each temperature into Fahrenheit and store them in another array.
use while loop to perform the conversion.*/

function arrayTempConverterCtoF(cTempArray:number[]) {
    let i = 0;
    let fTempArray: number[] = [];
    while(i < cTempArray.length){
        fTempArray[i] = (cTempArray[i] * 9/5) + 32;
        i++;
    }
    return fTempArray;
}

console.log('Array of temperatures in Fahrenheit is: '
,arrayTempConverterCtoF([30, 40, 10, -3, 55]));