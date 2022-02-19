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

// to find out the highest score movie, take the array of movies and method reduce
// reduce takes two arguments of accumulator and current value. you can also after the function specify the start of the accumulator 
// arrow creates a function
const bestMovie = movies.reduce((topMovie, currentMovie) => {
    if (currentMovie > topMovie) {
        return currentMovie;
    }
    return topMovie;
})

// after the function, specify the initial value with 150 so the accumulation starts with 150
const tens = [10, 20, 30, 40, 50];
const sumTens = tens.reduce((cumulated, curr) => cumulated + curr, 150);
