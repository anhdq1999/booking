require('dotenv').config();

const express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    route = require('./routes/index'),
    database = require('./config/db.config'),
    port = process.env.PORT,
    cors = require('cors'),
    app = express();
//Connect mongodb
database.connect();

//use authMiddlewares
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(morgan('combined'));

//Routes init
route(app);

app.listen(port, () => console.log(`Server is running at port :${port}`));
