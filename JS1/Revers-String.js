// Revers the string
//  1
// let a= 'Amol Baban Rindhe'
// let b= a.split('').reverse().join('')
// console.log(b)

//  2
// let a= 'Amol Baban Rindhe'
// let rev  = ''
// for(let i = a.length-1 ; i>=0 ;i--){
//     rev += a[i]
// }console.log(rev)

// Pallindrome

let a= 'eye'
let rev = ''
for(let i=a.length-1 ;i>=0 ;i--){
    rev += a[i]
}
let c = (rev == a) ? 'Pallindrome' : 'Not a Pallindrome'
console.log(c)