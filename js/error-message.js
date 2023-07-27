
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');


function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideMessage();
  }
}

function hideMessage() {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  body.removeEventListener('click', hideMessage);
}


function onBodyClick() {
  body.addEventListener('click', hideMessage);
}


const showMessage = (messageElement, closeButtonClass) => {
  body.append(messageElement);
  document.addEventListener('keydown', onDocumentKeydown);
  body.addEventListener('click', onBodyClick);
  messageElement.querySelector(closeButtonClass).addEventListener('click', hideMessage);

};

export const showErrorMessage = () => {
  showMessage(errorMessage, '.error__button');
};
export const showSuccessMessage = () => {
  showMessage(successMessage, '.success__button');
};

