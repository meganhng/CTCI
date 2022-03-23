const stringRotation = (stringOne, stringTwo) => {
  const stringLength = stringOne.length;
  if (stringOne.length !== stringTwo.length || stringLength === 0) return false;

  // Assume isSubstring is a method that checks if one word is a substring of another
  const stringOneRotation = stringOne + stringOne;
  return isSubstring(stringOneRotation, stringTwo);
};
