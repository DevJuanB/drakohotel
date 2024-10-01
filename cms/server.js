const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'src')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/index.html'));
});

// Ruta para el perfil (me.html)
app.get('/me', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/profile/me.html'));
});

// Ruta para el muro (wall.html)
app.get('/wall', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/profile/wall.html'));
});

// Ruta para la tienda (tienda.html)
app.get('/tienda', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/store/tienda.html'));
});

// Ruta para staffs (staffs.html)
app.get('/staffs', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/store/staffs.html'));
});

// Página "Acerca de" (about.html)
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/views/about.html'));
});

// Manejo de errores 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'src/views/404.html'));
});

// Puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
