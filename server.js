
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch((err) => console.error('Error conectando a MongoDB:', err));

app.use('/api/datos-generales', require('./routes/datosGenerales'));
app.use('/api/datos-tecnicos', require('./routes/datosTecnicos'));
app.use('/api/contactos', require('./routes/contactos'));
app.use('/api/descargas', require('./routes/descargas'));
app.use('/api/diccionario-datos', require('./routes/diccionarioDatos'));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
