const mongoose = require('mongoose');
const config = require('config')
const db = config.get('localDB')

const connectDB = async () => {
    try {
        console.log('Trying to connect');
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log('MongoDB Connected')
    } catch (err) {
        console.error(err.message)

        process.exit(1)
    }
}

module.exports = connectDB