class Car {
    public _brand: string;
    public _model: string;
    public _horsepower: number;

    constructor(brand: string, model: string, horsepower: number) {
        this._brand = brand;
        this._model = model;
        this._horsepower = horsepower;
    }

    get brand(): string {
        return this._brand;
    }
    set brand(value: string) {
        this._brand = value;
    }
    get model(): string {
        return this._model;
    }
    set model(value: string) {
        this._model = value;
    }
    get horsepower(): number {
        return this._horsepower;
    }
    set horsepower(value: number) {
        this._horsepower = value;
    }
}

const input1 = new Car("Chevrolet", "Impala", 390);
console.log(`The car is: ${input1.brand} ${input1.model} - ${input1.horsepower} HP.`)
const input2 = new Car("Skoda", "Karoq", 150);
console.log(`The car is: ${input2.brand} ${input2.model} - ${input2.horsepower} HP.`)
