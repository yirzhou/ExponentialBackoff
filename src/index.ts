const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const CallWithBackoff: any = async (
  fn: Promise<any>,
  depth: number = 0,
  maxDepth: number = 7
) => {
  try {
    return await fn;
  } catch (err) {
    if (depth > maxDepth) {
      console.trace(`Max retries of ${maxDepth} has been reached.`);
      throw err;
    }
    await wait(2 ** depth * 10);
    return CallWithBackoff(fn, depth + 1, maxDepth);
  }
};
