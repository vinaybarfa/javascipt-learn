let arr = [1, 2, 3, 4];

const initialValue = 7;
const sumOfInitial = arr.reduce((accumulator, currentValue) => {      // In accumulator the current value of array are added 
    return accumulator - currentValue
}, initialValue);

console.log(sumOfInitial);


const courses = [
  { itemName: "data science course", price: 12999 },
  { itemName: "web development bootcamp", price: 8999 },
  { itemName: "java programming masterclass", price: 10999 },
  { itemName: "machine learning course", price: 14999 },
  { itemName: "cyber security fundamentals", price: 999 }
];

// let totalPrice = courses.reduce((acc, course) => {
//     return acc + course.price;
// }, 0);
let totalCost = 0;
courses.forEach((subject) => {
    totalCost += subject.price;
})

console.log(totalCost);
