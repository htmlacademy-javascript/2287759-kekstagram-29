const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleElement = document.querySelector('.scale__control--value');

function toScaleImg(value){
  const imgUploadPreview = document.querySelector('.img-upload__preview img');
  imgUploadPreview.style.transform = `scale(${value / 100})`;
}

smallerButton.addEventListener('click', ()=>{
  if(parseInt(scaleElement.value,10) > 25){
    scaleElement.value = parseInt(scaleElement.value,10) - 25;
    document.querySelector('.scale__control--value').value = `${scaleElement.value}%`;
  } else {
    document.querySelector('.scale__control--value').value = `${25}%`;
  }
  toScaleImg(parseInt(scaleElement.value,10));
});

biggerButton.addEventListener('click', ()=>{
  if(parseInt(scaleElement.value,10) < 100){
    scaleElement.value = parseInt(scaleElement.value,10) + 25;
    document.querySelector('.scale__control--value').value = `${scaleElement.value}%`;
  } else {
    document.querySelector('.scale__control--value').value = `${100}%`;
  }
  toScaleImg(parseInt(scaleElement.value,10));
});
export function resetScale(){
  toScaleImg(100);
}

