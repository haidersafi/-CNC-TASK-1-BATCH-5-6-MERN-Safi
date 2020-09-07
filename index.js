/**
|--------------------------------------------------
| TASK 1
Create A program that takes a name from the user and append "Mr." at the start of the name.
|--------------------------------------------------
*/
var mrName=prompt("Enter Your Name:");
alert(`Your Name is Mr.${mrName[0].toUpperCase()+mrName.slice(1)}`);


/**
|--------------------------------------------------
| TASK 2
Create a program that takes an input from the user as a string, count the number of characters and show it in alert
HINT =====> String is an array of characters in javascript's core
|--------------------------------------------------
*/
var string=prompt("Enter Any String:");
alert(`Number of characters in your string is ${string.length}`);


/**
|--------------------------------------------------
| TASK 3
Create a program that takes an input from user as a string and remove any whitespaces in the input given.
HINT ====> search for "trim" in javascript
|--------------------------------------------------
*/
var stringInput=prompt("Enter Any String:");
alert(`string without whitspaces:${stringInput.trim()}`);


/**
|--------------------------------------------------
| TASK 4
Which of the following variable names are incorrect? 
1. _name
2. $name_1
3. 1_#name
4. #name

3 and 4 are incorrect Variable names
|--------------------------------------------------
*/



/**
|--------------------------------------------------
| TASK 5
Solve the equation below and the answer should not be in float point value

2 + 6 * 8 - 9 + (2/3) + 9
answer:51
|--------------------------------------------------
*/
var eq=2 + 6 * 8 - 9 + (2/3) + 9;
alert(`Answer of equation is ${Math.round(eq)}`);

/**
|--------------------------------------------------
| TASK 6
What will be the output of the following program? 

var product1 = 200 * 3;
var product2 = 300; 
var discount = 20; 
var total = (product1 + product2) / discount
|--------------------------------------------------
*/
output:45

/**
|--------------------------------------------------
| TASK 7
write a program that performs the following operations


1. data type of phone number should be a number 
2. data type of NIC should be string 
3. add a greeting before the name e.g hello mr.{name}

var phoneNumber = 03205757562 
var NIC = 4250187968352
var name = "umair"

|--------------------------------------------------
*/
var phoneNumber=03205757562;
var NIC=string(4250187968352);
var name = "umair"
`Your Name is Mr.${name[0].toUpperCase()+name.slice(1)}`);
/**
|--------------------------------------------------
| TASK 8
var age = 21

write the following condition in a single line 

if (age >= 20) {
    console.log("Eligible")
}

HINT ====> search for single line statements in javascript

|--------------------------------------------------
*/
if (age>=20)console.log("Eligible");

/**
|--------------------------------------------------
| TASK 9
What will be the output of the following program? 

var product1 = 500 * 3;
var product2 = 600;
var discount = 20;
var total = (product1 + product2) / discount
var budget = 100

if (total < budget) {
    console.log("You did not exceed the budget")
} else {
    console.log("You are not allowed to spend this much money")
}

|--------------------------------------------------
*/
// output:You are not allowed to spend this much money
/**
|--------------------------------------------------
| TASK 10
What is the output of the following program 

var SAT = 200;
var avg = 150;
var GPA = 3;
var sport = "snooker"

if (SAT > avg || GPA > 2.5 || sport === "football") {
    console.log("You're an awesome student");
}
else {
    console.log("You are not eligible");
}

|--------------------------------------------------
*/
// output:You're an awesome student
/**
|--------------------------------------------------
| TASK 11
var myMarks = [30,45,68,32,45];
var criteria = 30; 
var bonusPoints = 5;

Solve the following scenario using the code above

You are given marks of a single student in an array, generate a loop that will "add" bonus points in each of the grade
in the array, then compare the new marks with the criteria given if any mark is less than criteria the student will be 
marked failed otherwise passed 
|--------------------------------------------------
*/
var myMarks = [24,45,68,32,45];
var bonusPoints = 5;
var failed=false;
for (var i=0;i<myMarks.length;i++){
if (myMarks[i]+bonusPoints<30){
failed=true;
console.log("Failed");
break;
}
}
if (failed==false)console.log("Passed");





/**
|--------------------------------------------------
| TASK 12
What will the output at each of the console statements? 

var array=[1,2,3,4,5];
console.log(array.splice(2));
output:[3,4,5]
 
console.log(array);
output:[1,2]
 
var array2=[6,7,8,9,0];
console.log(array2.splice(2,1));
output:[8]
 
console.log(array2.splice(2,0));
output:[]
 
console.log(array2);
output:[6,7,9,0]
|--------------------------------------------------
*/


/**
|--------------------------------------------------
| TASK 13
write an arrow function that takes in a string as an argument and returns the string in uppercase letters.
var demofunction=(string)=>string.upp

|--------------------------------------------------
*/
var demoFunction=string=>string.toUpperCase();
/**
|--------------------------------------------------
| TASK 14
Write a function to sort an array of numbers in ascending or descending order
|--------------------------------------------------
*/


var sortArray=(array)=>array.sort();

/**
|--------------------------------------------------
| TASK 15
Write a function and the functions duty is to first check 
if the argument passed is a string..if it is then you should concatenate behind the sring "Welcome"  and return it
if the argument passed is a number then it should be multiplied by the power of 2 and return it
|--------------------------------------------------
*/
var checkArgType=(a)=>{
if (typeof(a)=="string"){
    return (`Welcome ${a}`)
}
else if(typeof(a)=="number"){
    var result=1;
    for (var i=1;i<=a;i++){
        result*=2
    }
    return (`${result}`);
}
else {return(`Type of Argument should be either number or string`)}

}




/**
|--------------------------------------------------
| TASK 16
Write a function to round a number to a specified number of digits. when passed as an argument and return it
Example: 
roundNumber(4.6); 
Expected Ouput: 5 ===> The number is rounded off 
|--------------------------------------------------
*/
var roundFunc=(a)=>Math.round(a);