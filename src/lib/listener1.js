'use strict';

let eventEmitter = require('../app.js');

eventEmitter.on('Welcome', () => console.log('hello there'));
eventEmitter.on('Welcome', () => console.log('Welcome to my chat room'));