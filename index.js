const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuración para analizar el cuerpo de las solicitudes en formato JSON
app.use(bodyParser.json());

// Ruta para manejar la solicitud POST
app.post('/webhook', (req, res) => {
  // Imprimir los datos enviados en el cuerpo de la solicitud
  console.log('Datos recibidos:', req.body);
  
  // Enviar una respuesta al cliente que hizo la solicitud
  res.send('Datos recibidos correctamente.');
});

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express iniciado en el puerto ${port}`);
});

module.exports = app;