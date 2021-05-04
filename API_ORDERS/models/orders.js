const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    id: Number,
    name: String,
    surname: String,
    email: String,
    description: String,
    url: String,
    finalized: Boolean,
}, { versionKey: false });

module.exports = mongoose.model("Orders", ordersSchema);