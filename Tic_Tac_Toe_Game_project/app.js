let boxes=document.querySelectorAll(".box");
let resetButn=document.querySelector(".reset_btn");
let newGameBtn=document.querySelector(".new_game");
let msgContainer=document.querySelector(".winner_box");
let msg=document.querySelector("#msg");
let turnO=true;
const winArray=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=()=>{
    turnO=true;
    enableBox();
    msgContainer.classList.add("hide");
    newGameBtn.classList.add("hide");
    resetButn.classList.remove("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checking();
    });
});


const disableBox=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

const enableBox=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
    newGameBtn.classList.remove("hide");
    resetButn.classList.add("hide");
};
const checking=()=>{
    for(let pattern of winArray){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetButn.addEventListener("click",resetGame);