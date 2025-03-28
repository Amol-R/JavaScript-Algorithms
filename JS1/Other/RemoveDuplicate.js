//using Set (Spread syntax ...)

// function unique(arr){
//     let arr1 = [...new Set(arr)]
//     // console.log(arr1)
//     console.log(arr1.join(''))
// }
// // let array = [1,2,10,10,11,2,1,44,11]
// let array = 'geeksofgeeks'
// unique(array)

//==================================================================================

// Using simpal for loop

// let array = 'geeksofgeeks'
// let result = ''
// for(let i=0 ; i<array.length; i++){
//     if(!result.includes(array[i])){
//         result += array[i]
//     }
// }console.log(result)


// ==================================================================================

// Remove the duplicate number 

let a= [1,2,3,4,9,8,7,6,5,1,4,2,3]
let b = []
for(let i =0 ;i<a.length ; i++){
    if(!b.includes(a[i])){
        b.push(a[i])
    }
}console.log(b)