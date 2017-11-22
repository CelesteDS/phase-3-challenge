#!/usr/bin/env node

const { db, productList, shopperOrders } = require('./database');

const command = process.argv[2];
const inputOption = process.argv[3];
let shopperId;
console.log(command);

switch (command) {
  case 'product-list':
    break;
  case 'shopper-orders':
    shopperId = Number(inputOption);
    if (isNaN(shopperId)) {
      console.log(`Shopper id must be a number. You entered ${inputOption}.`);
    } else {
      printShopperOrders(/*shopperOrders(shopperId)*/);
    }
    break;
  case 'real-shoppers':
    printRealShoppers();
    break;
  default:
    console.log(`The valid commands are product-list <section>,
      shopper-orders <shopper id>, and real-shoppers. You entered ${command}.`);
    break;
}

function printShopperOrders () {
  const idWidth = 8;
  const costWidth = 10;
  const line = `|-${'-'.repeat(idWidth)}-+-${'-'.repeat(costWidth)}-|`;
  console.log(line);
  console.log('| order id | total cost |');
  console.log(line);
  // this is where i print the order ids and totals
  console.log(line);
}

function printSection () {
  const nameWidth = 23;
  const sectionWidth = 15;
  const line = `|${'-'.repeat(nameWidth)}+${'-'.repeat(sectionWidth)}`
  console.log(line);
  console.log(`| Product Name${' '.repeat(nameWidth - 13)}| Section${' '.repeat(sectionWith - 8)}`);
  console.log(line);
  // this is where i print the list of product names & sections

}

function printRealShoppers () {
  const nameWidth = 13;
  const orderWidth = 17;
  const line = `|-${'-'.repeat(nameWidth)}+-${'-'.repeat(orderWidth)}|`;
  console.log(line);
  console.log('| shopper name | number of orders |');
  console.log(line);
  //print names and # of orders here
  console.log(line);
}
