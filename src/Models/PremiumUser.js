const mongoose = require('mongoose')


const Premium = new mongoose.Schema({
    uid:{
        type:String,
        required:true
    },
    vaildTill:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Premium Users",Premium)