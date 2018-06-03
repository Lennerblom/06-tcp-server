'use strict';

let eventEmitter = require('../app.js');

eventEmitter.on('something', () => console.log('hello there'));
eventEmitter.on('otherSomething', () => console.log('what?'));