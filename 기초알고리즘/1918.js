const fs = require('fs');

const env = process.platform === 'linux' ? 'dev/stdin' : 'test.txt';

let input = fs.readFileSync(env).toString().trim().split('');

let stack = [];
let result = '';

for(let x of input) {
  if(x === '(') {
    stack.push(x)
  } else if (x === ')') {
    while(stack.length && stack[stack.length - 1] !== '(') {
      result += stack.pop()
    }

    stack.pop()
  } else if(x === '*' || x ==='/') {
    while(stack.length && stack[stack.length -1] === '*' || stack[stack.length -1] === '/') {
      result += stack.pop()
    }

    stack.push(x);
  } else if (x === '+' || x === '-') {
    while(stack.length && stack[stack.length - 1] !== '(') {
      result += stack.pop()
    }
    stack.push(x)
  }
   else {
    result += x
   }
}

while (stack.length > 0) {
  result += stack.pop()
}

console.log(result)