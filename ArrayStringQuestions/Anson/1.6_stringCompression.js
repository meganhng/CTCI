const stringCompression = (input) => {
  if (input.length === 1) return input;
  let compressedString = input[0];
  let currentChar = input[0];
  let charCount = 1;
  for (let i = 1; i < input.length; i++) {
    if (currentChar !== input[i]) {
      currentChar = input[i];
      compressedString += charCount + currentChar;
      charCount = 0;
    }
    charCount++;
    if (i === input.length - 1) {
      compressedString += charCount;
    }
  }
  if (compressedString.length >= input.length) {
    return input;
  }
  return compressedString;
};
