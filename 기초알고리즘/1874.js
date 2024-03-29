const env = process.platform === "linux" ? "dev/stdin" : "test.txt";

let [N, ...arr] = require("fs")
  .readFileSync(env)
  .toString()
  .split("\n")
  .map(Number);

let stack = []; //숫자담는곳
let result = []; //'+' , '-' 결과 담는곳

let present = 1; //스택에 담긴 마지막 수

for (let i = 0; i < N; i++) {
  let num = arr[i];

  while (present <= num) {
    stack.push(present);
    result.push("+");
    present += 1;
  }

  let stackPop = stack.pop();
  result.push("-");

  if (stackPop !== num) {
    result = ["NO"];
    break;
  }
}

console.log(result.join("\n"));
