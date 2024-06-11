// /* 1. Write a JavaScript program that accept two integers and
//  * display the larger.Go to the editor */
// /******* Start Your Code *********/
  
function maxnum(num1,num2){
    maxnumber = 0;
    if (num1 > num2){
        maxnum = num1;
    }
    else if (num1 < num2){
        maxnum = num2;
    }
    else {
        return "The numbers are equal!"
    }
    return maxnum;
}
console.log("The maximun number is : "+maxnum(5,7));


//  /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  
// function product(num1, num2, num3){
//     var mul = num1 * num2 * num3;
//     if ( (num1 * num2 * num3) > 0 ){
//         window.alert(" + ");
//     }
//     else{
//         window.alert(" - ");
//     }
//     return mul;
// }
// console.log(product(9, 8, 7));

//  /******* End Your Code ********* */

// /* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
// Sample numbers : 0, -1, 4 
// Output : 4, 0, -1 */
// /******* Start Your Code *********/
  
// num1 = 3;
// num2 = 5;
// num3 = -5;

// if (num1 > num2 && num1 > num3) {
//     if (num2 > num3) {
//         alert(num1 + "," + num2 + "," + num3);
//     } else {
//         alert(num1 + "," + num3 + "," + num2);
//     }

// } else if (num2 > num1 && num2 > num3) {
//     if (num1 > num3) {
//         alert(num2 + "," + num1 + "," + num3);
//     } else {
//         alert(num2 + "," + num3 + "," + num1);
//     }

// } else if (num3 > num1 && num3 > num2) {
//     if (num1 > num2) {
//         alert(num3 + "," + num1 + "," + num2);
//     } else {
//         alert(num3 + "," + num2 + "," + num1);
//     }
// }

//  /******* End Your Code ********* */


// /*4. Write a JavaScript conditional statement to find the largest of five numbers. 
// Display an alert box to show the result. Go to the editor 
// Sample numbers : -5, -2, -6, 0, -1 
// Output : 0 */

// /******* Start Your Code *********/
// num1 = 5;
// num2 = 4;
// num3 = 3;
// num4 = 2;
// num5 = 1;

// max_number = num1;
// if (num2 > max_number){
//     max_number = num2;
// }
// else if (num3 > max_number){
//     max_number = num3;
// }
// else if (num4 > max_number){
//     max_number = num4;
// }
// else if (num5 > max_number){
//     max_number = num5;
// }
// alert("The maximum number is :" + max_number)

  
//  /******* End Your Code ********* */

//  /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
// /******* Start Your Code *********/
  
// x = 8;
// y = 7;

// if (x > y){
//     console.log(" Hello World ")
// }
// else{
//     console.log(" Goodbye ")
// }

//  /******* End Your Code ********* */


 /* 1. Write a JavaScript program that returns rate as text
less than 50 return ==> Fail
equal or between 50 and 59 ===> E
equal or between 60 and 69 ===> D
equal or between 70 and 79 ===> C
equal or between 80 and 89 ===> B
equal or between 90 and 100 ===> A
*/

// let rate = 70;


// if (rate >= 50 && rate <= 59){
//     console.log(" E ")
// }
// else if (rate >= 60 && rate <= 69){
//     console.log(" D ")
// }
// else if (rate >= 70 && rate <= 79){
//     console.log(" C ")
// }
// else if (rate >= 80 && rate <= 89){
//     console.log(" B ")
// }
// else if (rate >= 90 && rate <= 100){
//     console.log(" A ")
// }
// else if (rate < 50){
//     console.log(" FAIL ")
// }
// else{
//     console.log(" WRONG ANSWER! ")
// }

// 1. Write a JS code to print numbers from 1 to 10

// for (let i = 1; i <= 10; i++){
//     console.log( i + "\n" )
// } 

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/

// var arr = [13, 23, 12, 45, 22, 48, 66, 100]
// for (let i of arr){
//     if(i % 2 == 0){
//         console.log(i + "\n" );
//     }
// }



/* 
3. Write a JS code to print a pattern using for loop

   1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 

*/

// for(let row = 1; row <= 8; row++){
//     let str = '';
//     for(let col = 1; col <= row; col++){
//         str += col + ' ';
//     }
//     console.log(str);
// }


 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"

*/

// let x = "don't know why";
// for (let i = 0; i < x.length; i++) {
//     if ("y" == x[i]) {
//         console.log("yes");
//         break;
//     }
//     if (i == x.length - 1) {
//         console.log("no");
//     }
// }

/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

// function tellFortune(job_title, geographic_location, parent_name, number_of_children){
//     return "You will ba a "+job_title+" in " +geographic_location+", and marrird to "+parent_name+" with "+number_of_children+" kids."
// }


// console.log(tellFortune('software engineer', 'Jordan', 'Alice', 3));

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

// function calculateDogAge(puppy_age){
//     let dog_age = puppy_age * 7;
//     return "Your doggie is "+ dog_age+" years old in dog years!";
// }
// console.log(calculateDogAge(3));

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

// function calculateSupply(age , amount_per_day){

//     max_age = 100 - age;
//     total_age = max_age * 365 * amount_per_day;
//     return "You will need "+ amount_per_day +" cups of tea to last you until the ripe old age of "+total_age;
// }
// console.log(calculateSupply(30, 3));// harrrrrd

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

// function greet(name){
//     return "hello "+ name;
// }

// console.log(greet("sarah"));

/*
5
what is the error:
function double(cat) {
  return 2 * x;  // x isnot defined
}

function double(7) { // unexpected number
  return 2 * 7;
}

function double('7') { // unexpected string
  return 2 * 'x';
}
*/

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/

// function double1(x ){
//     return 2 * x ;
//   }

// function double2 (x){
//   return 2 * x;
//   }

//   function  double3 (x){
//     return 2 * x;
//   }

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

// function cube(number){
//     return number ** 3;
// }
// let number  =6;
// console.log("the cumber of "+number+" is :"+cube(number));

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

// function multiply(number1,number2)
// {
//     return number1 * number2;
// }
// let number1 = 5;
// let number2 = 8;
// console.log("the multiply of "+ number1 +" *" +number2+" is:"+ multiply(number1,number2));


/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

// function canIGetADrivingLicense(age){
//     if (age >= 20){
//         return "yes you can"
//     }
//     else{
//         return "please come back after "+ age + " years to get one";
//     }
// }
// console.log(canIGetADrivingLicense(14));

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

// function sameLength(string1 , string2){
//     let lenstr1 = string1.length;
//     let lenstr2 = string2.length;
//     if (lenstr1 == lenstr2){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(sameLength("sarah","jalal"));

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

// function largerNubmer(number1,number2){
//     max_number  = number1;
//     if (number2 > max_number){
//         max_number = number2;
//     }
//     return max_number;
// }

// console.log("the maximum number is :"+ largerNubmer(4,5));

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

// function smallerNubmer(number1, number2, number3){
//     min_number = number1;
//     if (number2 < min_number){
//         min_number = number2;
//     }
//     else if (number3 < min_number){
//         min_number = number3;
//     }
//     return min_number;
// }

// console.log("The minm number is :"+smallerNubmer(4,7,-5));

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

// function shorterString(str1, str2, str3, str4, str5) {
//   let minstr = str1;

//   if (str2.length < minstr.length) {
//       minstr = str2;
//   }
//   if (str3.length < minstr.length) {
//       minstr = str3;
//   }
//   if (str4.length < minstr.length) {
//       minstr = str4;
//   }
//   if (str5.length < minstr.length) {
//       minstr = str5;
//   }

//   return minstr;
// }

// console.log(shorterString("air", "tr", "car", "github", "by"));

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

// function longerString(str1, str2, str3, str4) {
//   let maxstr = str1;

//   if (str2.length > maxstr.length) {
//       maxstr = str2;
//   }
//   if (str3.length > maxstr.length) {
//       maxstr = str3;
//   }
//   if (str4.length > maxstr.length) {
//       maxstr = str4;
//   }
//   return maxstr;
// }

// console.log(longerString("air", "tr", "car", "github", "by"));

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

// function isEven(number){
//     if (number %2 == 0){
//       return true;
//     }
//     else{
//       return false;
//     }
// }

// console.log(isEven(0));

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

// function isOdd(number){
//   if (number %2 != 0){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// console.log(isOdd(7));

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

// function positive(number){
//     if (number < 0){
//       return number *-1;
//     }
//     else{
//       return number;
//     }
// }

// console.log(positive(-8));


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

// function fullName(fName, Lname){
//   return fName + " "+Lname;

// }
// console.log(fullName("sarah","shorman"));

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

// function average(num1, num2, num3, num4, num5){
//   sum = num1 + num2 + num3 + num4 + num5;
//   count = 5;
//   avg = sum / count;
//   return avg
// }

// console.log(average(5,7,9,3,5));

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

// function randomNumber(){

//     return Math.random();
//   }
// console.log(randomNumber())

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

// function randomBetweenNumbers(num1, num2){
//     return Math.random()*(num2 - num1) +num1;

// }
// console.log(randomBetweenNumbers(1,8));

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

// function scoreInUniversty(score){
//   if(score >= 95 && score <= 100){
//     return "A"
//   }
//   else if (score >=85 && score <= 94){
//     return "B"
//   }
//   else if (score >=70 && score <=84){
//     return "C"
//   }
//   else if (score >=50 && score <=69){
//   return "D"
//   }
//   else{
//     return "F"
//   }
// }

// console.log(scoreInUniversty(96));

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let count = 0;
function counter() {
    count += 1;
    return count;
}
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

/*

24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

