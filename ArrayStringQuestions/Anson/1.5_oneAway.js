const oneAway = (stringOne, stringTwo) => {
  if (stringOne === stringTwo) return true;
  if (Math.abs(stringOne.length - stringTwo.length) > 1) return false;

  let shorterString, longerString;
  let foundEdit = false;
  if (stringOne.length === stringTwo.length) {
    for (let i = 0; i < stringOne.length; i++) {
      if (stringOne[i] !== stringTwo[i]) {
        if (foundEdit) {
          return false;
        }
        foundEdit = true;
      }
    }
  } else {
    let shorterIndex = 0;
    let longerIndex = 0;
    if (stringOne.length >= stringTwo.length) {
      shorterString = stringTwo;
      longerString = stringOne;
    } else {
      shorterString = stringOne;
      longerString = stringTwo;
    }
    for (let i = 0; i < shorterString.length; i++) {
      if (longerString[longerIndex] !== shorterString[shorterIndex]) {
        if (foundEdit) {
          return false;
        }
        foundEdit = true;
        shorterIndex++;
        longerIndex += 2;
      }
      shorterIndex++;
      longerIndex++;
    }
  }
  return true;
};
