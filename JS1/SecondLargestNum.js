// let a = [22,32,97,85,99,54]
// let b = a.sort()
// let seclar = b[b.length-2]
// console.log(seclar)

// ========================================================================

// find Second largest number without using sort method

let arr = [0, 3, 9, 36, 24, 98, 7, 5];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr) {
  if (num > largest) {
    secondLargest = largest; // Update secondLargest before largest changes
    largest = num;           // Update largest to the new maximum value
  } else if (num > secondLargest) {
    secondLargest = num;     // Update secondLargest if it's less than largest but greater than itself
  }
}

console.log(secondLargest); // Output: 36


/*  Step-by-Step Explanation:
Initialize Variables:

largest is set to -Infinity, which means it's smaller than any number in the array.
secondLargest is also set to -Infinity initially.
Loop Through the Array:

The for loop goes through each number (num) in the array.
Check If the Current Number is the Largest:

If num > largest:
Update secondLargest to the value of largest (the previous largest number).
Update largest to num (the new largest number).
Check If the Current Number is the Second Largest:

If num is greater than secondLargest but not equal to largest, update secondLargest.
Final Output:

After the loop finishes, secondLargest contains the second largest number in the array, which is 36.
Example Walkthrough:
For arr = [0, 3, 9, 36, 24, 98, 7, 5]:

Start with largest = -Infinity, secondLargest = -Infinity.
Loop through each number:
0: Largest becomes 0. Second largest remains -Infinity.
3: Largest becomes 3. Second largest becomes 0.
9: Largest becomes 9. Second largest becomes 3.
36: Largest becomes 36. Second largest becomes 9.
24: Second largest becomes 24 (it’s less than 36 but greater than 9).
98: Largest becomes 98. Second largest becomes 36.
7: No changes (it’s less than 36).
5: No changes (it’s less than 36).
Result: secondLargest = 36.  */