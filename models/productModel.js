const mongoose = require('mongoose')


const productschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    url:{
        type: String,
        required: true
    }, 

    images:[{
        type: String,
    }],

    description: String,

    price: {
        type: Number,
        required: true
    }
})

module.exports = new mongoose.model('product',productschema)