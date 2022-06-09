const axios = require("axios");
const testCallback = (str, cb) => {
  if (str === "delay") {
    console.log("process started");
    console.log(`server started at ${Date.now()}`);
    axios.get("https://google.com").then((res) => {
      cb(`status:  ${res.status}`);
      console.log(`process ended at ${Date.now()}`);
    });
  } else {
    return console.log("not delayed");
  }
};

// testCallback("random", () => console.log("random"));
const callback = (res) => console.log(res);
testCallback("delay", callback);
