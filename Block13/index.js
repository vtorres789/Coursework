/*
Prompt: 
Using if/else if/else statements, code in a JavaScript file that takes the sum of two numbers and prints the corresponding result:
sum + " is less than -1000";
sum + " is a negative number";
sum + " is equal to 0";
sum + " is larger than 0";
sum + " is greater than 100";

Test Values: 
num1	num2	Expected Print

50	51	"101 is greater than 100"
99	-2	"97 is greater than 0"
0	101	"101 is greater than 100"
500	-500	"0 is equal to 0"
-1000	0	"-1000 is a negative number"
-5	0	"-5 is a negative number"
--------------------------------------------------
Create a functio and name it numberLine
Make function take two parameters and name them val1/val2
Inside functionm create a new value and name it sumValue
Assign sumValue the sum of val1 and val2
create multi else if statments
use conditional statements to compare sumValue to corresponding value and then return and print desired result from above eg:
if(sumValue < -1000){
return console.log(sumValue + " is less than -1000")
}
complete the rest of the conditional statements with else if and a final else
test code and call function passing in the test values
*/

console.log("------------Number Line Function------------------------")

function numberLine(val1,val2){
    const sumValue = val1 + val2;

    if (sumValue < -1000){
        return console.log(sumValue + " is less than -1000")
    } else if(sumValue < 0){
        return console.log(sumValue + " is a negative number")
    } else if (sumValue > 0){
        return console.log(sumValue + " is greater than 0")
    } else if (sumValue > 100){
        return console.log(sumValue + " is greater than 100")
    } else {
        return console.log(sumValue + " is equal to 0");
    }
}

numberLine(50,51)
numberLine(99,-2)
numberLine(0,101)
numberLine(500,-500)
numberLine(-1000,0)
numberLine(-5,0)
numberLine(-10001,0)


/* 
Prompt: 
Using if/else statements, code in a JavaScript file that follows the following rules:
If the value is truthy, print true;
If the value is falsy, print the corresponding result:
"The boolean value false is falsy";
"The null value is falsy";
"undefined is falsy";
"The number 0 is falsy (the only falsy number)";
"The empty string is falsy (the only falsy string)";

Test Values:
Input Values	Expected Print
"I am a string"	true
false	"The boolean value false is falsy"
null	"The null value is falsy"
undefined	"undefined is falsy"
0	"The number 0 is falsy (the only falsy number)"
""	"The empty string is falsy (the only falsy string)"
--------------------------------------------------------
Create a function and name it isTruthy
Make function take one parameter and name it value
Inside function create multiple else if conditional statments
Make the if statement the standalone truthy statement and make it return and print true
For the rest of the statments make value === (to desired test value from above) and make it return and print out expected print
EG:
 else if (value === false) {
        return console.log("The boolean value false is falsy")
Repeat for rest of test values use final test value as an else statement
Test code using the above test value as the parameter
*/

console.log("------------Is Truth Function------------------------")
function isTruthy(value){
    
    if(value){
        return console.log(true);
    } else if (value === false) {
        return console.log("The boolean value false is falsy")
    } else if (value === null) {
        return console.log("The null value is falsy")
    } else if (value === undefined) {
        return console.log("undefined is falsy")
    } else if (value === 0) {
        return console.log("The number 0 is falsy (the only falsy number)")
    }else {
        return console.log("The empty string is falsy (the only falsy string)")
    }

}

isTruthy("String")
isTruthy(false)
isTruthy(null)
isTruthy(undefined)
isTruthy(0)
isTruthy('')

/* 
Prompt:
Using if/else statements, code in a JavaScript file that prints true if both parameters are greater or equal to 5.

Test Values:
num1	num2	Expected Print
5	6	true
10	11	true
0	0	false
1000	-1000	false
6	4	false
5	5	true 
------------------------------------------------
Create a function call it greaterThan5
Make function take two parameters
Name parameters val1, val2 
Create an if-else statment that compares if both val1 && val2 are greater than or equal to 5.
In the if condition statement use >= comparison operator / &&  logical operator
In if-condition if both val1 and val2 are greater than or equal to 5 is true return console.log(true)
Otherwie in else statement return console.log(false) 
Test code using test values as shown above
Test code by calling function using the parameters as the test values from above
*/
console.log("------------Greater Than 5 Function------------------------")

function greaterThan5(val1,val2){

    if(val1 >= 5 && val2 >= 5){
        return console.log(true)
    }else {
        return console.log(false)
    }
}

greaterThan5(5,6);
greaterThan5(10,11);
greaterThan5(0,0);
greaterThan5(1000,-1000);
greaterThan5(6,4);
greaterThan5(5,5);

/* 
Prompt: 
Create a function that takes 4 parameters that will compare two sets of each pair
The function should return true if at least one of the pairs is truthy otherwise return false
Whatever the outcome of the conditional statement is console.log the returned value

Test Values:
p1a| p1b | p2a | p2b | expected result
"cat"	"cat"	6	"6"	true
"five"	5	"dog"	"dawg"	false
0	false	"horse"	"horse"	true
"eight"	"eight"	"ate"	"ate"	true
11	"eleven"	"four"	"for"	false
"cake"	"cake"	"pie"	"pie"	true
-------------------------------------
Create function and name it pairAndCompare
Make function  take 4 parameters and name the pararmeters the followng: param1a,param1b,param2a,param2b
inside function create an if else statment
As the conditional statment compare the a/b pairs using strictly equal operator
use or operator in conditional statment so if at least one of the comparisons is true the if conditional will run
Make the if condition if true return a print of true
Make the else statement return a print of false  
Test code using test values as shown above
Test code by calling function using the parameters as the test values from above
*/
console.log("------------Pair And Comapre Function------------------------")
function pairAndCompare(param1a,param1b,param2a,param2b){
    
    if(param1a === param1b || param2a === param2b){
        return console.log(true)
    }else{
        return console.log(false)
    }
}


pairAndCompare("cat","cat",6,"6");
pairAndCompare("five",5,"dog","dawg");
pairAndCompare(0,false,"horse","horse");
pairAndCompare("eight","eight","ate","ate");
pairAndCompare(11,"eleven","four","for",);
pairAndCompare("cake","cake","pie","pie");