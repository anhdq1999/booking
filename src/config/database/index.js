const mongoose = require('mongoose');
const propertys = require('./../../resources/propertys.js')
const urlDatabase =propertys.urlDatabase
async function connect(){
    try {
        await mongoose.connect(urlDatabase)
        console.log('Connect to mongo sucessfully');

    } catch (error) {
        console.log('Connect to mongodb failure');
    }
}
module.exports = {connect}