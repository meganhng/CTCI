const URLify = (input, inputLength) => {
  let url = "";
  for (let i = 0; i < inputLength; i++) {
    if (input[i] === " ") {
      url += "%20";
    } else {
      url += input[i];
    }
  }
  return url;
};

const URLify2 = (input, inputLength) => {
  return input.substring(0, inputLength).replaceAll(" ", "%20");
};
