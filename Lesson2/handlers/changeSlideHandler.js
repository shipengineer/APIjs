import addToSliderHelper from "../displayHelpers/addToSliderHelper.js";
import fetchImg from "../fetchHelper/fetchImg.js";

export default function changeSlideHandler(event, imgCounter, images) {
  const imgContainer = document.querySelector(".imgContainer");
  const target = event.target;
  console.log(target.tagName);
  if (target.tagName === "INPUT") {
    console.log(imgContainer.childNodes[target.value].width);
    imgContainer.setAttribute(
      "style",
      `transform:translateX(${
        -imgContainer.childNodes[target.value].width * target.value
      }px)`
    );
  }
  console.log(target.value);
  console.log(imgContainer.childNodes.length - 2);
  if (target.value == imgContainer.childNodes.length - 2) {
    console.log("object");
    addToSliderHelper(fetchImg(1, imgCounter));
  }
}
