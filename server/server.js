const express = require('express');
const morgan = require('morgan');
const bodyParser=require('body-parser');
const route=require('./routes/index.js')

const database = require('./config/database/index.js');
const port = require('./config/properties/properties.js').PORT;
const cors = require('cors');
const app = express();

// parse application/x-www-form-urlencoded
// parse application/json


//Connect mongodb
database.connect();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('combined'));

//Routes init
route(app);

app.listen(port, () => console.log(`Server is running at port :${port}`));
