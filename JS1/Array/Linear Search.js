// Check whether the targer element is present in array or not
let a= [-5,2,10,4,6]
function LinearSearch(arr, target){
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]==target){
            return `present on index ${i}`
        }
    }
    return -1
}

console.log(LinearSearch(a, 10))
console.log(LinearSearch(a, 6))
console.log(LinearSearch(a, 20))