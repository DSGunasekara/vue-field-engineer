const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const EngineerSchema = new Schema({
    engineer:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    jobList:[
        {
            type: Schema.Types.ObjectId,
            ref: "Job"
        }
    ],
    rate:{
        type: Number,
        required: true,
        default: 0
    },
    availability:{
        type:String,
        required:true
    }

})

module.exports = mongoose.model("Engineer", EngineerSchema)