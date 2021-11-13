const mongoose = require('mongoose');
const { DB_URI } = require('./keys');

const dbConnection = async () => {
    try {
        await mongoose.connect(`${DB_URI}`)
        console.log('DB Connection - SUCCESSFUL')
    } catch(err) {
        console.log(`DB Connection - FAILED ${err}`)
    }
}

module.exports = { dbConnection };
