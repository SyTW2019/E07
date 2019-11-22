/*let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io').listen(server);
users = [];
connections = [];

server.listen("http://192.168.1.90:8080", function(err) {
    if (err) throw err;
    console.log('listening on port ' + server.address().port);
});

console.log('Server running...');

io.sockets.on('connection', function(socket) {
    connections.push(socket);
    console.log('Connected: %s sockets connected', connections.length);


    // Disconnect
    socket.on('disconnect', function(data) {
        users.splice(users.indexOf(socket.username), 1);
        updateUsernames();
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected: %s sockets connected', connections.length);
    });

    socket.on('send message', function(data) {
        io.sockets.emit('new message', { msg: data, user: socket.username, id: socket.id });
    });


    // New User

    socket.on('new user', function(data, id, callback) {
        callback(true);
        socket.username = data;
        socket.id = id;
        users.push(socket.username);
        updateUsernames();
    });

    function updateUsernames() {
        io.sockets.emit('get users', users);
    }
});*/

'use strict'

let WebSocket = require("ws");
let WebSocketServer = require('ws').Server;
let wss = new WebSocketServer({ port: 8080 });

let wsList = [];

wss.on('connection', function(ws) {
    console.log('WS connection established!')
    wsList.push(ws);

    ws.on('close', function() {
        wsList.splice(wsList.indexOf(ws), 1);
        console.log('WS closed!')
    });

    ws.on('message', function(message) {
        console.log('Got ws message: ' + message);
        for (let i = 0; i < wsList.length; i++) {
            // send to everybody on the site
            wsList[i].send(message);
        }
    });
});

let express = require('express'),
    app = express();

//app.use(express.static(__dirname));
app.listen(8888);