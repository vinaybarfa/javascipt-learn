function sayShree() {
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("E");
    console.log("E");
}

// sayShree   // this is reference of an function
// sayShree()   // this is a execution of function 

sayShree();


function addTwoNumber(a, b) {       // a, b are parametet
    return a+b;
}

console.log(addTwoNumber(34,3));


function printName(name = "New user") {     // we can pass default value for the name
    if(name === "") {
        console.log("Please Enter Your name");
        return;
    }
    console.log(`${name}, Hi you are loggedIn`);
}


printName();


function calculateCartPrice(...num1) {
    return num1;
}
console.log(calculateCartPrice(45, 75, 644));


const user = {
    username: "Vinay",
    price: 299
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and there shoes price is ${anyObject.price}`);   
}

// handleObject({
//     username: "Bhumesh",
//     price: 233
// })


// or 
handleObject(user);


let myArray = [34, 45, 66, 85, 42];
function handleArray(getArray) {
    console.log(`third index value is ${getArray[3]}`);
}

handleArray(myArray)


