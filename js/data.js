import {getRandomInteger} from'./util.js';
import {createRandomIdFromRangeGenerator} from'./util.js';
const DESCRIPTION = [
  'descritpion1',
  'descritpion2',
  'descritpion3',
  'descritpion4',
  'descritpion5',
  'descritpion6',
  'descritpion7',
  'descritpion8',
  'descritpion9',
  'descritpion10',
  'descritpion11',
  'descritpion12',
  'descritpion13',
  'descritpion14',
  'descritpion15',
  'descritpion16',
  'descritpion17',
  'descritpion18',
  'descritpion19',
  'descritpion20',
  'descritpion21',
  'descritpion22',
  'descritpion23',
  'descritpion24',
  'descritpion25',
];
const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAME = [
  'Александр',
  'Алексей',
  'Андрей',
  'Борис',
  'Владимир',
  'Владислав',
  'Валерия',
  'Геннадий',
  'Дмитрий',
  'Елена',
  'Жанна',
  'Зинаида',
  'Ирина',
  'Константин',
  'Лилия',
  'Марина',
  'Николай',
  'Ольга',
  'Олег',
  'Петр',
  'Павел',
  'Роман',
  'Станислав',
  'Ульяна',
  'Фатима',
  'Фаина',
  'Хасан',
  'Эльвира',
  'Эльдар',
  'Юлия',
  'Яна',
];


const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const generateMessageId = createRandomIdFromRangeGenerator(1, 30);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//создается объект-комментарий
const createMessage = () => (
  {
    id: generateMessageId(),
    avatar: `img/avatar-${ getRandomInteger(1,6) }.svg`,
    message: getRandomArrayElement(MESSAGE),
    name: `${getRandomArrayElement(NAME)}`,
  }
);

//создается объект-фотография
const createPhotos = () => (
  {
    id: generatePhotoId(),
    url: `photos/${ getRandomInteger(1,25) }.jpg`,
    likes: getRandomInteger(15,200),
    description: getRandomArrayElement(DESCRIPTION),
    comments: Array.from({length:getRandomInteger(1,30)}, createMessage),
  }
);

const photosCount = 25;
const photos = Array.from({length: photosCount}, createPhotos);

