function unsubscribeHandler(e, userToken) {
  const trainingRowID = e.target.closest(".trainingRow").id;
  const trainings = JSON.parse(localStorage.getItem("base"));
  const userSubscribes = localStorage.getItem(userToken);
  if (Number.parseInt(userSubscribes) === Number.parseInt(trainingRowID)) {
    // e.target.closest(".trainingRow").childNodes[7].textContent--;
    localStorage.setItem(userToken, "-1");
    document.getElementById(trainingRowID).childNodes[7].textContent++;

    trainings[trainingRowID - 1].currentParticipants++;
    localStorage.setItem("base", JSON.stringify(trainings));
  } else {
    return;
  }
}
