function getJoinedArrayStr(arr, separator = ", ") {
    return arr.join(separator);
}

function getRandomInteger(min = 0, max = 9) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getArrayOfLength(length) {
    return Array.from({length});
}

function getRandomIntegerArray(length, min, max) {
    return getArrayOfLength(length).map(() => getRandomInteger(min, max));
}

function getRandomIntegerMatrix(rows, cols, min, max) {
    return getArrayOfLength(rows).map(() => getRandomIntegerArray(cols, min, max));
}

function printMatrix(matrix) {
    matrix.forEach(row => console.log(row.join("  ")));
}

function isValueInRange(value, lowerBoundary, upperBoundary) {
    return value >= lowerBoundary && value <= upperBoundary;
}

function getSurroundingItemsInMatrixFor(matrix, rowIndex, colIndex, distance = 1) {
    const rows = matrix.length;
    const cols = rows > 0 ? matrix[0].length : 0;
    const surroundingItems = [];
    const isBoundedRowIndex = (index) => isValueInRange(index, 0, rows - 1);
    const isBoundedColIndex = (index) => isValueInRange(index, 0, cols - 1);
    const areCurrentIndicesEqualToInitial = (i, j) => i === rowIndex && j === colIndex;
    let currentRowIndex;
    let currentColIndex;
    
    if (rows === 0 || cols === 0 || !isBoundedRowIndex(rowIndex) || !isBoundedColIndex(colIndex)) {
        return surroundingIsurroundingItemsndices;
    }

    if (distance >= rows - 1 && distance >= cols - 1) {
        return matrix.flat();
    }
    
    for (let i = -distance; i <= distance; i++) {
        for (let j = -distance; j <= distance; j++) {
            currentRowIndex = rowIndex + i;
            currentColIndex = colIndex + j;
            
            if (isBoundedRowIndex(currentRowIndex) && isBoundedColIndex(currentColIndex) && !areCurrentIndicesEqualToInitial(currentRowIndex, currentColIndex)) {
                surroundingItems.push([currentRowIndex, currentColIndex]);
            }
        }
    }
    
    return surroundingItems;
}

function getMatrixValuesByIndices(matrix, indices) {
    const length = indices.length;
    const values = [];
    
    for (let i = 0; i < length; i++) {
        values.push(matrix[indices[i][0]][indices[i][1]]);
    }

    return values;
}

const matrix = getRandomIntegerMatrix(4, 4);
const surroundingIndices = getSurroundingItemsInMatrixFor(matrix, 2, 1);
const values = getMatrixValuesByIndices(matrix, surroundingIndices);
printMatrix(matrix);
console.log("");
console.log(surroundingIndices);
console.log("");
console.log(values);