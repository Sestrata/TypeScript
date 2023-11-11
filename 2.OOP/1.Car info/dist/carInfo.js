"use strict";
class Car {
    constructor(brand, model, horsepower) {
        this._brand = brand;
        this._model = model;
        this._horsepower = horsepower;
    }
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    get horsepower() {
        return this._horsepower;
    }
    set horsepower(value) {
        this._horsepower = value;
    }
}
const input1 = new Car("Chevrolet", "Impala", 390);
console.log(`The car is: ${input1.brand} ${input1.model} - ${input1.horsepower} HP.`);
const input2 = new Car("Skoda", "Karoq", 150);
console.log(`The car is: ${input2.brand} ${input2.model} - ${input2.horsepower} HP.`);
