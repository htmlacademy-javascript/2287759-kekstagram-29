export function modalOpen(){
  document.querySelector('.big-picture').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.querySelector('.social__comment-count').classList.remove('hidden');
  document.querySelector('.comments-loader').classList.remove('hidden');
}

export function modalClose (){
  document.querySelector('.big-picture').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
}

document.querySelector('.big-picture__cancel').addEventListener('click', modalClose);
document.addEventListener('keydown',(evt)=>{
if (evt.key=== 'Escape'){
evt.preventDefault();
modalClose();
}
});
