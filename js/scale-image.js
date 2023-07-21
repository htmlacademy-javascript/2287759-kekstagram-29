const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

function toScaleImg(value){
  imgUploadPreview.style.transform = `scale(${value / 100})`;
}

let currentScaleValue = document.querySelector('.scale__control--value').value;

smallerButton.addEventListener('click', ()=>{
  if(parseInt(currentScaleValue,10) > 25){
    currentScaleValue = parseInt(currentScaleValue,10) - 25;
    document.querySelector('.scale__control--value').value = `${currentScaleValue}%`;
  } else {
    document.querySelector('.scale__control--value').value = `${25}%`;
  }
  toScaleImg(currentScaleValue);
});

biggerButton.addEventListener('click', ()=>{
  if(parseInt(currentScaleValue,10) < 100){
    currentScaleValue = parseInt(currentScaleValue,10) + 25;
    document.querySelector('.scale__control--value').value = `${currentScaleValue}%`;
  } else {
    document.querySelector('.scale__control--value').value = `${100}%`;
  }
  toScaleImg(currentScaleValue);
});


