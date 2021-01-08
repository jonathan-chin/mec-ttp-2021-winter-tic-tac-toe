
// store symbols as strings, empty tiles with ' '
let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let wins = 0;
let losses = 0;
let ties = 0;

function draw_board(){
    for(let i = 0; i < 3; i++){
	for(let j = 0; j < 3; j++){
	    let tile = document.getElementById(`tile-${i}-${j}`);
	    let marker = board[i][j];

	    // not optimized
	    // unnecessarily modifying classes at every render
	    // but ok for now
	    if(marker == ' '){
		tile.classList.remove('clicked');
	    }else{
		tile.classList.add('clicked');
	    }
	    tile.innerHTML = marker;
	}
    }
}

function choose(x, y){
    let tile = board[x][y];
    if(tile != ' '){
	// do nothing
	// rely on css to provide user visual feedback
    }else{
	// assume the player is always X
	board[x][y] = 'X';
	draw_board();
	const result = check_for_wlt(board);
	if(result == 'continue'){
	    ai_turn();
	}else{
	    alert(result);
	    switch(result){
		case 'win':
		    wins++;
		    break;
		case 'tie':
		    ties++;
		    break;
	    }
	    update_record();
	}
    }
}

function update_record(){
    document.getElementById('record').innerHTML = `wins: ${wins}, losses: ${losses}, ties: ${ties}`;
}

function reset(){
    board = [
	[' ', ' ', ' '],
	[' ', ' ', ' '],
	[' ', ' ', ' ']
    ];
    draw_board();
}

function ai_turn(){
    // assume the ai selects the first empty spot
    for(let i = 0; i < 3; i++){
	for(let j = 0; j < 3; j++){
	    if(board[i][j] == ' '){
		board[i][j] = 'O';
		draw_board();
		const result = check_for_wlt(board);
		if(result == 'continue'){
		    // switch turns back to user
		    return;
		}else{
		    alert(result);
		    switch(result){
			case 'loss':
			    losses++;
			    break;
			case 'tie':
			    ties++;
			    break;
		    }
		    update_record();
		    return;
		}
	    }
	}
    }
}


// run these functions for the first time to set up the game
draw_board();
update_record();
