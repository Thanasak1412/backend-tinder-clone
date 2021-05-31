const mongoose = require("mongoose");

const tinderSchema = mongoose.Schema({
    name: "",
    imageUrl: ""
})

const TinderCard = mongoose.model("Tinder", tinderSchema);

module.exports = TinderCard;