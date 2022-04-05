const mongoose = require('mongoose');
const urlDatabase = process.env.DB_URL;

async function connect() {
    try {
        await mongoose.connect(urlDatabase);
        console.log('Connect to mongo successfully');
    } catch (error) {
        console.log('Connect to mongodb failure');
    }
}
module.exports = { connect };
