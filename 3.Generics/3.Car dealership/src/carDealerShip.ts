interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
  }
  
  interface Actions<T> {
    sellCar(dealerID: T, model: T): void;
  }
  
  class CarDealership<T> implements Dealership<T>, Actions<T> {
    dealershipName: T;
    soldCars: number;
    public modelsSold: { [dealerID: string]: T } = {};
  
    constructor(dealershipName: T) {
      this.dealershipName = dealershipName;
      this.soldCars = 0;
    }
  
    sellCar(dealerID: T, model: T): void {
      this.modelsSold[dealerID as any] = model;
      this.soldCars++;
    }
  
    showDetails(): string {
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
