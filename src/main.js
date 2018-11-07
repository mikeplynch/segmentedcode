const condition = true;
let str = condition ? 1 : 2;

import (`./test${str}.js`).then(({hello}) => {
    hello();
});

console.log("Hello World!");