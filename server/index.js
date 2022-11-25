const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "user",
    password: "",
    database: "crudgames",
})

app.get('/', (req,res) => {
    let SQL = "INSERT INTO games ( name, cost, category ) VALUES ( 'Far Cry 5', '120', 'Ação' )"
    db.query(SQL, (err, result)=>{
        console.log(err)
    })
})

app.listen('3001', () => {
    console.log('Rodando servidor')
})