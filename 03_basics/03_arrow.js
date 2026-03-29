const user = {
    username: "Vinod",
    price: 833,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);   
        console.log(this);   // this will print the context
    }
}


user.welcomeMessage()
user.username = "Amit"      // it will change the context of the function
user.welcomeMessage()



// function fun() {    
//     let identity = "alpha"
//     console.log(this.identity);      
// }
// fun();


let fun1 = () =>  {    
    let identity = "beta"
    console.log(this.identity);      
}
fun1();


// arrow function (way1)
const addTwo = (num1, num2) => {
    return num1+num2;
}

// (way2)
const addThree = (num1, num2, num3) => num1 + num2 + num3;

// (way3) 
const addFour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4);
console.log(addThree(4, 8, 2, 5));

// (way4)  --> to return the Object
const returnObject = () => ({password: "11221122"});
console.log(returnObject());