import { FoodAndBeverages } from './deliveries'

class Courier implements FoodAndBeverages.Delivery {
    protected placesToVisit: { customerName: string; visited: boolean }[];

    constructor(placesToVisit: { customerName: string; visited: boolean }[]) {
      this.placesToVisit = placesToVisit;
    }
  
    newCustomer(customerName: string, visited: boolean = false): string {
      for (const place of this.placesToVisit) {
        if (place.customerName === customerName) {
          throw new Error(`${customerName} is already a customer of yours!`);
        }
      }
  
      this.placesToVisit.push({ customerName, visited });
      return `${customerName} just became your client.`;
    }
  
    visitCustomer(customerName: string): string {
      for (const place of this.placesToVisit) {
        if (place.customerName === customerName) {
          place.visited = true;
          return '';
        }
      }
  
      throw new Error(`${customerName} is not your customer.`);
    }
  
    showCustomers(): string {
        let customersList = '';
        for (const place of this.placesToVisit) {
          customersList += `${place.customerName} -> ${place.visited}\n`;
        }
        return customersList;
      }
  }

let courier = new Courier([{ customerName: 'DHL',visited: false }]);
courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');
courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');
console.log(courier.showCustomers());

