using System;
using System.Collections.Generic;
public class Solution
{
  public bool CheckPermutation(string str1, string str2)
  {
    if (str1.Length != str2.Length)
    {
      return false;
    }

    int[] letters = new int[26];

    foreach (char letter in str1)
    {
      letters[letter - 'a']++;
    }

    foreach (char letter in str2)
    {
      if (letters[letter - 'a'] == 0)
      {
        return false;
      }
      else
      {
        letters[letter - 'a']--;
      }
    }

    return true;
  }
}