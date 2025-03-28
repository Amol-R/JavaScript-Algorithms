// input [2,5,8,1] output [16, 14, 9, 1]

let arr = [2,5,8,1]
  let res = [];
    let sum = 0;
    
    for (let i = arr.length - 1; i >= 0; i--) {
        sum += arr[i];
        res.unshift(sum)
    }
        console.log(res)

        //unshift() method in JavaScript is used to add one or more elements
        // to the beginning of an array and returns the new length of the array