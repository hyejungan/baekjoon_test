const fs = require('fs');
const env = process.platform === "linux" ? "/dev/stdin" : "test.txt";

const input = fs.readFileSync(env).toString().trim().split('\n');
const str = input.shift(); // 초기 문자열
const N = parseInt(input.shift(), 10); // 명령어의 수
const items = input; // 명령어들

let leftStack = str.split(''); // 커서 왼쪽에 있는 문자들
let rightStack = []; // 커서 오른쪽에 있는 문자들

items.forEach(item => {
    const [command, value] = item.split(' ');

    switch (command) {
        case 'L':
            if (leftStack.length) rightStack.push(leftStack.pop());
            break;
        case 'D':
            if (rightStack.length) leftStack.push(rightStack.pop());
            break;
        case 'B':
            if (leftStack.length) leftStack.pop();
            break;
        case 'P':
            leftStack.push(value);
            break;
    }
});

// 마지막에 왼쪽 스택과 오른쪽 스택을 합친 후 문자열로 변환
const result = leftStack.join('') + rightStack.reverse().join('');
console.log(result);
