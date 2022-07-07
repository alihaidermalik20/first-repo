class Pet {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

// class Cat inherits constructor and methods from class Pet also
class Cat extends Pet {
    constructor (name, age, livesLeft = 9) {
        // super allows the name and age argument to be taken from Pet
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'Meowwwwww';
    }
}

// has all the methods and constructor from Pet and also has bark
class Dog extends Pet {
    bark() {
        return 'Wooooff';
    }
    eat() {
        return `${this.name} the dog is eating`;
    }
}

const richard = new Cat('richard', 5, 4);
const billy = new Dog('billy', 8);
console.log(richard.eat()); // richard is eating
// returns billy the dog is eating as eat function is first looked in dog and then in pet
console.log(billy.eat());
