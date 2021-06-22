

                                                       // 🤞🤞STARTING OF 🤩JAVA😍_SCRIPT😁😁🤣//


//console.log("Hello");

// // variables and values

// var myName='keshav';
// var myAge= 26;
// console.log(myName);
// console.log(myAge);

// // Data types

// var myName="keshav";
// console.log(myName);

// typeof 

// console.log(typeof(myName));

// var myAge=26;
// console.log(typeof(myAge));

// var iamkeshav=true;
// console.log(typeof(iamkeshav));

// var iamkeshavt=false;
// console.log(typeof(iamkeshavt));

// console.log(10 +"20");
// //1020


// console.log(9 -"5"); //bug
// //4


// console.log("Java" +"Script");
// JavaScript


// console.log("keshav" -"tyagi");
// NaN


// console.log(" "+" ");
// Nothing shows


// console.log(" "+"0");
// 0


// console.log(true +false);

// console.log(false-true);


// ??Interview Question
// Difference between null and undefined?

//var iAmUse=null;
// console.log(iAm);
//Ans-Null
//console.log(typeof(iAmUse)); //bug
//Ans=Object(which is not any data type);




 //var iAmStandBy;
// console.log(iAmStandBy); 
// //Ans=undefined
//console.log(typeof(iAmStandBy));
//Ans=undefined(this is right)


//2. Interview question
//What is NaN

//Ans
// NaN is a property of the global object.
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-a-Number.

// var myPhonenumber=8755369602;
// var myName="Keshav Tyagi";

// console.log(myPhonenumber);
// console.log(myName);
//if we check

// console.log(isNaN(myPhonenumber));
// console.log(isNaN(myName));

//so we can use this as 

// if(isNaN(myName)){
//     console.log("plz enter a valid phone Number");
// }

// NaN===NaN;
// console.log(NaN===NaN);

// Number.NaN===NaN;
// console.log(Number.NaN===NaN);

// isNaN(NaN);
// console.log(isNaN(NaN));

// Arithmetic expression and operator
//1. Assignment operator
//Assign value to its left side operand.
//based on the value of its right operand.
//The simple one is(=)

// var x=5;
// var y=5;
// console.log("If both are qual" + x == y);
//ans=false (in normal style bcoz i am using '+' operator )
//if we write 
// console.log(x == y);
//we get (true)

//we can do it like this 
// console.log(`Is both the x and y are equal: ${x == y}`);

// 2.Arithmetic operators
// An Arithmetic operator takes numerical values
// (either literals or variables) as their operands and
// return a single numerical value.

// console.log(3+3);
// console.log(10-3);
// console.log(20/5);
// console.log(5*6);

// console.log("Remainder Operator " + 81%8);


// Increment and Decrement Operator
// Operator: x++ or ++x or x-- or --x

// var num=15;
// var newNum=num++;
// output=15

// var newNum2=++num;
// output=16

// console.log(newNum);
// console.log(newNum2);

//Comparision Operators
//a comparision operator compares its operands and 
// returns a logical value based on wheather the comparision is true;

// var a=30;
// var b=10;

// // Equal(==)
// console.log(a == b);


// // Not Equal(!=)
// console.log(a != b);

// //Greater than(>)
// console.log(a > b);

// console.log(a <= b);

//Logical Operator
// Logical operators are typically used with Boolean(logical) values;
//when they are , they return a Boolean value.

// var a=30;
// var b=-20;

//Logical AND(&&)
//The logical AND(&&) operator (logical conjunction) for a set of
// operands is true if and only if all of its operands are true.

// console.log(a>b && b>0);
//false because one is false

//Logical OR(||)
//The logical OR(||) operator for a set of 
//operands is true if only if one or more of its operands are true.

// console.log(a>b || b>0);
//true

// String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together
// returning another string that is the union of the two operands strings

// console.log("Hello World");

// console.log("hello " + "world");

// var myName = "Keshav";

// console.log(myName + "tyagi");

// console.log(myName + "Shera");

// console.log(myName + "Tyagiji");

//ass-4

// sol1:
//used to solve power
// console.log(3**3);//3*3*3 i.e=27
// console.log(3**5);//3*3*3*3*3 i.e=243
//console.log(10 ** -1) i.e 1/10=0.1

//Sol2 -simple 

//sol3-swap 2 numbers
// var a=2;
// var b=3;
// //Op a=3,b=2;

// // var c=b;
// // b=a;
// // a=c;

// // console.log("the value of a is" +a);
// // console.log("the value of b is" +b);

// //Swap 2 no without using 3 rd variable

// a=a+b;  //a=5
// b=a-b;  //b=2
// a=a-b;  //a=3

// console.log("the value of a is" +a);
// console.log("the value of b is" +b);

// //Interview Question
// //What is the difference b/w == vs === ?

// //sol
// var num1 = 5;
// var num2 = '5';

// console.log(num1 == num2); //true
// //it is not strict equal.It is not checking data type.

// console.log(num1 === num2);//false
//this is strictly equal operator.
//Also check data types.


//Loops 
//if-else easy
//leap year or not

// var year =2020;
// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 === 0){
//             console.log("The year " + year + " is a leap year");
//         }else{
//             console.log("The year " + year + " is not a leap year");
//         }
//         }else{
//             console.log("The year " + year + " is a leap year");
//         }
//     }else{
//         console.log("The year " + year + " is a not leap year");
//     }


//Assignment-5
//Truthy and False values in Js

// if(score=0){
//     console.log("OMG");
// }else{
//     console.log("Yes OMG");//this will run bcoz (0) is a falsy value
// }


//Conditional Ternary Operator
//that takes 3 operands

// var age=19;

// console.log((age>=18) ? "you are valid" : "you are not a valid candidate");




//Switch Statements
//Evaluates an expression, matching the expression's value to a
//case clause, and executes statements associated with that case.

//1st without break statement
//Find the Area of circle, triangle and rectangle?
// var area = "circle";
// var PI = 3.142;
// var l=5, b=4, r=3;
// if(area == "circle"){
//         console.log("the area of the circle is: " + PI*r**2);

// }else if(area == "triangle"){
//     console.log("the area of the circle is: " + (l+b)/2);

// }else if(are == "rectangle"){
//     console.log("the area of the circle is: " + (l*b));
// }else{
//     console.log("please enter valid data");
// }




//Now we use switch
// var area = "triangle";
// var PI = 3.142;
// var l=5, b=4, r=3;

// switch(area){
//     case 'circle':
//         console.log("the area of the circle1 is: " + PI*r**2);    
//             break;
//     case 'triangle':
//         console.log("the area of the triangle is: " + (l+b)/2);
//         break;
//     case 'rectangle':
//         console.log("the area of the rectangle is: " + (l*b));
//         break;
//         default:
//             console.log("the data is not valid"); 
//     }


//While is simple

// var num=1;
// while(num<=20){
//     console.log(num);
//     num++;
// }




//Do while loop

// var num=0;
// do{
//     console.log(num);
//     num++;
// }while(num<=10);



//For Loop
// for(var num=0;num<=10;num++){
//     console.log(num);
// }

//Ass-6
//Print table of (8)

// for(var num=1;num<=10;num++){
//     var tableOf= 8;
//     console.log(tableOf + " * " + num + " = " + tableOf * num);
// }



//FUNCTIONS IN JAVASCRIPT

//A JS function is a block of code designed to perform a particular task;


//FUNCTION DEFINITION

//A function definition (also called a function declaratiuon, or function statement)
//consist of the function keyword,followe by:


//The name of the function.
//A list of parameters to the function, enclosed in parantheses and separated by commas.
//The JavaScript statements that defines the function, enclosed in curly brackets,{....}

// function sum(){
//     var a=10, b=20;
//     var total=a+b;
//     console.log(total);
// }
// sum();



//Function Parameter  VS   Function Arguments
//Fun par are the  names listed in the function definition's.
//Function arguments are the real values passed to the fun.

// function sum(a,b){//These are fun parameter.

//     var total=a+b;
//     console.log(total);
// }
// sum();
// sum(20,30);//These are the fun arguments.





// Anonymous Function

//A fun expression is similar to and has the same syntax.
//as a function declaration One can define "named".
//function expression (where the names of the expression might
//be used in the call stack for example)

// var funExp = function sum(a,b){

//        return total = a+b;
//     }
    //calling
//     console.log(funExp(5,15));
   //or call like
//     var sum= funExp(5,15);
 //console.log9('the sum of two no is '+ sum);
    




// 😍😍Now It's Time for Modern JavaScript
// Features of ECMAScript 2015 also known as ES6🤩🤩

// 1. LEt VS CONST

// var myName ="Keshav Tyagi";
// console.log(myName);
// myName = "Keshav Tyagi"
// console.log(myName);



//This is also SAME
// let myName ="Keshav Tyagi";
// console.log(myName);
// myName = "Keshav Tyagi"
// console.log(myName);





//This is DIFFERENT WE CANT CHANGE VALUE
// const myName ="Keshav Tyagi";
// console.log(myName);
// (WE CAN'T UPDATE IT) myName = "Keshav Tyagi"



//Var Ka ->FUNCTION && Let ka Const ->BLOCK SCOPE


// (FOR-VAR)

// function biodata(){
// var myFirstName="Keshav Tyagi";
// console.log(myFirstName);

//         if(true){
//             var myLastName = "Keshav";
//             console.log('inner ' + myLastName);
//             console.log('inner ' + myFirstName);
//         }
//         console.log('innerOuter ' + myLastName);
// }
// biodata();

// //Output:
// Keshav Tyagi
// inner Keshav
// inner Keshav Tyagi
// innerOuter Keshav



//(For-Let)

// function biodata(){
// let myFirstName="Keshav Tyagi";
// console.log(myFirstName);

//         if(true){
//             let myLastName = "Keshav";
//             console.log('inner ' + myLastName);
//             console.log('inner ' + myFirstName);
//         }
//         console.log('innerOuter ' + myLastName);
// }
// biodata();

// Output:
// Keshav Tyagi
// inner Keshav
// inner Keshav Tyagi
// C:\Users\Vijaysales\Desktop\js with tp\script.js:501
//         console.log('innerOuter ' + myLastName);
//                                     ^

// ReferenceError: myLastName is not defined





//(For-Const)

// function biodata(){
// const myFirstName="Keshav Tyagi";
// console.log(myFirstName);

//         if(true){
//             const myLastName = "Keshav";
//             console.log('inner ' + myLastName);
//             console.log('inner ' + myFirstName);
//         }
//         console.log('innerOuter ' + myLastName);
// }
// biodata();

// Output:
// Keshav Tyagi
// inner Keshav
// inner Keshav Tyagi
// C:\Users\Vijaysales\Desktop\js with tp\script.js:527
//         console.log('innerOuter ' + myLastName);
//                                     ^

// ReferenceError: myLastName is not defined




//Template Literals(Template strings)

//As we find in previous table of any number we can do it easily

// for(let num = 1; num<= 10; num++){
//     let tableOf = 12;
//     //console.log(tableOf + " * " + num + " = " + tableOf * num);
//     //in upper place we use template string

//     console.log(` ${tableOf} * ${num} = ${tableOf * num}`);

// }





//Default Parameters
//Def Fun Para allow named parameter to be initialized
//with default values if no value or undefined is passed.

// function mult(a,b=5){
//        return a*b;
// }
// console.log(mult(5));//5->map to (a)

// output=25





//Fat Arrow Function


// Normal Way Of Writing a Function 
// console.log(sum());

// function sum(){
//     let a=5; b=6;
//     let sum = a+b;
//     return `the sum of the two number is ${sum}`;
// }


// How to write in into Fat Arrow Function
//Function Defined then Call in this
//No need of return BUT We can't use this in this

// const sum = () => `the sum of the two number is ${(a=5) + (b=6)}`;

// console.log(sum());









//Array in JavaScript

//When we use var, we can stored only one value at a time.

// var friend1='Rahul';
// var friend2='Shubham';
// var friend3='Jaydeep';

// var myFrieds = ['Rahul',52,'male','Shubham',20,'Jaydeep'true,52];

//When we feel like storing multiple values in one varible then
//instead of var, we will use an array.

//In Js, we have an Array class, and
//array are the prototype of this class.






//Traverse through array to access elements

//If we want to get the single data at a time and also
//If We want to change the data

// var myFrieds = ['Keshav','Rahul','Shubham','Jaydeep'];

// console.log(myFrieds[1]);


//if we want to find the length of array
// console.log(myFrieds.length);


//if we want to iterate through loop 

// for(var i=0; i<myFriend.length();i++){
//     console.log(myFriend[i]);
// }


//After ES6 we have for..in and for..of loop too

// var myFriends = ['Keshav','Rahul','Shubham','Jaydeep'];

//For in
// for(let elements in myFriends){
//     console.log(elements);
// }
//output only index :
// 0
// 1
// 2
// 3

//For of

// for(let elements of myFriends){
//     console.log(elements);
// }
// Output is values at indexedDBKeshav
//  Rahul
//  Shubham
//  Jaydeep





//For each
//Array.prototype.forEach

// var myFriends = ['Keshav','Rahul','Shubham','Jaydeep'];

// myFriends.forEach(function(element, index, array){
  
//     console.log(element + "index: " + index + "  array = " + array );
// });

// // Output:
// Keshavindex: 0 ,array = Keshav,Rahul,Shubham,Jaydeep
// Rahulindex: 1 ,array = Keshav,Rahul,Shubham,Jaydeep  
// Shubhamindex: 2 ,array = Keshav,Rahul,Shubham,Jaydeep
// Jaydeepindex: 3 ,array = Keshav,Rahul,Shubham,Jaydeep








//Using Fat Arrow in FOR_EACh

// myFriends.forEach((element,index,array) => {
//             console.log(element + "index: " + index + "  array = " + array );
   
// });





//Array Subsection 2 Searching and filter in an array

//Array.prototype.indexOf()

//return the first index of an element within the array equal
//to an element, or -1 if none is found, It search the element from the 
//0th index number





// Array.prototype.lastIndexOf(); //It will search backward 








//Searching and Filter in an Array

// Array.prototype.find()
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. 
// If no values satisfy the testing function, undefined is returned.


// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// console.log(found);
// // expected output: 12



// Syntax
// // Arrow function
// find((element) => { ... } )
// find((element, index) => { ... } )
// find((element, index, array) => { ... } )

// // Callback function
// find(callbackFn)
// find(callbackFn, thisArg)

// // Inline callback function
// find(function callbackFn(element) { ... })
// find(function callbackFn(element, index) { ... })
// find(function callbackFn(element, index, array){ ... })
// find(function callbackFn(element, index, array) { ... }, thisArg)





// The filter() method creates an array filled with all array elements that pass a test (provided as a function).

// Note: filter() does not execute the function for array elements without values.

// Note: filter() does not change the original array.








//Perform CRUD

//Array.prototype.push()
//The push() method adds one or more elements to the 
// end of the array and returns the new length of the array.


// cost animals = ['pigs', 'goats' , 'sheep'];

// animals.push('chicken');
// console.log(animals);  //add value in back// also add multiple data


//Array.prototype.unshift()
//The unshift method adds one or more  in front of array

// const animals = ['pigs', 'goats' , 'sheep'];

//  animals.unshift('chicken','mango');
//  console.log(animals); 


  
// const myNumbers = [1,2,3,5];

// myNumbers.unshift(4,6);
// console.log(myNumbers);
// //Output: [4,6,1,2,3,5];










//Array.prototype.pop()
//The [pop()] method removes the last element from an array and returns
//that elemet. this method changes the length of the array.

// const animals = ['pigs', 'goats' , 'sheep'];

// console.log(animals.pop());
// console.log(animals);

// output:
// sheep
// [ 'pigs', 'goats' ]







//Array .prototype.shift()
//The shift() method removes the shift element from an array and returns
//that removed element.This method changes the length of the array.

// const animals1 = ['pigs', 'goats' , 'sheep'];

// console.log(animals1.shift());
// console.log(animals1);


// output:
// pigs
// [ 'goats', 'sheep' ]










//ASSIGNMENT 8:
// Add Dec at the end of an array ?
// What is the return value of splice method ?
// Update march to March(update) ?
// Delete June from an array ?

// Array.prototype.splice()
// Adds and/or removes elements from an array.


// const months=['Jan','March','April','June','July'];

// Sol1:

// const newMonth = months.splice(5,0,"Dec");
// console.log(months);

// Output:
// [ 'Jan', 'March', 'April', 'June','July', 'Dec' ]



//Sol 2:
//[]



//Sol 3:
// const months=['Jan','march','April','June','July'];

// // const updateMonth = months.splice(1,1,'March');
// // console.log(months);

// // //Output:
// // [ 'Jan', 'March', 'April', 'June', 'July' ]


// // Dont know index

// const indexOfMonth = months.indexOf('march');

// if(indexOfMonth!= -1){
//     const updateMonth = months.splice(indexOfMonth,1,'March');
//     console.log(months);
// }else{
//     console.log("No such data");
// }














//Map and Reduce Method

//Array.prototype.map()

//let newArray = arr.map(callback(currentValue[,index[,array]]){
    //return element for newarray, after executing something
//}[, thisArg]);


//Return a new array containing the result of calling a 
// Function on every element in the array.

// const array1 = [1,4,9,16,25];

// //num>9

// // let newArr = array1.map((curElem,index,arr) =>{
// //         return curElem > 9;
// // })

// // console.log(array1);
// // console.log(newArr);//Output:[ false, false, false, true, true ]



// let newArr = array1.map((curElem,index,arr)=>{
//    return `Index no = ${index} and the value is ${curElem} belongs to ${arr}` 
// })

// console.log(newArr);

// //Output:[
//   'Index no = 0 and the value is 1 belongs to 1,4,9,16,25',
//   'Index no = 1 and the value is 4 belongs to 1,4,9,16,25',
//   'Index no = 2 and the value is 9 belongs to 1,4,9,16,25',
//   'Index no = 3 and the value is 16 belongs to 1,4,9,16,25',
//   'Index no = 4 and the value is 25 belongs to 1,4,9,16,25'
// ]











//Assignment Time

// 1. Find the square root of each element in the an array?
// 2.Multiply each element by 2 and return only those 
// elements which are greater than 10?


//Sol:->

// let arr = [25, 36, 49 ,64, 81];

// let arrSqr = arr.map((curElem)=>{
//     return Math.sqrt(curElem);
// })
// console.log(arrSqr);

//Output:->  [ 5, 6, 7, 8, 9 ]



//Sol2:-> We are using chaining Method bcoz we need actual data;

// let arr = [2,3,4,6,8];

// //Multiply every by map method and then filter by filter method
// let arr2 = arr.map((curElem) =>{
//     return curElem *2;
// }).filter((curElem)=>{
//     return curElem > 10;
// })

// console.log(arr2); //Output: [ 12, 16 ];











//Reduce Method() // Total sum,average ,percentage nikalna hoo



// To reducer function takes four arguments:

// Accumulator
// Current Value
// Current index
// Source Array


// let arr = [5,6,2];
// let sum = arr.reduce((accumulator, curElem , index, arr) => {
//         return accumulator += curElem;  
// })
// console.log(sum);
//Output: 13

//OR WE CAN USE 3 IN ONE

// let arr1 =[2,3,4,6,8];

// let arr2=arr1.map((curElem) => curElem*2).filter((curElem) => curElem > 10).reduce((accumulator, curElem)=>{
//     return accumulator +=curElem;
// });
// console.log(arr2);

//Output:28










// Flatten an array means to convert the 3d or 2d array into a 
// single dimensional array 

// const arr = [
//         ['zone_1', 'zone_2'],
//         ['zone_3', 'zone_4'],
//         ['zone_5', 'zone_6'],
//         ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
//     ]; 

// // let flatArr = arr.reduce((accum, currVal)  => { 
// //           return accum.concat(currVal);
// // })

// console.log(arr.flat(Infinity));







// console.log(flatArr);


// const arr = [ ['zone_1', 'zone_2'], ['zone_3', ['zone_1', 'zone_2', ['zone_1', 'zone_2']]] ];
// console.log(arr.flat(3));
// console.log(arr);





/**** Section 7👉 Strings in JavaScript  ****/

// A JavaScript string is zero or more characters written inside quotes.

// JavaScript strings are used for storing and manipulating text.
// You can use single or double quotes

// Strings can be created as primitives, 
// from string literals, or as objects, using the String() constructor

// let myName = "Keshav Tyagi";
// let myChannelName = 'Keshav Tyagi';

// using constructor// let ytName = new String("Keshav Technical");
// let ytName = 'Keshav technical';

// console.log(myName);
// console.log((ytName));



// 👉 How to find the length of a string
// String.prototype.length 🙋‍♂️
// Reflects the length of the string. 

// let myName = "keshav tyagi";
// console.log(myName.length);



// 👉 Escape Character

// let anySentence = "We are the so-called \"Vikings\" from the north.";
// console.log(anySentence);

// // if you dont want to mess, simply use the alternate quotes 

// let anySentence =  " We are the so-called 'Vikings' from the north. ";
// console.log(anySentence);









// 👉 Finding a String in a String

// String.prototype.indexOf(searchValue [, fromIndex]) 🙋‍♂️

// The indexOf() method returns the index of (the position of) the first
//  occurrence of a specified text in a string

// const myBioData =  'I am the keshav Technical';
// console.log(myBioData.indexOf("t"));

// console.log(myBioData.indexOf("t", 6));


// // JavaScript counts positions from zero.
// // 0 is the first position in a string, 1 is the second, 2 is the third ...






// // String.prototype.lastIndexOf(searchValue [, fromIndex]) 🙋‍♂️
// // Returns the index within the calling String object of the 
// // last occurrence of searchValue, or -1 if not found.


// const myBioData =  'I am the thapa Technical';
// console.log(myBioData.lastIndexOf("t", 6));













// 👉 Searching for a String in a String

// String.prototype.search(regexp) 🙋‍♂️

// The search() method searches a string for a specified 
// value and returns the position of the match

// const myBioData =  'I am the keshav Technical';
// let sData = myBioData.search("technical");
// console.log(sData);  Op:-> 9



// The search() method cannot take a second start position argument.




// 👉 Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method 🙋‍♂️
// slice() extracts a part of a string and returns the extracted part 
// in a new string.

// The method takes 2 parameters: the start position, 
// and the end position (end not included).

// var str = "Apple, Bananaa, Kiwi, mango";

//  let res = str.slice(0,4);
// let res = str.slice(7);
// console.log(res);

//Op:->    Bananaa, Kiwi, mango


// The slice() method selects the elements starting at the 
// Syntax
// slice()
// slice(start)
// slice(start, end)
// given start argument, and ends at, but does not include, 
// the given end argument.

// var str="Apple, Bananaa, Kiwi, mango";

// //let res = str.slice(0,4); //Appl
// let res=str.slice(7,-2);//Bananaa, Kiwi, man
// console.log(res);


// Note: The original array will not be changed.
// Remember: JavaScript counts positions from zero. First position is 0.






// 😀11: challenge Time 🏁

// Display only 280 characters of a string like the 
// one used in Twitter?

// let myTweets  = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? ";

// let myActualTweet = myTweets.slice(0,280);
// console.log(myActualTweet);
// console.log(myActualTweet.length);








// The substring() Method 🙋‍♂️
// substring() is similar to slice().

// The difference is that substring() cannot accept 
// negative indexes.

// var str = "Apple, Bananaa, Kiwi";
// let res = str.substring(7,-2);
// console.log(res);
//output :-> Apple, print 6 digits except 7th 


// // If we give negative value then the characters are
//  counted from the 0th pos 





// The substr() Method 🙋‍♂️
// substr() is similar to slice().

// The difference is that the second parameter specifies the 
// length of the extracted part.


// var str = "Apple, Bananaa, Kiwi";
// //let res = str.substr(7,-2); //Dosnt work for -ve.
// //let res = str.substr(-4); // Kiwi 
// let res = str.substr(-10); //anaa, Kiwi
// console.log(res);






// 👉 Replacing String Content() 

// String.prototype.replace(searchFor, replaceWith) 🙋‍♂️

// The replace() method replaces a specified value 
// with another value in a string.

// let myBioData = `I am Keshav Tyagi Keshav`;

// let repalceData = myBioData.replace('Keshav','keshav');
// console.log(repalceData);
// console.log(myBioData);


// Points to remember 
// 1: The replace() method does not change the string 
// it is called on.  It returns a new string.
// 2: By default, the replace() method replaces only 
// the first match
// 3:By default, the replace() method is case sensitive. 
// Writing Keshav (with upper-case) will not work







//👉 Extracting String Characters

// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]



// The charAt() Method 🙋‍♂️
// The charAt() method returns the character at a 
// specified index (position) in a string

// let str = "HELLO WORLD";

// console.log(str.charAt(9)); //L
// console.log(str.charAt(0)); //H






// The charCodeAt() Method 🙋‍♂️
// The charCodeAt() method returns the unicode of the 
// character at a specified index in a string:

// The method returns a UTF-16 code
//  (an integer between 0 and 65535).

// The Unicode Standard provides a unique number for every 
// character, no matter the platform, device, application, 
// or language. UTF-8 is a popular Unicode encoding which
//  has 88-bit code units.



// var str = "HELLO WORLD";
// console.log( str.charCodeAt(0) ); // 72




// 😀12: challenge Time 🏁

// Return the Unicode of the last character in a string

// let str = "HELLO WORLD";
// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));




// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings

// var str = "HELLO WORLD";
// console.log(str[1]); // E













//👉  Other useful methods 

// let myName = "Keshav tyagi";
// console.log(myName.toUpperCase()); 
// console.log(myName.toLowerCase());







// The concat() Method 🙋‍♂️
// concat() joins two or more strings

// let fName = "keshav"
// let lName = "tyagi"

// console.log(fName + lName );
// console.log(`${fName} ${lName}`);
// console.log(fName.concat(lName));
// console.log(fName.concat(" " ,lName));

// //Outuput:-> 
// keshavtyagi
// keshav tyagi
// keshavtyagi
// keshav tyagi

//All 4 are same thing





// String.trim() 🙋‍♂️
// The trim() method removes whitespace from both 
// sides of a string

// var str = "              Hello         World!            ";
// console.log(str.trim());
//output-> Hello         World!





//IMP
// Converting a String to an Array
// A string can be converted to an array with the 
// split() method

// var txt = "a, b,c d,e";   // String
// console.log(txt.split(","));           // Split on the basis of commas
// console.log( txt.split(" "));          // Split on spaces
// console.log(txt.split("|"));         // Split on pipe

// //Output->  
// [ 'a', ' b', 'c d', 'e' ]
// [ 'a,', 'b,c', 'd,e' ]
// [ 'a, b,c d,e' ]




/**** Section 8👉 Date and Time in JavaScript ****/

// JavaScript Date objects represent a single moment in time in a 
// platform-independent format. Date objects contain a Number 
// that represents milliseconds since 1 January 1970 UTC.

// 👉 Creating Date Objects
// There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
// // we cannot avoid month section 
// new Date(date string)



// new Date() 🙋‍♂️
// Date objects are created with the new Date() constructor.

// let currDate = new Date(); 
// console.log(currDate);

// console.log(new Date());
//console.log(new Date().toLocaleString()); // 9/11/2019, 1:25:01 PM
//console.log(new Date().toString()); // Wed Sep 11 2019 13:25:01 GMT+0700 (GMT+07:00)


// Date.now() 🙋‍♂️
// Returns the numeric value corresponding to the current time—the number 
// of milliseconds elapsed since January 1, 1970 00:00:00 UTC


//console.log(Date.now());


// new Date(year, month, ...) 🙋‍♂️
// 7 numbers specify year, month, day, hour, minute, second, 
// and millisecond (in that order)
// Note: JavaScript counts months from 0 to 11.

// January is 0. December is 11.

// var d = new Date(2021,0);
// console.log(d.toLocaleString());


// new Date(dateString) 🙋‍♂️
// new Date(dateString) creates a new date object from a date string

// var d = new Date("October 13, 2021 11:13:00");
// console.log(d.toLocaleString());

// new Date(milliseconds) 🙋‍♂️
// new Date(milliseconds) creates a new date object as zero time plus milliseconds:


// var d = new Date(0);
//var d = new Date(1609574531435);
// var d = new Date(86400000*2);
//console.log(d.toLocaleString());





//👉 Dates Method

//  const curDate = new Date();

// // how to get the indivisual date 
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); // 0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());



// // how to set the indivisual date 

// console.log(curDate.setFullYear(2022));
// // The setFullYear() method can optionally set month and day
// console.log(curDate.setFullYear(2022, 10, 5));
// let setmonth = curDate.setMonth(10); // 0-11 jan to dec
// console.log(setmonth);
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());






//👉 Time Methods

// const curTime = new Date();

// ////how to get the indivisual Time 

// console.log(curTime.getTime());
// // The getTime() method returns the number of milliseconds 
// since January 1, 1970
// console.log(curTime.getHours());
 // The getHours() method returns the hours of a date as a 
// // number (0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());






// // how to set the indivisual Time 

// let curTime = new Date();

 // console.log(curTime.setTime());
// console.log(curTime.setHours(5));
// console.log(curTime.setMinutes(5));
// console.log(curTime.setSeconds(5));
// console.log(curTime.setMilliseconds(5));







// // Practice Time 
// new Date().toLocaleTimeString(); // 11:18:48 AM
// //---
// new Date().toLocaleDateString(); // 11/16/2015
// //---
// new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM








//Challenge Time NOT yet decided
// (function(){
//   setInterval(()=> {
//     console.log(new Date().toLocaleTimeString());
//   }, 1000)
// })();




/**** Section 9👉 Math Object in JavaScript ****/

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

// console.log(Math.PI); 🙋‍♂️
//console.log(Math.PI);


// Math.round() 
//🙋‍♂️
// returns the value of x rounded to its nearest integer


// let num = 10.501;
// console.log(Math.round(num));


// Math.pow() 
//🙋‍♂️
// Math.pow(x, y) returns the value of x to the power of y


// console.log(Math.pow(2,3));
// console.log(2**3);


// Math.sqrt() 🙋‍♂️
// Math.sqrt(x) returns the square root of x


// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66));


// Math.abs() 🙋‍♂️
// Math.abs(x) returns the absolute (positive) value of x


// console.log(Math.abs(-55));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));
// console.log(Math.abs(4-6));



// Math.ceil() 🙋‍♂️
// Math.ceil(x) returns the value of x rounded up to its nearest integer


// console.log(Math.ceil(4.51));
// console.log(Math.round(4.51));
// console.log(Math.ceil(99.01));
// console.log(Math.round(99.1));


 
// Math.floor()  🙋‍♂️
// Math.floor(x) returns the value of x rounded down to its nearest integer

// console.log(Math.floor(4.7)); 
// console.log(Math.floor(99.1)); 



// Math.min() 🙋‍♂️
// Math.min() can be used to find the lowest value in a list of arguments

// console.log(Math.min(0, 150, 30, 20, -8, -200));



// Math.max() 🙋‍♂️
// Math.max() can be used to find the highest value in a list of arguments

// console.log(Math.max(0, 150, 30, 20, -8, -200));



// Math.random() 🙋‍♂️
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*10)); // 0 to 9



// Math.round() 🙋‍♂️
// The Math.round() function returns the value of a number 
// rounded to the nearest integer.

// console.log(Math.round(4.6));
// console.log(Math.round(99.1));



// Math.trunc()  🙋‍♂️
// The trunc() method returns the integer part of a number

// console.log(Math.trunc(4.6));  // op: 4

// console.log(Math.trunc(-99.1));  // op:-99
  


// Practice Time 

// if the argument is a positive number, Math.trunc() is equivalent to 
// Math.floor(),
// otherwise Math.trunc() is equivalent to Math.ceil().














// Section 10👉 Document Object model in JavaScript 

// 1️⃣ Window is the main container or we can say the 
// global Object and any operations related to entire 
// browser window can be a part of window object. 

// For ex 👉 the history or to find the url etc.

// 1️⃣ whereas the DOM (DOCUMENT) is the child of Window Object


// **********************************************************************
// **********************************************************************



// 2️⃣ All the members like objects, methods or properties. 
// If they are the part of window object then we do not refer 
// the window object. Since window is the global object 
// so you do not have to write down window. 
// - it will be figured out by the runtime.

// For example
// 👉 window.screen or just screen is a small information 
// object about physical screen dimensions.
// 👉 window.location giving the current URL
// 👉 window.document or just document is the main object 
// of the potentially visible (or better yet: rendered) 
// document object model/DOM.
  

// 2️⃣ Where in the DOM we need to refer the document, 
// if we want to use the document object, methods or properties
// For example
// 👉 document.getElementById()


// 3️⃣ Window has methods, properties and object. 
// ex setTimeout() or setInterval() are the methods 
// where as Document is the object of the Window and 
// It also has a screen object with properties 
// describing the physical display.


// Now, I know you have a doubt like we have seen the methods 
// and object of the global object that is window. But What about
// the properties of the Window Object 🤔

// so example of window object properties are
// innerHeight, 
// innerWidth and there are many more 

// let's see some practical in DOM HTML file




// ************** DOM vs BOM *******************

// 👉 The DOM is the Document Object Model, which deals with the document, 
// the HTML elements themselves, e.g. document and all traversal you 
// would do in it, events, etc.

// For Ex: 👨‍🏫
// change the background color to red
// document.body.style.background = "red";


// 👉 The BOM is the Browser Object Model, which deals with browser components 
// aside from the document, like history, location, navigator and screen 
// (as well as some others that vary by browser). OR 
// In simple meaning all the Window operations which comes under BOM are performed 
// usign BOM 




// Let's see more practical on History object 

// Functions alert/confirm/prompt are also a part of BOM: 
// they are directly not related to the document, 
// but represent pure browser methods of communicating with the user.

// alert(location.href); // shows current URL






// Section 3️⃣: Navigate through the DOM 

// 1: document.documentElement
      // returns the Element that is the root element of the document. 
// 2: document.head
// 3: document.body
// 4: document.body.childNodes (include tab,enter and whiteSpace)
  // list of the direct children only 
// 5: document.children (without text nodes, only regular Elements)
// 6: document.childNodes.length



// 👉 Practice Time 
// How to check whether an element has child nodes or not?
// we will use hasChildNodes()



// 👉 Practice Time 
// How to find the child in DOM tree 
// firstChild vs firstElementChild
// lastChild vs lastElementChild 
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"
// vs 
// document.querySelector(".child-two").style.color = "yellow";



// 👉 How to find the Parent Nodes 
// document.body.parentNode
// document.body.parentElement



// 👉 How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling



//SECTION 4️⃣:  How to search the Elements and the References 
// We will see the new file 





//Assignment Qus

// Difference Between getElementById and querySelector?
// Sol:
// What is getElementById ?
//Syntax:

// Element = document.getElementById(id);


// Return a reference to the element by its ID
// If the element with the spoecified ID is not in the document,
// it will return null. -->

// // What is querSelector()?
// Syntax:
// element = document.querySelector(selectors);

// Return the first element within the document that
// matches the specified  group of selectors,
// or null if no matches are found.


// For Example:

//getElementById vs querySelector : Similarties 

// console.log( document.getElementById('web-id').innerHTML );
// console.log( document.querySelector('#web-id').innerHTML );



//getElementById  vs  querySelector: Difference 
// <What if you get the Html content of the third li> You will not be able
// to use getElementById  because there is no id associated with it But you can 
// so with querySelector.

// console.log( document.querySelector('ul li.web-id').innerHTML );
// console.log( document.querySelector('li.web-id').innerHTML );
// console.log( document.querySelector('.web-id').innerHTML );



// **********************************************************************


/**** Section 11👉 EVENTS in JavaScript ****/


// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.


// 👨‍🏫 HTML Events
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:

// An HTML web page has finished loading (window.load()event)
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.

// HTML allows event handler attributes, with JavaScript code, 
// to be added to HTML elements.



// section 1️⃣ 4 ways of writing Events in JavaScript

// 1: using inline events alert();
// 2: By Calling a funcion (We already seen and most common way of writing) 
// 3: using Inline events (HTML onclick="" property and element.onclick)
// 4: using Event Listeners (addEventListener and IE's attachEvent)

// check the Events HTML File

//Iske Example screenshot me rakhe h 

//Differenve b/w onclick And addEventListener?

//Conclusion
// Thsi is because addEventListener does not overwrite existing event handlers,
// whereas onclick overrides any existing oneclick = fn event handlers.

//the other significant difference, of course ,is that onclick will always work,
//whereas addEventListener does not work in Internet explore before version 9.








// section 2️⃣: What is Event Object?
// Event object is the parent object of the event object. 
// for Example 
// MouseEvent, focusEvent, KeyboardEvent etc 



// section ️3️⃣ MouseEvent in JavaScript
// The MouseEvent Object
// Events that occur when the mouse interacts with the HTML 
// document belongs to the MouseEvent Object.



// section ️4️⃣ KeyboardEvent  in JavaScript
// Events that occur when user presses a key on the keyboard, 
// belongs to the KeyboardEvent Object.
// https://www.w3schools.com/jsref/obj_keyboardevent.asp


// Section 5️⃣ InputEvents in JavaScript 
// The onchange event occurs when the value of an element has been changed.

// For radiobuttons and checkboxes, the onchange event occurs when the 
// checked state has been changed.




// **********************************************************************

// 👉  JavaScript Timing Events

// **********************************************************************


// The window object allows execution of code at specified time intervals.

// These time intervals are called timing events.

// The two key methods to use with JavaScript are:

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.



// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.


// 1️⃣ setTimeout()

// 2️⃣clearTimeout()

// 3️⃣ setInterval()

// 4️⃣ clearInterval()


 
// **********************************************************************

// 👉 object oriented Javascript

// **********************************************************************


// 1️⃣ What is Object Literal?

// Object literal is simply a key:value pair data structure. 

// Storing variables and functions together in one container, 
// we can refer this as an Objects.

// object = school bag (consisit water bottle,books,geometry,all related stuff).

// How to create an Object?

// 1st way 

  // let bioData = { 
  //     myName : "keshavtyagi",
  //     myAge : 24,
  //     getData : function(){
  //       console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
  //     }
  // }

  // bioData.getData();

// 2nd way no need to write functions as well after es6

// let bioData = { 
//   myName : "keshavtechnical",
//   myAge : 26,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// bioData.getData();


// 👉 What if we want object as a value inside an Object 


// let bioData = { 
//   myName : {
//     realName : "keshav",
//     channelName : "keshav technical" 
//   },
//   myAge : 24,
//   getData (){
//     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
//   }
// }

// console.log(bioData.myName.channelName );








// 2️⃣ What is this Object?

// The definition  of "this" object is that it contain the current context. 

// The this object can have different values depending on where it is placed.  



// // ex 2 
// function myName() {
//     console.log(this);
// }
// myName();




// // For Example 2
// console.log(this.alert('Awesome'));
// // it refers to the current context and that is window global object 




// // ex 3 

// var myNames = 'keshav';
// function myName() {
//     console.log(this.myNames);
// }
// myName();


// // ex 4 
// const obj = {
//     myAge : 24,
//     myName() {
//       console.log(this.myAge);
//     }
// }
// obj.myName();  //op;-> 24 // current context change ho gya yha window se current object.






// // ex 5 
// // this object will not work with arrow function bcz arrow function is bound to class.

// const obj = {
//     myAge : 26,
//     myName : () => {
//       console.log(this);
//     }
// }
// obj.myName();



// // ex 6

// let bioData = {
//     myName : {
//         realName : "Keshav tyagi",
//         channelName : 'keshav technical'
//     },
//     // things to remember is that the myName is the key and the object is act like a value 
//     myAge : 26,
//     getData (){
//       console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
//     }
//   }

//   bioData.getData();
 //output:->  My name is keshav technical and my age is 26 



// // call method is used to call the method of another object 
// // or with call(), an object can use a method belonging to another object 

// // But as per other it is simply the way to use the this keyword or another object 




//Object prperties (refer MDN)

//Spread Operator 
// const colors = ['red','green','blue','white','pink'];

// const mycolors = ['red','green','blue','white','pink','yellow','black'];
// // // 2nd time add one more color on top and tell we need to write it again
// // // on myColor array too

// const myFavColors =[ ...colors, 'yelloe','black'];

// console.log(myFavColors);
// //Output:-> 
// [
//   'red',   'green',
//   'blue',  'white',
//   'pink',  'yelloe',
//   'black'
// ]






// // **********************************************************************

// // 👉 How JavaScript Works? Advanced and Asynchronous JavaScript

// // **********************************************************************


// // Advanced JavaScript Section

// // 1️⃣: Event Propagation (Event Bubbling and Event Capturing)

// // Check html file 
//Event bubbling is run by default if their is not any thing applied

// // 2️⃣: Higher Order Function
// // function which takes another function as an arguments is called HOF 
// // wo function jo dusre function ko as an argument accept krta hai use HOF 


// // 3️⃣: Callback Function
// // function which get passed as an argument to another function is called CBF 
// // A callback function is a function that is passed as an argument to 
// // another function, to be “called back” at a later time. 

// // Jis bhi function ko hum kisi or function ke under as an arguments passed 
// // krte hai then usko hum CallBack fun bolte hai 


// // // we need to create a calculator 

// const add = (a,b) => {
//     return a+b;
// }
// // console.log(add(5,2));

// const subs = (a,b) => {
//     return Math.abs(a-b);
// }
// const mult = (a,b) => {
//     return a*b;
// }
//Fun which accept another function as an argument and also return;
// const calculator = (num1,num2, operator) => {
//   return operator(num1,num2);
// }

// calculator(5,2,subs)

// console.log(calculator(5,2,subs));

//In upper case calculator is a HOF and other sub,add,mul are the call back function. for defination see upper lines.

// // // I have to do the hardcoded for each operation which is bad
// // // we will use the callback and the HOF to make it simple to use 




// // // Now instead of calling each function indivisually we can call it
// // // by simply using one function that is calculator 

// console.log(calculator(5,6,add));
// console.log(calculator(5,6,subs));
// console.log(calculator(5,6,mult));

// // In the above example, calculator is the higher-order function, 
// // which accepts three arguments, the third one being the callback.
// // Here the calculator is called the Higher Order Function because it takes
// // another function as an argument 

// // and add, sub and mult are called the callback function bcz they are passed 
// // as an argument to another fucntion 








// // InterView Question 
// // Difference Between Higher Order Function and Callback Function ?
//Already dicussed.

// // 🏁🏁Asynchronous JavaScript


// // 6️⃣:   Synchronous JavaScript Prog 
//Phle aaya kam phle krenge chahe dusra kam 5second ka ho
// 1work = 10min
// 2work = 5s

// const fun2 = () => {
//   console.log(`Function 2️⃣ is called`);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();


// Asynchronous JavaScript Prog 
//rukna nhi padega kisi ko bhi blki sb ek sath chalega 


//Isme ek chiz dekhpo fun 2 mene 2 sec ke liye roka ha to wo 2 sec me phle fun1() ko kr dega ruke ga nhi fir 2 ko krega 


// const fun2 = () => {
//   setTimeout(()=> {
//       console.log(`Function 2️⃣  is called`);
//   }, 2000);
// }

// const fun1 = () => {
//   console.log(`Function 1 is called`);
//   fun2();
//   console.log(`Function 1 is called Again ✌`);
// }

// fun1();


// //👻 What is Event Loop in JavaScript?
// // ppt explain 


// // 5️⃣ Hoisting in JavaScript 

// // we have a creation phase and execution phase.

// // Hoisting in Javascript is a mechanism where variables and functions
// // declarations are moved to the top of their scope before the code execute.

// For Example 👇
// console.log(myName);
// let myName;
// myName = "keshav";

// // How it will be in output during creation phase 

// 1: var myName = undefined;
// 2: console.log(myName);
// 3: myName = "keshav";


// //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword 
// // instead of var. (The other difference is that variables declared 
// // with let are local to the surrounding block, not the entire function.)



// // 6️⃣ What is Scope Chain and Lexical Scoping in JavaScript? 

// // The scope chain is used to resolve the value of variable names 
// // in JS.

// // scope chain in js is lexically defined, which means that we can 
// // see what the scope chain will be by looking at the code. 

// // At the top, we have the Global Scope, which is the window Object
// // in the browser.

// // Lexical Scoping means Now, the inner function can get access to 
// // their parent functions variables But the vice-versa is not true.


// // For Example 👇

// let a = "Hello guys. "; // global scope

// const first= () => {
//   let b = " How are you?"
 
//     const second = () => {
//       let c = " Hii, I am fine thank you🙏";
//       console.log(a+b+c);
//     }
//     second();
//     console.log(a+b+c); //I can't use C 
// }

// first();



// // 7️⃣ What is Closures in JavaScript 🤔

// // A closure is the combination of a function bundled together (enclosed) with references 
// // to its surrounding state (the lexical environment). 

// // In other words, a closure gives you 
// // access to an outer function’s scope from an inner function. 

// // In JavaScript, closures are created every time a function is created, at function creation time.

// // For Example 👇

// const outerFun = (a) => {
//     let b = 10;
//     const innerFun = () => {
//       let sum = a+b;
//       console.log(`the sum of the two no is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);
//Output:-> the sum of the two no is 15.



// // it same like lexical scoping 

// // One more Example 👇

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a+b;
//     console.log(`the sum of the two no is ${sum}`);
//   }
//   return innerFun;
// }
// let checkClousure = outerFun(5);
// console.dir(checkClousure);



// "use strict"

// let x = "keshav";
// console.log(x);


// //🏁🏁🏁 Back To Advanced JavaScript 




// Currying

// function sum(num1){
//   //console.log(num1);
//   return function(num2){
//   // console.log(num1,num2);
//   return function(num3){
//     console.log(num1+num2+num3);
//   }
//   }
// }
// sum(5)(3)(8);  //Output->16


// or we can use fat arrow and do it in





// const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3); 

// sum(5)(3)(8);

// // **********************************************************************


// // **********************************************************************



// // 8️⃣: CallBack Hell 
//ek ke andar ek 


// setTimeout(()=>{
//     console.log(`1️⃣ works is done`);    
//     setTimeout(()=>{
//         console.log(`2️⃣ works is done`); 
//         setTimeout(()=>{
//             console.log(`3️⃣ works is done`);  
//             setTimeout(()=>{
//                 console.log(`4️⃣ works is done`); 
//                 setTimeout(()=>{
//                     console.log(`5️⃣ works is done`);   
//                     setTimeout(()=>{
//                         console.log(`6️⃣ works is done`);    
//                     }, 1000) 
//                 }, 1000)   
//             }, 1000)  
//         }, 1000)   
//     }, 1000)
// }, 1000)



//ISSE BACHNE KE LIYE HMARE PASS HA PROMISES






// // **********************************************************************

// // 👉 // 🤩 Bonus JSON 🤩

// // **********************************************************************


// // 👉 JSON.stringify turns a JavaScript object into JSON text and 
// stores that JSON text in a string, eg:

// var my_object = { key_1: "some text", key_2: true, key_3: 5 };

// var object_as_string = JSON.stringify(my_object);  
// // "{"key_1":"some text","key_2":true,"key_3":5}"  

// console.log(object_as_string);

// typeof(object_as_string);  
// "string" 


// // 👉 JSON.parse turns a string of JSON text into a JavaScript object, eg:

// var object_as_string_as_object = JSON.parse(object_as_string);  
// // {key_1: "some text", key_2: true, key_3: 5} 

// typeof(object_as_string_as_object);  
// // "object" 



// // 7️⃣ AJAX Call using XMLHttprequest 

// // how to handled with the events and callback 

// // XMLHttpRequest (XHR) objects are used to interact with servers. 
// // You can retrieve data from a URL without having to do a full 
// // page refresh. This enables a Web page to update just part 
// // of a page without disrupting what the user is doing. 
// // XMLHttpRequest is used heavily in AJAX programming.

// const request = new XMLHttpRequest();
// // we need to call the api or request the api using GET method ki, me jo
// // url pass kar kr rha hu uska data chaiye 
// request.open('GET', "https://covid-api.mmediagroup.fr/v1");
// request.send(); // we need to send the request and its async so we need to 
// // add the event to load the data adn get it

// // to get the response 
// request.addEventListener("load", () => {
//     console.log(this.responseText);
// });


















