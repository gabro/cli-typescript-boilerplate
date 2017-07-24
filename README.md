# cli-typescript-boilerplate
A boilerplate for CLI tools written in TypeScript

## Motivation
I write short self-contained CLI tools quite often, and they all follow a basic structure that I decided to "formalize" in this boilerplate, and minimize the time of setting this up.

TypeScript is also a great workflow improvement (type-safety and autocompletion in the editor are awesome!) but it takes a while to configure if you start from scratch.

Another thing that's not straightforward is how to **test** interactive CLI. In this boilerplate I give an example of how to test a CLI command using [Jest's Snapshot Testing](https://facebook.github.io/jest/docs/snapshot-testing.html).

## Technology (opinionated) choices
The CLI "interface" uses [commander](https://github.com/tj/commander.js), which provides arguments/options parsing and validation, as well as a natural separation in sub-commands.

Another library that's showcased (and that I heavely use in real projects) is [Inquirer.js](https://github.com/SBoudrias/Inquirer.js/), that provides a delightful experience to the users, with rich and interactive prompts that are a pleasure to use.

As mentioned, **TypeScript** is awesome for speeding up the workflow and catching errors early on in the development phase, especially in the starting phase where many refactors occur. Even if you don't explicitly annotate your functions, you will still get benefits from TS.

Jest is also an amazing tool, which provides a very pleasant testing experience, with almost no configuration. It's snapshot feature has become known for React components, but it's also very appropriate for testing the output of a CLI program.

Finally, linting is done via ESLint (with typescript-eslint-parser for TypeScript support) and prettier runs automatically on git commits, leaving no room for mis-formatted code and bad code practices.