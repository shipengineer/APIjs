export default function likeHandler() {
  const needElement = store[unsplashImg.dataset.Id];
  //1.Сравнить имеющееся айди
  console.log(unsplashImg.dataset.Id);
  if (needElement.isLiked) {
    likeCounter.textContent = --needElement.likes;
  } else {
    likeCounter.textContent = ++needElement.likes;
  }
  needElement.isLiked = !needElement.isLiked;
  placeToLocalStore();
}
