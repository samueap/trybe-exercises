// 2. A função myIndexOf(arr, item) recebe um array arr, um item e retorna o índice do item ou -1 caso o item não pertença ao array arr
// Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
// Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado

// myIndexOf.js
const myIndexOf = (arr, item) => arr.findIndex(element => element === item);

module.exports = myIndexOf;
