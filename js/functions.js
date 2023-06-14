
const comparison = (string, maxlength) =>string.length <= maxlength;
console.log(comparison('just like that', 57));

const isItPalindrome = (string)=>{
  let stringCompressed=string.replaceAll(" ", "");
  let stringUp=stringCompressed.toUpperCase();
  let newString = "";
  for(let i=(stringUp.length-1); i>=0; i--){
    newString = newString + stringUp[i];
}
return stringUp === newString;
}
console.log(isItPalindrome("asdffdjsa"));

