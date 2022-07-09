// show an ejs file that is in views/ as html. can change views to any other name in app.set

const express = require('express');
const app = express();
//to be able to change path, use path from express
const path = require('path');

// since you set ejs here, you can just say home in res.render instead of home.ejs. view engine is the method in express
app.set('view engine', 'ejs');
// can change from working directory to directory the file is from so we can run this index.js from anywhere given the path
// instead of going from process.cwd() or the current directory you're in directly to /views/home.ejs, it joins the path you provided
// and sees the name of templating and starts looking at /views from there allowing you to provide path to index.js from anywhere
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {
    // looks for folder process.cwd() from the working directory to views/.ejs file by default and renders the javascript as html
    res.render('home');
})

app.listen(3000, () => {
    console.log('Listening at port 3000');
})