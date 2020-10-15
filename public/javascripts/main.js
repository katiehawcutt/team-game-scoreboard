//Using the DOM to access the button and storing in a variable.
const getScoresButton = document.querySelector("#getScoresButton");
const table = document.querySelector("#table");

//Adding a event listener to when th ebutton is clicked.
getScoresButton.addEventListener("click", getAllScores);

//Creates a function to get all scores from the database.
async function getAllScores() {
  const response = await fetch("http://localhost:3000/scoreboard");
  const { payload } = await response.json();
  const data = payload.rows;
  console.log(data);
  data.forEach(renderScores);

  function renderScores(eachRow) {
    const tr = displayAllScores(eachRow);
    table.appendChild(tr);
  }
}

function displayAllScores({
  date,
  game,
  team1_score,
  team2_score,
  team3_score,
  team4_score,
}) {
  const tr = document.createElement("tr");
  const dateItem = document.createElement("td");
  dateItem.innerText = date;
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
