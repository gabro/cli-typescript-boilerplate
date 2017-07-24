import { hello } from '../../src/commands';
import { runWithAnswers, ENTER } from '../utils';
import * as utils from '../../src/utils';

// silence outputs
jest.mock('inquirer/lib/utils/screen-manager');
jest.mock('../../src/utils');

const logInfo = jest.spyOn(utils, 'logInfo');

describe('hello', () => {
  it('says hello with the right name', async () => {
    await runWithAnswers(hello, ['gabro', ENTER]).then(() => {
      expect(logInfo).toHaveBeenCalledTimes(2);
      expect(logInfo.mock.calls[0][0]).toMatchSnapshot();
      expect(logInfo.mock.calls[1][0]).toMatchSnapshot();
    });
  });
});
