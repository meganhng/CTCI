//Can only use external function "isSubstring()"

function isSubstring(string, substring) {
  return string.includes(substring);
}

function stringRotation(org, orgRotation) {
  if (org.length !== orgRotation.length) {
    return false;
  }
  // check if "orgRotation" is a rotation of "org"

  const compareString = orgRotation + orgRotation;
  return isSubstring(compareString, org);
}

console.log(stringRotation("test", "stte"));
console.log(stringRotation("test", "stet"));
console.log(stringRotation("aabc", "baca"));
