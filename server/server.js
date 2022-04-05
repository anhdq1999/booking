require("dotenv").config();

const express = require('express');
const morgan = require('morgan');
const bodyParser=require('body-parser');
const route=require('./routes/index.js')

const database = require('./config/database/index.js');
const PORT = process.env.PORT;
const cors = require('cors');
const app = express();

//Connect mongodb
database.connect();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
// parse application/json
app.use(bodyParser.json());
app.use(morgan('combined'));

//Routes init
route(app);

app.listen(PORT, () => console.log(`Server is running at port :${PORT}`));
