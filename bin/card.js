#! / usr / bin / env node
// Used to tell Node.js that it is a CLI tool
'use strict';

// Declaring the modules:
import { white, cyan, green, rgb } from ' chalk ';
import boxen from ' boxen ';

// Setting options for 'boxen':
const options = {
  padding: 7,
  margin: 7,
  borderStyle: 'double',
  float: 'center',
  borderColor: '# ff4879',
  backgroundColor: 'black',
};

// Inclusion of Text and more 'chalk' definitions:
const data = {
  name: white(' Jibin Philipose / '),
  handle: cyan(' JIBIN-P '),
  work: white(' Full Stack Web Developer At TSS Consultancy '),
  twitter: gray('https://twitter.com/') + cyan('JIBIN_TP'),
  github: gray('https://github.com/') + green('JIBIN-P'),
  linkedIn: gray('https://linkedin.com/in/') + blue('jibin-p'),
  medium: cyan(' https://medium.com/@jibin_p '),
  npx: red('npx') + ' ' + white('jibin-p'),
  labelWork: rgb(255, 0, 0).bold('Work:'),
  labelTwitter: rgb(0, 255, 255).bold('Twitter:'),
  labelGitHub: rgb(253, 245, 5).bold('GitHub:'),
  labelLinkedIn: rgb(51, 51, 255).bold('LinkedIn:'),
  labelMedium: rgb(102, 51, 0).bold('Medium:'),
  labelCard: chalk.rgb(240, 13, 240).bold('Card:'),
};

// Here is the output of our Personal Card in NPX:
const newline = ' \n ';
const heading = ` $ { data.name }  $ { data.handle } `;
const working = ` $ { data.labelWork }   $ { data.work } `;
const twittering = ` $ { data.labelTwitter }   $ { data.twitter } `;
const githubData = ` $ { data.labelGitHub }   $ { data.github } `;
const linkedInData = ` $ { data.labelLinkedIn }   $ { data.linkedIn } `;
const mediumData = ` $ { data.labelMedium }   $ { data.medium } `;
const carding = ` $ { data.labelCard }   $ { data.npx } `;

// Here we must put all our output in a single variable so that we can use
// the 'boxen effectively:
const output = [
  heading,
  newline,
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
  newline,
  carding,
].join(newline);

console.log(green(boxen(output, options)));
