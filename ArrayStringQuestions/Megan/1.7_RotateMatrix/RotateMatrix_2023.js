function rotateMatrix(matrix) {
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - 1 - j];
      matrix[i][n - 1 - j] = temp;
    }
  }

  return matrix;
}

function rotateMatrixMemory(matrix) {
  let rotateMatrix = [];

  for (let i = 0; i < matrix.length; i++) {
    let row = [];
    for (let j = matrix.length - 1; j >= 0; j--) {
      row.push(matrix[j][i]);
    }
    rotateMatrix.push(row);
  }

  return rotateMatrix;
}

console.log(
  rotateMatrixMemory([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  rotateMatrixMemory([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
