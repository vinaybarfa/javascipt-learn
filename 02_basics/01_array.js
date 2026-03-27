let arr = [23,34,545,65,344,323,5, 75];
let num = new Array(1,2,3,4,5,6,7)
console.log(num);

// num.map(e => {
//     console.log(e);
// })


// Array method
arr.push(45);  // it will add value in the last of the array
arr.push(77);  

arr.pop();  // remove value from back

arr.unshift(92); // it will add value in the front of the array but it will shift all value in the memeory
arr.unshift(54); 

arr.shift();    // remove value from front

console.log(arr.includes(34));  // it will check give value present in the array or not

console.log(arr.indexOf(65));  // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

let newArray = num.join()  // join method will bind the array element and convert it into String
console.log(newArray)


// slice, splice

console.log("A ", num);
const myNumbers1 = num.slice(1,3);

console.log(myNumbers1);
console.log("B ",num);

const myNumbers2 = num.splice(1,3);     // splice will extract the value from the array and change in orignal array(It will manumpulate the array)
console.log(myNumbers2);
console.log("C ",num);

