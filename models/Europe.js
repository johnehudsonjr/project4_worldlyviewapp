const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Europe = new Schema({
    euCountryName: String,
    euDescription: String,
    euVisitAgain: String,
    euImage: String
});

module.exports = mongoose.model("Europe", Europe)