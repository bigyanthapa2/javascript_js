let a = 300;
if (true) {
    let a = 10
     b = 21
     c = 33
     console.log("INNER:", a);

}
console.log(a);


function one (){                  //!local variable le global variable access garna sakxa but global variable le 
    const netflix = "Bigyan"      //!local variablelai access garna sakdaina/mildaina 
    function two(){
        const spotify = "premuim"
        const youtube = "free"
       console.log(netflix);
    }
   // console.log(spotify);  //error dinxa yesle
    two()
}
one();

