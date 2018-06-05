# TCP Server
---
This TCP Server was created using NodeJS `net` module.  It is a TCP chat room, and clients use Telnet to connect to it.  There are special commands created for users to be able to communicate, quit, or see who is on.  While logged into Telnet:

`@nickname <your name>` lets the user set their nickname.

`@all <mesage>` lets the user write to everyone in the chat room.

`@dm <to specific user, message>` lets the user write a direct message to another user. (not currently functionl)

`@list` will list everyone currently logged to the chat room (currently it only lists the last entry)

`@quit` lets the user exit the chat room and will unfortunately crash the server, kicking anyone else in the chat room off as well.