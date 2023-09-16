const argsParse = ([, , ...argv]: string[], words: string[] = []) => {
  const args: Record<string, string | number | boolean> = {};

  for (const key of words) {
    args[key] = argv[0] === key;
  }

  for (let i = 0; i < argv.length; i++) {
    if (argv[i][0] !== '-') continue;

    if (argv[i + 1] && argv[i + 1][0] !== '-') {
      if (argv[i][1] === '-') {
        args[argv[i].substring(2)] = argv[i + 1];
      } else {
        args[argv[i].substring(1)] = argv[i + 1];
      }
      continue;
    }
    if (argv[i].startsWith('--')) {
      if (argv[i].includes('=')) {
        const [key, value] = argv[i].substring(2).split('=');
        args[key] = value;
      } else {
        args[argv[i].substring(2)] = true;
      }
      continue;
    }
    if (argv[i].startsWith('-no-')) {
      args[argv[i].substring(4)] = false;
      continue;
    }
    args[argv[i].substring(1)] = true;
  }

  return args;
};

export default argsParse;
