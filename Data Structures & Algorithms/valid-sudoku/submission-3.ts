class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const verticals = Array.from({ length: board.length }, () =>
            new Array(board.length).fill("x"),
        );

        const squares = Array.from({ length: board.length }, () =>
            new Array(board.length).fill("x"),
        );

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                verticals[j][i] = Number(board[i][j]);

                const squareIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                const inSquareIndex = (i % 3) * 3 + (j % 3);
                squares[squareIndex][inSquareIndex] = Number(board[i][j]);
            }
        }

        const isValid = (arr: Array<Array<number | string>>) => {
            for (let i = 0; i < arr.length; i++) {
                const hashMap = {};
                for (let j = 0; j < arr.length; j++) {
                    if (isNaN(Number(arr[i][j]))) {
                        continue;
                    }

                    if (hashMap[arr[i][j]]) {
                        return false;
                    }

                    hashMap[arr[i][j]] = true;
                }
            }

            return true;
        };

        return isValid(board) && isValid(verticals) && isValid(squares);
    }
}
