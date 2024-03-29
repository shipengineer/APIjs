import addToSliderHelper from "../addToSliderHelper.js";
import fetchImg from "../fetchImg.js";

export default async function changeSlideHandler(event, photoCount) {
  const imgContainer = document.querySelector(".imgContainer");
  const wrapBlank = document.querySelector(".wrapBlank");
  const target = event.target;
  if (target.tagName === "INPUT") {
    imgContainer.setAttribute(
      "style",
      `transform:translateX(${
        -imgContainer.childNodes[target.value - 1].width * (target.value - 1)
      }px)`
    );
    //попытки в адаптивный скролер
    // wrapBlank.setAttribute(
    //   "style",
    //   `width:${imgContainer.childNodes[target.value].naturalWidth}px;
    //   height:${imgContainer.childNodes[target.value].naturalHeight}px;`
    // );
  }
  //если кончаются картинки фетчим еще и так 6 раз
  if (
    target.value == imgContainer.childNodes.length - 1 ||
    target.value == imgContainer.childNodes.length
  ) {
    if (imgContainer.childNodes.length == 6) {
      return;
    }
    addToSliderHelper(await fetchImg(1, photoCount));
  }
}
