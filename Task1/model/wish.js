//these files are shown just for better understanding thst how hole setup is done.
// just see the configuration and You can ignore the whole file

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WishSchema = Schema({
  wish: String,
});

mongoose.model("wishes", WishSchema);
