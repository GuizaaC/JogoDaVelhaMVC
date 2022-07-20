//initialize variables
let board = ["", "","","","","","","","",]
//players
let playertime = 0;
//player symbols
let symbols = ['O', 'X'];
let gameOver = false;
//Vetor with victory options
let winStates = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

//Position functions
function handleMove(position){
    
    //yes, gameover
    if(gameOver){
        return;
    }

    //Nest player
    if (board[position] ==''){
        board[position] = symbols[playertime];

        gameOver = isWin();

        if(gameOver == false){

            //switch between one player and another
            playertime = (playerTime == 0) ? 1 : 0

        }
    }
    return gameOver;
}

//Victory options
function isWin(){
    
    //winstate positions
    for (let i = 0; i <winStates.length; i++){
        let seq = winstates[i]

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];
        
        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] != ''){
                return true;
            }
    }
    return false;
}
