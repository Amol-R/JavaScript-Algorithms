// Find Even numbet from given array
//1
const numbers = [7, 10, 15, 8, 13, 18, 6];
let even  = numbers.filter((num) => num%2 == 0)
let  odd = numbers.filter((num) => num%2 !== 0)
console.log(even)
console.log(odd)