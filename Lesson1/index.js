import { describeTrainigBase } from "./helpers/describeTrainigBase.js";
import { fillTable } from "./helpers/filingTable.js";
const table = document.getElementById("table");

fillTable(describeTrainigBase(), table);

table.onchange = (e) => {
  console.log(e);
};
