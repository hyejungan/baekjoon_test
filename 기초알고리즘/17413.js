const fs = require("fs");
const env = process.platform === "linux" ? "/dev/stdin" : "test.txt";

let input = fs.readFileSync(env, "utf8").trim().split('>')


input.reduce((acc, item) => {
  if(item[0] !== '<' && item.includes('<')) {
    acc.push(item.slice(0, item.indexOf('<')));
    acc.push(item.slice(item.indexOf('<')))
  } else {
    acc.push(item)
  }
  console.log(acc)
  return acc
}, [])