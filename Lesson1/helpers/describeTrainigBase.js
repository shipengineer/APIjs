import { trainingTable as tb } from "../trainingTable.js";
export function describeTrainigBase() {
  if (localStorage.getItem("has") === "true") {
    const trainingTable = JSON.parse(localStorage.getItem("base"));
    return trainingTable;
  } else {
    localStorage.setItem("base", JSON.stringify(tb));
    const trainingTable = [...tb];
    localStorage.setItem("has", "true");
    localStorage.setItem("awesomeJWTtokenHere", "awesomeJWTtokenHereUser");
    console.log(trainingTable);
    return trainingTable;
  }
}
