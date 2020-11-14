const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("./models/user");

//connecting mongodb locally
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://127.0.0.1:27017/fullstackassignment",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (error, res) => {
    if (error) {
      throw error;
    } else {
      console.log("Server has been connected to mongodb LOCAL");
    }
  }
);

app.use(cors());
app.use(express.json({ extended: false }));

app.use(require("./Routes/auth"));

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
