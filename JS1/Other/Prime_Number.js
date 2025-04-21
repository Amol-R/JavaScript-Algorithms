
// let n = 71
// for(let i = 2 ;i<n ;i++){
//     if(n%i == 0){
//         var re = "Not a prime number"
//         break
//     }else{
//        var re = 'Prime number'    // here we use var because it has global scope 'let' is not work here
//     }
// }console.log(re)

//================================================================================================

function isPrime(n){
    if(n<2){
        return 'Not a Prime number'
    }
    for(let i =2 ; i<n ;i++){
        if(n%i==0){
            return 'Not a Prime number'
        }
    }
    return 'Is A Prime number'
}

 console.log(isPrime(1))
 console.log(isPrime(4))
 console.log(isPrime(5))
 console.log(isPrime(73))