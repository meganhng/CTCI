const ZeroMatrix = (matrix) => {
	let zeroRow = {};
  let zeroColumn = {};
  
  for (let i = 0; i<matrix.length; i++){
  	for (let j = 0; j<matrix[i].length; j++){
    	if (matrix[i][j] === 0){
      	zeroRow[i] = true;
        zeroColumn[j] = true;
      }
    }
  }
  
  Object.keys(zeroRow).forEach(row => {
  	for(let i = 0; i<matrix[row].length; i++){
    	matrix[row][i]=0;
    }
  })
  
    Object.keys(zeroColumn).forEach(col => {
  	for(let i = 0; i<matrix.length; i++){
    	matrix[i][col]=0;
    }
  })
  
  return matrix;
}