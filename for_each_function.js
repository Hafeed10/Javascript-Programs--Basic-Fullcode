// let numbers = [10, 15, 20, 25];
// let total = 0;
// const sum = (number, array, index) => {
//     total += number;

// };
// numbers.forEach(sum)
// console.log(total)



let numbers = [10, 15, 20, 25];
let total = 0;
const sum = (number, array, index) => {
    total += number;
    console.log(number);
    console.log(index);
    console.log(array);

};
numbers.forEach(sum)
console.log(total)