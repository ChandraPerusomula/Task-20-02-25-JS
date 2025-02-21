// this is first code in "JS"
console.log("Solo Leveling");

am=86
an=60
console.log(am);
console.log(an);
console.log(am + an );
console.log(am - an );
console.log(am * an );
console.log(am % an );
console.log(am ** an );
console.log(am / an );
console.log(am += an );
console.log(am == an );

// DATA TYPES :- example

var a=84;       // Holding number
var b="chandra" // Holding String

/* Data Types of JS

1. Primitive Data Type :

    * Number
example:-
var a= 10;
var b=18.95;

    *String
example:-
var an='hello'
var am+"world"

    *Boolean
    example:-
    var d=true


2. NON-Primitive (reference)Data types :
      * Object
      * Array
      * Regexp


/*Write a JavaScript script that compares two variables using different comparison operators (==, ===, !=, !==, >, <, >=, <=) and prints the results?*/
// Define two variables for comparison
let variable1 = 10;
let variable2 = "10";

// Comparison using == (loose equality)
console.log("variable1 == variable2:", variable1 == variable2);             

// Comparison using === (strict equality)
console.log("variable1 === variable2:", variable1 === variable2); 

// Comparison using != (loose inequality)
console.log("variable1 != variable2:", variable1 != variable2); 

// Comparison using !== (strict inequality)
console.log("variable1 !== variable2:", variable1 !== variable2); 

// Comparison using > (greater than)
console.log("variable1 > 5:", variable1 > 5); 
console.log("variable1 > 15:", variable1 > 15); 

// Comparison using < (less than)
console.log("variable1 < 15:", variable1 < 15); 
console.log("variable1 < 5:", variable1 < 5); 

// Comparison using >= (greater than or equal to)
console.log("variable1 >= 10:", variable1 >= 10); 
console.log("variable1 >= 11:", variable1 >= 11); 

// Comparison using <= (less than or equal to)
console.log("variable1 <= 10:", variable1 <= 10); 
console.log("variable1 <= 9:", variable1 <= 9); 

/* 2.  Write a JavaScript script that uses the ternary operator to determine
 if a number is even or odd?
 */


 function checkEvenOrOdd(number) {
    // Use the ternary operator to determine if the number is even or odd.
    const result = number % 2 === 0 ? "even" : "odd";
    console.log(`${number} is ${result}.`);
  }
  
  checkEvenOrOdd(10);  
  checkEvenOrOdd(7);
  checkEvenOrOdd(0);
  checkEvenOrOdd(-5);
  checkEvenOrOdd(-8);  
  
  //Another way to write it with out the function.
  let num = 11;
  let outcome = num % 2 === 0 ? "even" : "odd";
  console.log(`${num} is ${outcome}.`); 

  /*
  Expand the script to include a ternary operation 
that checks if a user is an adult (18+) or a minor?
*/

function checkEvenOrOddAndAdult(number, age) {
    const evenOddResult = number % 2 === 0 ? "even" : "odd";
    const adultMinorResult = age >= 18 ? "adult" : "minor";
    console.log(`${number} is ${evenOddResult} and the user is an ${adultMinorResult}.`);
  }
  
  // Example usage:
  checkEvenOrOddAndAdult(10, 25);
  checkEvenOrOddAndAdult(7, 16);
  checkEvenOrOddAndAdult(0, 18);
  checkEvenOrOddAndAdult(-5, 12);
  checkEvenOrOddAndAdult(-8, 30);
  
  // Another way without function
  let number = 11;
  let age = 20;
  
  let outcomeEvenOdd = number % 2 === 0 ? "even" : "odd";
  let outcomeAdultMinor = age >= 18 ? "adult" : "minor";
  
  console.log(`${number} is ${outcomeEvenOdd} and the user is an ${outcomeAdultMinor}.`); 


  /*Grade Classification: Declare a variable score and 
set it to a value between 0 and 100.
 Use nested ternary operators to classify the score into grades:
  A (>= 90), B (>= 75), C (>= 60), D (>= 45), and F (below 45).
   Log the grade?
   */


   let score = 82; // Example score, change this value to test different grades

let grade = score >= 90 ? 'A' :
            score >= 75 ? 'B' :
            score >= 60 ? 'C' :
            score >= 45 ? 'D' : 'F';

console.log(`Score: ${score}, Grade: ${grade}`);


/*Declare a variable temperature and 
 use nested ternary operators to categorize it as "Hot" (above 30),
  "Warm" (20-30), "Cool" (10-19), and "Cold" (below 10). 
  Log the result.

 Age Group: Declare a variable age and 
 use the ternary operator to classify the age into "Child"
  (0-12), "Teen" (13-19), "Adult" (20-64), 
  and "Senior" (65 and above). Log the result?
  */

  // Temperature Categorization
let temperature = 25; 
let temperatureCategory = temperature > 30 ? "Hot" :
                          temperature >= 20 ? "Warm" :
                          temperature >= 10 ? "Cool" : "Cold";

console.log(`Temperature: ${temperature}, Category: ${temperatureCategory}`);

// Age Group Categorization
let Age = 30; 

let ageGroup = Age <= 12 ? "Child" :
               Age <= 19 ? "Teen" :
               Age <= 64 ? "Adult" : "Senior";

console.log(`Age: ${Age}, Group: ${ageGroup}`);




