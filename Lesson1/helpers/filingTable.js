//рендеринг таблицы
export function fillTable(trainingTable, table) {
  trainingTable.forEach((training) => {
    const freeSpace = training.maxParticipants - training.currentParticipants;
    table.insertAdjacentHTML(
      "beforeend",
      `<tr class='trainingRow' id = ${
        training.id
      } onLoad="displayHandler(event)">
    <td class='trainingName'>${training.name}</td>
    <td class='trainingTime'>${training.time}</td>
    <td class='trainingmaxParticipants'>${training.maxParticipants}</td>
    <td class='trainingRestPlaces' >${freeSpace}</td>
    <td class='trainingSubscribe'>
    <button class='subscribeButton' onClick="subscribeHandler(event,'awesomeJWTtokenHereUser')" ${
      freeSpace > 0 ? "" : "disabled"
    }>Записаться</button>
    </td>
    <td class='trainingUnsubscribe'>
    <button class='unsubscribeButton' onClick ="unsubscribeHandler(event,'awesomeJWTtokenHereUser')">Отписаться</button>
    </td>
    </tr>`
    );
  });
}
