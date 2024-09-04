
//1 .reverse method()
// const numbers =[1,2,3,4,5,6,7]
// console.log(numbers);
// const reversed =numbers.reverse();
// console.log(reversed);   //[7,6,5,4,3,2,1]

//2. using loop with unshift method
// const numbers = [1, 2, 3, 4, 5, 6, 7]; 

// for (const num of numbers) {
//     rev_numbers.unshift(num);
// }

// console.log(rev_numbers); // Output: [7, 6, 5, 4, 3, 2, 1]

// 3.increment
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const reversed_number =[]
// for(let i =0; i<numbers.length; i++){
//     const num =numbers[i];
//     reversed_number.unshift(num);
// }
// console.log(reversed_number)


// 4.decrement
const numbers = [1, 2, 3, 4, 5, 6, 7];
const reversed_number =[];
for(let i =numbers.length-1; i>=0; i--){
    const num =numbers[i]
    reversed_number.push(num);
}
console.log(reversed_number);

