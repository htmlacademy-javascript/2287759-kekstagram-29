import { renderingPhotos } from './pictures.js';
import { showErrorMessage, showSuccessMessage } from './error-message.js';
import { closeForm } from './form.js';

fetch('https://29.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((data) => renderingPhotos(data));

export function postData() {
  const form = document.querySelector('.img-upload__form');
  const formData = new FormData(form);
  fetch('https://29.javascript.pages.academy/kekstagra',
    {
      method: 'POST',
      body: formData,
    },
  ).then((response)=>response.json())
    .then(()=>{
      showSuccessMessage();
      closeForm();
    })
    .catch(() => {
      showErrorMessage();
    });
}


