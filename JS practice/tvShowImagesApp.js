const form = document.querySelector('#search');

form.addEventListener('submit', async function (ev) {
    // to prevent to default form submit behavior
    ev.preventDefault();

    // to get the input value from what the user searched, you can select the input separately and then it's value or do it this way
    // console.dir(form);
    // as you set the name of input to query, you can select it under elements as input is an element of form
    
    const searchTerm = form.elements.query.value;
    // configuration of what is added as q?=<searchTerm>. You can also add headers 
    const config = { params: { q: searchTerm } };

        // gives a response and to get the image from this response, we need to go into data which is an array of 10
    // then to an index from data e.g data[0].show.image.medium to get the link of the image
    // const res = await axios.get('https://api.tvmaze.com/search/shows?q=girls');
    // console.log(searchTerm);
    const res = await axios.get('https://api.tvmaze.com/search/shows', config);
    // res.data contains an array[10]
    appendImages(res.data);
    //clear out the input
    form.elements.query.value = '';
})

const appendImages = (shows) => {
    for (let result of shows) {
        // if an image exists to prevent an error
        if (result.show.image) {
        const imageLink = result.show.image.medium;
        const imageElement = document.createElement('IMG');
        imageElement.src = imageLink;
        document.body.append(imageElement);
        }
    }
}