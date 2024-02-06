// Если максимальное количество участников достигнуто,
// либо пользователь уже записан на занятие,

//  сделайте кнопку "записаться" неактивной.
function subscribeHandler(e, userToken) {
  e.target.setAttribute("disable", "disable");
  const trainingRowID = e.target.closest(".trainingRow").id;
  const trainings = JSON.parse(localStorage.getItem("base"));
  const userSubscribes = localStorage.getItem(userToken);
  if (Number.parseInt(userSubscribes) === Number.parseInt(trainingRowID)) {
    return;
  } else {
    if (userSubscribes !== "-1" && userSubscribes !== null) {
      trainings[userSubscribes - 1].currentParticipants--;
      document.getElementById(userSubscribes).childNodes[7].textContent++;
    }
    localStorage.setItem(userToken, trainingRowID.toString());
    document.getElementById(trainingRowID).childNodes[7].textContent--;

    trainings[trainingRowID - 1].currentParticipants++;
    localStorage.setItem("base", JSON.stringify(trainings));
  }
}
