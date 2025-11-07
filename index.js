const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Node Application with Express is Running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
