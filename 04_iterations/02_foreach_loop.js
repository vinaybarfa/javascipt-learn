const language = ["Hindi", "Bangali", "Rajsthani", "Panjabi", "Tamil"];
// language.forEach(function(val){
//     console.log(val);
// })

let values = (item, index, array) => {   // this function will give [value, index, array] of Array
    console.log(item, index, array);
}

language.forEach(values)  // we can function reference 


let states = [
    {
        stateName: "Madhya Pradesh",
        localLanguage: "Hindi"
    },
    {
        stateName: "Rajsthan",
        localLanguage: "Rajsthani"
    },
    {
        stateName: "Gujrat",
        localLanguage: "Gujrati"
    }
];

states.forEach((value) => {
    console.log(`the name of state is : ${value.stateName} & they spoke ${value.localLanguage}`);
})

