// Importing express
const express = require('express');
const app = express();
const cors = require('cors');

// Importing routes
const recordsRoutes = require('./routes/records')
const userRoutes = require('./routes/users')
// Invoke Dotenv
const dotenv = require('dotenv');
dotenv.config({path:'./env/.env'})

// Statics files
app.use('/resources', express.static('public'))
app.use('/resources', express.static(__dirname + '../frontend/public'))



// Var. de session
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// We invoke the database connection module.
const db = require('./database/db');



app.use(cors())
app.use(express.json());


app.use(recordsRoutes);
app.use(userRoutes)

const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
	console.log(`Listening on port ${port}`);

})

