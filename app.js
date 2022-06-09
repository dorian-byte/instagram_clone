const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;
const { MONGOURI } = require("./keys");

mongoose.connect(MONGOURI);

const connectedCallback = () => {
  console.log("connected to mongo yeahh");
};

const errorCallback = (err) => {
  console.log("error connecting to mongo", err);
};

mongoose.connection.on("connected", connectedCallback);

mongoose.connection.on("error", errorCallback);

app.get("/", (req, res) => {
  res.send(
    "<div>Hello World!</div><div></div><a href='/users'>Users</a><div></div><a href='/page'>StyledPage</a><div></div><a href='/random'>RANDOM PAGE</a>"
  );
});

app.get("/users", (req, res) => {
  res.send([
    {
      name: "John Doe",
      age: 32,
    },
    {
      name: "Jane Doe",
      age: 30,
    },
  ]);
});

app.get("/page", (req, res) => {
  res.send(
    `<div>
      <h1>StyledPage</h1>
      <h2>title</h2>
      <p>content</p>
      <a href="/">Home</a>
    </div>`
  );
});

app.get("/random", (req, res) => {
  res.send(`<div>
    <h1>Random</h1>
    <h2>title</h2>
    <p>content</p>
    <a href="/">Home</a>
  </div>`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
