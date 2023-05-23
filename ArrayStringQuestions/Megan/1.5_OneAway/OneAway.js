const oneAway = (str1, str2) => {
    if (str1.length + 1 < str2.length || str2.length + 1 < str1.length){
        return false;
    }
    else{
    	let hasOneError = false;
      
      if (str1.length === str2.length){
      	for (i = 0; i<str1.length; i++){
        	if (str1[i] !== str2[i]){
          	if (hasOneError){
            	return false
            }
            else {
            	hasOneError = true;
            }
          }
        }
      }
      else{
      	let longestString = str1.length>str2.length? str1 : str2;
        let shortestString = str1.length>str2.length? str2 : str1;
        
        let index = 0;
        
        for (i = 0; i<shortestString.length; i++){
        	if (longestString[i]!== shortestString[index]){
          	if (hasOneError){
            	return false;
            }
            else {
            	hasOneError = true;
            }
          }else{
          	index ++;
          }
        }
      }
      
      return true;
    }
}