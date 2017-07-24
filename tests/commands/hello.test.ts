const log = jest.fn();
console.log = log; // eslint-disable-line no-console

const { hello } = require('../../src/commands');
const { runWithAnswers, ENTER } = require('../utils');

describe('hello', () => {
  it('says hello with the right name', async () => {
    await runWithAnswers(hello, ['gabro', ENTER]).then(() => {
      expect(log).toHaveBeenCalledTimes(2);
      expect(log.mock.calls[0][0]).toMatchSnapshot();
      expect(log.mock.calls[1][0]).toMatchSnapshot();
    });
  });
});
