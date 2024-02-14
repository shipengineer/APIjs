import requestPhoto from '../fetchImg/fetchImg.js';

export default async function render(
  placeToLocalStore,
  placeToHistory,
  history,
  store,
  id,
  random
) {
  const unsplashImg = document.querySelector('.unsplashImg');
  const artistInfo = document.querySelector('.artistInfo');
  const likeCounter = document.querySelector('.likeCounter');
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
  placeToLocalStore();
}
