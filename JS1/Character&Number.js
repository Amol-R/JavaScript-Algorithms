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
// let c = a.match(/\d+/g).join('')
// console.log(c)
// let sum = 0
// for(let i=0 ;i<=c.length ;i++){
//     sum += i
// }console.log(sum)

//////===========================================================================


let a = 'ajd##$235SHsjs#&#d10#&#dhdh5'   //Out put ==>> 235+10+5  =  250
let b = a.match(/\d+/g).map(ele => +ele )
console.log(b)
let sum  = 0 
for(let i = 0 ; i<b.length ; i++){
    sum += b[i]
}
console.log(sum)