const mongoose =  require( "mongoose");

const Session = new mongoose.Schema({
    room:{
        type:String
    },
    users:{
        type:Number
    }
})
const session  =  mongoose.model("Sessions",Session)
module.exports = session