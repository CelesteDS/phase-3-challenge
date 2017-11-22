#!/usr/bin/env node

const { productList, shopperOrders, realShoppers } = require('./database');

const command = process.argv[2];
const inputOption = process.argv[3];
let shopperId;

switch (command) {
  case 'product-list':
    productList(inputOption).then(list=>printSection(list));
    break;
  case 'shopper-orders':
    shopperId = Number(inputOption);
    if (isNaN(shopperId)) {
      console.log(`Shopper id must be a number. You entered ${inputOption}.`);
    } else {
      shopperOrders(shopperId).then(printShopperOrders);
    }
    break;
  case 'real-shoppers':
    realShoppers().then(printRealShoppers);
    break;
  default:
    console.log(`The valid commands are product-list <section>,
      shopper-orders <shopper id>, and real-shoppers. You entered ${command}.`);
    break;
}

/**
 * Formats the orders and totals and prints them to the console.
 * @param  {array} orders each order is an object with keys order_id and sum (representing the total)
 * @return {undefined}
 */
function printShopperOrders(orders) {
  const idWidth = 8;
  const costWidth = 10;
  const line = `|-${'-'.repeat(idWidth)}-+-${'-'.repeat(costWidth)}-|`;
  console.log(line);
  console.log('| order id | total cost |');
  console.log(line);
  orders.forEach(order =>
    console.log(`| ${order.order_id}${' '.repeat(idWidth - String(order.order_id).length)} | ${order.sum}${' '.repeat(costWidth - String(order.sum).length)} |`))
  console.log(line);
}

/**
 * Formats the section items and prints them to the console.
 * @param  {array} items array of objects with keys name and section
 * @return {undefined}
 */
function printSection(items) {
  const nameWidth = 22;
  const sectionWidth = 14;
  const line = `|${'-'.repeat(nameWidth)}-+${'-'.repeat(sectionWidth)}-|`
  console.log(line);
  console.log(`| Product Name${' '.repeat(nameWidth - 13)} | Section${' '.repeat(sectionWidth - 7)}|`);
  console.log(line);
  items.forEach(item =>
    console.log(`| ${item.name}${' '.repeat(nameWidth - item.name.length)}| ${item.section}${' '.repeat(sectionWidth - item.section.length)}|`)
  );
  console.log(line);
}

/**
 * Formats the real shoppers list and prints it to console.
 * @param  {array} shopperList objects each with key name and count (representing how many orders that shopper has)
 * @return {undefined}
 */
function printRealShoppers(shopperList) {
  const nameWidth = 13;
  const orderWidth = 17;
  const line = `|-${'-'.repeat(nameWidth)}+-${'-'.repeat(orderWidth)}|`;
  console.log(line);
  console.log('| shopper name | number of orders |');
  console.log(line);
  shopperList.forEach(shopper =>
  console.log(`| ${shopper.name}${' '.repeat(nameWidth - shopper.name.length)}|${' '.repeat(orderWidth - shopper.count.length)}${shopper.count} |`));
  console.log(line);
}
