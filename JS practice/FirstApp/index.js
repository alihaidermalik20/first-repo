// standard to use express as in express docs

const express = require('express');
const app = express();
// gives a bunch of functions and objects we can use with express framework by using the word app
// console.dir(app);

// will log we got a new request every time someone send a request for port 3000 or tries to get something from there
// so everytime i refresh localhost: 3000 a new log appears

// can only use res.send once so commented out
// app.use((req, res) => {
//     console.log('We got a new request as someone entered port 3000');
//     // this gives the full content of the request with headers, url etc.
//     // console.dir(req);
//     // this shows a h1 with the following message fro any request. if object is used, it's added to json
//     res.send('<h1>I received your request, here\'s the response!</h1>');
// })

app.get('/cats', (req, res) => {
    res.send('This is the path to cats');
})

app.get('/', (req, res) => {
    res.send('Get request without further url. this is the home page');
})

// localhost: 3000/cat will not show this as it's a post request not get. it will instead show what's in '*' 
app.post('/cat', (req, res) => {
    res.send('Post request not the same as get');
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>You are viewing the ${subreddit} subreddit`);
})

app.get('/r/:subreddit/:postID', (req, res) => {
    // gives an object that contains for parameter subreddit the value of whatever is typed after / 
    // and value for postID after localhost:3000/r/<subreddit>/<postID>
    // console.log(req.params);
    const { subreddit, postID } = req.params;
    res.send(`<h1>You are viewing Post:${postID} from subreddit ${subreddit}</h1>`);
})

// q will have everything after '=' or the searchTerm /search?q=<searchTerm>
app.get('/search', (req, res) => {
    const { q } = req.query;
    // if q is an empty object
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED!');
    }
    res.send(`<h1>Search Results: ${q}</h1>`);
})

app.get('*', (req, res) => {
    res.send('all other links receive this. It\'s in the end, otherwise it would override everything and show only this everytime');
})

app.listen(3000, () => {
    console.log('Opened and listening on port 3000');
})
