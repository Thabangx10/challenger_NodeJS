class Person {
    #firstName = '';  // use a hash tag to privatise
    constructor (firstName) {
        this.#firstName = firstName
    }
    walk() {
        console.log(`${this.#firstName} walking`);
    }

    dance() {
        console.log(`${this.#firstName}I am dancing`);
    }
}

let person = new Person('Messi');
let person2 = new Person('Ronaldo');
person.walk()
person2.dance()