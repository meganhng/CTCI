// Check if each character in a string is unique
const isUnique = (input) => {
  const listOfCharacters = {};

  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];
    if (listOfCharacters[currentChar]) {
      return false;
    }
    listOfCharacters[currentChar] = 1;
  }
  return true;
};

// Check for unique characters without using a data structure
const isUniquePartTwo = (input) => {
  const listOfCharacters = input.split("").sort();

  for (let i = 1; i < listOfCharacters.length; i++) {
    if (listOfCharacters[i] === listOfCharacters[i - 1]) {
      return false;
    }
  }
  return true;
};
