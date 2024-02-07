//логика

import fetchImg from "./fetchHelper/fetchImg.js";

//0. объявляем счетчик парса фотографий
let photoCount = 1;
//1. получить первый раз три картинки и вставить их в слайдер
const firstRenderImage = await fetchImg(3, photoCount);

function addToSliderHelper(images) {
  const imageContainer = document.querySelector(".imgContainer");
  const navPoints = document.querySelector(".navPoints");
  images.forEach((img, index) => {
    const newSlide = document.createElement("img");
    newSlide.setAttribute("src", `${img.thumbnailUrl}`);
    imageContainer.append(newSlide);

    const newNavPointInput = document.createElement("input");
    newNavPointInput.type = "radio";
    newNavPointInput.classList.add("navPointInput");
    newNavPointInput.value = index;

    navPoints.appendChild(newNavPointInput);
  });
}
addToSliderHelper(firstRenderImage);
//1.1 если картинку получить не удалось
//1.1.1 взять с сервера информацию о еще одной картинке
//1.1.2 попытаться загрузить и добавить в слайдер
//2. на 2 картинке догрузить еще одну картинку и добавить в слайдер
