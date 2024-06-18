let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
 ];

   const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
   }

   boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn0){
            box.innerHTML = "O";
            turn0 = false;
        }
        else{
            box.innerHTML = "x";
            turn0 = true;
        }
             box.disabled= true;
              count ++;

          let isWinner = checkWinner();
          if (count === 9 && !isWinner){
            gameDraw();
          }
        })
       });
           

       const gameDraw = () => {
        msg.innerHTML = `Game is Draw.`;
        msgContainer.classList.remove("hide");
        disableBoxes();
       }

          const disableBoxes = () => {
          for (let box of boxes){
            box.disabled = true;
         }
          }

          const enableBoxes = () => {
          for (let box of boxes){
            box.disabled = false;
            box.innerHTML = ""
          }
           }
  
          const showWinner = (winner) => {
            msg.innerHTML = `Congratulation Winner is ${winner}`;
            msgContainer.classList.remove("hide");
            disableBoxes();

         }

             const checkWinner = () => {
         for(let pattern of winPatterns){
            let pos1val = boxes[pattern[0]].innerHTML;
            let pos2val = boxes[pattern[1]].innerHTML;
            let pos3val = boxes[pattern[2]].innerHTML;

            if(pos1val != "" && pos2val != "" && pos3val != ""){
                if (pos1val === pos2val && pos2val === pos3val){
                    console.log("Winner",pos1val);
                    showWinner(pos1val);

                }
            }

        }
     };

     newGameBtn.addEventListener("click", resetGame);
     resetBtn.addEventListener("click", resetGame);