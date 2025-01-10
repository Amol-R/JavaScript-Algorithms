// Function to check if a number is an Armstrong number
function isArmstrongNumber(number) {
    let sum = 0;
    const digits = number.toString().split(''); // Split the number into individual digits
    const power = digits.length; // Number of digits determines the power

    for (let digit of digits) {
        sum += Math.pow(parseInt(digit), power); // Add the power of each digit to the sum
    }

    return sum === number;
}

// Test the function
const number = 153; // Change this number to test
if (isArmstrongNumber(number)) {
    console.log(`${number} is an Armstrong number.`);
} else {
    console.log(`${number} is not an Armstrong number.`);
}


// =====================================================
/* 

function amg(num){
    let sum = 0
    let dig = num.toString().split('')
    let pow = dig.length

    for(let digit of dig){
        sum += Math.pow(parseInt(digit),pow)
    }
    return sum === num
}
 const num = 153
 if(amg(num)){
    console.log('is Amstrong number')
 }else{
    console.log('Not Amstrong')
 } 

*/  