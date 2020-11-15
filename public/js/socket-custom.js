var socket = io();
//Escuchar
socket.on('connect', function(){
    console.log('Conectado al servidor')
});

socket.on('disconnect', function(){

    console.log('Perdimos conexion con el servidor')
});

//Emitir
socket.emit('enviarMensaje', {
    usuario: 'Nico',
    mensaje: 'djaskldsa'
}, function(resp){
    console.log('Respuesta del server:', resp)
})

socket.on('enviarMensaje', function(mensaje){
    console.log(mensaje);
})