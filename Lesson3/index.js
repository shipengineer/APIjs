class Img {
  constructor(id, first_name, src, likes) {
    this.id = id;
    this.author = first_name;
    this.src = src;
    this.likes = likes;
    this.isLiked = false;
  }
}
const likeButton = document.getElementById("likeButton");
const backButton = document.getElementById("backButton");
const URL = "https://api.unsplash.com/";
const unsplashImg = document.querySelector(".unsplashImg");
const artistInfo = document.querySelector(".artistInfo");
const likeCounter = document.querySelector(".likeCounter");
const placeToLoacalStore = () => {
  localStorage.setItem("store", JSON.stringify(store));
};
const store = JSON.parse(
  localStorage.getItem("store") ? localStorage.getItem("store") : "{}"
);
const history = JSON.parse(
  localStorage.getItem("history") ? localStorage.getItem("history") : "{}"
);
const placeToHistory = () => {
  localStorage.setItem("history", JSON.stringify(history));
};

const requestPhoto = async () => {
  const responce = await fetch(URL + "photos/random" + accessKey);
  const photoData = await responce.json();
  const requestedData = new Img(
    photoData.id,
    photoData.user.first_name,
    photoData.urls.regular,
    photoData.likes
  );
  return requestedData;
};

async function render() {
  const newImg = await requestPhoto();
  unsplashImg.src = newImg.src;
  unsplashImg.dataset.Id = newImg.id;
  likeCounter.textContent = newImg.likes;
  artistInfo.textContent = newImg.author;
  history[newImg.id] = new Date().getTime();
  store[newImg.id] = {
    author: newImg.author,
    likes: newImg.likes,
    src: newImg.src,
    isLiked: newImg.isLiked,
  };
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
likeButton.addEventListener("click", likeHandler);
const backHandler = () => {
  console.log(history);
};
backButton.addEventListener("click", backHandler);
render();
