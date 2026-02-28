let boxes = document.querySelectorAll(".boxes");
let rstbt = document.querySelector("#resetbtn");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector(".msg p");
let newgame = document.querySelector("#newgame");

console.log("js connected");

const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let turnO = true;

const disablebox = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}

const enablebox = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    msgContainer.classList.add("hide");
}
boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
             box.innerText = "X";
             turnO = true;
        }
        

        checkWinner();
        box.disabled = true;
    });
});

const checkWinner = () =>{
    for(pattern of win){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1!= "" &&val2!= "" &&val3!= ""){
            if(val1 == val2 && val2 == val3){
                
                disablebox();
                announceWinner(val1);

            }
        }
    }
}

const announceWinner = (val) =>{
    msg.innerText = `Game Over Winner is ${val}`;
    msgContainer.classList.remove("hide");
}

newgame.addEventListener("click", enablebox);
rstbt.addEventListener("click", enablebox);



