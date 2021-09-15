var cell1=document.getElementById("cell1")
var cell2=document.getElementById("cell2")
var cell3=document.getElementById("cell3")
var cell4=document.getElementById("cell4")
var cell5=document.getElementById("cell5")
var cell6=document.getElementById("cell6")
var cell7=document.getElementById("cell7")
var cell8=document.getElementById("cell8")
var cell9=document.getElementById("cell9")
let var1="O"
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
var g=[2,2,2,2,2,2,2,2,2]
let flag=0
let winner=false
var board = [ [ '_', '_', '_' ],
              [ '_', '_', '_' ],
              [ '_', '_', '_' ] ];
function assignNext(obj,x){
    if(g[x]==2&&winner==false)
    {
        obj.textContent=var1
        //obj.textContent.style.fontSize="100px"
        // if(var1=="X")
        // {
        //     g[x]="X"
        //     var1="O"
        //     board[x/3][x%3]='x'
        // }
        // else
        // {
            g[x]="O"
          //  var1="X"
            board[Math.floor(x/3)][x%3]='o'
       // }
        
        // if(flag==1)
        // flag=0
        // else
        // flag=1
        // console.log(flag)
        console.log(g)
        if(isMovesLeft(board))
        makeMoveByComputer()
        check(g);
        console.log(g)
        console.log(board)
    }
    //console.log(g)    
}


function check(g){
    console.log("In check")
   // console.log(g[0]==g[2]&&g[1]==g[2])
    if(g[0]==g[2]&&g[1]==g[2]&&g[1]!=2)
    {
        // console.log("Winner")
        // alert("Winner1")
        winner=true
    }
    else if(g[0]==g[3]&&g[3]==g[6]&&g[6]!=2)
    {
        // console.log("Winner")
        // alert("Winner2")
        winner=true
    }else if(g[0]==g[4]&&g[4]==g[8]&&g[0]!=2)
    {
        // console.log("Winner")
        // alert("Winner3")
        winner=true
    }else if(g[4]==g[2]&&g[6]==g[2]&&g[2]!=2)
    {
        // console.log("Winner")
        // alert("Winner4")
        winner=true
    }else if(g[5]==g[2]&&g[8]==g[2]&&g[2]!=2)
    {
        // console.log("Winner")
        // alert("Winner5")
        winner=true
    }else if(g[3]==g[4]&&g[3]==g[5]&&g[3]!=2)
    {
        // console.log("Winner")
        // alert("Winner6")
        winner=true
    }else if(g[6]==g[7]&&g[7]==g[8]&&g[7]!=2)
    {
        // console.log("Winner")
        // alert("Winner7")
        winner=true
    }else if(g[1]==g[4]&&g[1]==g[7]&&g[1]!=2)
    {
        // console.log("Winner")
        // alert("Winner8")
        winner=true
    }
    if(winner)
    {
        var win=document.createElement("p")
        win.innerHTML="Winner Computer !!! <br> <button style='font-size : 40px' onclick='location.reload()'> Play again </button>"
        win.style.fontSize="75px";
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
            win.innerHTML="Tie<br> <button style='font-size : 40px' onclick='location.reload()'> Play again </button>"
            win.style.fontSize="75px";
            win.style.textAlign="center"
           // window.reload()
            
            document.getElementById("grid").appendChild(win)
           
            //location.reload()
        }
    }
   // document.getElementById("again").onclick=location.reload();
}

 
// Javascript program to find the
// next optimal move for a player
class Move
{
    constructor()
    {
        let row,col;
    }
}
 
let player = 'x', opponent = 'o';
 
// This function returns true if there are moves
// remaining on the board. It returns false if
// there are no moves left to play.
function isMovesLeft(board)
{
   // console.log(board)
    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
            if (board[i][j] == '_')
                return true;
    }
        
                 
    return false;
}
 
// This is the evaluation function as discussed
// in the previous article ( http://goo.gl/sJgv68 )
function evaluate(b)
{
     
    // Checking for Rows for X or O victory.
    for(let row = 0; row < 3; row++)
    {
        if (b[row][0] == b[row][1] &&
            b[row][1] == b[row][2])
        {
            if (b[row][0] == player)
                return +10;
                 
            else if (b[row][0] == opponent)
                return -10;
        }
    }
  
    // Checking for Columns for X or O victory.
    for(let col = 0; col < 3; col++)
    {
        if (b[0][col] == b[1][col] &&
            b[1][col] == b[2][col])
        {
            if (b[0][col] == player)
                return +10;
  
            else if (b[0][col] == opponent)
                return -10;
        }
    }
  
    // Checking for Diagonals for X or O victory.
    if (b[0][0] == b[1][1] && b[1][1] == b[2][2])
    {
        if (b[0][0] == player)
            return +10;
             
        else if (b[0][0] == opponent)
            return -10;
    }
  
    if (b[0][2] == b[1][1] &&
        b[1][1] == b[2][0])
    {
        if (b[0][2] == player)
            return +10;
             
        else if (b[0][2] == opponent)
            return -10;
    }
  
    // Else if none of them have
    // won then return 0
    return 0;
}

// This is the minimax function. It
// considers all the possible ways
// the game can go and returns the
// value of the board
function minimax(board, depth, isMax)
{
    let score = evaluate(board);
  
    // If Maximizer has won the game
    // return his/her evaluated score
    if (score == 10)
        return score;
  
    // If Minimizer has won the game
    // return his/her evaluated score
    if (score == -10)
        return score;
  
    // If there are no more moves and
    // no winner then it is a tie
    if (isMovesLeft(board) == false)
        return 0;
  
    // If this maximizer's move
    if (isMax)
    {
        let best = -1000;
  
        // Traverse all cells
        for(let i = 0; i < 3; i++)
        {
            for(let j = 0; j < 3; j++)
            {
                 
                // Check if cell is empty
                if (board[i][j]=='_')
                {
                     
                    // Make the move
                    board[i][j] = player;
  
                    // Call minimax recursively
                    // and choose the maximum value
                    best = Math.max(best, minimax(board,
                                    depth + 1, !isMax));
  
                    // Undo the move
                    board[i][j] = '_';
                }
            }
        }
        return best;
    }
  
    // If this minimizer's move
    else
    {
        let best = 1000;
  
        // Traverse all cells
        for(let i = 0; i < 3; i++)
        {
            for(let j = 0; j < 3; j++)
            {
                 
                // Check if cell is empty
                if (board[i][j] == '_')
                {
                     
                    // Make the move
                    board[i][j] = opponent;
  
                    // Call minimax recursively and
                    // choose the minimum value
                    best = Math.min(best, minimax(board,
                                    depth + 1, !isMax));
  
                    // Undo the move
                    board[i][j] = '_';
                }
            }
        }
        return best;
    }
}
 
// This will return the best possible
// move for the player
function findBestMove(board)
{
    let bestVal = -1000;
    let bestMove = new Move();
    bestMove.row = -1;
    bestMove.col = -1;
  
    // Traverse all cells, evaluate
    // minimax function for all empty
    // cells. And return the cell
    // with optimal value.
    for(let i = 0; i < 3; i++)
    {
        for(let j = 0; j < 3; j++)
        {
             
            // Check if cell is empty
            if (board[i][j] == '_')
            {
                 
                // Make the move
                board[i][j] = player;
  
                // compute evaluation function
                // for this move.
                let moveVal = minimax(board, 0, false);
  
                // Undo the move
                board[i][j] = '_';
  
                // If the value of the current move
                // is more than the best value, then
                // update best
                if (moveVal > bestVal)
                {
                    bestMove.row = i;
                    bestMove.col = j;
                    bestVal = moveVal;
                }
            }
        }
    }
  
    // document.write("The value of the best Move " +
    //                "is : ", bestVal + "<br><br>");
  
    return bestMove;
}
 
// Driver code

// let bestMove = findBestMove(board);
 
// document.write("The Optimal Move is :<br>");
// document.write("ROW: " + bestMove.row +
//                " COL: "+ bestMove.col + "<br>");

function makeMoveByComputer(){
    let bestMove=findBestMove(board)
        board[bestMove.row][bestMove.col]='x'
        //assignNext(document.getElementById("cell"+toString((bestMove.row+1)*(bestMove.col+1))),((bestMove.row+1)*(bestMove.col+1)-1))
        g[bestMove.row*3+bestMove.col]="X"
        console.log("cell"+((bestMove.row)*3+(bestMove.col+1)))
        document.getElementById("cell"+((bestMove.row)*3+(bestMove.col+1))).textContent="X"        
}

        
    


