let a = [-5,2,10,4,6]

let b = a.sort()
console.log(b)

// 1. Sorting an Array of Strings (Alphabetically)

// let fruits = ["Banana", "Apple", "Mango", "Orange"];
// fruits.sort();
// console.log(fruits); 
// // Output: ["Apple", "Banana", "Mango", "Orange"]

//==================================================================================
// 2. Sorting an Array of Numbers (Ascending Order)
// By default, .sort() converts elements to strings, so sorting numbers requires a compare function.

// let numbers = [34, 7, 23, 32, 5, 62];
// numbers.sort((a, b) => a - b);
// console.log(numbers); 
// Output: [5, 7, 23, 32, 34, 62]

//========================================================================
// 3. Sorting in Descending Order

// numbers.sort((a, b) => b - a);
// console.log(numbers);
// Output: [62, 34, 32, 23, 7, 5]
//=====================================================================

// 4. Sorting an Array of Objects by a Property
// If you have an array of objects and want to sort by a property (e.g., age):

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 }
];

people.sort((a, b) => a.age - b.age);
console.log(people);
//  Output:
// [
//   { name: "Bob", age: 20 },
//   { name: "Alice", age: 25 },
//   { name: "Charlie", age: 30 }
// ]
//=================================================================================