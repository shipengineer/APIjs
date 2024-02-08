export default function nextSlideHandler() {
  const navPoints = document.querySelector(".navPoints");
  const checkedPoint = [...navPoints.childNodes].find(
    (point) => point.checked == true
  );
  let nextPoint;
  if (checkedPoint.value == navPoints.childNodes.length) {
    nextPoint = navPoints.querySelector(`[value="1"]`);
  } else {
    nextPoint = navPoints.querySelector(
      `[value="${Number.parseInt(checkedPoint.value) + 1}"]`
    );
  }
  nextPoint.checked = true;
  let action = new Event("click", { bubbles: true });
  nextPoint.dispatchEvent(action);
}
