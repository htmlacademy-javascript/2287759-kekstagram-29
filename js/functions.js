let string = prompt("Введите строку");
let maxlength = Number(prompt("Введите максимальную длинну"));
function comparison(){
  if(string.length <= maxlength){
    alert("Длина строки меньше максимальной");
  }
  else {alert("Длина строки больше максимальной");}
}
comparison(string.length, maxlength);

let stringCompressed = string.replaceAll(" ", "");
let stringUp = stringCompressed.toUpperCase();
function isItPalindrome(){
let newString = "";
for(let i=(stringUp.length-1); i>=0; i--){
newString = newString + stringUp[i];
}
if(newString === stringUp)
{
  alert("Это палиндром");
}
else{
    alert("Это НЕ палиндром");
  }
}
isItPalindrome(stringUp);

function numberInString(){
  let number="";
  for(let i=0; i<=(stringUp.length-1); i++){
    switch(stringUp[i]){
      case "0":
        if(number!=""){
      number=number + stringUp[i];}
      break;
      case "1":
      number=number + stringUp[i];
      break;
      case "2":
      number=number + stringUp[i];
      break;
      case "3":
      number=number + stringUp[i];
      break;
      case "4":
      number=number + stringUp[i];
      break;
      case "5":
      number=number + stringUp[i];
      break;
      case "6":
      number=number + stringUp[i];
      break;
      case "7":
      number=number + stringUp[i];
      break;
      case "8":
      number=number + stringUp[i];
      break;
      case "9":
      number=number + stringUp[i];
      break;
      default: break;
  }
  }
  if(number==""){
    alert("В строке нет чисел");
  }
  else{
    alert(number);
  }
}
numberInString(stringUp);
