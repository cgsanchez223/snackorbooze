
// Takes in a array that has multiple arrays inside. The values are meant to look like a square.
// Ex = [1, 2, 3, 4,], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]
// Will become [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

function unroll(squareArray) {
    // full is meant to keep track of the total entries in array. box is where each array should be 
    const full = squareArray.length;
    const box = [];

    // for loop used. Declaring each side the way a square would be
    // We are defining 4 directions and will move between the 4 corners of the square.
    // the middle portion of the loop will represent the center space of a square
    for (let i = 0; i < Math.floor(full / 2); i++) {
        let top = i;
        let left = i;
        let bottom = full - i - 1;
        let right = bottom;

        // Starting at the top, go from left to right
        for (let x = left; x < right; x++) {
            box.push(squareArray[top][x]);
        };

        // From the top right corner, go down to bottom right corner
        for (let y = top; y < bottom; y++) {
            box.push(squareArray[y][right]);
        }

        // From the bottom right corner, go to the left bottom corner
        for (let x = right; x > left; x--) {
            box.push(squareArray[bottom][x]);
        }

        // From the bottom left corner, go back to the top left corner
        for (let y = bottom; y > top; y--) {
            box.push(squareArray[y][left]);
        }
    }

    // It is possible that the middle can be an odd number and does not divide evenly.
    // Since even numbers are easier to work with, we need to write a measure to handle odd numbers
    if (full % 2 !==0) {
        let index = Math.floor(full/2);
        box.push(squareArray[index][index]);
    }

    return box;

}

module.exports = unroll;
