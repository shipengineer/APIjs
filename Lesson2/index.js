import addToSliderHelper from "./displayHelpers/addToSliderHelper.js";
import fetchImg from "./fetchHelper/fetchImg.js";
import changeSlideHandler from "./handlers/changeSlideHandler.js";
//0. объявляем счетчик парса фотографий
let photoCount = 1;
//1. получить первый раз три картинки и вставить их в слайдер
const firstRenderImage = await fetchImg(3, photoCount);

addToSliderHelper(firstRenderImage);

const navPointsContainer = document.querySelector(".navPoints");

navPointsContainer.addEventListener(
  "click",
  changeSlideHandler(Event, photoCount)
);

//2. на 2 картинке догрузить еще одну картинку и добавить в слайдер
