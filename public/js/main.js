$(document).ready(function() {
    var socket = io.connect('http://localhost:3000');
    let player;
    class Player {
        constructor(name) {
            this.name = name;
        }
        getPlayerName() {
            return this.name;
        }
    }
    $('#newb').on('click', () => {
        const name = $('#nameNew').val();
        if(!name){
            alert('Please Enter Name');
            return;
        }
        socket.emit('createGame',{name: name});
        player = new Player(name);
    });
    
    socket.on('newGame',(data) => {
        const message = `Hello, ${data.name}. Please ask your friend to enter Game ID:
        ${data.room}. Waiting for Player 2...`;
        $("#welcome").text(message);
        $(".menu").css("display", "none");
        $(".game").css("display", "block");
    });

    $("#joinb").on('click',() => {
        const name = $('#nameJoin').val();
        const id = $('#roomID').val();
        if(!name || !id) {
            alert('Please fill both fields');
            return;
        }
        socket.emit('joinGame',{ name : name, room : id });
        player = new Player(name);
    });

    socket.on('player1', (data) => {
        const message = `Hello, ${player.getPlayerName()}`;
        $('#welcome').html(message);
    });

    socket.on('player2', (data) => {
        const message = `Hello, ${data.name}`;
        $('#welcome').html(message);
        $(".menu").css("display", "none");
        $(".game").css("display", "block");
    });

    socket.on('err', (data) => {
        alert(data.message);
    });

});