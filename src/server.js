const express = require('express');
const morgan = require('morgan');

const database = require('./config/database/index.js');
const app = express();
const port = require('./config/properties/properties.js').PORT;

const UserController = require('./controllers/UserController');

const route=require('./routes/index.js')

//Connect mongodb
database.connect();

app.use(morgan('combined'));

//Routes init
route(app);

app.listen(port, () => console.log(`Server is running at port :${port}`));
