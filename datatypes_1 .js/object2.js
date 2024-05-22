const twitterUser =[
    {
        Name:"Bigyan Thapa",
        Age :21,
        Hobby:"Running",
         
    },
    {
        name:"Mira Thapa",
        Age:17,
        Hobby :"Mobile",
    }
]


console.table(Object.entries(twitterUser[0]));//*Returns an array of key/values of the enumerable
                                              //! properties of an object!


console.table(Object.values(twitterUser[1]));//*Returns an array of values of the enumerable 
                                            //!properties of an object


console.table(Object.keys(twitterUser[1]));//!Returns the names of the enumerable 
                                           //*string properties and methods of an object.

