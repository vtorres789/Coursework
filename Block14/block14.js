// Only odds
/* take an array as input
loop until the amount of items in the list is used up
within that loop, do a true/false check whether each value is even or odd. Print results
*/
console.log("Only Odds")
function onlyOdds(array_input) {
    const odds_array = []

    for (const a of array_input) {
        if (a % 2 !== 0) {
            // Add the number to the new array.
            odds_array.push(a);
        }
    }
    if (odds_array.length === 1) {
        console.log(odds_array[0]);
      }
    console.log(odds_array);   
}

onlyOdds([2, 4, 6, 8, 11, 20, 15, 22])
onlyOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
onlyOdds([70, 42, 55, 81, 21, 91, 34])
onlyOdds([2, 4, 6, 8, 10, 11, 12])

console.log("Vowels and Consonants")
// Vowel vs Consonant
/* 
    Input a string. 
    convert all input to lowercase
    create if/then/else to check for a,e,i,o,u
    the else will be consonants
    if a vowel is found, it should be added to a counter variable for vowels, likewise for consonants
    print word + number of vowels and consonants
 */

console.log("Reverse Arrays")
// Reverse Array
/* 
    Take input of the array
    create a for loop that runs for each element of the array. 
    use the reverse() function to reverse the original array and then console.log it

*/

function Array_Reversal(array) {
    const reversedArray = []

    for(let i = array.length - 1; i >= 0; i--) {
    const valueAtIndex = array[i]
    
    reversedArray.push(valueAtIndex)
    }
    console.log(reversedArray)
}

Array_Reversal([1, 2, 3])
Array_Reversal([1, 3, 5, 7, 9, 11])
Array_Reversal([20, 50, 30, 60, 200])
Array_Reversal([1, -1, 2, -3, 5, -8, 13])

// FizzBuzz
console.log("FizzBuzz")
/* 
    for loop with the condition of being from 1 to 100
    if multiple of 3: print Fizz
    else if multiple of 5: print Buzz
    else if multiple of 3 and 5: print FizzBuzz
    else print the actual number
*/