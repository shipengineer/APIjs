//логика
//1. получить первый раз три картинки и вставить их в слайдер
async function fetchImg(amountOfImage) {
  const images = [];
  let i = 1;
  function fetchTry() {}
  do {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos/" + i
    )
      .then((data) => data.json())
      .then((data) => {
        images.push(data);
      });
  } while (images.length === amountOfImage);
  return images;
}
fetchImg(2);
//1.1 если картинку получить не удалось
//1.1.1 взять с сервера информацию о еще одной картинке
//1.1.2 попытаться загрузить и добавить в слайдер
//2. на 2 картинке догрузить еще одну картинку и добавить в слайдер
