// function that takes input of name and greeting and if second argument not provided, it's passed as Hello by default
function greeting(name, greet = "Hello")
{
    console.log(`${greet}, ${name}`)
}

// for example calling greeting(John) will show Hello, John
// default parameters should always come as last parameters rather than first. Below default won't work. there can be multiple defaults ofc

// function greeting(greet = 'Hey', name)
// {
//     console.log(`${greet}, ${name}`)
// }
