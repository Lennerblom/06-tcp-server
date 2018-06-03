# TCP Server
---
This TCP Server was created using NodeJS `net` module.  It is a TCP chat room and clients use Telnet to connect to it.  There are special commands created for users to be able to communicate, quit, or see who is on.

    @nickname (input) lets the user set their nickname.

    @all (message) lets the user write to everyone in the chat room.

    @dm (to user, message) lets the user write a direct message to another user.

    @quit lets the user exit the chat room and unfortunately will completely shut off the server.