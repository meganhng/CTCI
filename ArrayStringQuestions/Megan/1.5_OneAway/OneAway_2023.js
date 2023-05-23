function OneAway(str1, str2) {
  let hasPerformedEdit = false;

  if (str1.length === str2.length) {
    for (let i in str1) {
      if (str1[i] !== str2[i]) {
        if (hasPerformedEdit) {
          return false;
        } else {
          hasPerformedEdit = true;
        }
      }
    }
  } else if (
    str1.length + 1 === str2.length ||
    str1.length === str2.length + 1
  ) {
    const longerStr = str1.length > str2.length ? str1 : str2;
    const shorterStr = str1.length < str2.length ? str1 : str2;

    let shorterI = 0;
    for (let i in longerStr) {
      if (longerStr[i] === shorterStr[shorterI]) {
        shorterI++;
      } else {
        if (hasPerformedEdit) {
          return false;
        } else {
          hasPerformedEdit = true;
        }
      }
    }
  } else {
    return false;
  }

  return true;
}

console.log(OneAway("pble", "pale"));
console.log(OneAway("aaa", "ba"));
console.log(OneAway("aaa", "a"));
console.log(OneAway("aaa", "add"));
