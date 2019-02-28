const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Asia = new Schema({
    asCountryName: String,
    asDescription: String,
    asVisitAgain: String,
    asImage: String
});

module.exports = mongoose.model("Asia", Asia)