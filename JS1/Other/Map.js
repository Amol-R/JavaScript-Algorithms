

let a= ['12','13','14','14']
console.log(a)
let b = a.map(ele => +ele)
console.log(b)

// ==========================================================================================

// Second largest number using .map method

let aa = [2, 4, 6, 34, 76, 3, 4, 6, 8, 9];

// Step 1: Find the largest number in the array
let max = Math.max(...aa);        //  The spread operator (...) expands an array into individual arguments.

// Step 2: Filter out the largest number from the array
let filteredArray = aa.filter(num => num !== max);

// Step 3: Find the largest number in the filtered array, which will be the second largest
let secondLargest = Math.max(...filteredArray);

console.log(secondLargest); // Output: 34

//  ============================================================================

// Third largest number using .map method

// let aa = [2, 4, 6, 34, 76, 3, 4, 6, 8, 9];

// // Step 1: Find the largest number
// let max1 = Math.max(...aa);

// // Step 2: Replace the largest number with -Infinity to exclude it
// let tempArray1 = aa.map(num => (num === max1 ? -Infinity : num));
// let max2 = Math.max(...tempArray1); // Second largest number

// // Step 3: Replace the second largest number with -Infinity
// let tempArray2 = tempArray1.map(num => (num === max2 ? -Infinity : num));
// let max3 = Math.max(...tempArray2); // Third largest number

// console.log(max3); // Output: 9


// ===========================================================================================

// Second largest number using .filter method

// let aa = [2, 4, 6, 34, 76, 3, 4, 6, 8, 9];

// // Using .map to create a new array marking elements smaller than the largest
// let max = Math.max(...aa);     // The spread operator (...) expands an array into individual arguments.
// let secondLargest = Math.max(...aa.map(num => (num === max ? -Infinity : num)));
// // -Infinity in JavaScript represents a numeric value that is less than any other number.
// console.log(secondLargest); // Output: 34

// ======================================================================

// Third largest number using .filter method

// let aa = [2, 4, 6, 34, 76, 3, 4, 6, 8, 9];

// // Step 1: Find the largest number
// let max1 = Math.max(...aa);     // The spread operator (...) expands an array into individual arguments.

// // Step 2: Filter out the largest number and find the second largest
// let max2 = Math.max(...aa.filter(num => num !== max1));

// // Step 3: Filter out the first and second largest, and find the third largest
// let max3 = Math.max(...aa.filter(num => num !== max1 && num !== max2));

// console.log(max3); // Output: 9
