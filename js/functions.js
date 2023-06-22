
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

const meeting = (str1, str2, str3, minutes) =>{
  const beginingWork = str1.split(':');
  const endingWork = str2.split(':');
  const meetingBegins = str3.split(':');
  const meetingEnd = [];
  meetingEnd[0] = parseInt(meetingBegins[0],10) + Math.floor(minutes / 60);
  meetingEnd[1] = parseInt(meetingBegins[1],10) + minutes % 60;
  let result;
  result = !(parseInt(beginingWork[0],10) > parseInt(meetingBegins[0],10));
  result = !(parseInt(meetingBegins[0],10) > parseInt(endingWork[0],10));
  result = !(parseInt(endingWork[0],10) < meetingEnd[0]);
  if(parseInt(beginingWork[0],10) === parseInt(meetingBegins[0],10)){
    if(parseInt(beginingWork[1],10) < parseInt(meetingBegins[1],10)) {
      result = true;
    } else{
      result = false;
    }
  }
  if(parseInt(endingWork[0],10) === meetingEnd[0]){
    if(parseInt(endingWork[1],10) > meetingEnd[1]) {
      result = true;
    } else{
      result = false;
    }
  }
  return result;
};


