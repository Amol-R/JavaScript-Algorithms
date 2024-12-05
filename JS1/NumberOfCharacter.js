let a = 'geeksofgeeks'
let cou = []
for(let i=0 ; i<a.length;i++){
    let num = a[i]
    cou[num] = cou[num] ? cou[num]+1 :1
}console.log(cou)