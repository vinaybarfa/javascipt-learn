// const tinderUser = new Object();  // this is Singleton Object

const tinderUser1 = {};  // this is non-Singlton Object
tinderUser1.id = "1";
tinderUser1.name = "Tanish";
tinderUser1.isLoggedIn = false;

// console.log(tinderUser1);

const regularUser = {
    email: "hitesh@gmail.com",
    fullName: {
        firstName: "hitesh",
        middle: "",
        lastName: "Lacheta",
        dailyName: {
            school: {
                sshsss: "Heet",
                ljc: "hitu"
            },
            mandir: {
                iMataMandir: "Harish",
                shankarMandir: "Hari"
            }
        }
    },
    Address: {
        village: "Bourd",
        tehsil: "Manawar",
        district: "Dhar",
        state: "Madhay Pradesh",
        country: "India"
    },
    recommadFood: [
        "Jalebi", "Golab Jamun", "Immarti", "Shri Khand", "Poha"
    ]
}

// console.log(regularUser.recommadFood[4]);
console.log(regularUser.fullName.dailyName.mandir.iMataMandir);


const obj1 = {a: "1", b: "2"};
const obj2 = {c: "3", d: "4"};

// const obj3 = Object.assign({}, obj1, obj2);

const obj = {...obj1, ...obj2};  // this is another way to merge to object
console.log(obj);

let users = [
    {
        id: "1",
        name: "Lokesh"
    },
    {
        id: "2",
        name: "Lakhan"
    },
    {
        id: "3",
        name: "Mukesh"
    }
]

// console.log(users[2].name);
console.log(Object.keys(tinderUser1));  // keys => we can get all key of an Object
console.log(Object.values(tinderUser1));  // values => we can get all values of an object
console.log(Object.entries(tinderUser1));  // entries => It will convert Object key-value pair in Array

console.log(tinderUser1.hasOwnProperty('isLoggedIn'));  // to check wheater this property(key) present in the Object or not


const course = {
    courseName: "Data Structure",
    duration: "6 mounth",
    teacher: "Arjun Sir"
}

const {teacher: guide} = course   // here we destructure
console.log(teacher);

