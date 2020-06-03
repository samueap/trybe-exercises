// 3.A função mySum(arr) recebe um array arr e retorna a soma de seus elementos
// Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
// Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado

// mySum.js
const mySum = (arr) => arr.reduce((total, current) => total + current);

module.exports = mySum;
