const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello shubham " });
});

console.log(`Process running at port 3000`);

app.listen(process.env.PORT || 3000);
