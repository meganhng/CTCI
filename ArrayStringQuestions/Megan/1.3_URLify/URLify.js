const URLify = (str, num) => {
  return str.trim().split(' ').replace('%20');
}


//using the number parameter and doing it inplace
const URLify2 = (str, num) => {
  var split = str.split('');
  var currentPlace = split.length+1
  
  for (let i = num-1; i>=0; i--){
		if (split[i]==' '){
    	split[currentPlace] = '0';
      split[--currentPlace] ='2';
      split[--currentPlace]='%';
      currentPlace--;
    }
    else{
    	split[currentPlace] = split[i];
      currentPlace--;
    }    
  }
  return split.join('');
}