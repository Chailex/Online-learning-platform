const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const testCartSchema = new mongoose.Schema({
    test:{
        type: ObjectId,
        ref: "Test"
    },
    category:{
        type: ObjectId,
        ref: "Category"
    },
    package:{
        type:ObjectId,
        ref: "Package"
    },
    name: String,
    count: Number,
    price: Number
})

const TestCart = mongoose.model("TestCart", testCartSchema);

const OrderSchema = new mongoose.Schema({
    tests: {testCartSchema},
    transsaction_id: {},
    amount: {type: Number},
    address: String,
    status:{
        type: String,
        default: "Received",
        enum: ["Cancelled", "Delivered", "Shipped", "Processing", 'Received']
    },
    updated: Date,
    user: {
        type: ObjectId,
        ref: "User"
    }
},{timestamps: true})

const Order = mongoose.model("Order", OrderSchema);

module.exports = {Order, TestCart};