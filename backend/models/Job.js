const mongoose = require("mongoose")

const JobSchema = new mongoose.Schema({
    title:{
        type:String
    },
    date:{
        type:Date,
        require:true
    },
    status:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    svrId:{
        type:String,
        required:true
    },
    lconName:{
        type:String,
        required:true
    },
    lconContactNo:{
        type:String,
        required:true
    },
    rate:{
        type:Number,
    }
})

module.exports = mongoose.model('Job', JobSchema)