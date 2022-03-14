const StringRotation = (string1, string2) =>{
  const chainedString = string2 + string2;
  return chainedString.includes(string1);
}