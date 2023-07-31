import { renderingPhotos } from './pictures.js';
const PICTURES_COUNT = 10;
let copyArray = [];
const filterElement = document.querySelector('.img-filters');
const defaultFilterButton = document.querySelector('#filter-default');
const randomFilterButton = document.querySelector('#filter-random');
const discussedFilterButton = document.querySelector('#filter-discussed');

const sortRandomly = () => Math.random() - 0.5;

const sortByComments = (pictureA, pictureB) =>
  pictureB.comments.length - pictureA.comments.length;

export function filteredPhotos(data) {
  filterElement.classList.remove('img-filters--inactive');
  copyArray = data.slice();
  renderingPhotos(copyArray);

  defaultFilterButton.addEventListener('click', () =>{
    randomFilterButton.classList.remove('img-filters__button--active');
    discussedFilterButton.classList.remove('img-filters__button--active');
    defaultFilterButton.classList.add('img-filters__button--active');
    renderingPhotos(copyArray);
  });

  discussedFilterButton.addEventListener('click', () =>{
    defaultFilterButton.classList.remove('img-filters__button--active');
    randomFilterButton.classList.remove('img-filters__button--active');
    discussedFilterButton.classList.add('img-filters__button--active');
    const sorted = copyArray.sort(sortByComments);
    renderingPhotos(sorted);
  });

  randomFilterButton.addEventListener('click', () =>{
    defaultFilterButton.classList.remove('img-filters__button--active');
    discussedFilterButton.classList.remove('img-filters__button--active');
    randomFilterButton.classList.add('img-filters__button--active');
    const randomArray = copyArray.sort(sortRandomly).slice(0, PICTURES_COUNT);
    renderingPhotos(randomArray);
  });
}
