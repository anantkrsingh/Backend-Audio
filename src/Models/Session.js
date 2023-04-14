import mongoose from "mongoose";

const session = new mongoose.Schema({
    room:{
        type:String,
        required:true
    },
    users:[
        {
            userName:{
                type:String
            },
            userUID:{
                type:String
            },
            ava



        }

    ]
})