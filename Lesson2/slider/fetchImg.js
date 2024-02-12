async function fetchTry(images, i) {
  await fetch("https://jsonplaceholder.typicode.com/photos/" + i)
    .then((data) => {
      if (!data.ok) {
        //если на сервере возникла ошибка берется новая функция
        //со следующей картинкой
        if (i > 10) {
          throw new Error(
            "С сервера ничего не приходит, он, наверное, сломался"
          );
        }
        fetchTry(images, ++i);
      }
      return data.json();
    })
    .then((data) => {
      images.push(data);
      i++;
    });
}

export default async function fetchImg(amountOfImage, i) {
  const images = [];
  do {
    await fetchTry(images, i);
    console.log(i);
    i++;
  } while (images.length < amountOfImage);
  return images;
}
