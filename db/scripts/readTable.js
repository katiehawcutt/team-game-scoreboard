const { query } = require("../index");

const sqlStatement = `SELECT * from scoreboard;`;

async function readTable() {
  const result = await query(sqlStatement);
  console.log(result);
}
readTable();
