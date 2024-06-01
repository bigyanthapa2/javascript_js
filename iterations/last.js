    //!-------------- Method 1 --------------

    
// const Number = [2, 5 , 7 ,9 ,12 , 23]

       
// const newNumber = Number.reduce(function (accumulator, currentValue){
//       console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);
//        return accumulator + currentValue
// },3)
// console.log(newNumber);


      //! ----------------Method 2 --------------

    // const Number = [2, 5 , 7 ,9 ,12 , 23]

    // const newNumber = Number.reduce( (accumulator, currentValue) => accumulator + currentValue ,0)
           
    // console.log(newNumber);



    //* ------------------------Examples--------------------------

 const shoppingCart = [
     
     {
         courseName : 'Frontend',
         Price : 4999,
     },
     {
         courseName : 'Backend',
         Price : 5999,
     },
     {
         courseName : 'Fullstack',
         Price : 7999,
     },
     {
         courseName : 'App Developer',
         Price : 8999,
     },
     {
         courseName : 'Game Developer',
         Price : 9999,
     },
     ]
     
      const TotalPrice = shoppingCart.reduce( (course,item) => course + item.Price ,0 )
      console.log(TotalPrice);   //* output = 37995