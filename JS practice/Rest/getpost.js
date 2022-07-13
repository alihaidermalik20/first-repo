const express = require("express");
const app = express();

// to be able to use the request body or data from post request from html form
app.use(express.urlencoded({ extended: true }));
// accepts json too
app.use(express.json());

app.get("/tacos", (req, res) => {
  res.send("Get /tacos");
});

app.post("/tacos", (req, res) => {
  // console.log(req.body);
  //take values of meat and qty from req.body
  const { meat, qty } = req.body;
  res.send(`Here are your ${qty} ${meat} tacos`);
});

app.listen(3000, () => {
  console.log("On port 3000");
});
