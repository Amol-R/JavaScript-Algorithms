
// function fibonacci(n){
//  const fib = [0,1]
//  for(let i = 2; i<=n ;i++){
//     fib[i] = fib[i-1] + fib[i-2]
//  } return fib
// }
// // console.log(fibonacci(2))
// console.log(fibonacci(5))
// console.log(fibonacci(7))

//======================================================================

let a = [0,1]
for(let i=2 ; i<7 ;i++){
    a[i] = a[i-1] + a[i-2]
}console.log(a)

//======================================================================
// Another way
// let a = 0 , b=1 ;
// console.log(a) 
// console.log(b) 
// for(let i = 0 ;i<=5 ;i++){
//    let temp = a+b
//    console.log(temp)
//    a=b
//    b=temp
// }