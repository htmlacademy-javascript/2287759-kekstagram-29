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


