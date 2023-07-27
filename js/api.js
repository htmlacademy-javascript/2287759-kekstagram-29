import { renderingPhotos } from './pictures.js';
import { showErrorMessage, showSuccessMessage } from './error-message.js';

const errorText = 'Не удалось отправить форму. Попробуйте ещё раз';

//  'Не удалось загрузить данные. Попробуйте обновить страницу'

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
  ).then((response)=>response.json())
    .then((data)=>{
      showSuccessMessage();
      console.log(data);
    })
    .catch(() => {
      showErrorMessage();
      throw new Error(errorText);
    });
}


