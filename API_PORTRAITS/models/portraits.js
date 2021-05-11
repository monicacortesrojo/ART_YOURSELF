const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portraitSchema = new Schema({
    url: String,
    skintone: String,
    freckles: String,
    eyescolor: String,
    haircolor: String,
    zodiacsign: String,
}, { versionKey: false });

module.exports = mongoose.model("Portraits", portraitSchema);