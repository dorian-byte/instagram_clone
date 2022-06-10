const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
const { MONGOURI } = require("./keys");
const axios = require("axios");

require("./models/user");

// app.use(require("./routes/auth"));
app.get("/", (req, res) => {
  axios.get("http://localhost:8081/").then((r) => {
    res.send("Hello World! this is 8080, this is second: " + r.data);
  });
});

mongoose.connect(MONGOURI);

const connectedCallback = () => {
  console.log("connected to mongo yeahh");
};

const errorCallback = (err) => {
  console.log("error connecting to mongo", err);
};

mongoose.connection.on("connected", connectedCallback);

mongoose.connection.on("error", errorCallback);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
