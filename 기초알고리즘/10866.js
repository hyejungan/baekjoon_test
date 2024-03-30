const fs = require("fs");
const env = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const [N, ...arr] = fs.readFileSync(env, "utf8").trim().split("\n");

let deque = [];
let result = [];

arr.forEach((item) => {
  let [command, num] = item.split(" ");
  let found = deque.filter((i) => +i > 0);
  let some = deque.some((i) => +i > 0);

  switch (command) {
    case "push_front":
      deque.unshift(num);
      break;
    case "push_back":
      deque.push(num);
      break;
    case "pop_front":
      result.push(deque[0] > 0 || some ? deque.shift() : -1);
      break;
    case "pop_back":
      result.push(deque[deque.length - 1] > 0 || some ? deque.pop() : -1);
      break;
    case "size":
      result.push(deque.filter((i) => i > 0).length);
      break;
    case "empty":
      result.push(deque.length ? 0 : 1);
      break;
    case "front":
      result.push(found?.length ? found[0] : -1);
      break;
    case "back":
      result.push(found?.length ? deque[deque.length - 1] : -1);
      break;
  }
});

console.log(result.join("\n"));
