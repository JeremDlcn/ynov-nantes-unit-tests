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
                    board += ".";
                }
            }
            board += "\n";
        }
        return board;
    }
}

module.exports = {
    createBoard
}