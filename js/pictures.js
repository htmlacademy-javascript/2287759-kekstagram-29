import { createPhotos } from './data.js';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const photosCount = 25;
 const photos = Array.from({length: photosCount}, createPhotos);
export function renderingPhotos(){
  photos.forEach(({ url, description, likes, comments }) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__img').alt = description;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    fragment.appendChild(picture);
  });
  container.append(fragment);
}
