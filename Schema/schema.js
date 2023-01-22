const mongoose = require("mongoose")

const Schema=mongoose.Schema

const InstaClone=new Schema({
    author:{type:String,require},
    location:{type:String},
    description:{type:String},
    image_file:String,
    likes :Number,
}, {timestamps:true} )

const model=mongoose.model("insta",InstaClone)
module.exports=model