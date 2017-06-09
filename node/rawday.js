"use strict";
let route = (app) => {
    app.post('/rawday/', function(req, res) {
        console.log(req.body)
        res.send('ok')
    })
}
module.exports = exports = (io, app) => {
    let rawdayServer;
    var nsp = io.of('/rawday');
    nsp.on('connection', function(socket) {
        console.log('rawday connected');
        socket.emit('init', 'everyone!');
        socket.on('serverCon', () => {
            rawdayServer = socket
            console.log('rawday server setup');
        })
    });

    nsp.on('start', (data) => {
        if (rawdayServer)
            rawdayServer.emit('cs_start', data)
    })
}