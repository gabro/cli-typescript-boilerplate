#!/usr/bin/env node

import * as program from 'commander';
import * as pkg from '../package.json';
import { hello } from './commands';

program
  .command('hello')
  .description(`Let's get to know each other`)
  .option('-n, --userName <userName>', 'your name (optional)')
  .action(({ userName }) => hello(userName));

program.version((pkg as any).version).parse(process.argv);

if (program.args.length === 0) {
  program.help();
}
