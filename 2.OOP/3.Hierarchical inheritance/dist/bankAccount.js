"use strict";
class BankAccount {
    constructor() {
        this.id = BankAccount.nextId++;
        this.balance = 0;
    }
    static setInterestRate(interestRate) {
        BankAccount.interestRate = interestRate;
    }
    static getInterestRate() {
        return BankAccount.interestRate;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
        else {
            console.log('Invalid deposit amount.');
        }
    }
    getInterest(years) {
        return this.balance * Math.pow(1 + BankAccount.interestRate, years) - this.balance;
    }
    getId() {
        return this.id;
    }
    getBalance() {
        return this.balance;
    }
}
BankAccount.nextId = 1;
BankAccount.interestRate = 0.02;
class Bank {
    constructor() {
        this.accounts = new Map();
    }
    createAccount() {
        const account = new BankAccount();
        this.accounts.set(account.getId(), account);
        console.log(`Account ID${account.getId()} created.`);
    }
    depositToAccount(accountId, amount) {
        const account = this.accounts.get(accountId);
        if (account) {
            account.deposit(amount);
            console.log(`Deposited ${amount} to ID${account.getId()}.}`);
        }
        else {
            console.log(`Account with ID${accountId} does not exist.`);
        }
    }
    setInterestRate(interestRate) {
        BankAccount.setInterestRate(interestRate);
        console.log(`Interest rate set to ${interestRate}.`);
    }
    getInterest(accountId, years) {
        const account = this.accounts.get(accountId);
        if (account) {
            const interest = account.getInterest(years);
            console.log(`Interest for account with ID${account.getId()} after ${years} years: ${interest}`);
        }
        else {
            console.log(`Account does not exist.`);
        }
    }
    executeCommand(command) {
        const tokens = command.split(' ');
        const action = tokens[0];
        if (action === 'Create') {
            this.createAccount();
        }
        else if (action === 'Deposit') {
            const accountId = parseInt(tokens[1], 10);
            const amount = parseFloat(tokens[2]);
            this.depositToAccount(accountId, amount);
        }
        else if (action === 'SetInterest') {
            const interestRate = parseFloat(tokens[1]);
            this.setInterestRate(interestRate);
        }
        else if (action === 'GetInterest') {
            const accountId = parseInt(tokens[1], 10);
            const years = parseInt(tokens[2], 10);
            this.getInterest(accountId, years);
        }
        else {
            console.log('Invalid command.');
        }
    }
}
const bank = new Bank();
const bank1 = new Bank();
//   bank.executeCommand('Create');
//   bank.executeCommand('Create');
//   bank.executeCommand('Deposit 1 20');
//   bank.executeCommand('Deposit 3 20');
//   bank.executeCommand('Deposit 2 10');
//   bank.executeCommand('SetInterest 1.5');
//   bank.executeCommand('GetInterest 1 1');
//   bank.executeCommand('GetInterest 2 1');
//   bank.executeCommand('GetInterest 3 1');
//   bank.executeCommand('End');
bank1.executeCommand('create');
bank1.executeCommand('Deposit 1 20');
bank1.executeCommand('GetInterest 1 10');
bank1.executeCommand('End');
