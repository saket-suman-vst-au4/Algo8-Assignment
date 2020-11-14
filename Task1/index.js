const express = require("express");
const app = express();
//const port = 5000; //this was hardcoded port no used during development purpose
const port = process.env.PORT || 5000; //In this line we use environment varible which is predefined on heroku to use. here either of one condition will run when in development phase it will run on port 5000 while on prudction it will run thrigh environemnt varibale

const bodyParser = require("body-parser");
//serving static files
app.use(express.static("public"));

require("./model/wish");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// import routes
require("./controller/routes")(app); //these routes are shown just for better understanding thst how hole setup is done.

app.listen(port, () => {
  console.log("server is running on port" + port);
});
