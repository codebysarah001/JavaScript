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

function calculateSupply(age , amount_per_day){

    return "You will need "+ amount_per_day +" cups of tea to last you until the ripe old age of "+age;
}
console.log(calculateSupply(30, 3));// harrrrrd

