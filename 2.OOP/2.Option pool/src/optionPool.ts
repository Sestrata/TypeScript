class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const input1 = new Person("Peter", 12);
console.log(`${input1.name} is ${input1.age} years old.`)
const input2 = new Person("Sofia", 33);
console.log(`${input2.name} is ${input2.age} years old.`)
