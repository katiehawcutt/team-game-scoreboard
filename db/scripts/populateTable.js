const { query } = require("../index");

const sqlStatement = `INSERT INTO scoreboard
(date, game, team1_score, team2_score, team3_score, team4_score)
VALUES
($1, $2, $3, $4, $5, $6);
`;

const values = ["2020-09-21", "Mind", 1, 0, 2, 1];

async function populateTable() {
  const result = await query(sqlStatement, values);
  console.log(result);
}
populateTable();
