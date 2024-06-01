// //! for loop

// for (let i = 0; i <= 12; i++) {
//     const element = i;
//     if (i == 5) {
//         console.log("5 is the best number");
//     }
//     console.log(element);
    
// }
// for (let i = 1; i < 10; i++) {
//     console.log(`Outer loop value : ${i}`);
//     for (let j = 1; j < 10; j++) {
//      console.log(i + '*' + j + ' = ' +i*j);     //*output 1 dekhi 10 samma
//     }
// }

//    for (let i = 1; i <=20; i++) {
//     if (i == 5) {
//         console.log("Detected 5 ");
//         break;
//     }
//     console.log(i); // output 1 2 3 4 5  Detected 5
//    }


for (let i = 1; i < 20; i++) {
   if (i ==5) {
    console.log("detected 5");
    continue
    
   }
    console.log(i);
}