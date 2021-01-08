// returns 'win', 'loss', 'tie', or 'continue'
function check_for_wlt(board){

    // assume player is always X
    if(
	// horizontal checks
	(board[0][0] == 'X' &&
       board[0][1] == 'X' &&
       board[0][2] == 'X') ||
       (board[1][0] == 'X' &&
       board[1][1] == 'X' &&
       board[1][2] == 'X') || 
       (board[2][0] == 'X' &&
	board[2][1] == 'X' &&
	board[2][2] == 'X') ||

	// vertical checks
	(board[0][0] == 'X' &&
       board[1][0] == 'X' &&
       board[2][0] == 'X') ||
       (board[0][1] == 'X' &&
       board[1][1] == 'X' &&
       board[2][1] == 'X') || 
       (board[0][2] == 'X' &&
	board[1][2] == 'X' &&
	board[2][2] == 'X') ||

	// cross checks

	(board[0][0] == 'X' &&
	 board[1][1] == 'X' &&
	 board[2][2] == 'X') ||
	(board[0][2] == 'X' &&
	 board[1][1] == 'X' &&
	 board[2][0] == 'X')
	){
	    return 'win';
    }


        // assume ai is always O
    if(
	// horizontal checks
	(board[0][0] == 'O' &&
       board[0][1] == 'O' &&
       board[0][2] == 'O') ||
       (board[1][0] == 'O' &&
       board[1][1] == 'O' &&
       board[1][2] == 'O') || 
       (board[2][0] == 'O' &&
	board[2][1] == 'O' &&
	board[2][2] == 'O') ||

	// vertical checks
	(board[0][0] == 'O' &&
       board[1][0] == 'O' &&
       board[2][0] == 'O') ||
       (board[0][1] == 'O' &&
       board[1][1] == 'O' &&
       board[2][1] == 'O') || 
       (board[0][2] == 'O' &&
	board[1][2] == 'O' &&
	board[2][2] == 'O') ||

	// cross checks

	(board[0][0] == 'O' &&
	 board[1][1] == 'O' &&
	 board[2][2] == 'O') ||
	(board[0][2] == 'O' &&
	 board[1][1] == 'O' &&
	 board[2][0] == 'O')
    ){
	alert('loss');
	    return 'loss';
    }

    // check if board is full
    for(let i = 0; i < 3; i++){
	for(let j = 0; j < 3; j++){
	    console.log(board[i][j]);
	    if(board[i][j] == ' '){
		// there's at least one blank space
		return 'continue';
	    }
	}
    }

    // player has not won, loss, or continue, so tie by default
    return 'tie';
}
