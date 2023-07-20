import {modalOpen} from './open-close.js';
import { createPhotos } from './data.js';
import { renderComments } from './comments.js';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const photosCount = 25;
export const photos = Array.from({length: photosCount}, createPhotos);
export function renderingPhotos(){
  photos.forEach(({ url, description, likes, comments }) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__img').alt = description;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.addEventListener('click', () =>{
      modalOpen();
      renderComments(comments);
      const bigPicture = document.querySelector('.big-picture');
      bigPicture.querySelector('.big-picture__img img').src = url;
      bigPicture.querySelector('.big-picture__img img').alt = description;
      bigPicture.querySelector('.social__caption').textContent = description;
      bigPicture.querySelector('.likes-count').textContent = likes;
      bigPicture.querySelector('.comments-count').textContent = comments.length;
    });
    fragment.appendChild(picture);
  });
  container.append(fragment);
}


