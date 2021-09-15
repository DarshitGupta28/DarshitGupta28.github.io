// var comp=document.querySelector('#computer')
// var player=document.querySelector('#player')
// var play=document.querySelector('#play')
document.getElementById("computer").onclick=assignPlay;
document.getElementById("player").onclick=assignPlay2;
let type1=false;
function assignPlay(){
    document.getElementById("computer").style.color="Red"

    type1=true
}
let type2=false
function assignPlay2(){
    document.getElementById("player").style.color="Red"

    type2=true
    //console.log(type2)
}
let play=false;
document.getElementById("play").onclick=start;

function start(){
    document.getElementById("play").style.color="Red"
    //window.location.href = "file:///C:/Users/darsh/Desktop/Tic%20Tac%20Toe/grid2.html";

    play=true;
    console.log("inside start")
    console.log(type1)
    console.log(type2)
    console.log(play)
    if(type2&&play)
    {
        
    //document.getElementById("player").style.color="peach"
        //window.location.href = "file:///C:/Users/darsh/Desktop/Tic%20Tac%20Toe/grid.html";
        console.log("Inside 1st case")
        startTwoPlayer();
    }
    else if(type1&&play)
    {
        console.log("Inside 2nd case")
        //window.location.href = "file:///C:/Users/darsh/Desktop/Tic%20Tac%20Toe/grid.html";
        startOnePlayer();
    }
    else if(play)
    {
        alert('Select type');
    }
    
}
function startOnePlayer(){
    console.log("Inside One Player")
    window.location.href = "grid2.html";

}
function startTwoPlayer(){
    console.log("Inside Two Player")
    window.location.href = "grid.html";

}


