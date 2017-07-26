#!/usr/bin/env node

import * as yargs from 'yargs';

// prettier-ignore
yargs
  .commandDir('commands')
  .demandCommand(1)
  .help()
  .version()
  .argv;
