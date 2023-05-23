function palindromePermutation(str) {
  let charactersCounter = {};
  let counter = 0;

  for (let char of str) {
    if (char !== " ") {
      counter++;
      const lowerChar = char.toLowerCase();

      charactersCounter[lowerChar]
        ? charactersCounter[lowerChar]++
        : (charactersCounter[lowerChar] = 1);
    }
  }

  let allowedOddCount = !!counter % 2;

  for (let key in charactersCounter) {
    if (charactersCounter[key] % 2 && !allowedOddCount) {
      return false;
    } else if (charactersCounter[key] % 2 && allowedOddCount) {
      allowedOddCount = false;
    }
  }

  return true;
}
