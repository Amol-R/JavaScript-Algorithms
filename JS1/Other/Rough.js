// remove duplicate

// let a = 'geeksofgeeks'
// function rem(arr){
//     let b = [...new Set(arr)]
//     console.log(b.join(''))
// }
// rem(a)

// let a = 'geeksofgeeks'
// let b = ''
// for(let i = 0 ; i<a.length ;i++){
//     if(!b.includes(a[i])){
//         b += a[i]
//     }
// }console.log(b)


///  fibonacci 

/////==================================================================================================

// Input : "This 3 is 67 an javascript 5 example3"
// Output :  24    Addition of a numbers only 

//    let a = "This 3 is 67 an javascript 5 example3"
//    let sum = 0
//    let num = a.match(/\d+/g).map(ele => +ele).join('')
//    console.log(num)
 
//    for(let i = 0 ;  i<=num.length ; i++){
//        sum += i
//    }console.log(sum)
  

// let a = "This 3 is 67 an javascript 5 example3";
// let numbers = a.match(/\d+/g); // Extracts all numbers as strings
// let sum = 0;

// if (numbers) {
//   for (let num of numbers) {
//     sum += Number(num); // Convert each number string to a number and add to sum
//   }
// }

// console.log(sum); // Output: 24



//    let c= num.split('').map(ele => +ele)
//    console.log

//88888888888888888888888888888888888888888888888888888888888888888888888888888888

// function sumOfNumbers(input) {
//     // Use a regular expression to find all numbers in the string
//     const numbers = input.match(/\d+/g);
  
//     // Convert the matched numbers to integers and calculate the sum
//     const sum = numbers ? numbers.map(Number).reduce((acc, num) => acc + num, 0) : 0;
  
//     return sum;
//   }
  
//   // Input string
//   const input = "This 3 is 67 an javascript 5 example3";
  
//   // Output the sum of numbers
//   console.log(sumOfNumbers(input)); // Output: 24
  

let a = "This 3 is 67 an javascript 5 example3";
let numbers = a.match(/\d+/g); // Extracts all numbers as strings
let sum = 0;

if (numbers) {
  for (let num of numbers) {
    // Split each number into its digits and sum them
    for (let digit of num) {
      sum += Number(digit); // Convert each digit to a number and add to sum
    }
  }
}

console.log(sum); // Output: 24

