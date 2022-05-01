const mysql =require('mysql2');
const express = require('express');
const req = require('express/lib/request');
const PORT = process.env.PORT || 3001;
const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const db = mysql.createConnection(
  {
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: '610#98Dm',
    database: 'election'
  },
  console.log('Connected to the election database.')
);
db.query('SELECT * FROM candidates', (err,rows)=> {
    console.log(rows);

})

app.use((req, res) => {
  res.status(404).end();
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});