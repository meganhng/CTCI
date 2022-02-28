const StringCompression = (str) => {
  if (str.length <= 1) {
    return str;
  }

  let compressedString = "";
  let prevLetter = "";
  let counter = 0;

  [...str].forEach((letter) => {
    if (letter === prevLetter) {
      counter++;
    } else {
      if (prevLetter !== "") {
        compressedString += prevLetter + counter;
      }
      prevLetter = letter;
      counter = 1;
    }
  });

  compressedString += prevLetter + counter;

  return compressedString.length < str.length ? compressedString : str;
};
