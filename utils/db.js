const mongoose = require('mongoose')


const connectdb = async() =>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('database connected');
    } catch (error) {
        console.log('error',error);
        process.abort(-1)
    }
}

module.exports = connectdb