class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const verticals = Array.from({ length: board.length }, () => new Set());
        const squares = Array.from({ length: board.length }, () => new Set());
        const rows = Array.from({ length: board.length }, () => new Set());

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                 const num = Number(board[i][j]);

                 if (isNaN(num)) {
                    continue;
                 }

                const squareIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                 if (verticals[j].has(num) || squares[squareIndex].has(num) || rows[i].has(num)) {
                    return false;
                 }

                verticals[j].add(num);
                rows[i].add(num);

                squares[squareIndex].add(num);

                verticals[j].add(num);

                // const inSquareIndex = (i % 3) * 3 + (j % 3);
            }
        }

        return true;
    }
}
