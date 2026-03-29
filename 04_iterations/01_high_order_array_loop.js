const map = new Map();
map.set("in", "India");
map.set("us", "United States");
map.set("fr", "France");
map.set("ir", "Iran");

// console.log(map);

for (const [key, value] of map) {     // this loop will return a value and user to iterate in the (Map) 
    // console.log(key +" : "+ value);
}

let obj = {
    java: "Java",
    js: "Javascript",
    cpp: "C++",
    yml: "ymal",
    go: "Golang"
}
for (const key in obj) {     // this loop will the key and iterate on the (Array and Object)
    // console.log(key);   // this will return key of an Object
    
    console.log(obj[key]);   // this will return thr value of an key
    
    
}