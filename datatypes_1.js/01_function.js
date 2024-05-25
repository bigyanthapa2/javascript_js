// function addTwoNumber(number1, number2){
//     // let result = number1 + number2;
//      return number1 + number2

// }
// const result = addTwoNumber(4,4);
// console.log("result is: ",result);

function userProfile (user){
    return  `${user} just logged in`
}
console.log(userProfile("Bigyan Thapa"))  //*output = Bigyan thapa just logged in*
     

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


function userProfile (user="Sam Sulek"){//* user =sam sulek > tara print garauni bela ma or function ma print garda  function ko value kei ni xaina vaney it acts as an default value hamle parameter ma j halinxa output ma tei value print gardinxa if the function  doesnot have value to print
    return  `${user} just logged in`
}

