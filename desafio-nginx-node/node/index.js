const express = require("express")
const app = express()
const port = 3000
const config = {
    host: "db",
    user: "root",
    password: "root",
    database:"nodedb"
};
const mysql = require("mysql")
const connection = mysql.createConnection(config)
const name = "mrioqueiroz";

connection.query(`CREATE TABLE IF NOT EXISTS people(name VARCHAR(100));`)
connection.query(`INSERT INTO people(name) VALUES('${name}');`)

var result;
connection.query(`SELECT name FROM people WHERE name = '${name}' LIMIT 1;`, function(err, rows) {
    if(err) throw err;
    else {
        result = rows[0].name
    }
});
connection.end()

app.get("/", (req, res) => {
    res.send(`<h1>Full Cycle</h1><h2>${result}</h2>`)
})

app.listen(port, ()=> {
    console.log(`Rodando na porta ${port}`)
})
