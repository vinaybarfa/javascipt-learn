const number = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// number.forEach((val) => {   // foreach will not return any value
//     console.log(val);  
// })

let answer = number.filter((val) => (val % 2 != 0));      // filter will return value so that's way we can perform operation on that returned value 
console.log(answer);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1995, edition: 2001 },
    { title: 'Book Two', genre: 'Science', publish: 2000, edition: 2005 },
    { title: 'Book Three', genre: 'History', publish: 1987, edition: 1992 },
    { title: 'Book Four', genre: 'Fantasy', publish: 2010, edition: 2015 },
    { title: 'Book Five', genre: 'Biography', publish: 1999, edition: 2003 },
    { title: 'Book Six', genre: 'Technology', publish: 2018, edition: 2021 },
    { title: 'Book Seven', genre: 'Philosophy', publish: 1975, edition: 1980 },
    { title: 'Book Eight', genre: 'Mystery', publish: 2007, edition: 2012 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    { title: 'Book Ten', genre: 'Self-Help', publish: 2020, edition: 2022 }
];


let avaibleBook = books.filter((book) => (book.publish > 2005 && book.edition > 2000));
console.log(avaibleBook);


