const mongoose = require("mongoose");

const tinderSchema = mongoose.Schema({
    name: "",
    imageUrl: ""
})

const TinderCard = mongoose.model("TinderCard", tinderSchema);

module.exports = TinderCard;