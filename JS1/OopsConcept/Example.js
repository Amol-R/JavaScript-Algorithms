
// Different methods in JavaScript

// 1. Constructor

// eg.     constructor(){
//              console.log('Hello')
//           }


// 2. Prototype

// eg.     massage(){
//             console.log('Hello everyone')
//           }


// 3. Static

// eg.     Static name(){                  // we need to use Static word before method name
//             console.log('Hello')
//           }

//====================================================================================================
class hello{

    massage(){
        console.log('Hello everyone')
    }

    sorry(){
        console.log('Sorry everyone')
    }
}
    let a = new hello()

    a.massage()
    a.sorry()

//==========================================================================================================
//      class Calculation{
       
//          // every class contain Properties and methods
//         //  Properties are nothing but veriables
//         // Methods are nothing but the functions
// // For examole  (Properties)
//    let a ;
//    let b ;
//    let c ;
       
//    // Methods example

//    sum(){
//     c = a+b
//     return c
//    }

//    sub(){
//     c = a-b
//     return c
//    }

//      }