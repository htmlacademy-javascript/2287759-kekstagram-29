import { showErrorMessage, showSuccessMessage } from './error-message.js';

function showErrorUploadMessage(){

}


export function getData(cb){
  fetch('https://29.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((data) => cb(data))
    .catch(() => {
      showErrorUploadMessage();
    });
}

export function postData(successCb) {
  const form = document.querySelector('.img-upload__form');
  const formData = new FormData(form);
  fetch('https://29.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: formData,
    },
  ).then((response)=>response.json())
    .then(()=>{
      showSuccessMessage();
      successCb();
    })
    .catch(() => {
      showErrorMessage();
    });
  document.querySelector('.img-upload__submit').disabled = true;
}


