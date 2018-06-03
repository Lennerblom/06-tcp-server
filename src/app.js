'use strict';

const EventEmitter = require('events');
const net = require('net');

const uuid = require('uuid/v4');

const PORT = process.env.PORT || 3001;
const server = net.createServer();
const eventEmitter = new EventEmitter();
const socketPool = {};


class User {
  constructor(socket) {
    let id = uuid();
    this.id = id;
    this.nickname = `User-${id}`;
    this.socket = socket;
  }
}
 
server.on('connection', (socket) => {
  let user = new User(socket);
  socketPool[user.id] = user;
  socket.on('data', (buffer) => dispatchAction(user.id, buffer));
  
});


let parse = (buffer) => {
  let text = buffer.toString().trim();
  if (!text.startsWith('@')) {return null;}
  let [command, payload] = text.split(/\s+(.*)/);
  let [target,message] = payload ? payload.split(/\s+(.*)/) : [];
  return{command, payload, target, message};
};

let dispatchAction = (userId, buffer) => {
  let entry = parse(buffer);
  entry && eventEmitter.emit(entry.command, entry, userId);
};

eventEmitter.on('@quit', () => {
  server.on('close');
});

eventEmitter.on('@all', (data, userId) => {
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    user.socket.write(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
    console.log(`<${socketPool[userId].nickname}>: ${data.payload}\n`);
  }
});

eventEmitter.on('@list', () => {
  let chatList = [];
  for( let connection in socketPool ) {
    chatList = socketPool[connection];
  }
  console.log(chatList.nickname);
});

eventEmitter.on('@nickname', (data, userId) => {
  let newName = socketPool[userId].nickname = data.target;
  console.log(newName);
});

eventEmitter.on('@dm', (data, userId, msg) => {
  for( let connection in socketPool ) {
    let user = socketPool[connection];
    let otherUser = socketPool.nickname = data.target;
    user.socket.write(`<${otherUser}>: ${data.payload}\n`);
    console.log(`<${socketPool[userId].nickname}>: ${msg.payload}\n`);
  }
});

server.listen(PORT, () => {
  console.log(`chat server is up on ${PORT}`);
});

module.exports = eventEmitter;