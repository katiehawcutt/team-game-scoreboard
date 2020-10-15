const { query } = require("../index");

const sqlStatement = `DROP TABLE IF EXISTS scoreboard;`;

async function dropTable() {
  const result = await query(sqlStatement);
  console.log(result);
}
dropTable();
