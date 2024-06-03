/*
Question 1 :
let x = 250 ;
create variable Calculate the value of zakat for x ,If you know the percentage of zakat = 2.5 %;
*/

// solution :

let x = 250;
let zakat = x * 0.025;

console.log("The zakat of x is = ", zakat)

/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

// solution :

array = [1 , 7 , 9 , 45];

second_array = ["str" , "alex" , "moh"];

third_array = ['the' , 'fox' , 'over' , 'lazy' , 'dog']


/*
Question 2 : 
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

// solution  :

var fruits=["Tomato","Banana","Watermelon"]
console.log("The index of Banana  : " , fruits.indexOf("Banana"),"\nThe index of Tomato : " ,fruits.indexOf("Tomato"));

/*
Question 3:
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/

Sarah_info = ["منسف" , "Cats" , "زكي شان "]
console.log("Favourite food : " , Sarah_info[0]);
console.log("Favourite animal : " , Sarah_info[1]);
console.log("Favourite movie : " , Sarah_info[2]);

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

let firstOfArray1 = [1,4,5];
console.log("The first element is : ",firstOfArray1[0]);
let firstOfArray2 = ["t","u","g","x"];
console.log("The first element is : ",firstOfArray2[0]);

/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

lastOfArray = [1,4,5];
console.log("The last element is : ",lastOfArray[lastOfArray.length-1]);

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array = [0 , 5 , 7 , 9 ];
array.shift();
array.shift();
array.shift();
array.unshift(1 , 3 , 4 , 6 , 8)
array.push(10)
console.log("array : ", array)


/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

// Solution :

var array2 = [5,9,-7,3.5]
array2.shift(); // removes the first element from the array --> 9 , -7 , 3.5
array2.unshift(10 , 3 , -8); // Add multiple elements to the beginning of an array --> 10 , 3 , -8 , 9 , -7 , 3.5
array2.push(7); // Add elements to the end of an array -->10 , 3 , -8 , 9 , -7 , 3.5 , 7
array2.pop(); // delete the last element --> 10 , 3 , -8 , 9 , -7 , 3.5 
console.log("array 2 : "+array2)

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

// Solution :

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
var sortedarr1 = "";
for (let i = 0; i<arr1.length ; i++){
    for (let j = i +1; j <arr1.length; j++){
        if (arr1[j] < arr1[i] ){
            const temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }
    }
    sortedarr1 += arr1[i] + ", ";
}

console.log(sortedarr1);
