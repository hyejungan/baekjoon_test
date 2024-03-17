const fs = require("fs");

const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let [a, b, c] = fs.readFileSync(env).toString().trim().split("\n").map(Number);

if (a + b + c === 180) {
  if (a == 60 && b == 60 && c == 60) {
    console.log("Equilateral");
  } else if (a == b || a == c || b == c) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
} else {
  console.log("Error");
}
