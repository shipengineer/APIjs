class Img {
  constructor(id, first_name, src, likes) {
    this.id = id;
    this.author = first_name;
    this.src = src;
    this.likes = likes;
    this.isLiked = false;
  }
}
const URL = 'https://api.unsplash.com/';
const accessKey = '/?client_id=2pxXSLUrThK6302ZeBwVjishUCZUj5PiiD9zu4xjslU';

export default async function requestPhoto(id, random) {
  const responce = await fetch(
    URL + (random ? 'photos/random' : `photos/${id}`) + accessKey
  );

  const photoData = await responce.json();
  const requestedData = new Img(
    photoData.id,
    photoData.user.first_name,
    photoData.urls.regular,
    photoData.likes
  );
  return requestedData;
}
