// Immediately Invoked Function Expression(IIFE


// syntax --> ()()
(function fun() {
    console.log("this is named IIFE function");
    
})();

((loader) => {
    console.log(`Service is reload of ${loader}`);
})("Driver");