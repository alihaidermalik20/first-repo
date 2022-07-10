// show an ejs file that is in views/ as html. can change views to any other name in app.set

const express = require("express");
const app = express();
//to be able to change path, use path.join from express
const path = require("path");

// import the data from data.json
const redditData = require("./data.json");

// setting all static assets in the dir of public. so you can link any html file to app.css
app.use(express.static(path.join(__dirname, "public")));

// since you set ejs here, you can just say home in res.render instead of home.ejs. view engine is the method in express
app.set("view engine", "ejs");
// can change from working directory to directory the file is from so we can run this index.js from anywhere given the path
// instead of going from process.cwd() or the current directory you're in directly to /views/home.ejs, it joins the path you provided
// and sees the name of templating and starts looking at /views from there allowing you to provide path to index.js from anywhere
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  // looks for folder process.cwd() from the working directory to views/.ejs file by default and renders the javascript as html
  res.render("home");
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  // second argument can be plugged in as {num: num} and this variable will be exported to the ejs file
  res.render("random", { num });
});

app.get("/r/:subreddit", (req, res) => {
  // deconstruct subreddit from params of the request after /r/
  const { subreddit } = req.params;
  // take that subreddit text and see if you have it in your data.json. like data.json has soccer, chicken etc.
  const data = redditData[subreddit];
  // if data for such a subreddit name exists, allow access of everything that's following it inside in the subreddit.ejs file
  // else go to page notfound.ejs and use the name of subreddit to display that it wasn't found
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

app.get("/cats", (req, res) => {
  const cats = ["monty", "python", "jackass", "steph", "jackie"];
  res.render("cats", { cats });
});

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
