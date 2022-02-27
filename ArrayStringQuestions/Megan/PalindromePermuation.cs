using System;
using System.Collections.Generic;


public class Solution{
	public static bool PalindromePermutation(string str){
        if (str.Length<=1){
            return true;
        }

        int counter = 0;
        bool canHaveOdd = false;
		
		str = str.ToLower();
			
        Dictionary<char, int> letters = new Dictionary<char,int>();

        for(int i = 0; i<str.Length; i++){
            if(str[i]!=' '){
                counter++;
				if(!letters.ContainsKey(str[i])){
					letters.Add(str[i],1);
				}else{
					letters[str[i]]++;
				}
            }
            

        }

        if (counter%2==1){
            canHaveOdd=true;
        }

        foreach(char letter in letters.Keys){
            if (letters[letter]%2==1){
				if(canHaveOdd){
					canHaveOdd=false;
				}else{
					return false;
				}
			}
        }

        return true;
	}
}