const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionsSchema = new Schema({
    id: Number,
    feature: String,
    title: String,
    answers: Array,
}, { versionKey: false });

module.exports = mongoose.model("Questions", questionsSchema);