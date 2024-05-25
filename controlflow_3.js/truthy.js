//! Falsy Values-----------------------------------------------

//*  false , Nan , "" , Null , Undefined , 0 , -0 ,BigInt 0n 

//! Truthy Values----------------------------------------------

//* "0" , 'false' , " " , [] ,{} , function() {}




let val1;

val1 = 5 ?? 3 //*output = 5
val1 = null ?? 7 //*output = 7
val1 = undefined ?? 2 //*output = undefined
val1 = null ?? 3 ?? 6 //*output = 3









console.log(val1);