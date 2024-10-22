const express = require('express');
const DatoTecnico = require('../models/DatoTecnico');
const router = express.Router();

router.post('/', async (req, res) => {
  const nuevoDato = new DatoTecnico(req.body);
  try {
    const datoGuardado = await nuevoDato.save();
    res.status(201).json(datoGuardado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
