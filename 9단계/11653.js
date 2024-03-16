// const fs = require("fs");

// const env = process.platform === "linux" ? "/dev/stdin" : "test.txt";

// let input = +fs.readFileSync(env);

// let arr = [];

// for (let i = 2; i <= input / i; i++) {
//   if (input % i === 0) {
//     arr.push(i);
//     if (i !== input / i) arr.push(input / i);
//   }
// }

// const sosu = arr
//   .filter((num) => {
//     if (num <= 1) return false;
//     if (num === 2) return true;
//     if (num % 2 === 0) return false;
//     const sqrt = Math.sqrt(num);

//     for (let i = 3; i <= sqrt; i += 2) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   })
//   .sort((a, b) => a - b);

// let result = input;
// let soin = "";

// while (result != sosu[1]) {
//   if (result % sosu[0] === 0) {
//     soin += sosu[0] + "\n";
//     result = result / sosu[0];
//   } else if (result % sosu[1] === 0) {
//     soin += sosu[1] + "\n";
//     result = result / sosu[1];
//   }
// }

// console.log(soin + result);


//sqrt()사용해서 시간초과 해결하기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = input[0];

for (let i = 2; i <= Math.sqrt(num); i++) {
  while (num % i === 0) {
    console.log(i);
    num /= i;
  }
}
if (num !== 1) console.log(num);
