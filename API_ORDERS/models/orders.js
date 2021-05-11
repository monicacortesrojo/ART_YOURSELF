const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    id: Number,
    name: String,
    surname: String,
    email: String,
    description: String,
    img: String,
    finalized: Boolean,
}, { versionKey: false });

module.exports = mongoose.model("Orders", ordersSchema);