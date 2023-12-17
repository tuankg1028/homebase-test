const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express();

const db = require("./models");
const { errorHandler } = require("./middlewares/error-handle");

const api = require("./routes/index");
server.use(cors());
// Parse request of content-type - application/json
server.use(bodyParser.json());
// parse requests of content-type -application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/api", api);
server.use(errorHandler);
// set listening ports for request
const port = process.env.PORT || 80;
server.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});

db.databaseConf.sync();
