const palindromePermutation = (input) => {
  if (input.length === 1) return true;

  let listOfCharacters = {};
  let numOfChars = 0,
    oddAmountFound = false,
    currentChar;

  for (let i = 0; i < input.length; i++) {
    currentChar = input[i];
    if (currentChar === " ") continue;
    if (listOfCharacters[currentChar]) {
      listOfCharacters[currentChar] += 1;
    } else {
      listOfCharacters[currentChar] = 1;
    }
    numOfChars++;
  }

  const uniqueChars = Object.keys(listOfCharacters);
  for (let i = 0; i < uniqueChars.length; i++) {
    currentChar = uniqueChars[i];
    if (listOfCharacters[currentChar] % 2 !== 0) {
      if (oddAmountFound) {
        return false;
      } else {
        oddAmountFound = true;
      }
    }
  }
  return true;
};
