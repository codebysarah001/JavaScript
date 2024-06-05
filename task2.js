// /* 1. Write a JavaScript program that accept two integers and
//  * display the larger.Go to the editor */
// /******* Start Your Code *********/
  
// function maxnum(num1,num2){
//     maxnumber = 0;
//     if (num1 > num2){
//         maxnum = num1;
//     }
//     else if (num1 < num2){
//         maxnum = num2;
//     }
//     else {
//         return "The numbers are equal!"
//     }
//     return maxnum;
// }
// console.log("The maximun number is : "+maxnum(5,7));


//  /******* End Your Code ********* */

// /* 2. Write a JavaScript conditional statement to find the sign
//  of product of three numbers. Display an alert box with the 
//  specified sign. Go to the editor 
// Sample numbers : 3, -7, 2 
// Output : The sign is - */
// /******* Start Your Code *********/
  
// function product(num1,num2,num3){
//     var mul = num1*num2*num3;
//     if ( (num1*num2*num3) >0 ){
//         window.alert("+");
//     }
//     else{
//         window.alert("-");
//     }
//     return mul;
// }
// console.log(product(9,8,7));

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
// alert("The maximum number is :"+max_number)

  
//  /******* End Your Code ********* */

//  /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
// /******* Start Your Code *********/
  
// x = 8;
// y = 7;

// if (x > y){
//     console.log("Hello World")
// }
// else{
//     console.log("Goodbye")
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


// if (rate >=50 && rate <=59){
//     console.log("E")
// }
// else if (rate >=60 && rate <=69){
//     console.log("D")
// }
// else if (rate >=70 && rate <=79){
//     console.log("C")
// }
// else if (rate >=80 && rate <=89){
//     console.log("B")
// }
// else if (rate >=90 && rate <=100){
//     console.log("A")
// }
// else if (rate <50){
//     console.log("FAIL")
// }
// else{
//     console.log("WRONG ANSWER!")
// }

// 1. Write a JS code to print numbers from 1 to 10
// for (let i = 1; i<=10; i++){
//     console.log(i+"\n")
// }

/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
// var arr = [13,23,12,45,22,48,66,100]
// for (let i of arr){
//     if(i%2 == 0){
//         console.log(i+"\n");
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

// for(let row = 1 ; row <= 8 ; row++){
//     let str = '';
//     for(let col = 1 ; col <= row ; col++){
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

function tellFortune(job_title, geographic_location, parent_name, number_of_children){
    return "You will ba a "+job_title+" in " +geographic_location+", and marrird to "+parent_name+" with "+number_of_children+" kids."
}


console.log(tellFortune('software engineer', 'Jordan', 'Alice', 3));

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

function calculateDogAge(puppy_age){
    let dog_age = puppy_age*7;
    return "Your doggie is "+ dog_age+" years old in dog years!";
}
console.log(calculateDogAge(3));

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
//     return "hello "+name;
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
//     return number**3;
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
//     return number1*number2;
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
//         return "please come back after "+age+ " years to get one";
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

function largerNubmer(number1,number2){
    max_number  = number1;
    if (number2 > max_number){
        max_number = number2;
    }
    return max_number;
}

console.log("the maximum number is :"+ largerNubmer(4,5));

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

function smallerNubmer(number1, number2, number3){
    min_number = number1;
    if (number2 < min_number){
        min_number = number2;
    }
    else if (number3 < min_number){
        min_number = number3;
    }
    return min_number;
}

console.log("The minm number is :"+smallerNubmer(4,7,-5));

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

// function shorterString(str1,str2,str3,str4,str5){
//     minstr = str1.length;
//     if (str2.length < minstr){
//         minstr = str2;
//     }
//     else if (str3.length < minstr){
//         minstr = str3;
//     }
//     else if (str4.length < minstr){
//         minstr = str4;
//     }
//     else if (str5.length < minstr){
//         minstr = str5;
//     }
//     return minstr;
// }

// console.log(shorterString("air","tr","car","github","by"));

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