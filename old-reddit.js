#!/usr/bin/env node

const qutejs = require('qutejs');

current_url = process.env.QUTE_URL;
new_url = current_url.replace('www', 'old')

qutejs.open(['', new_url]);
