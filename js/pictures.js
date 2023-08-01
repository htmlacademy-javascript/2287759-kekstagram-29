import {modalClose, modalOpen} from './open-close.js';
import { resetComments, showMoreComments} from './comments.js';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

export function renderingPhotos(data){
  const center = document.querySelector('.img-upload');
  document.querySelector('.pictures').innerHTML = '';
  data.forEach(({ url, description, likes, comments }) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__img').alt = description;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.addEventListener('click', () =>{
      modalOpen();
      const bigPicture = document.querySelector('.big-picture');
      bigPicture.querySelector('.big-picture__img img').src = url;
      bigPicture.querySelector('.big-picture__img img').alt = description;
      bigPicture.querySelector('.social__caption').textContent = description;
      bigPicture.querySelector('.likes-count').textContent = likes;
      document.querySelector('.big-picture__cancel').addEventListener('click', ()=>{
        resetComments();
        modalClose();
      });
      showMoreComments(comments);
    });
    fragment.appendChild(picture);
  });
  container.append(fragment);
  container.append(center);
}


