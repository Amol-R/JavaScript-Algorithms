

const input = "amol and amol";
const output = input.split(" ").map((word, i) => "#".repeat(i + 1) + word.slice(1)).join(" ");

console.log(output); // Output: "#mol ##nd ###mol"