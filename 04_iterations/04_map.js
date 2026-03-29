const number = [4, 121, 545, 7, 61, 452, 15, 75, 96, 321, 32, 23, 16];
let values = number.map((val) => (val - 2));
// console.log(values);

const newVal = number.map((num) => (num + 5))          // we can perfrom chaning in the higher order loop(map, filter, foreach) 
        .map((num) => num/2)
        .filter((num) => (num >= 100 && num <= 250));
console.log(newVal);
