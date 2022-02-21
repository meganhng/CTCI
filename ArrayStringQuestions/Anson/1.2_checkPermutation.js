const checkPermutation = (stringOne, stringTwo) => {
  if (stringOne.length !== stringTwo.length) return false;

  const listOfCharacters = {};
  let currentChar;
  for (let i = 0; i < stringOne.length; i++) {
    currentChar = stringOne[i];
    if (listOfCharacters[currentChar]) {
      listOfCharacters[currentChar] += 1;
    } else {
      listOfCharacters[currentChar] = 1;
    }
  }
  for (let i = 0; i < stringTwo.length; i++) {
    currentChar = stringTwo[i];
    if (!listOfCharacters[currentChar]) {
      return false;
    } else {
      listOfCharacters[currentChar] -= 1;
    }
  }
  return true;
};
