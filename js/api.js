import { renderingPhotos } from './pictures.js';

fetch('https://29.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((data) => renderingPhotos(data));

export function postData() {
  const form = document.querySelector('.img-upload__form');
  const formData = new FormData(form);
  fetch('https://29.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: formData,
    },
  );
}


