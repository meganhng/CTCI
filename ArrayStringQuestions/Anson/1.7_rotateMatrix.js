const rotateMatrix = (matrix) => {
  const side = matrix.length;
  if (side === 1) return matrix;

  let rotatedImage = [];
  let start = 0;
  let end = side - 1;

  for (let i = 0; i < side; i++) {
    rotatedImage[i] = new Array(side);
  }
  for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
      rotatedImage[i][j] = matrix[end - j][start + i];
    }
  }
  return rotatedImage;
};

const rotateMatrixInPlace = (matrix) => {
  const side = matrix.length;
  if (side === 1) return matrix;

  let start, end, temp;
  let limit = Math.floor(side / 2);
  for (let i = 0; i < limit; i++) {
    start = i;
    end = side - 1 - i;
    for (let j = start; j < end; j++) {
      const k = j - start;
      temp = matrix[start][j];
      matrix[start][j] = matrix[end - k][start];
      matrix[end - k][start] = matrix[end][end - k];
      matrix[end][end - k] = matrix[j][end];
      matrix[j][end] = temp;
    }
  }
  return matrix;
};
