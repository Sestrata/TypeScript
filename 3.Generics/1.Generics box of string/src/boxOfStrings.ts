class Box<T> {
    private genericType: T;
    constructor(g: T) {
        this.genericType = g;
    }

    toString(): string {
        return `${this.genericType} is of type ${typeof this.genericType}`
    }
}

let box1 = new Box(['test']);
let box2 = new Box(20);
let box3 = new Box('Hello');

console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
