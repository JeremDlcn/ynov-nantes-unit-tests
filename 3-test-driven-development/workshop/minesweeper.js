function createBoard(n, m, mine) {
    let board = "";
    if (n * m <= 0) {
        return "Game Over";
    } else {
        for (let line = 0; line < n; line++) {
            for (let col = 0; col < m; col++) {
                if (mine > 0) {
                    board += "*";
                    mine--;
                } else {
                        if (board[line - 1] === "*" || board[col - 1] === "*") {
                            board = board + "1";
                        } else {
                            board += "0";
                        }
                }
            }
            board += "\n";
        }
        return board;
    }
}

function createGame(array) {
    let result = [];
    array.forEach((element, index) => {
       result.push( "Field #" + (index + 1) + ":\n" + element)
    });
    return result;
}

module.exports = {
    createBoard,
    createGame
}
