#!/usr/bin/env node

import argsParse from './util/argsParse.js';

const app = async () => {
  await argsParse(process.argv);
};

await app();
