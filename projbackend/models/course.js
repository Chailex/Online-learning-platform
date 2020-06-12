const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const courseSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        requierd: true,
        maxlength: 32
    },
    description:{
        type: String,
        trim: true,
        requierd: true,
        maxlength: 2000
    },
    price:{
        type: Number,
        requierd: true,
        maxlength: 32,
        trim: true
    },
    sold: {
        type: Number,
        default: 0
    },
    photo: {
        data: Buffer,
        contentType: String
    }
}, {timestamps: true})

module.exports = mongoose.model("Course", courseSchema);