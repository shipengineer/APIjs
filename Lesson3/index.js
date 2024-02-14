class Img {
  constructor(id, first_name, src, likes) {
    this.id = id;
    this.author = first_name;
    this.src = src;
    this.likes = likes;
    this.isLiked = false;
  }
}
const accessKey = '/?client_id=2pxXSLUrThK6302ZeBwVjishUCZUj5PiiD9zu4xjslU';
const isRandom = localStorage.getItem('isRandom')
  ? localStorage.getItem('isRandom')
  : true;
const likeButton = document.getElementById('likeButton');
const backButton = document.getElementById('backButton');
const URL = 'https://api.unsplash.com/';
const unsplashImg = document.querySelector('.unsplashImg');
const artistInfo = document.querySelector('.artistInfo');
const likeCounter = document.querySelector('.likeCounter');
const placeToLoacalStore = () => {
  localStorage.setItem('store', JSON.stringify(store));
};
const store = JSON.parse(
  localStorage.getItem('store') ? localStorage.getItem('store') : '{}'
);

const getHistory = () => {
  const string = localStorage.getItem('history')
    ? localStorage.getItem('history')
    : '';
  let order = [];
  console.log(string);
  if (string.length === 0) {
    return order;
  }
  order = string.split(',');
  return order;
};
const history = getHistory();

const placeToHistory = () => {
  localStorage.setItem('history', history.join(','));
};
const requestPhoto = async (id, random) => {
  const responce = await fetch(
    URL + (random ? 'photos/random' : `photos/${id}`) + accessKey
  );

  const photoData = await responce.json();
  const requestedData = new Img(
    photoData.id,
    photoData.user.first_name,
    photoData.urls.regular,
    photoData.likes
  );
  return requestedData;
};

async function render(id, random) {
  const newImg = await requestPhoto(id, random);
  if (!random) {
    localStorage.setItem('isRandom', 'true');
  }
  unsplashImg.src = newImg.src;
  unsplashImg.dataset.Id = newImg.id;
  likeCounter.textContent = newImg.likes;
  artistInfo.textContent = newImg.author;
  store[newImg.id] = {
    author: newImg.author,
    likes: newImg.likes,
    src: newImg.src,
    isLiked: newImg.isLiked,
  };
  history.push(newImg.id);
  placeToHistory();
  placeToLoacalStore();
}
const likeHandler = () => {
  const needElement = store[unsplashImg.dataset.Id];
  //1.Сравнить имеющееся айди
  console.log(unsplashImg.dataset.Id);
  if (needElement.isLiked) {
    likeCounter.textContent = --needElement.likes;
  } else {
    likeCounter.textContent = ++needElement.likes;
  }
  needElement.isLiked = !needElement.isLiked;
  placeToLoacalStore();
};
likeButton.addEventListener('click', likeHandler);
const backHandler = () => {
  localStorage.setItem('isRandom', 'false');
  console.log(history);
};
backButton.addEventListener('click', backHandler);
if (isRandom) {
  render(0, true);
} else {
  const id = history[0];
  history = history.slice(1);
  placeToHistory();
  render(id, false);
}
