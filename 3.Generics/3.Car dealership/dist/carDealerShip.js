"use strict";
class CarDealership {
    constructor(dealershipName) {
        this.modelsSold = {};
        this.dealershipName = dealershipName;
        this.soldCars = 0;
    }
    sellCar(dealerID, model) {
        this.modelsSold[dealerID] = model;
        this.soldCars++;
    }
    showDetails() {
        let details = `${this.dealershipName}:\n`;
        for (const dealerID in this.modelsSold) {
            const model = this.modelsSold[dealerID];
            details += `${dealerID} sold ${model}\n`;
        }
        return details;
    }
}
let dealership = new CarDealership('SilverStar');
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
