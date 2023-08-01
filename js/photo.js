const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const photo = document.querySelector('#upload-file');
const photoPreview = document.querySelector('.img-upload__preview img');
const effectsArray = document.querySelectorAll('.effects__preview');
photo.addEventListener('change', ()=>{
  const file = photo.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    photoPreview.src = URL.createObjectURL(file);
    effectsArray.forEach((el) =>{
      el.style.backgroundImage = `url('${photoPreview.src}')`;
    });
  }
});
