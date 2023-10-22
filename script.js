function getRandomIntegerNumber(rndMin = 0, rndMax = 9) {
    return Math.floor(Math.random() * (rndMax - rndMin + 1)) + rndMin;
}

function getRandomIntegerArray(length, min, max) {
    return getArrayOfLength(length).map(() => getRandomIntegerNumber(min, max));
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

function isValueInRange(value, lowerBoundary, upperBoundary) {
    return value >= lowerBoundary && value <= upperBoundary;
}

function getMatrixSurroundingIndicesFor(matrix, rowIndex, colIndex, distance = 1) {
    const rowsCount = matrix.length;
    const colsCount = rowsCount > 0 ? matrix[0].length : 0;
    const surroundingIndices = [];
    const isRowIndexValid = (index) => isValueInRange(index, 0, rowsCount - 1);
    const isColIndexValid = (index) => isValueInRange(index, 0, colsCount - 1);
    const areCurrentIndicesEqualTo = (i, j) => i === rowIndex && j === colIndex;
    let newRowIndex;
    let newColIndex;
    
    if (rowsCount === 0 || colsCount === 0 || !isRowIndexValid(rowIndex) || !isColIndexValid(colIndex)) {
        return surroundingIndices;
    }

    if (distance >= rowsCount - 1 && distance >= colsCount - 1) {
        return matrix.flat();
    }
    
    for (let i = -distance; i <= distance; i++) {
        for (let j = -distance; j <= distance; j++) {
            newRowIndex = rowIndex + i;
            newColIndex = colIndex + j;
            
            if (isRowIndexValid(newRowIndex) && isColIndexValid(newColIndex) && !areCurrentIndicesEqualTo(newRowIndex, newColIndex)) {
                surroundingIndices.push([newRowIndex, newColIndex]);
            }
        }
    }
    
    return surroundingIndices;
}

function getMatrixValuesByIndices(matrix, indices) {
    const length = indices.length;
    const values = [];
    
    for (let i = 0; i < length; i++) {
        values.push(matrix[indices[i][0]][indices[i][1]]);
    }

    return values;
}

const matrix = getRandomMatrix(4, 4);
const surroundingIndices = getMatrixSurroundingIndicesFor(matrix, 2, 1);
const values = getMatrixValuesByIndices(matrix, surroundingIndices);
printMatrix(matrix);
console.log("");
console.log(surroundingIndices);
console.log("");
console.log(values);