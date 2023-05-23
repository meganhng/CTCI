function stringCompression(str) {
  let compressedStr = "";
  let counter = 0;

  for (let char of str) {
    if (compressedStr[compressedStr.length - 1] !== char) {
      if (counter !== 0) {
        compressedStr += `${counter}`;
      }
      compressedStr += `${char}`;
      counter = 1;
    } else {
      counter++;
    }
  }

  if (counter !== 0) {
    compressedStr += `${counter}`;
  }

  return compressedStr.length < str.length ? compressedStr : str;
}

console.log(stringCompression("aabcccccaaa"));

console.log(
  stringCompression("asldkgjas;iklfhiowehgaowihahfkajsfdlasjfklasjdflasjf")
);

console.log(stringCompression("aababcccccaaa"));

console.log(stringCompression("aaaaaaaaaaaa"));

console.log(stringCompression("abcdefghijk"));
