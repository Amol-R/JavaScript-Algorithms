
let a = [12, 34, 56, 78, 4, 5];

for (let i = 0; i < a.length; i++) {                   // Simple sorting logic
  for (let j = i + 1; j < a.length; j++) {
    if (a[i] > a[j]) {                               // Swap values   
      let temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
}     console.log(a);                                   // Output: [4, 5, 12, 34, 56, 78]