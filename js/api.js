import { renderingPhotos } from './pictures.js';

fetch('https://29.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((data) => renderingPhotos(data));
