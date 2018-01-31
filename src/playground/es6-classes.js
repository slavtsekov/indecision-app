class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (!!this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

// const me = new Person("Slav", 24);
// console.log(me.getGreeting());
// console.log(me.getDescription());

// const anon = new Person();
// console.log(anon.getGreeting());
// console.log(anon.getDescription());

const me = new Traveller("Slav", 18, "Vidin");
console.log(me.getGreeting());

const me2 = new Traveller("Slav", 18);
console.log(me2.getGreeting());

const anon = new Traveller();
console.log(anon.getGreeting());