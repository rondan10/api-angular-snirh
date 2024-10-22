const express = require('express');
const DatoGeneral = require('../models/DatoGeneral');
const router = express.Router();

router.post('/', async (req, res) => {
  const nuevoDato = new DatoGeneral(req.body);
  try {
    const datoGuardado = await nuevoDato.save();
    res.status(201).json(datoGuardado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
