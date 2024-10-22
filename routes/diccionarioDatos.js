const express = require('express');
const DiccionarioDato = require('../models/DiccionarioDato');
const router = express.Router();

router.post('/', async (req, res) => {
  const nuevoDiccionario = new DiccionarioDato(req.body);
  try {
    const diccionarioGuardado = await nuevoDiccionario.save();
    res.status(201).json(diccionarioGuardado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
