const nums = [1, 200, 5, 30];

console.log(Math.max(...nums));

const boys = ['argo', 'carl'];

const girls = ['dasha', 'masha'];

// combines both boys and girls array
const people = [...boys, ...girls];

// takes an object and adds more to it
const dataFromForm = {
    name: 'Ali',
    email: 'abc@gmail.com',
};

const newUser = {
    ...dataFromForm, id: 235, isAdmin: 'False'
};
