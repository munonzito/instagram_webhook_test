const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuración para analizar el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());

// Ruta para manejar la solicitud POST
app.post('/webhook', (req, res) => {
    //return hub.challenge
    //hub.verify_token === '123456'
  
    res.send(req.query['hub.challenge']);
});

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express iniciado en el puerto ${port}`);
});

module.exports = app;