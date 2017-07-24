import { logInfo } from '../utils';
import { prompt as ask } from 'inquirer';

export default async function hello(): Promise<void> {
  logInfo('Hello stranger!');
  const { name } = await ask([
    {
      type: 'input',
      name: 'name',
      message: "What's your name?"
    }
  ]);
  logInfo(`Oh, hello, ${name}!`);
}
