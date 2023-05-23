const RotateMatrixInplace = (nXnMatrix) => {
  if (nXnMatrix.length <=1){
    return nXnMatrix
  }
	const length = nXnMatrix.length;
  
  for (i = 0; i<length; i++){
  	for(j = i+1; j<length; j++){
    	const temp = nXnMatrix[i][j]
    	nXnMatrix[i][j]= nXnMatrix[j][i];
      nXnMatrix[j][i] = temp;
    }
  }
  
  for(i = 0; i<length; i++){
  	let l = 0;
    let r = length -1;
    
    while(l<r){
    	const temp = nXnMatrix[i][l];
      nXnMatrix[i][l]=nXnMatrix[i][r];
      nXnMatrix[i][r] = temp;
      r--;
      l++;
    }
  }
  
  return nXnMatrix;
}

const RotateMatrixExtraMem = (nXnMatrix) => {
  if (nXnMatrix.length <=1){
    return nXnMatrix
  }
	const length = nXnMatrix.length;
  const rotatedArray = new Array(length);
  for(i = 0; i< length; i++){
  	rotatedArray[i] = new Array(length);
  }
  
  for(i = 0; i<length; i++){
 		for(j = 0; j<length; j++){
    	rotatedArray[i][j] = nXnMatrix[length-1-j][i]
    }
  }
    
  return rotatedArray;
}

