const mongoose = require('mongoose');

let mongoURL = 'mongodb://127.0.0.1:27017/backend';

mongoose.connect(mongoURL, {useNewUrlParser: true})
        .then(() => console.log("Connected to MongoDB"));

mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', (err) => {
    console.log(`Error ocured while trying to connect to mongo: ${err}`)
})


module.exports = db;