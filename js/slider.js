const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const chromeElement = document.querySelector('#effect-chrome');
const sepiaElement = document.querySelector('#effect-sepia');
const marvinElement = document.querySelector('#effect-marvin');
const phobosElement = document.querySelector('#effect-phobos');
const heatElement = document.querySelector('#effect-heat');
const originElement = document.querySelector('#effect-none');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const imgUploadEffects = document.querySelector('.img-upload__effects');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 10,
  connect: 'lower',
});


imgUploadEffects.addEventListener('click', (evt) =>{
  document.querySelector('.img-upload__effect-level').classList.remove('hidden');
  if(evt.target === chromeElement){
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    sliderElement.noUiSlider.on('update', () => {
      valueElement.value = sliderElement.noUiSlider.get();
      imgUploadPreview.style.filter = `grayscale(${valueElement.value})`;
    });
  }

  if(evt.target === sepiaElement){
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
    sliderElement.noUiSlider.on('update', () => {
      valueElement.value = sliderElement.noUiSlider.get();
      imgUploadPreview.style.filter = `sepia(${valueElement.value})`;
    });
  }

  if(evt.target === marvinElement){
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
    sliderElement.noUiSlider.on('update', () => {
      valueElement.value = sliderElement.noUiSlider.get();
      imgUploadPreview.style.filter = `invert(${valueElement.value}%)`;
    });
  }

  if(evt.target === phobosElement){
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    sliderElement.noUiSlider.on('update', () => {
      valueElement.value = sliderElement.noUiSlider.get();
      imgUploadPreview.style.filter = `blur(${valueElement.value}px)`;
    });
  }

  if(evt.target === heatElement){
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
    sliderElement.noUiSlider.on('update', () => {
      valueElement.value = sliderElement.noUiSlider.get();
      imgUploadPreview.style.filter = `brightness(${valueElement.value})`;
    });
  }

  if(evt.target === originElement){
    document.querySelector('.img-upload__effect-level').classList.add('hidden');
    imgUploadPreview.style.filter = 'none';
  }
});


