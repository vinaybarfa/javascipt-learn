let number1 = 34343;
let number2 = new Number(123.563243);
console.table([number1]);
console.log(number2.toFixed(3));// with the help of toFixed method we can limit the number of decimal value

console.log(number2.toPrecision(3));  // with the help of toPrecision() we can precises(make small) the value


const hundreds =  4387498342329;
console.log(hundreds.toLocaleString());  // It will change the number to  human readble fomate but as (US standard)
console.log(hundreds.toLocaleString("en-in"));  // It will change the number to  number to human readble but (INDIAN standard)


let num = [];
// ++++++++++++++++++ Math +++++++++++++++++++


console.log(Math.abs(-2));
console.log(Math.round(4.3));
console.log(Math.floor(4.5));  // floor means 'niche wali value'
console.log(Math.ceil(7.3)); // ceil means 'uper wali value'
console.log(Math.random());  // it will generate random value 
console.log(Math.min(45,54,15,34,45,99,23,42)); 
console.log(Math.max(45,54,15,34,45,99,23,42));


console.log((Math.random()*10)+1);  // this will give value above 0
console.log(Math.floor((Math.random()*10)+1));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

