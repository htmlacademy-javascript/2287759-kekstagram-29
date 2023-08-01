import { renderingPhotos } from './pictures.js';
import { debounce } from './util.js';
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
  renderingPhotos(data);

  function filterDefault(){
    if(randomFilterButton.classList.contains('img-filters__button--active')) {
      randomFilterButton.classList.remove('img-filters__button--active');
    }
    if(discussedFilterButton.classList.contains('img-filters__button--active')){
      discussedFilterButton.classList.remove('img-filters__button--active');
    }
    defaultFilterButton.classList.add('img-filters__button--active');
    renderingPhotos(data);
  }
  defaultFilterButton.addEventListener('click', debounce(filterDefault, 500));


  function filterDiscussed(){
    if(defaultFilterButton.classList.contains('img-filters__button--active')){
      defaultFilterButton.classList.remove('img-filters__button--active');
    }
    if(randomFilterButton.classList.contains('img-filters__button--active')){
      randomFilterButton.classList.remove('img-filters__button--active');
    }
    discussedFilterButton.classList.add('img-filters__button--active');
    const sorted = copyArray.sort(sortByComments);
    renderingPhotos(sorted);
  }
  discussedFilterButton.addEventListener('click', debounce(filterDiscussed, 500));

  function filterRandom(){
    if(defaultFilterButton.classList.contains('img-filters__button--active')){
      defaultFilterButton.classList.remove('img-filters__button--active');
    }
    if(discussedFilterButton.classList.contains('img-filters__button--active')){
      discussedFilterButton.classList.remove('img-filters__button--active');
    }
    randomFilterButton.classList.add('img-filters__button--active');
    const randomArray = copyArray.sort(sortRandomly).slice(0, PICTURES_COUNT);
    renderingPhotos(randomArray);
  }
  randomFilterButton.addEventListener('click', debounce(filterRandom, 500));
}
