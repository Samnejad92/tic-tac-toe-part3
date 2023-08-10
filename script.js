const PLAYER_X = "X";
const PLAYER_O = "O";
let turn = PLAYER_X;

var cells = document.querySelectorAll(".cell");
const boardState = Array(cells.length);
boardState.fill(null);
var gmSta = document.querySelector(".game--status");
var resBtn = document.querySelector(".game--restart");
gmSta.innerHTML = "It's " + PLAYER_X + "'s turn";

cells.forEach(cell => cell.addEventListener("click",cellClick));

function cellClick(event){
const cell = event.target;
const cellNumber = cell.dataset.cellIndex;
if (cell.innerText != "") {
    return;
  }
if(turn === PLAYER_X){
    cell.innerText = PLAYER_X;
    gmSta.innerHTML = "It's " + PLAYER_O + "'s turn";
    boardState[cellNumber] = PLAYER_X;
turn = PLAYER_O;
checkWinner()
}else{
    cell.innerText = PLAYER_O;
    gmSta.innerHTML = "It's " + PLAYER_X + "'s turn";
        boardState[cellNumber] = PLAYER_O;

turn = PLAYER_X;
checkWinner()
  }
}


resBtn.addEventListener('click',resetBoard);
function resetBoard(){
    cells.forEach(cell => cell.innerText = "");
    turn = PLAYER_X;
    boardState.fill(null);
    gmSta.innerHTML = "It's " + PLAYER_X + "'s turn";

}
function checkWinner() {
  if(boardState[0] !=null && boardState[0]==boardState[1] && boardState[1]==boardState[2]){
    
    gmSta.innerHTML = "Player" + boardState[0] + "has won";
    return;
  }else if(boardState[3] !=null && boardState[3]==boardState[4] && boardState[4]==boardState[5]){
    gmSta.innerHTML = "Player" + boardState[3] + "has won";

    return;
  }else if(boardState[6] !=null && boardState[6]==boardState[7]&& boardState[7]==boardState[8]){
    gmSta.innerHTML = "Player" + boardState[6] + "has won";

    return;
  }else if(boardState[0] !=null && boardState[0]==boardState[4]&& boardState[4]==boardState[7]){
    gmSta.innerHTML = "Player" + boardState[4] + "has won";

    return;
  }else if(boardState[2] !=null && boardState[2]==boardState[5]&& boardState[5]==boardState[8]){
    gmSta.innerHTML = "Player" + boardState[2] + "has won";

    return;
  }else if(boardState[1] !=null && boardState[1]==boardState[4]&& boardState[4]==boardState[7]){
    gmSta.innerHTML = "Player" + boardState[1] + "has won";

    return;
  }else if(boardState[0] !=null && boardState[0]==boardState[4]&& boardState[4]==boardState[8]){
    gmSta.innerHTML = "Player" + boardState[0] + "has won";

    return;
  }else if(boardState[2] !=null && boardState[2]==boardState[4]&& boardState[4]==boardState[6]){
    gmSta.innerHTML = "Player" + boardState[2] + "has won";

    return;
  }
  return;
  
}
