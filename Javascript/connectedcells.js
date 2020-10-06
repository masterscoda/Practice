
function connectedCell(matrix) {
    console.log(matrix);
    var maxSize = 0;
    for (var i = 0; i < 4; i++){
        for (var j = 0; j < 4; j++){
            if (matrix[i][j] > 0) {
                var size = checkRegion(matrix, i, j);
                maxSize = Math.max(size, maxSize);
            }
        }
    }
    console.log(maxSize);
}


function checkRegion(matrix, i, j) {
    if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[i].length) {
        return 0;
    }
    
    if (matrix[i][j] == 0) {
        return 0;
    }
    
    matrix[i][j] = 0;
    var size = 1;

    size += checkRegion(matrix, i,   j-1);
    size += checkRegion(matrix, i+1, j-1);
    size += checkRegion(matrix, i+1, j);
    size += checkRegion(matrix, i+1, j+1);
    size += checkRegion(matrix, i,   j+1);
    size += checkRegion(matrix, i-1, j+1);
    size += checkRegion(matrix, i-1, j);
    size += checkRegion(matrix, i-1, j-1);

    return size;
}



function main() {
    var matrix = [];
    for(var i=0; i<4; i++) {
        matrix[i] = new Array(4);
    }
    matrix[0][0] = 1;
    matrix[0][1] = 1;
    matrix[0][2] = 0;
    matrix[0][3] = 0;
    matrix[1][0] = 0;
    matrix[1][1] = 1;
    matrix[1][2] = 1;
    matrix[1][3] = 0;
    matrix[2][0] = 0;
    matrix[2][1] = 0;
    matrix[2][2] = 1;
    matrix[2][3] = 0;
    matrix[3][0] = 1;
    matrix[3][1] = 0;
    matrix[3][2] = 0;
    matrix[3][3] = 0;

    console.log(matrix);

    connectedCell(matrix);
}

main();
