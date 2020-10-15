const { query } = require("../db/index");

const readStatement = `SELECT * from scoreboard;`;

async function displayScores() {
  const result = await query(readStatement);
  return result;
};

const addScoresStatement = `INSERT INTO scoreboard 
(date,game,team1_score,team2_score,team3_score,team4_score)
VALUES 
($1, $2, $3, $4, $5, $6)`


async function displayScores() {
  const result = await query(readStatement);
  return result;
};

module.exports = {
    displayScores,
};
