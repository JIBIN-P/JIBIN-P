#!/usr/bin/env node
// Used to tell Node.js that it is a CLI tool
'use strict';

// Declaring the modules:
const chalk = require('chalk');
const boxen = require('boxen');

// Setting options for 'boxen':
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'double',
  float: 'center',
  borderColor: '#ff4879',
  backgroundColor: 'black',
};

// Inclusion of Text and more 'chalk' definitions:
const data = {
  name: chalk.white('Jibin Philipose/'),
  handle: chalk.cyan('JIBIN-P'),
  work: chalk.white('Full Stack Web Developer At TSS Consultancy.'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('JIBIN_TP'),
  github: chalk.gray('https://github.com/') + chalk.green('JIBIN-P'),
  linkedIn: chalk.gray('https://linkedin.com/in/') + chalk.blue('jibin-p'),
  medium: chalk.cyan(' https://medium.com/@jibin_p '),
  npx: chalk.red('npx') + ' ' + chalk.white('jibin-p'),
  labelWork: chalk.rgb(255, 0, 0).bold('Work:'),
  labelTwitter: chalk.rgb(0, 255, 255).bold('Twitter:'),
  labelGitHub: chalk.rgb(253, 245, 5).bold('GitHub:'),
  labelLinkedIn: chalk.rgb(51, 51, 255).bold('LinkedIn:'),
  labelMedium: chalk.rgb(102, 51, 0).bold('Medium:'),
  labelCard: chalk.rgb(240, 13, 240).bold('Card:'),
};

// Here is the output of our Personal Card in NPX:
const newline = '\n';
const heading = `${data.name}${data.handle}`;
const working = ` ${data.labelWork}  ${data.work}`;
const twittering = ` ${data.labelTwitter}  ${data.twitter}`;
const githubData = ` ${data.labelGitHub}  ${data.github}`;
const linkedInData = ` ${data.labelLinkedIn}  ${data.linkedIn}`;
const mediumData = ` ${data.labelMedium}  ${data.medium}`;
const carding = ` ${data.labelCard}  ${data.npx}`;

// Here we must put all our output in a single variable so that we can use
// the 'boxen effectively:
const output = [
  heading,
  newline,
  working,
  newline,
  twittering,
  newline,
  githubData,
  newline,
  linkedInData,
  newline,
  mediumData,
  newline,
  carding,
].join(newline);

console.log(chalk.green(boxen(output, options)));
