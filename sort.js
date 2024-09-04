// 2 way to sorting
/**
 * 1. asending---smaller to larger
 * 2. decending ---larger to smaller
 */
const persons =['rakib', 'nakib', 'mahib', 'sakib'];
const sortPerson =persons.sort();
console.log(sortPerson);  //[ 'mahib', 'nakib', 'rakib', 'sakib' ]--sort by alphabetic order.

// advance sorting
const numbers =[4,5, 6,77, 5, 8,33, 22,8]
const numbers_ase =[...numbers].sort(function(a,b){return a-b}) 

const numbers_dse =[...numbers].sort(function(a,b){return b-a})

console.log(numbers_ase);
// [4,  5,  5,  6, 8,8, 22, 33, 77]
console.log(numbers_dse);
// [77, 33, 22, 8, 8,6,  5,  5, 4]