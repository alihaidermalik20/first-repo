let action = prompt('What do you want to do?');
action = action.toLowerCase();
// console.log(action);
// checking if it works
// console.log(action);

const toDoList = [];
// continue only if user doesn't want to quit. ampersands used because
// both have to be true to enter and both will be true only if 
// neither quit nor q is used. 
// With ||, you will enter the loop even if quit isn't entered but q is 
// or if q is entered but quit isn't. the whole if function will evaluate
// to true if even one of them is true. but we need both of them to be true
while (action !== 'quit' && action !== 'q') {
    // if new task, ask what task and add it to the list
    if (action === 'new') {
        const newToDo = prompt('Enter the task: ');
        toDoList.push(newToDo);
        console.log(`${newToDo} is added to the list`);
    }
    // type list to see everything currently in your to-do list in the console with numbering
    else if (action === 'list') {
        // syntax similar to C with starting point, ending point, and what happens with each loop entering
        for (let i = 0; i < toDoList.length; i++) {
            // `${} evaluates what's inside the curly braces first and if it's a var like i, 
            // it gives it's value + 1 and not literally letter 'i'
            console.log(`${i+1}. ${toDoList[i]}`);
        }
    }
    // to delete, ask which number user wants deleted not the index
    // if task to delete isn't a number but some string, it deletes the 0 index automatically
    // so make sure a number is given to delete
    else if (action === 'delete') {
        // // Number.isNaN() returns true if something is typeof number but has a value that isn't a number
        // isNaN doesn't forcefully convert variable into a number so have to first convert to a number ourselves
        // so have to turn a prompt which is always a typeof string into a typeof number to be able to use 
        // function NaN to see if typeof number actually has a value of number or not
        // parsInt turns a string into an integer or typeof "number"
        const deleteToDo = parseInt(prompt("What no. task do you want to remove?"));
        if (!Number.isNaN(deleteToDo)) {
            // splice will take two arguments, starting index of what you want to delete
            // and how many you want to delete
            toDoList.splice(deleteToDo - 1, 1);
            console.log(`${deleteToDo} is removed from the list`);
        }
        else {
            console.log(`Enter a number from 1 to ${toDoList.length} to delete`);
        }
    }
    // catch all condition if no command matches 
    else {
        alert("Invalid command");
    }
    action = prompt('What do you want to do?');
    // to ensure everything is lower case so it's comparable later on
    action = action.toLowerCase();
}
console.log('quit the app');
