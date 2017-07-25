import { logInfo } from '../utils';
import { prompt as ask } from 'inquirer';

async function askName(): Promise<string> {
  logInfo(':wave:  Hello stranger!');
  const { name } = await ask([
    {
      type: 'input',
      name: 'name',
      message: "What's your name?"
    }
  ]);
  return name;
}

export default async function hello(name?: string): Promise<void> {
  logInfo(`Oh, nice to meet you, ${name || (await askName())}!`);
}
