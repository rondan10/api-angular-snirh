const mongoose = require('mongoose');

const DatoGeneralSchema = new mongoose.Schema({
  descripcion: String,
  fechaPublicacion: String,
  frecuenciaActualizacion: String,
  ultimaActualizacion: String,
  resolucion: String,
  estado: String,
});

module.exports = mongoose.model('DatoGeneral', DatoGeneralSchema);