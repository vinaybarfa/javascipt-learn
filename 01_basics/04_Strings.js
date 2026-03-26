let email = "tushar@gmail.com";
let newEmail = email;
newEmail = "tusharHammad@gmail.com";
console.log(email);

// In java & javascript when we create an variable using primite datatype then the variable is store in the stack memory and the varible pass as a copy to another variable
// In java & javascript when we create an variable using non-primite datatype(Array, String, Class, HashMap, TreeSet, HashSet, Graph) then the variable is store in the heap memory and the varible pass as a refrence to another variable

console.log(email.toUpperCase());
console.log(email.slice(0,6));


const url = new String("https://google.com%20search");
console.log(url.replace("%20","-"));

console.log(email.split("a"));  // split will split the string

