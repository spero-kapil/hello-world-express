// server.js
const express = require("express");
const PORT = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!....This is Development server....!!!!!");
});

app.listen(PORT, () => {
  console.log(`haha yes, the development server is running on port ${PORT}`);
});
