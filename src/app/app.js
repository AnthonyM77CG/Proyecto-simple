const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola desde la aplicación contenedor!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Aplicación contenedor escuchando en http://localhost:${port}`);
});