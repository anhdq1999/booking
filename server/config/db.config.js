const mongoose = require('mongoose');
const urlDatabase = process.env.DB_URL;
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000
};

function connect() {
    mongoose
        .connect(urlDatabase)
        .then((res) => {
            console.log('Connect to mongo sucessfully');
        })
        .catch((err) => {
            console.log(err);
            console.log('Connect to mongodb failure');
        });
}
module.exports = { connect };
