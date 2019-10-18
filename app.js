const express = require('express');
//const path = require('path');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const models = require('./models');

app.use(express.static('.'));

app.get('/',function(req, res) {
    res.sendFile(__dirname + '/views/home.html');
})
let rooms = 0;
io.on('connection', (socket) => {

    socket.on('createGame', (data) => {
        socket.join(`room-${++rooms}`);
        socket.emit('newGame',{ name: data.name, room: `room-${rooms}`});
    });

    socket.on('joinGame', (data) => {
        var room = io.nsps['/'].adapter.rooms[data.room];
        if(room && room.length==1){
            socket.join(data.room);
            socket.broadcast.to(data.room).emit('player1',{});
            socket.emit('player2',{name:data.name, room:data.room });
        }
        else{
            socket.emit('err', { message: 'Sorry, The room is full!' });
        }
    });
});

models.sequelize
.sync()
.then(result => {
    //console.log(result);
    server.listen(process.env.PORT || 3000);
})
.catch(err => {
    console.log(err);
});