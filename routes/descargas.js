const express = require('express');
const Descarga = require('../models/Descarga');
const router = express.Router();

router.post('/', async (req, res) => {
  const nuevaDescarga = new Descarga(req.body);
  try {
    const descargaGuardada = await nuevaDescarga.save();
    res.status(201).json(descargaGuardada);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
