let a= 12
for(let i = 2 ;i<a ;i++){
    if(a%i == 0){
        var re = 'Not a prime number'
        break
    }else{
        var re = "Is aprime number"
    }
}console.log(re)