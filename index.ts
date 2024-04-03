#! /usr/bin/env node


import inquirer from "inquirer";
let accbalance = 10000;
let mypin = 1980;

let pincode = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "enter your pin",
  },
]);

if (pincode.pin === mypin) {
  console.log("Access granted");
  console.log("Welcome to the ATM");

  let action = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "select your operator",
      choices: ["Withdraw", "Check Balance", "FastCash", "Deposit", "Exist"],
    },
  ]);

  if (action.operation === "Withdraw") {
    let mywithdraw = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "enter the amount",
      },
    ]);
    if (mywithdraw.amount <= accbalance) {
      console.log(mywithdraw.amount);
      accbalance -= mywithdraw.amount;
      console.log(`your remaining balance is: ${accbalance}`);
    } else {
      console.log("insufficient balance");
    }
  } else if (action.operation === "Check Balance") {
    console.log(accbalance);
  } else if (action.operation === "FastCash") {
    let fastcash = await inquirer.prompt([
      {
        name: "cash",
        type: "list",
        message: "choose the amount to withdraw",
        choices: ["5000", "10000", "20000", "25000", "30000", "50000"],
      },
    ]);
    if (fastcash.cash <= accbalance) {
        console.log(fastcash.cash);
        accbalance -= fastcash.cash;
        console.log(`your remaining balance is: ${accbalance}`);
      } else {
        console.log("insufficient balance");
      }
  
  } else if (action.operation === "Deposit") {
    let deposit = await inquirer.prompt([
      {
        name: "cash",
        type: "list",
        message: "choose the amount to deposit",
        choices: ["5000", "10000", "20000", "25000", "30000", "50000"],
      },
    ]);
    console.log(deposit.cash);
    let newbalance = accbalance + parseInt(deposit.cash);
    console.log(`your remaining balance is: ${newbalance}`);
  }else{
    console.log("Thank you for using the ATM.Get your card");
    
  }
} else {
  console.log("Incorrect pin");
}