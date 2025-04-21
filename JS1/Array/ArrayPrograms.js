
// Double the number of array element
// let numbers = [4, 2, 3];
// let squared = numbers.map(num => (num) * (num));
// console.log(squared); // Output: [ 16, 4, 9 ]

//===============================================================================
//num+1 & its square
// let numbers = [1, 2, 3];
// let squared = numbers.map(num => (num+1) * (num+1));
// console.log(squared); // Output: [ 4, 9, 16 ]

//=================================================================================

// double the every alternate second element
// let numbers = [6, 4, 7, 2, 5];    //[ 6, 8, 7, 4, 5 ]

// let updatedNumbers = numbers.map((num, index) => index % 2 === 1 ? num * 2 : num );
// console.log(updatedNumbers);      //[ 6, 8, 7, 4, 5 ]

// let updatedNumbers = numbers.map((num, index) => index % 2 === 0 ? num * 2 : num );  
// console.log(updatedNumbers);      // [ 12, 4, 14, 2, 10 ]

//==================================================================================================

let numbers = [16, 17, 4, 3, 5, 2, 5, 0, 1, 3];

let result = numbers.filter((num, index) => (index + 1 ) % 3 === 0);
console.log(result);          // [ 4, 2, 1 ]

// let result = numbers.filter((num, index) => (index + 1) % 2 === 0);
// console.log(result);          // [ 17, 3, 2, 0, 3 ]

// let result = numbers.filter((num, index) => (index + 2) % 2 === 0);
// console.log(result);             // [ 16, 4, 5, 5, 1 ]

//==================================================================================================

// Write Program takes an array of integers and returns the largest difference between any two numbers in the array. 

// let arr  = [11,1,16,18,22,26]

// let a= arr.sort()
// console.log(a)
// let max = a[a.length-1]
// console.log(max)
// let min = a[0]
//  console.log(min)
// let diff  = max-min
// console.log(diff)

//==================================================================================================

// input [2,5,8,1] output [16, 14, 9, 1]

// let arr = [2,5,8,1]
//   let res = [];
//     let sum = 0;
    
//     for (let i = arr.length - 1; i >= 0; i--) {
//         sum += arr[i];
//         res.unshift(sum)   
//     }
//         console.log(res)

        //unshift() method in JavaScript is used to add one or more elements
        // to the beginning of an array and returns the new length of the array