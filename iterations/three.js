// const greeting = "Bigyanthapa"
// for (const name of greeting) {
//     console.log(`value is ${name}`)
    
// }

// const map = new Map()
// map.set('IN', "INDIA")
// map.set('FR', "FRANCE")
// map.set('NP', "NEPAL")

// console.log(map);   

// for (const [key, value] of map) {
//     console.log(key, "-:" ,value);
    
// }


// const MyObject = {
//     js : "javascript",
//     cpp : "c++",
//     Py : "python",
// }

// for (const key in MyObject) {
//     console.log(`${key} is the shortcut for ${MyObject[key]}`);// output = js is shortcut for javascript;

//    }


// const coding =["HTML", "CSS", "PYTHON", "JAVASCRIPT"]

// coding.forEach(function(programming){
//     console.log(programming);
// })


// const coding =["HTML", "CSS", "PYTHON", "JAVASCRIPT"]
// coding.forEach(  (item,index,array) => {
//     console.log(item,index,array);
// })


// const programming = ["php","python","swift"]
// programming.forEach( function(code){
//     console.log(code);
// })


const Mycode = [
    {
        languageName : "javascript",
        fileName : "js"

    },
    {
        languageName : "python",
        fileName : "py"

    },
    {
        languageName : "java",
        fileName : "java"

    }
]
Mycode.forEach( (value)=> {
    console.log(value.fileName);
})