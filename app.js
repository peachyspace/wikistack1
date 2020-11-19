const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const style = require("./stylesheets/style.css");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res, next) => {
  res.send("hello world");
});
const PORT = 1377;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
