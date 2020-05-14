#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'green',
};
let output = `
${chalk.yellow.bold('Arthur Christoph')}
https://${chalk.yellow('achristoph')}.com
https://${chalk.blue('github')}.com/${chalk.yellow('achristoph')} 
https://${chalk.blue('linkedin')}.com/in/${chalk.yellow('achristoph')}
$ npx ${chalk.yellow('achristoph')}`;

const trimmed = output.split('\n');
const card = chalk.white(boxen(trimmed.join('\n'), options));
console.log(card);
