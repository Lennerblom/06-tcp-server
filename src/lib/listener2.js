'use strict';

let eventEmitter = require('../app.js');

eventEmitter.on('instructions', () => console.log('Type "@nickname" then your "name". You can then use "@all" followed by your text to enter a message into the chat room.  If you want to quit and crash the server type "@quit"'));