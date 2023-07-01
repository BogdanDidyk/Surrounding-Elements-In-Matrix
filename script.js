function getRandomIntegerNumber(rndMin = 0, rndMax = 9) {
    return Math.floor(Math.random() * (rndMax - rndMin + 1)) + rndMin;
}

function getRandomMatrix(rowsCount = 5, colsCount = 5, rndMin, rndMax) {
    const matrix = [];

    for (let i = 0; i < rowsCount; i++) {
        matrix[i] = [];
        for (let j = 0; j < colsCount; j++) {
            matrix[i][j] = getRandomIntegerNumber(rndMin, rndMax);
        }
    }

    return matrix;
}

function printMatrix(matrix) {
    matrix.forEach(row => console.log(row.join("  ")));
}