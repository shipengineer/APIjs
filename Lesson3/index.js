class Img {
  constructor(id, first_name, src, likes) {
    this.id = id;
    this.author = first_name;
    this.src = src;
    this.likes = likes;
  }
}

const URL = "https://api.unsplash.com/";
const unsplashImg = document.querySelector(".unsplashImg");
const artistInfo = document.querySelector(".artistInfo");
const likeCounter = document.querySelector(".likeCounter");
const store = {};

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
  likeCounter.textContent = newImg.likes;
  artistInfo.textContent = newImg.author;
  if (localStorage.getItem("store") === null) {
    store[newImg.id] = {
      author: newImg.author,
      likes: newImg.likes,
      src: newImg.src,
    };
    localStorage.setItem("store", JSON.stringify(store));
  }
}
render();
