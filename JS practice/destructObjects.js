// put an object property into a variable

const user1 = {
    name: 'Ali',
    born: '1998',
    city: 'Brussels'
}

// This creates 4 variables. name 'Ali' is a variable called adminName also now. 
//died is a variable called adminDeathYear but if it's not in the object, it's N/A by default
const {name: adminName, born: adminBirthYear, died: adminDeathYear = 'N/A', city} = user1;
console.log(adminName); // Ali
console.log(adminBirthYear); // 1998
console.log(adminDeathYear); // 'N/A'
