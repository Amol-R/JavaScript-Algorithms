//  1
// let a = 'Amol123Tg334tg56'
// let str = a.match(/[a-z]+/gi).join('')
// let num = a.match(/\d+/g).join('')
// console.log(str)
// console.log(num)

// =================================================================
//  2

// let a = ['Amol', 123, 'TG', 334, 'tg']
// let str = []
// let num = []
// let sum = 0
// for(let i = 0 ; i<a.length ; i++){
//     if(typeof a[i] == 'number'){
//         num.push(a[i])
//         sum += a[i]
//     }else{
//         str.push(a[i])
//     }
// }console.log(str)
// console.log(num)
// console.log(sum)

//=======================================================================

// let a ='Amol123Tg456'
// let numbers  = a.match(/\d+/g) 
// console.log(numbers)
// let sum =0
// if(numbers){
//   for(let num of numbers){
//     for(let digit of num){
//       sum += Number(digit)
//     }
//   }
// }console.log(sum)

//////===========================================================================


// let a = 'ajd##$235SHsjs#&#d10#&#dhdh5'   //Out put ==>> 235+10+5  =  250
// let b = a.match(/\d+/g).map(ele => +ele )
// console.log(b)
// let sum  = 0 
// for(let i = 0 ; i<b.length ; i++){
//     sum += b[i]
// }
// console.log(sum)

//==================================================================================

// let a = "This 3 is 67 an javascript 5 example3";
// let numbers = a.match(/\d+/g); // Extracts all numbers as strings
// let sum = 0;

// if (numbers) {
//   for (let num of numbers) {
//     // Split each number into its digits and sum them
//     for (let digit of num) {
//       sum += Number(digit); // Convert each digit to a number and add to sum
//     }
//   }
// }

// console.log(sum); // Output: 24


//  ====================================================================================
 // Addition of a digits of a number 
//  let a= 987
// let b = a.toString()
// let sum = 0

// for(let i=0 ;i<b.length ;i++){
//     sum += parseInt(b[i], 10)
// } console.log(sum)

//============================================================================================

let a ='jd1671wdg3542jhj43'           // 1671 + 3542 + 43 = 5256
let b = a.match(/\d+/g).map(ele => +ele )
console.log(b)
let sum  = 0 
for(let i = 0 ; i<b.length ; i++){
    sum += b[i]
}
console.log(sum)

//===============================================================================================

// let a = 'jd1671wdg3542jhj43';      // 1+6+7+1+3+5+4+2+4+3 = 36
// let numbers = a.match(/\d+/g); // Extracts all numbers as strings
// let sum = 0;

// if (numbers) {
//   for (let num of numbers) {
//     // Split each number into its digits and sum them
//     for (let digit of num) {
//       sum += Number(digit); // Convert each digit to a number and add to sum
//     }
//   }
// }

// console.log(sum); // Output: 36

//===========================================================================================