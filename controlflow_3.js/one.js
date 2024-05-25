// const bigyan = true
// if(2=="2"){
//     console.log("executed");
// }


// const num = 300
// if(num>200){
//     console.log("Eligable");
//     let hero = "Thor"
//     console.log(`My hero :${hero}`);// correct answer auxa
// }
// console.log(`my hero :${hero}`); //  scope variable ko bahira execute garna khojepar execute hudaina


//!------------------------------------------------------------------------------------------------

// const userBigyan = true
// const debitCard = true
// if(userBigyan && debitCard && 2==3){
//     console.log("You Can a Course");
// }
// else
//   console.log("You Don't have enough balance");


//!------------------------------------------------------------------------------------------------


const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard ){
    console.log("User is Eligable");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}



