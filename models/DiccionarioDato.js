const mongoose = require('mongoose');

const DiccionarioDatoSchema = new mongoose.Schema({
  numero: Number,
  campo: String,
  tipoDato: String,
  tamaño: String,
  descripcion: String,
});

module.exports = mongoose.model('DiccionarioDato', DiccionarioDatoSchema);