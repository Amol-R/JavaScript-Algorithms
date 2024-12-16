// remove duplicate

// let a = 'geeksofgeeks'
// function rem(arr){
//     let b = [...new Set(arr)]
//     console.log(b.join(''))
// }
// rem(a)

// let a = 'geeksofgeeks'
// let b = ''
// for(let i = 0 ; i<a.length ;i++){
//     if(!b.includes(a[i])){
//         b += a[i]
//     }
// }console.log(b)


///  fibonacci 


// Input : "This 3 is 67 an javascript 5 example3"
// Output :  24    Addition of a numbers only 

   let a = "This 3 is 67 an javascript 5 example3"
   let sum = 0
   let num = a.match(/\d+/g).join('')
   console.log(num)
   for(let i = 0 ;  i<=num.length ; i++){
       sum += i
   }console.log(sum)
  