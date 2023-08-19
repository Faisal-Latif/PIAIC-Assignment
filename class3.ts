console.log("I am Faisal");
//area of rectangle
var lenght:number=5;
var width:number=8;
var height:number=2;
var area=lenght*width;
//volume of cube
var volume=lenght*width*height;
//given number is positive, negative or zero
var num:number=-1;
if(num>0){console.log(`${num} is positive`);
}
else if(num<0){console.log(`${num} is negative number`);
}
else {console.log(`${num} is zero`);
}
//given number is evev or odd
if(num%2==0){console.log(`${num} is odd number`);
}
else{console.log(`${num} is evev number`);
}
// eligibility for vote
if(num>=18){console.log(`${num} eligible for vote`);
}
else{console.log(`${num} is not eligible for vote`)}
let num0:number=((10+5)*3-2)/(4%3)-7;
//student grade
let studentnumber:number=60;
if(studentnumber>=80){console.log("student grade is A");
}
else if(studentnumber<80 && studentnumber>=70){console.log('student grade is B');
}
else if(studentnumber<70 && studentnumber>=60){console.log("student grade is C");
}
else if(studentnumber<60 && studentnumber>=50){console.log("student grade is D");
}
else{console.log("student grade is F");
}
var section:string="C";
switch(section){ 
    case "A":{console.log("Your class timing every sunday 09AM-01PM"); break;}
    case "B":{console.log("Your class timing every sunday 02PM-04PM"); break;}
    default:{console.log("Your class timimg every sunday 04PM-06PM"); break;}
}
if(section=="A"){console.log("Your class timing every sunday 09AM-01PM");}
else if(section=="B"){console.log("Your class timing every sunday 02PM-04PM");}
else {console.log("Your class timimg every sunday 04PM-06PM");}
//Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
function CtoFtemperature() {
    var temp:number=37;
    var tempF:number=(temp*9/5)+32;
    var tempC:number=(temp-32)*5/9;
    console.log("tempF",tempF);
    console.log("tempC",tempC);
}
CtoFtemperature()
//Write a program that calculates the percentage.
function calculatepercentage() {
    var obtainedmarks:number=1044;
    var totalmarks:number=1100;
    var percentage=(obtainedmarks/totalmarks)*100;
    console.log("percentage", percentage);
}
calculatepercentage()
//Write a program that converts given number of days in to weeks and days such as 
//17 days = 2 weeks and 3 days.
var totalDays=365;
var restDays=totalDays%7;
console.log(restDays);
var restWeeks=(totalDays - restDays)/7;
console.log(restWeeks);
console.log("totalDays",totalDays,"restWeeks",restWeeks,"restDays",restDays);
//a program that calculates the discount for a product based on its price.
//If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var price:number=110;
if (price>100) {console.log("apply 10% discount")
    
} else {console.log("apply 5% discount")
    
}

var price1=110;
var price2=90;
if (price1>100||price2>100){
    var discount =price1*0.1;
    price1=price1-discount;
}
if(price1<=100||price2<=100){
    var discount2=price2*0.05;
    price2=price2-discount2;
}
console.log("net price1 after 10% discount",price1);
console.log("net price2 after 5% discount",price2);
//Create a program that determines the category of a user-provided age.
// If the age is between 0 and 12, print "Child." If it's between 13 and 19, 
//print "Teenager." Otherwise, print "Adult."
var age=20;
if (age<=12 && age>=0){
    console.log("child");
}
else if(age>=13 && age<=19){
    console.log("teenager");
}
else {
    console.log("adult");
}
 // Write a program that takes temperature and check it.
 // If it is cold then suggest the user to wear warm clothes and 
 //so on according to the weather.   
 var temp = 17;
 if (temp<25){
     console.log(temp,"is cold temperature then suggest the user to wera winter clothes");
 }
 else {
     console.log(temp,"is warm temperature then suggest to wear summer cloth");
}
//Write a program that checks if the given number is  divisible 
//by 3 or 5 or both or not divisible by anyone show output accordingly.
var num =11;
if (num%3==0 && num%5==0){
    console.log(num," is divisible by 3 and 5");
}
else if (num%3==0){
    console.log(num, " is divisible by 3");
}
else if(num%5==0){
    console.log(num, " is divisible by 5");
}
else{
    console.log(num,"is not divisible by 3 and 5");
}
// Write a program that checks if the given year is leap year or not.
var year = 2024;
if (year%2==0){
    console.log(year," is a leap year");
}
else {
    console.log(year, "is not leap year" );
}
//Develop a program that determines the day of the week.
//Ask the user for a number (1-7) and use nested if statements to print 
//the corresponding day's name.
var day =1;
if (day==1){
    console.log("monday");
}
else if (day==2){
    console.log("tuesday");
}
else if (day==2){
    console.log("wednesday");
}
else if (day==4){
    console.log("thursday");
}
else if (day==5){
    console.log("friday");
}
else if (day==6){
    console.log("saturday");
}
else if (day==7){
    console.log("sunday");
}
else {
    console.log("invalid input");
}


// Write a program that takes the number of units consumed by a user if it is greater
// than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if 
//greater than 500 then add 25% of tax Where the tax amount will be calculated by 
//the amount of bill.
var unitConsumed= 500;
if( unitConsumed >= 0 && unitConsumed <= 100){
    var unitPrice = 10;
 var billAmount = unitConsumed * unitPrice;   
 var taxAmount = billAmount*10/100;
 var totalBillamount=billAmount+taxAmount

  console.log(`Total units Consumed: ${unitConsumed} and total bill with 10% tax:${totalBillamount}`);
}
else if(unitConsumed > 100 && unitConsumed <= 200 ){
    var unitPrice = 20;
    var billAmount = unitConsumed * unitPrice;   
    var taxAmount = billAmount*15/100;
    var totalBillamount=billAmount+taxAmount
  console.log(`Total units consumed: ${unitConsumed} and total bill with 15% tax: ${totalBillamount}`);
  
}
else if(unitConsumed > 200 && unitConsumed <= 500){
    var unitPrice = 30;
 var billAmount = unitConsumed * unitPrice;   
 var taxAmount = billAmount*25/100;
 var totalBillamount=billAmount+taxAmount
  console.log(`Total units consumed ${unitConsumed} and total bill with 25% tax: ${totalBillamount}`);  
}
else{
    var unitPrice = 40;
    var billAmount = unitConsumed * unitPrice;   
    var taxAmount = billAmount*35/100;
    var totalBillamount=billAmount+taxAmount
   
  console.log(`Total units consumed ${unitConsumed} and total bill with 35% tax: ${totalBillamount}`);
}