'use strict';

let app = require('./src/app.js');

let listener1 = require('./src/lib/listener1.js');
let listener2 = require('./src/lib/listener2.js');
let events = require('./src/lib/events.js');

events.fire();