
// store symbols as strings, empty tiles with ' '
let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

function draw_board(){
    for(let i = 0; i < 3; i++){
	for(let j = 0; j < 3; j++){
	    document.getElementById(`tile-${i}-${j}`).innerHTML = board[i][j];
	}
    }
}

function choose(x, y){
    let tile = board[x][y];
    if(tile != ' '){
	alert('not allowed');
    }else{
	// assume the player is always X
	board[x][y] = 'X';
	draw_board();
	let game_should_end = check_for_wlt(board);
	if(game_should_end){
	    // update scores
	    // reset board
	}else{
	    ai_turn();
	}
    }
}

function ai_turn(){
    // assume the ai selects the first empty spot
    for(let i = 0; i < 3; i++){
	for(let j = 0; j < 3; j++){
	    if(board[i][j] == ' '){
		board[i][j] = 'O';
		draw_board();
		return;
	    }
	}
    }
    
}


draw_board();
