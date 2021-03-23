// Express
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require('express-session');
const jwt = require('jsonwebtoken');


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
app.use(session({
    key:'user_sid',
    secret: 'userId',
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: 60 * 60 * 24
    }
}));


// We invoke the database connection module.
const db = require('./database/db');

app.use(cookieParser())
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods:["GET","POST","PUT"],
    credentials:true
}))
app.use(express.urlencoded({ extended: true }));


app.use(recordsRoutes);
app.use(userRoutes)

const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
	console.log(`Listening on port ${port}`);

})

