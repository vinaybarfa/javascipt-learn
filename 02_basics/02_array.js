let city1 = ["Indore", "Mumbai", "Jaipur", "Kanpur", "Panji", "Udhaypur", "Nagpur", "Raipur"];
let city2 = ["Bhopal", "Gadhwani", "Barwani", "Manawani", "Dhar", "Dharmpuri", "Dhamnod", "Ringnod", "Amjera"];

// city1.push(city2);   // push method will push the city2 array as a element 
// console.log(city1);

let cities = city1.concat(city2);

// another way to mearge two array
let newCities = [...city1, ...city2];
// console.log("another way : ",newCities);
