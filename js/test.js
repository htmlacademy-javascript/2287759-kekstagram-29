const randomNumbersArray = [];
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  if(randomNumbersArray.includes(Math.floor(result))){
    return getRandomInteger(1,25);
  } else{
    randomNumbersArray.push(Math.floor(result));
  }
  return Math.floor(result);
};


