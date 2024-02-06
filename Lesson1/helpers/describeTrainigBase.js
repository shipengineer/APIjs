import { trainingTable as tb } from "../trainingTable.js";

export function describeTrainigBase() {
  //если это не первое посещение
  if (localStorage.getItem("has") === "true") {
    const trainingTable = JSON.parse(localStorage.getItem("base"));
    return trainingTable;
  } else {
    //если первое помещение
    localStorage.setItem("base", JSON.stringify(tb));
    const trainingTable = [...tb];
    localStorage.setItem("has", "true");
    localStorage.setItem("awesomeJWTtokenHere", "awesomeJWTtokenHereUser");
    console.log(trainingTable);
    return trainingTable;
  }
}
