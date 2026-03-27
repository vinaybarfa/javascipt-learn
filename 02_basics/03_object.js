const mySym = Symbol("key1");

const user1 = {   // This is Object in js and the 'key' are also trite as a String  
    name: "Nikhil",
    email: "nikhil@gmail.com",
    contact: 7515656211,
    "nick name": "niku",
    gender: "male",
    [mySym]: "myKey1",  // Symbol value can be assign as 
    locationL: "Indore",
    isLoggedIn: false,
    lastLoginDay: ["Mounday", "Thusday", "Friday"]
};

console.log(user1.name);
console.log(user1.lastLoginDay[1]);
console.log(user1["contact"])
console.log(user1["nick name"]);
console.log( user1[mySym]);


// Object.freeze(user1);  // If we want to freeze(stop modification) of an Objec then we use freeze method 


user1.email = "niku@gmail.com";
console.log(user1);

user1.greeting = function() {
    console.log("Hello JS");
}

user1.greetingTwo = function() {
    console.log(`Hello user ${this.name}`);
    
}
user1.greeting; // this will get function referance
console.log(user1.greeting());   

console.log(user1.greetingTwo());


