// change numbers array to indexes using map method
const nums = [1, 2, 3, 4, 5, 6];

// it maps or creates a new array by taking every item individually from the array nums and stores a new array in indexes
// result will be [0, 1, 2, 3, 4, 5]
// by just returning num, indexes array will be a copy of the nums array. you can also use it with array with objects
// and changing just one part of the objects
const indexes = nums.map(function(num)
{
    return num - 1;
});

// movies array with different movies as objects
const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// to create a new array that will only have the names of the movies
// a function is passed with an arrow shorthand that passes only one argument(so no need for brackets) of movie and returns only one 
// statement(so no need for return statement there either and can write on one line)
const movieTitles = movies.map(movie => movie.title);
// prints out an array with 10 items contaning only the names of the movies
console.log(movieTitles);
