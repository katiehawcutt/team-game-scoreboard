const{Pool} = require("pg");
const pool = new Pool({
    host:process.env.PGHOST,
    user:process.env.PGUSER,
    database:process.env.PGDATABASE,
    port:process.env.PGPORT,
    password:process.env.PGPASSWORD,
    ssl:{
        rejectUnauthorized: false
    }
});

module.exports = {query:(text, params, callback) =>{
    return pool.query(text, params, callback)
}};