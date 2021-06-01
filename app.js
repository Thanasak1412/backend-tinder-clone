const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TinderCard = require("./models/TinderCards");

const app = express();
const port = process.env.PORT;
const connectUrl =
  "mongodb+srv://new-user:password1234@cluster0.nmv2c.mongodb.net/tinder-clone?retryWrites=true&w=majority";

mongoose.connect(connectUrl, {
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.get("/tinder/cards", async (req, res) => {
  TinderCard.find({}, (err, cards) => {
    !err ? res.status(200).send(cards) : res.status(500).send(err);
  });
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  TinderCard.create(dbCard, (err, data) => {
    !err ? res.status(201).send(data) : res.status(500).send(err);
  });
});

if (port == null || port == "") {
  port = 3001;
}

app.listen(port, () => {
  console.log(`Server is starting on port ${port}`);
});
