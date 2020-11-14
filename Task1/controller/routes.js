//these files are shown just for better understanding thst how hole setup is done.
// just see the configuration and You can ignore the whole file

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { mongourl } = require("./config/keys");

const Wish = mongoose.model("wishes");

mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports = (app) => {
  //get routes
  app.get("/data", (req, res) => {
    Wish.find({}).then((data) => {
      console.log(data);
      res.send(data);
    });
  });

  app.get("/about", (req, res) => {
    res.render("about");
  });
  //post routes
  app.post("/sent", (req, res) => {
    const Item = new Wish({
      wish: req.body.item,
    });
    Item.save()
      .then((data) => {
        console.log("saved");
        res.send(data);
      })
      .catch((err) => {
        throw err;
      });
  });

  //delete routes

  app.delete("/remove/:id", (req, res) => {
    Wish.findOneAndRemove({ _id: req.params.id }).then((data) => {
      console.log("deleted");
      res.send(data);
    });
  });
};
