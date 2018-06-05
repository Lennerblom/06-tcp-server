'use strict';

let eventEmitter = require('../app.js');

module.exports = exports = {};

exports.fire = () => {
  eventEmitter.emit('Welcome');
  eventEmitter.emit('instructions');
};