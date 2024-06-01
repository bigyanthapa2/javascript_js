// const myNum = [1,2,3,4,5,6,7,8,9,10]
// const newNum = myNum.filter( (number) => number >4)

// console.log(newNum);


const Book = [
    {title: 'Harry Potter', genre:'Fiction'  , publish: 1997, edition: 2014}, 
    {title:     'Verity'  ,  genre:'Thriller', publish: 1988, edition: 2008}, 
    {title:     'Ikigai'  , genre:'self-help', publish: 1978, edition: 1999}, 
    {title: 'The Love Hypothesis', genre:'Romance', publish: 1997, edition: 2019}, 
    {title: 'Cant Hurt Me', genre:'Self-help', publish: 1974, edition: 2022}, 
    {title: 'Hardship', genre:'Self-help', publish: 1966, edition: 2011}, 
    {title: 'Archers voice', genre:'Romance', publish: 1954, edition: 2003}, 
];

//!             Method 1

// const Bookshelf = Book.filter( (Book) => 
//     Book.genre === 'Self-help')

// console.log(Bookshelf);


//!            Method 2
const Bookshelf = Book.filter( (Book) => {
    return Book.genre === 'Self-help'      //scope use gareko xa vaney return value dinai parxa example ..inside {.}
})

console.log(Bookshelf);