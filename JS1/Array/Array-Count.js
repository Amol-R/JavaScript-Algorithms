let a = [1, 3, 4, 2, 1, 3, 4, 2, 4, 5, 6, 5, 6, 2, 1, 4, 3, 2];
let cou = {}

for(let i = 0 ; i<a.length ;i++){
    let num = a[i]
    cou[num] = cou[num] ? cou[num]+1 : 1
}console.log(cou)