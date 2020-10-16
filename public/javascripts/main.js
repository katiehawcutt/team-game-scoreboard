//Using the DOM to access the elements and storing them in variables.
const getScoresButton = document.querySelector("#getScoresButton");
const addScoreButton = document.querySelector("#addScoresButton");
const table = document.querySelector("#table");
const dateInput = document.querySelector("#date");
const gameInput = document.querySelector("#gameName");
const team1input = document.querySelector("#team1Score");
const team2input = document.querySelector("#team2Score");
const team3input = document.querySelector("#team3Score");
const team4input = document.querySelector("#team4Score");

let team1runningTotal = 0;
let team2runningTotal = 0;
let team3runningTotal = 0;
let team4runningTotal = 0;

//Adding a event listener to when th ebutton is clicked.
getScoresButton.addEventListener("click", getAllScores);

//Creates a function to get all scores from the database.
async function getAllScores() {
  const response = await fetch("/scoreboard");
  const { payload } = await response.json();
  const data = payload.rows; // Saved the data we want from the object into a variable called data
  console.log(data);
  data.forEach(renderScores);
  renderTotals(); // Used forEach on data and handing it renderScores as a callback function

  function renderScores(item) {
    const tr = displayAllScores(item); //for each item handed to renderScores a new table row is created. The value of tr is the result of calling displayAllScores.
    table.appendChild(tr); // Attaching the completed table row(tr) to the table
  }
}

//Handed in to the function the destructured object
function displayAllScores({
  date,
  game,
  team1_score,
  team2_score,
  team3_score,
  team4_score,
}) {
  console.log(typeof team1_score);
  team1runningTotal += parseInt(team1_score);
  team2runningTotal += parseInt(team2_score);
  team3runningTotal += parseInt(team3_score);
  team4runningTotal += parseInt(team4_score);
  const tr = document.createElement("tr"); //Creating a new table row and saving as tr.
  const dateItem = document.createElement("td");
  const formattedDate = formatDate(date);
  dateItem.innerText = formattedDate;
  const gameItem = document.createElement("td");
  gameItem.innerText = game;
  const team1Score = document.createElement("td");
  team1Score.innerText = team1_score;
  const team2Score = document.createElement("td");
  team2Score.innerText = team2_score;
  const team3Score = document.createElement("td");
  team3Score.innerText = team3_score;
  const team4Score = document.createElement("td");
  team4Score.innerText = team4_score;
  tr.appendChild(dateItem);
  tr.appendChild(gameItem);
  tr.appendChild(team1Score);
  tr.appendChild(team2Score);
  tr.appendChild(team3Score);
  tr.appendChild(team4Score);
  return tr;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toDateString();
}

function renderTotals() {
  const runningTotalRow = displayRunningTotal();
  table.appendChild(runningTotalRow);
}

function displayRunningTotal() {
  const tr = document.createElement("tr");
  const firstColumn = document.createElement("td");
  firstColumn.innerText = "";
  const secondColumn = document.createElement("td");
  secondColumn.innerText = "TOTAL POINTS:";
  const team1total = document.createElement("td");
  team1total.innerText = team1runningTotal;
  const team2total = document.createElement("td");
  team2total.innerText = team2runningTotal;
  const team3total = document.createElement("td");
  team3total.innerText = team3runningTotal;
  const team4total = document.createElement("td");
  team4total.innerText = team4runningTotal;
  tr.appendChild(firstColumn);
  tr.appendChild(secondColumn);
  tr.appendChild(team1total);
  tr.appendChild(team2total);
  tr.appendChild(team3total);
  tr.appendChild(team4total);
  return tr;
}
