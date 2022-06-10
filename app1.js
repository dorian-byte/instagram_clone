const express = require("express");
const app = express();
const PORT = 8081;

const customMiddleware = (req, res, next) => {
  console.log("middleware executed");
  next();
};
app.use(customMiddleware);

app.get("/", (_, res) => {
  res.send("Hello World! this is 8081");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
