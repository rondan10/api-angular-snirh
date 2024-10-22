const mongoose = require('mongoose');

const DescargaSchema = new mongoose.Schema({
  tipo: String, 
  url: String,
});

module.exports = mongoose.model('Descarga', DescargaSchema);