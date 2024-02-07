export default function addToSliderHelper(images) {
  const imageContainer = document.querySelector(".imgContainer");
  const navPoints = document.querySelector(".navPoints");
  images.forEach((img, index) => {
    const newSlide = document.createElement("img");
    newSlide.setAttribute("src", `${img.thumbnailUrl}`);
    imageContainer.append(newSlide);

    const newNavPointInput = document.createElement("input");
    newNavPointInput.type = "radio";
    newNavPointInput.name = "sliderButtons";
    newNavPointInput.classList.add("navPointInput");
    newNavPointInput.value = index;

    navPoints.appendChild(newNavPointInput);
  });
}
