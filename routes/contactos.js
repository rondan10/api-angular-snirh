
const express = require('express');
const Contacto = require('../models/Contacto');
const router = express.Router();


router.post('/', async (req, res) => {
  const nuevoContacto = new Contacto(req.body);
  try {
    const contactoGuardado = await nuevoContacto.save();
    res.status(201).json(contactoGuardado);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
