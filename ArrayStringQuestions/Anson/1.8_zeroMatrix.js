const zeroMatrix = (matrix) => {
  const zeroRows = {};
  const zeroColumns = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroRows[i] = 1;
        zeroColumns[j] = 1;
      }
    }
  }

  const rows = Object.keys(zeroRows);
  const columns = Object.keys(zeroColumns);
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[rows[i]][j] = 0;
    }
  }
  for (let i = 0; i < columns.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][columns[i]] = 0;
    }
  }
  return matrix;
};
