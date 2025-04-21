let a = [1,2,7,9]
let b = []
for(let i = 1 ; i<= 10 ; i++){
    if(a.indexOf(i) == -1){
        b.push(i)
    }
}console.log(b)