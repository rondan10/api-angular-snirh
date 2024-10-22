const mongoose = require('mongoose');

const DatoTecnicoSchema = new mongoose.Schema({
  representacion: String,
  escala: String,
  sistemaCoordenadas: String,
});

module.exports = mongoose.model('DatoTecnico', DatoTecnicoSchema);