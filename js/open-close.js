const onDocumentKeydown = (evt) => {
  const isEscapeKey = () => evt.key === 'Escape';
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalClose();
  }
};

export function modalOpen(){
  document.querySelector('.big-picture').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.querySelector('.social__comment-count').classList.remove('hidden');
  document.querySelector('.comments-loader').classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
}

export function modalClose (){
  document.querySelector('.big-picture').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

document.querySelector('.big-picture__cancel').addEventListener('click', modalClose);


