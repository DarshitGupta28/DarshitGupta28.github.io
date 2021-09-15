var cell1=document.getElementById("cell1")
var cell2=document.getElementById("cell2")
var cell3=document.getElementById("cell3")
var cell4=document.getElementById("cell4")
var cell5=document.getElementById("cell5")
var cell6=document.getElementById("cell6")
var cell7=document.getElementById("cell7")
var cell8=document.getElementById("cell8")
var cell9=document.getElementById("cell9")
let var1="X"
// document.getElementById("cell1").addEventListener("onclick",assignNext(cell1));
// document.getElementById("cell2").addEventListener("click",assignNext(cell2));
// document.getElementById("cell3").addEventListener("click",assignNext(cell3));
// document.getElementById("cell4").addEventListener("click",assignNext(cell4));
// document.getElementById("cell5").addEventListener("click",assignNext(cell5));
// document.getElementById("cell6").addEventListener("click",assignNext(cell6));
// document.getElementById("cell7").addEventListener("click",assignNext(cell7));
// document.getElementById("cell8").addEventListener("click",assignNext(cell8));
// document.getElementById("cell9").addEventListener("click",assignNext(cell9));
// document.getElementById("cell2").onclick=assignNext(cell2);
// document.getElementById("cell3").onclick=assignNext(cell3);
// document.getElementById("cell4").onclick=assignNext(cell4);
// document.getElementById("cell5").onclick=assignNext(cell5);
// document.getElementById("cell6").onclick=assignNext(cell6);
// document.getElementById("cell7").onclick=assignNext(cell7);
// document.getElementById("cell8").onclick=assignNext(cell8);
// document.getElementById("cell9").onclick=assignNext(cell9);
//c1.onclick= "assignColor(this)"
// function assignColor(obj)
// {
//     obj.style.background="Red"
// }
g=[2,2,2,2,2,2,2,2,2]

function assignNext(obj,x){
    if(g[x]==2&&winner==false)
    {
        obj.textContent=var1
        //obj.textContent.style.fontSize="100px"
        if(var1=="X")
        {
            g[x]="X"
            var1="O"
        }
        else
        {
            g[x]="O"
            var1="X"
        }
        check();
    }
    //console.log(g)    
}
var winner=false
function check(){
    console.log("In check")
   // console.log(g[0]==g[2]&&g[1]==g[2])
    if(g[0]==g[2]&&g[1]==g[2]&&g[1]!=2)
    {
        // console.log("Winner")
        // alert("Winner")
        winner=true
    }
    else if(g[0]==g[3]&&g[3]==g[6]&&g[6]!=2)
    {
        // console.log("Winner")
        // alert("Winner")
        winner=true
    }else if(g[0]==g[4]&&g[4]==g[8]&&g[0]!=2)
    {
        // console.log("Winner")
        // alert("Winner")
        winner=true
    }else if(g[4]==g[2]&&g[6]==g[2]&&g[2]!=2)
    {
        // console.log("Winner")
        // alert("Winner")
        winner=true
    }else if(g[5]==g[2]&&g[8]==g[2]&&g[2]!=2)
    {
        // console.log("Winner")
        // alert("Winner")
        winner=true
    }else if(g[3]==g[4]&&g[3]==g[5]&&g[3]!=2)
    {
        // console.log("Winner")
        // alert("Winner")
        winner=true
    }else if(g[6]==g[7]&&g[7]==g[8]&&g[7]!=2)
    {
        // console.log("Winner")
        // alert("Winner")
        winner=true
    }else if(g[1]==g[4]&&g[1]==g[7]&&g[1]!=2)
    {
        // console.log("Winner")
        // alert("Winner")
        winner=true
    }
    if(winner)
    {
        var win=document.createElement("p")
        win.innerHTML="Winner!!! <br> <button style='font-size : 50px' onclick='location.reload()'> Play again </button>"
        win.style.fontSize="65px";
        win.style.textAlign="center"
        document.getElementById("grid").appendChild(win)
    }
    else{
        let c=0;
        for(let i=0;i<9;i++)
        {
            if(g[i]==2)
            c++;
        }
        if(c==0)
        {
            var win=document.createElement("div")
            win.innerHTML="Tie <button style='font-size : 80px' onclick='location.reload()'> Play again </button>"
            win.style.fontSize="100px";
            win.style.textAlign="center"
           // window.reload()
            
            document.getElementById("grid").appendChild(win)
           
            //location.reload()
        }
    }
   // document.getElementById("again").onclick=location.reload();
}
