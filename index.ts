#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// player and opposer classes
class player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 20;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100
  }
}
class opposer {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}
let Player = await inquirer.prompt({
  type: "input",
  name: "name",
  message: "Enter your Name:",
});
let Opposer = await inquirer.prompt({
  name: "Select",
  type: "list",
  message: "Select your opposer:",
  choices: ["SKELETON_GAME", "HUNTER_ASSASIN_GAME", "ZOMBIE_GAME"],
});
//  Collect all data
let P1 = new player(Player.name);
let O1 = new opposer(Opposer.Select);
do {
  // SKELETONGAME
  if (Opposer.Select == "SKELETON_GAME") {
    console.log(
      (`${chalk.bold.blueBright(P1.name)} VS ${chalk.bold.green(O1.name)}`));
    let tell = await inquirer.prompt({
      name: "options",
      type: "list",
      message: "Select your opponent:",
      choices: ["ATTACK", "DRINK_PORTION", "RUN FOR LIFE"],
    });
    if (tell.options == "ATTACK") {
      let Num = Math.floor(Math.random() * 5);
      
      if (Num > 0) {
        P1.fuelDecrease();
        console.log(chalk.bold.redBright(`${P1.name} fuel is ${P1.fuel}`));
        console.log(chalk.bold.green(`${O1.name} fuel is ${O1.fuel}`));
        if (P1.fuel <= 0) {
          console.log(
            chalk.redBright.bold.italic(
              "You loose this game,BestOfLuckForTheNextTime!!!"
            )
          );
          process.exit();
        }
      }
      if (Num <= 0) {
        O1.fuelDecrease();
        console.log(chalk.bold.green(`${P1.name} fuel is ${P1.fuel}`));
        console.log(chalk.bold.redBright(`${O1.name} fuel is ${O1.fuel}`));
        if (O1.fuel <= 0) {
          console.log(
            chalk.green.bold.italic("Congratulation!You are a Winner***")
          );
          process.exit();
        }
      }
    }
    if (tell.options == "DRINK_PORTION") {
      P1.fuelIncrease();
      console.log(
        chalk.italic.green(`your Drink_HealthPortion & Your Fuel is${P1.fuel}`)
      )
    }
    if (tell.options == "RUN FOR LIFE") {
      console.log(chalk.redBright.bold.italic("You loose this game!!!"));
      process.exit();
    }
  }
  // ASSASIN_GAME:
  if (Opposer.Select == "HUNTER_ASSASIN_GAME") {
    console.log(
      (`${chalk.bold.magentaBright(P1.name)} VS ${chalk.bold.green(O1.name)}`)
    );
    let tell = await inquirer.prompt({
      name: "options",
      type: "list",
      message: "Select your opponent:",
      choices: ["ATTACK", "DRINK_PORTION", "RUN FOR LIFE"],
    });
    if (tell.options == "ATTACK") {
      let Num = Math.floor(Math.random() * 5);
      // console.log(Num)
      if (Num > 0) {
        P1.fuelDecrease();
        console.log(chalk.bold.redBright(`${P1.name} fuel is ${P1.fuel}`));
        console.log(chalk.bold.greenBright(`${O1.name} fuel is ${O1.fuel}`));
        if (P1.fuel <= 0) {
          console.log(
            chalk.redBright.bold.italic(
              "You loose this game,BestOfLuckForTheNextTime!!!"
            )
          );
          process.exit();
        }
      }
      if (Num <= 0) {
        O1.fuelDecrease();
        console.log(chalk.bold.green(`${P1.name} fuel is ${P1.fuel}`));
        console.log(chalk.bold.redBright(`${O1.name} fuel is ${O1.fuel}`));
        if (O1.fuel <= 0) {
          console.log(
            chalk.green.bold.italic("Congratulation!You are a Winner***")
          );
          process.exit();
        }
      }
    }
    if (tell.options == "DRINK_PORTION") {
      P1.fuelIncrease();

      console.log(
        chalk.italic.green(`your Drink_HealthPortion & Your Fuel is${P1.fuel}`)
      )
    }
    if (tell.options == "RUN FOR LIFE") {
      console.log(chalk.redBright.bold.italic("You loose this game!!!"));
      process.exit();
    }
  }
  // ZOMBIE_GAME:
  if (Opposer.Select == "ZOMBIE_GAME") {
    console.log(
      (`${chalk.bold.blueBright(P1.name)} VS ${chalk.bold.green(O1.name)}`)
    );
    let tell = await inquirer.prompt({
      name: "options",
      type: "list",
      message: "Select your opponent:",
      choices: ["ATTACK", "DRINK_PORTION", "RUN FOR LIFE"],
    });
    if (tell.options == "ATTACK") {
      let Num = Math.floor(Math.random() * 5);
      // console.log(Num)
      if (Num > 0) {
        P1.fuelDecrease();
        console.log(chalk.bold.redBright(`${P1.name} fuel is ${P1.fuel}`));
        console.log(chalk.bold.greenBright(`${O1.name} fuel is ${O1.fuel}`));
        if (P1.fuel <= 0) {
          console.log(
            chalk.redBright.bold.italic(
              "You loose this game,BestOfLuckForTheNextTime!!!"
            )
          );
          process.exit();
        }
      }
      if (Num <= 0) {
        O1.fuelDecrease();
        console.log(chalk.bold.green(`${P1.name} fuel is ${P1.fuel}`));
        console.log(chalk.bold.redBright(`${O1.name} fuel is ${O1.fuel}`));
        if (O1.fuel <= 0) {
          console.log(
            chalk.green.bold.italic("Congratulation!You are a Winner***")
          );
          process.exit();
        }
      }
    }
    if (tell.options == "DRINK_PORTION") {
      P1.fuelIncrease();

      console.log(
        chalk.italic.green(`your Drink_HealthPortion & Your Fuel is${P1.fuel}`)
      )
    }
    if (tell.options == "RUN FOR LIFE") {
      console.log(chalk.redBright.bold.italic("You loose this game!!!"));
      process.exit();
    }
  }
} while (true);
