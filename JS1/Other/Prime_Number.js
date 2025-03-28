
let n = 71
for(let i = 2 ;i<n ;i++){
    if(n%i == 0){
        var re = "Not a prime number"
        break
    }else{
       var re = 'Prime number'    // here we use var because it has global scope 'let' is not work here
    }
}console.log(re)