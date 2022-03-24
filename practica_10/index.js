var express = require('express'); // Importación del paquete.
var app = express(); // se crea una aplicación Express.

var port = process.env.PORT || 3000; // El servidor escucha peticiones por este puerto (3000).

app.get('/', function (req, res){
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>'); // Esto se mostrará en localhost:3000 (la raíz).
});

app.get('/api', function (req, res){
    res.json({firstname: 'Tirzo', lastname: 'Tejeda'}); // En localhost:3000/api regresará el objeto json.
});

app.get('/person/:id', function (req, res){ 
    res.send(`<html><head></head><body><h1>Persona: ${req.params.id}</h1></body></html>`);
});     // localhost:3000/person/Tirzo => devuelve un h1 con "Persona: Tirzo".

app.listen(port);