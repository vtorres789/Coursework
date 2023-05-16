/* ---- */
/* UNIT TESTS */
/* ---- */

/* (1) A function called "multiplication" that returns the product of the two input numbers. */
/* ---- */

/* 
multiplication(x: number, y: number)
1) Expect "multiplication" to take the two numbers in the parentheses and multiply them against each other. 

2) Expect x and y to be integers

3) Expect the output to be an integer

4) Expect for example, Muliplication(2, 4) to be 8.

*/

/* ---- */
/* (2 )A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.  */
/* ---- */

/* 
concatOdds([intArray1], [intArray2])
1) Expect arrays intArray1 and intArray2 to be comprised of integers
2) Expect filtering of each array to return odd integers
3) Expect multiple of the same integer to only be returned once. 
4) Expect non-integer inputs to output an error and loop again to ask for an integer input


*/

/* ---- */
/* FUNCTIONAL TESTS */
/* ---- */


/* (1) A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.  */

/* 
1) Expect checkout to fail if cart is empty

2) Expect little cart icon to show amount of items in each step of checkout

3) Expect logged in users to not have the guest user prompt

4) Expect non-signed in users to have the guest or sign in prompt. 

5) Expect checkout to work either way, but prompt for sign in/create account or guest checkout to be able to do the actual checkout

6) Expect invalid emails or existing email accounts to produce an error. 

*/
