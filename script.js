let userSeq=[];
let gameSeq=[];
let getnum=["red","green","blue","yellow"]

let started=false;
let level=0;
let h2=document.querySelector("h2")
let allbtn=document.querySelectorAll(".btn")

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started")
        started=true;
    }
    levelup()
})

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

function levelup (){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`
    
    let randIdx=Math.floor(Math.random()*3)
    let randColor=getnum[randIdx]
    let randbtn=document.querySelector(`.${randColor}`)
   
    gameSeq.push(randColor)
    console.log(gameSeq)

    // btnflash(randbtn)
    gameflash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000)
        }
    } else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150)
        reset()
    }
}

function btnPress(){
    let btn=this;
    userflash(btn)

   let  userColor=btn.getAttribute("id")
    userSeq.push(userColor);

    checkAns(userSeq.length-1)
}
 
for (btn of allbtn) {
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false;
    gameSeq=[]
    userSeq=[]
    level=0 
}