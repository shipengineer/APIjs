export default function likeHandler() {
  const unsplashImg = document.querySelector('.unsplashImg');
  const likeCounter = document.querySelector('.likeCounter');

  const store = JSON.parse(
    localStorage.getItem('store') ? localStorage.getItem('store') : '{}'
  );
  const placeToLocalStore = () => {
    localStorage.setItem('store', JSON.stringify(store));
  };
  const needElement = store[unsplashImg.dataset.Id];
  //1.Сравнить имеющееся айди
  if (needElement.isLiked) {
    likeCounter.textContent = --needElement.likes;
  } else {
    likeCounter.textContent = ++needElement.likes;
  }
  needElement.isLiked = !needElement.isLiked;
  placeToLocalStore();
}
