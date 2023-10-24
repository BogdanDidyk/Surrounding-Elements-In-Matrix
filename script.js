function getJoinedArrayStr(arr, separator = ", ") {
    return arr.join(separator);
}

function printMatrix(matrix, itemSeparator = " ") {
    matrix.forEach(row => console.log(getJoinedArrayStr(row, itemSeparator)));
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

function isValueInRange(value, lowerBoundary, upperBoundary) {
    return value >= lowerBoundary && value <= upperBoundary;
}

function getSurroundingItemsInMatrixFor(matrix, rowIndex, colIndex, distance = 1) {
    const rows = matrix.length;
    const cols = rows > 0 ? matrix[0].length : 0;
    const surroundingItems = new Map();
    const isBoundedRowIndex = (index) => isValueInRange(index, 0, rows - 1);
    const isBoundedColIndex = (index) => isValueInRange(index, 0, cols - 1);
    const areCurrentIndicesEqualToInitial = (i, j) => i === rowIndex && j === colIndex;
    let currentRowIndex;
    let currentColIndex;
    
    if (rows === 0 || cols === 0 || !isBoundedRowIndex(rowIndex) || !isBoundedColIndex(colIndex)) {
        return surroundingItems;
    }

    if (distance >= rows - 1 && distance >= cols - 1) {
        return matrix.flat();
    }
    
    for (let i = -distance; i <= distance; i++) {
        for (let j = -distance; j <= distance; j++) {
            currentRowIndex = rowIndex + i;
            currentColIndex = colIndex + j;
            
            if (isBoundedRowIndex(currentRowIndex) && isBoundedColIndex(currentColIndex) && !areCurrentIndicesEqualToInitial(currentRowIndex, currentColIndex)) {
                surroundingItems.set([currentRowIndex, currentColIndex], matrix[currentRowIndex][currentColIndex]);
            }
        }
    }
    
    return surroundingItems;
}

const matrix = getRandomIntegerMatrix(4, 4);
const surroundingItems = getSurroundingItemsInMatrixFor(matrix, 2, 1);
const indices = Array.from(surroundingItems.keys());
const items = Array.from(surroundingItems.values());
printMatrix(matrix, "   ");
console.log(`\nIndices: [${getJoinedArrayStr(indices, "; ")}]`);
console.log(`Items: [${getJoinedArrayStr(items, "; ")}]`);