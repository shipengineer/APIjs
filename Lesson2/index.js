import addToSliderHelper from "./slider/addToSliderHelper.js";
import fetchImg from "./slider/fetchImg.js";
import changeSlideHandler from "./slider/sliderHandlers/changeSlideHandler.js";
import nextSlideHandler from "./slider/sliderHandlers/nextSliderHandler.js";
import prevSlideHandler from "./slider/sliderHandlers/prevSlideHandler.js";
//0. объявляем счетчик парса фотографий
let photoCount = 1;

//1. получить первый раз три картинки и вставить их в слайдер
const firstRenderImage = await fetchImg(3, photoCount);
addToSliderHelper(firstRenderImage);

//2.запускаем функцию автоскрола каждые 2 секунды
const autoScroll = setInterval(nextSlideHandler, 5000);

//3.если пользователь кликает по кнопкам сам:
//3.1 кнопками следующее и предыдущее
//разделяю на две функции для читабельности
const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");
prevButton.addEventListener("click", prevSlideHandler);
nextButton.addEventListener("click", prevSlideHandler);

//3.2 навигационными точками
const navPointsContainer = document.querySelector(".navPoints");
navPointsContainer.addEventListener("click", (e) => {
  changeSlideHandler(e, photoCount);
});
