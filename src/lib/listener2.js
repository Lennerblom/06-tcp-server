'use strict';

let eventEmitter = require('../app.js');

eventEmitter.on('otherSomething', () => console.log('what?'));