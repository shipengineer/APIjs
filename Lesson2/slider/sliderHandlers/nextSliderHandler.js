export default function nextSlideHandler() {
  const navPoints = document.querySelector(".navPoints");
  const checkedPoint = [...navPoints.childNodes].find(
    (point) => point.checked == true
  );
  if (checkedPoint.value == navPoints.childNodes.length) {
    return;
  }
  const nextPoint = navPoints.querySelector(
    `[value="${Number.parseInt(checkedPoint.value) + 1}"]`
  );
  nextPoint.checked = true;
  let action = new Event("click", { bubbles: true });
  nextPoint.dispatchEvent(action);
}
