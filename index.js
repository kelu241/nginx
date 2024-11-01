
const express = require('express')
const mysql = require('mysql2')

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var connection = mysql.createConnection({

host: 'luciano-sql',
user: 'root',
password: 'secret',
database: 'luciano',
port:3306,
charset: 'utf8mb4'

})

app.get('/', (req, res) => {
  connection.query('Select * from consoles', function(error, result, fields){
    if(error) throw error;
    res.send(`${result[0].nome} - ${result[1].nome}`)
  });

  
})

app.post('/', (req, res) =>{
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
