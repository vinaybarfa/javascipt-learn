let value = "river"
function innerFunction() {
    console.log("the value is : ",value);
    let value1 = "volcano"
    function outerFunction() {
        let value2 = "tree";
        console.log(value1);
    }
    // console.log(value2);     // we can not access the value2
    outerFunction();
}
innerFunction()



addCity("Raipur");
function addCity(city) {
    console.log("the value of city is : ",city);
}

let addCountry = function(country) {    // this tyoe of function are the expression
    console.log("the name of country is : ",country);
}
addCountry("Nepal");

