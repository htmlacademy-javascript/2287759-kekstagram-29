
const comparison = (string, maxlength) =>string.length <= maxlength;


const isItPalindrome = (string)=>{
  const stringCompressed = string.replaceAll(' ', '');
  const stringUp = stringCompressed.toUpperCase();
  let newString = '';
  for(let i = (stringUp.length - 1); i >= 0; i--){
    newString = newString + stringUp[i];
  }
  return stringUp === newString;
};


