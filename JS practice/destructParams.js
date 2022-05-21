const user1 = {
    firstName: 'Ali',
    lastName: 'Malik',
    born: '1998',
    city: 'Brussels'
}

// create a function called fullName that takes an input of any object such as user1
// and takes their first and last name parameters to return fullname
function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`
}

// fullName(user1)
// 'Ali Malik'
