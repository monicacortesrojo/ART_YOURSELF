const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portraitSchema = new Schema({
    url: String,
    genre: String,
    skintone: String,
    freckles: String,
    faceshape: String,
    eyeshape: String,
    eyescolor: String,
    eyebrows: String,
    noseshape: String,
    lips: String,
    haircolor: String,
    hairstyle: String,
    zodiacsign: String,
}, { versionKey: false });

module.exports = mongoose.model("Portraits", portraitSchema);