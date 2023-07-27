import { postData } from './api.js';
import { resetScale } from './scale-image.js';
const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadCancel = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const hashtagField = form.querySelector('.text__hashtags');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent:'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const HASHTAG_COUNT_MAX = 5;
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const ErrorText = {
  INVALID_COUNT: `Максимум ${HASHTAG_COUNT_MAX} хэштегов`,
  NOT_UNIQUE: 'Хэштеги должны быть уникальные',
  INVALID_PATTERN: 'Неправильный хэштег',
};

const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const hasValidHashtags = (value) => normalizeTags(value).every((tag) => VALID_HASHTAG.test(tag));
const hasValidCount = (value) => normalizeTags(value).length <= HASHTAG_COUNT_MAX;

const hasUniqueHashtags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};


pristine.addValidator(
  hashtagField,
  hasValidHashtags,
  ErrorText.INVALID_PATTERN,
  2,
  true
);
pristine.addValidator(
  hashtagField,
  hasUniqueHashtags,
  ErrorText.NOT_UNIQUE,
  1,
  true
);
pristine.addValidator(
  hashtagField,
  hasValidCount,
  ErrorText.INVALID_COUNT,
  3,
  true
);

const isTextFieldFocused = ()=>
  document.activeElement === document.querySelector('.text__hashtags') ||
document.activeElement === document.querySelector('.text__description');

const onDocumentKeydown = (evt) => {
  const isEscapeKey = () => evt.key === 'Escape' && !isTextFieldFocused();
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
};

export function closeForm(){
  resetScale();
  pristine.reset();
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  imgUploadInput.value = '';
  imgUploadPreview.style.filter = 'none';
  form.reset();
}

export const imageEditingForm = ()=>{
  pristine.reset();
  document.querySelector('.img-upload__effect-level').classList.add('hidden');
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  imgUploadCancel.addEventListener('click', closeForm);
  document.addEventListener('keydown', onDocumentKeydown);
};

imgUploadInput.addEventListener('change', imageEditingForm);


const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    postData(closeForm);
  }
};
form.addEventListener('submit', onFormSubmit);

