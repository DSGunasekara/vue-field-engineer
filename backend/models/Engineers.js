const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Engineer = new Schema({
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
    }

})