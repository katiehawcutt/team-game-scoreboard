//Using the DOM to access the elements and storing them in variables.
const getScoresButton = document.querySelector("#getScoresButton");
const addScoreButton = document.querySelector("#addScoreButton");
const deleteAllButton = document.querySelector("#deleteAll");
const table = document.querySelector("#table");
const allTableData = document.querySelectorAll("td");
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

//Adding a event listener when the button is clicked.
getScoresButton.addEventListener("click", getAllScores);
addScoreButton.addEventListener("click", addNewScore);
deleteAllButton.addEventListener("click", deleteAll);

//GET REQUEST

//Creates a function to get all scores from the database.
async function getAllScores() {
  const response = await fetch("/scoreboard");
  const { payload } = await response.json();
  table.innerHTML = "";
  team1runningTotal = 0;
  team2runningTotal = 0;
  team3runningTotal = 0;
  team4runningTotal = 0;
  const data = payload.rows; // Saved the data we want from the object into a variable called data
  renderHeadings();
  console.log(data);
  data.forEach(renderScores);
  renderTotals(); // Used forEach on data and handing it renderScores as a callback function

  function renderScores(item) {
    // const tableHeadings = createTableHeadings();
    const tr = displayAllScores(item); //for each item handed to renderScores a new table row is created. The value of tr is the result of calling displayAllScores.
    table.appendChild(tr); // Attaching the completed table row(tr) to the table
  }
}
function renderHeadings() {
  const tableHeadings = createTableHeadings();
  table.appendChild(tableHeadings);
}
//
function createTableHeadings() {
  const tr = document.createElement("tr");
  const dateHeading = document.createElement("th");
  dateHeading.innerText = "DATE";
  const gameHeading = document.createElement("th");
  gameHeading.innerText = "GAME";
  const team1Heading = document.createElement("th");
  team1Heading.innerText = "TEAM 1";
  const team2Heading = document.createElement("th");
  team2Heading.innerText = "TEAM 2";
  const team3Heading = document.createElement("th");
  team3Heading.innerText = "TEAM 3";
  const team4Heading = document.createElement("th");
  team4Heading.innerText = "TEAM 4";
  tr.appendChild(dateHeading);
  tr.appendChild(gameHeading);
  tr.appendChild(team1Heading);
  tr.appendChild(team2Heading);
  tr.appendChild(team3Heading);
  tr.appendChild(team4Heading);
  return tr;
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

// This is now to add new scores to the database.
// create a async function which sends a fetch request and that will be to /scoreboard.
//send extra data within the fetch request to tell it we want to post the data
//send the input values in the req.body
//await the response.json
//create another function which gets the data from the input fields and stores them in variables so we can send in fetch request.
//add event listener to the add scores button.

//POST REQUEST

async function addNewScore(e) {
  e.preventDefault();
  const response = await fetch("/scoreboard", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(gatherInputData()),
  });
  const data = await response.json();
  console.log(data);
  getAllScores();
  clearInputFields();
}

function gatherInputData() {
  const date = dateInput.value;
  const game = gameInput.value;
  const team1_score = team1input.value;
  const team2_score = team2input.value;
  const team3_score = team3input.value;
  const team4_score = team4input.value;
  return { date, game, team1_score, team2_score, team3_score, team4_score };
}

function clearInputFields() {
  dateInput.value = "";
  gameInput.value = "";
  team1input.value = "";
  team2input.value = "";
  team3input.value = "";
  team4input.value = "";
}

//DELETE REQUEST

async function deleteAll() {
  console.log("I've been pressed!");
  const response = await fetch("/scoreboard", {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
  team1runningTotal = 0;
  team2runningTotal = 0;
  team3runningTotal = 0;
  team4runningTotal = 0;
  getAllScores();
}
