import changeSlideHandler from "./changeSlideHandler.js";

export default function prevSlideHandler() {
  const navPoints = document.querySelector(".navPoints");
  const checkedPoint = [...navPoints.childNodes].find(
    (point) => point.checked == true
  );
  if (checkedPoint.value == 1) {
    return;
  }
  const prevPoint = document.querySelector(
    `[value="${checkedPoint.value - 1}"]`
  );
  prevPoint.checked = true;
  let action = new Event("click", { bubbles: true });
  prevPoint.dispatchEvent(action);
}
