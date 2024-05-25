// const myarray =[0,1,2,3,4,5,6]
// myarray.push(7)  //*-last ma element add gardinxa
// myarray.pop()    //!-  last ko element lai delete / remove gardinxa
// myarray.unshift(9) //* first ma element add gardinxa
// myarray.shift() //! first ko element lai delete/remove gardinxa
// console.log(myarray.includes(7));//! .include le check garxa element xa kinai
//                                  //! vanera yeta xa baney true , yedi xaina vaney
//                                 //! false---

// //
//
//
//
//
//
const myArr = [1,2,3,4,5]
const newArr = myArr.join()
const myarr = myArr.splice(0,3) //* range bhitra ko element matra display garxa
const myarray = myArr.slice(0,3) //* range banda bahira ko lai matra display garxa

console.log(myarray);

const marvelHeros = ["ironman","spiderman","antman"]
const dcHeros =   ["batman", "superman","flash"]
const allHeros = marvelHeros.concat(dcHeros);//* it combines two array without
                                             //* modifying the existing arrays

                                //*OR
//const allHeros = [...marvelHeros,...dcHeros]
console.log(allHeros);



