let boxes=document.querySelectorAll('.box');
let msg=document.querySelector('#msg');
let msgContainer=document.querySelector('.msg-container');
let resetbtn=document.querySelector('.resetbtn');
let newbtn=document.querySelector('.newbtn');
let turn0=true;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turn0){
            box.innerText='O';
            turn0=false;
        }
        else{
            box.innerText='X';
            turn0=true;
        }
        box.disabled=true;
        checkwin();
    });
});
const checkwin=()=>{
    for(pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos1val===pos2val && pos1val===pos3val){
            if(pos1val===pos2val && pos1val===pos3val){
                showwinner(pos1val);
            }
        }
    }
}
const showwinner=(winner)=>{
    msg.innerText=`Congratulation, ${winner} is the winner!`;
    msgContainer.classList.remove('hide');
    disable();
}
const disable=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
}
const enable=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    });
}
const reset=()=>{
    enable();
    msgContainer.classList.add('hide');
    turn0=true;
}
newbtn.addEventListener('click',reset);
resetbtn.addEventListener('click',reset);