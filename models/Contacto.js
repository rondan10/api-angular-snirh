const mongoose = require('mongoose');

const ContactoSchema = new mongoose.Schema({
  responsableInformacion: String,
  responsableRegistro: String,
});

module.exports = mongoose.model('Contacto', ContactoSchema);