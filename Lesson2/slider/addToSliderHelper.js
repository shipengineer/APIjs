export default function addToSliderHelper(images) {
  const imageContainer = document.querySelector(".imgContainer");
  const navPoints = document.querySelector(".navPoints");
  images.forEach((img, index) => {
    const newSlide = document.createElement("img");
    if (index % 2) {
      newSlide.setAttribute("src", `${img.thumbnailUrl}`);
    } else {
      newSlide.setAttribute("src", `${img.url}`);
    }

    imageContainer.append(newSlide);

    const newNavPointInput = document.createElement("input");
    newNavPointInput.type = "radio";
    newNavPointInput.name = "sliderButtons";
    newNavPointInput.classList.add("navPointInput");
    newNavPointInput.value = imageContainer.childNodes.length;
    if (imageContainer.childNodes.length == 1) {
      newNavPointInput.checked = true;
    }
    navPoints.appendChild(newNavPointInput);
  });
}
