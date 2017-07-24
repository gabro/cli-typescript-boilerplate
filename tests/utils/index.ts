const stdin = require('bdd-stdin');

export const ENTER = '\x0D';

export async function runWithAnswers<A>(
  command: () => Promise<A>,
  combo: Array<string>
): Promise<A> {
  stdin(combo);
  return command();
}
