import { logInfo } from '../utils';
import { prompt as ask } from 'inquirer';

export default async function hello(): Promise<void> {
  logInfo(':wave:  Hello stranger!');
  const { name } = await ask([
    {
      type: 'input',
      name: 'name',
      message: "What's your name?"
    }
  ]);
  logInfo(`Oh, nice to meet you, ${name}!`);
}
