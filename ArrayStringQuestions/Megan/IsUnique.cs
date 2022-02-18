using System;
using System.Collections.Generic;
public class Solution{
    //using other data structures 
    public bool IsUnique(string s){
        if (s.Length <= 1){
            return true;
        }

        HashSet<char> letters = new HashSet<char>();

        foreach (char letter in s){
            if (letters.Contains(letter)){
                return false;
            }
            else{
                letters.Add(letter);
            }
        }

        return true;
    }

    //using no other data structures (only array and string)
    public bool IsUnique2(string s){
        if (s.Length<=1){
            return true;
        }
        
        char [] letters = s.ToCharArray();

        Array.Sort(letters);

        for(int i = 1; i<letters.Length; i++){
            if (letters[i-1] == letters[i]){
                return false;
            }
        }

        return true;
    }
}