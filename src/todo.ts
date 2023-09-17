#!/usr/bin/env node

import argsParse from './util/argsParse.js';

const app = () => {
  void (async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await argsParse(process.argv);
  })();
};

app();
