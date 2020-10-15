const { create } = require("domain");
const{query} = require("../index");

const sqlStatement = `CREATE TABLE scoreboard(
    id SERIAL PRIMARY KEY,
    date DATE,
    game TEXT,
    team1_score TEXT,
    team2_score TEXT,
    team3_score TEXT,
    team4_score TEXT
)`

async function createTable(){
    const result = await query(sqlStatement);
    console.log(result);
}
createTable();