const fs = require("fs");

const env = process.platform === "linux" ? "/dev/stdin" : "test.txt";

let [M, N] = fs.readFileSync(env).toString().split("\n").map(Number);

const arr = new Array(N - M + 1)
  .fill()
  .map((_, index) => M + index)
  .filter((num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    const sqrt = Math.sqrt(num);

    for (let i = 3; i <= sqrt; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  });

if (arr.length !== 0) {
  console.log(
    arr.reduce((acc, cur) => {
      return acc + cur;
    }, 0)
  );
  console.log(arr[0]);
} else {
  console.log(-1);
}
