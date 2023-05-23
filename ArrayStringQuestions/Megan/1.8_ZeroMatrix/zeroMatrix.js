function zeroMatrix(matrix) {
  let zeroRows = {};
  let zeroCol = {};

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroRows[i] = i;
        zeroCol[j] = j;
      }
    }
  }

  Object.keys(zeroRows).forEach((row) => {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0;
    }
  });

  Object.keys(zeroCol).forEach((col) => {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  });

  return matrix;
}
