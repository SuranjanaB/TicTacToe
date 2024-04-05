let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newBtn=document.querySelector("#newg");
let msgCont=document.querySelector(".msg-cont");
let msg=document.querySelector("#msg");
let player=0;
let win;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    player=0;
    enable();
    msgCont.classList.add("hide");
}
const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(player==0){
            box.innerText="O";
            box.classList.add("light");
            player=1;
        }else{
            box.innerText="X";
            box.classList.add("dark");
            player=0;
        }
        box.disabled=true;

        checkWinner();
    })
})
const showWinner=(winner)=>{
    msg.innerText=`Congratulations!!! Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disable();
};
const checkWinner=()=>{
    for (let patt of winpattern){
        let pos1=boxes[patt[0]].innerText;
        let pos2=boxes[patt[1]].innerText;
        let pos3=boxes[patt[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                if(pos1=="O"){
                    win="Player 1";
                }else{
                    win="Player 2";
                }
                showWinner(win);
            }
        }
    }
}

newBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
