const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'budget_db'
});

db.connect((error) => {
    if(error){
        console.log('The connection error is: '+error);
        return;
    }
    console.log('Connected to the database, successfully!')
});
module.exports = db;

/*
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'budget_db'
});


    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE

*/