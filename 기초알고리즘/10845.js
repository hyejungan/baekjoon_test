const fs = require("fs");
const env = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const [N, ...arr] = fs.readFileSync(env).toString().trim().split("\n");

let que = [];
let result = [];

arr.forEach((item) => {
  let [command, num] = item.split(" ");

  switch (command) {
    case "push":
      que.push(num);
      break;
    case "pop":
      result.push(que.length ? que.shift() : -1);
      break;
    case "size":
      result.push(que.filter((q) => q > 0).length);
      break;
    case "empty":
      result.push(que.length ? 0 : 1);
      break;
    case "front":
      result.push(que.length ? que[0] : -1);
      break;
    case "back":
      result.push(que.length ? que[que.length - 1] : -1);
      break;
  }
});

console.log(result.join("\n"));
