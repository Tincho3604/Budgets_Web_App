const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const recordsRoute = require('./routes/records');

//importing routes
const recordsRoutes = require('./routes/records')

app.use(cors())
app.use(express.json());

app.use(recordsRoutes);

const port = process.env.PORT || 4000;
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
	console.log(`Listening on port ${port}`);

})

