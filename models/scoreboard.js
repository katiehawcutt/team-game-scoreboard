const { query } = require("../db/index");

const readStatement = `SELECT * FROM scoreboard;`;

async function displayScores() {
  const result = await query(readStatement);
  return result;
}

const addScoresStatement = `INSERT INTO scoreboard 
(date, game, team1_score, team2_score, team3_score, team4_score)
VALUES 
($1, $2, $3, $4, $5, $6)`;

async function addNewScore(
  date,
  game,
  team1_score,
  team2_score,
  team3_score,
  team4_score
) {
  const values = [
    date,
    game,
    team1_score,
    team2_score,
    team3_score,
    team4_score,
  ];
  const result = await query(addScoresStatement, values);
  return result;
}

const deleteAllStatement = `
DELETE FROM scoreboard
RETURNING *;
`;

async function deleteAllData() {
  const result = await query(deleteAllStatement);
  console.log(result);
}

module.exports = {
  displayScores,
  addNewScore,
  deleteAllData,
};
