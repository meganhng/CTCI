// [1,2,3]     [1,4,7]
// [4,5,6] --> [2,5,8]
// [7,8,9]     [3,6,9]

const RotateMatrix = (nXnMatrix) => {
  for (i = 0; i < nXnMatrix.length; i++) {
    for (j = i + 1; j < nXnMatrix[i].length; j++) {
      const temp = nXnMatrix[i][j];
      nXnMatrix[i][j] = nXnMatrix[j][i];
      nXnMatrix[j][i] = temp;
    }
  }
};
