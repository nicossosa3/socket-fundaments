const {io} = require('../server');

//on escuchar informacion
io.on('connection', (client) => {

    console.log('Usuario Conectado');
    
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta app'
    });
    
    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: "TODO SALIO BIEN"
        //     });
        // } else {
        //     callback({
        //         resp: "TODO SALIO MAL"
        //     })
        // }
        

    });

});