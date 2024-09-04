// Looping Technique
/**
 * 1. foor loop
 * 2. while loop
 * 3. do while loop ---ignore
 * 4 .for of ----use in array
 * 5. for in ---use in object
 */

// using for in loop in array
const friends =['Amy', 'Jacksion', 'Bill', 'Waren'];
for(const friend of friends){
    console.log(friend);
}
// showing index of array element
for(let i =0; i<friends.length; i++){
    console.log(i);  //0 1 2 3
    console.log(friends[i]);   //amy jackson bill waren
}