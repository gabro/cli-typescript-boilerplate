const stdin = require("mock-stdin").stdin();

export const ENTER = "\x0D";

export async function runWithAnswers<A>(
  command: () => Promise<A>,
  combo: Array<String>
): Promise<A> {
  process.nextTick(() => {
    combo.forEach(k => stdin.send(k));
  });
  return command();
}
