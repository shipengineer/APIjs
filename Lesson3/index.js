import backHandler from './handlers/backHandler.js';
import likeHandler from './handlers/likeHandler.js';
import getHistory from './history/history.js';
import render from './render/render.js';

const isRandom = localStorage.getItem('isRandom')
  ? localStorage.getItem('isRandom')
  : true;
const likeButton = document.getElementById('likeButton');
const backButton = document.getElementById('backButton');

//Чтение и запись просмотренных фотографий
const store = JSON.parse(
  localStorage.getItem('store') ? localStorage.getItem('store') : '{}'
);
const placeToLocalStore = () => {
  localStorage.setItem('store', JSON.stringify(store));
};

//Фиксация АЙди просмотренных фотографий
const history = getHistory();

const placeToHistory = () => {
  localStorage.setItem('history', history.join(','));
};
//обработка кнопок
likeButton.addEventListener('click', likeHandler);

backButton.addEventListener('click', backHandler);

//проверка на рандом или истроия для запуска рендера
if (isRandom) {
  render(placeToLocalStore, placeToHistory, history, store, 0, true);
} else {
  const id = history[0];
  history = history.slice(1);
  placeToHistory();
  render(placeToLocalStore, placeToHistory, history, store, id, false);
}
