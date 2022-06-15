//iniciar variaveis

let board = ["", "","","","","","","","",]
let playertime = 0;
let symbols = ['O', 'X'];
let gameover = false;

function handleMove(position){

        if (board[position] ==''){
        board[position] = symbols[playertime];

        if (playertime == 0){
            playertime = 1;
        }else{
            playertime = 0;
        }
    }
}

