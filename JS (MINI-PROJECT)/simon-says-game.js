let gameSeq=[];
let userSeq=[];

let btns = ["yellow" , "red" , "purple" , "green"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");
document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
btn.classList.add("flash");
 setTimeout(function(){
btn.classList.remove("flash");
 },100);
}

function levelUp(){
    userSeq = [];
    level++;
 h3.innerText = `Level ${level}`;   

//random btns
let ranIdx = Math.floor(Math.random() * 4);
let ranCol = btns[ranIdx] ;
let ranBtn = document.querySelector(`.${ranCol}`);
gameSeq.push(ranCol);
console.log(gameSeq);

btnFlash(ranBtn);

}
function checkAns(idx){
     
    if(gameSeq[idx] == userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp, 1000);
        }
        console.log("same color");
    }else{
     h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br> press any key to restart the game `;
     document.querySelector("body").style.backgroundColor = "red";
     setTimeout(function(){
     document.querySelector("body").style.backgroundColor = "white";
     },150)
     reset();   
    }
}

function btnPress(){
    console.log("button pressed");
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".innerDiv");
for (btn of allbtns){
    btn.addEventListener("click" , btnPress);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}