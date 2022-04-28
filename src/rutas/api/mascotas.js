
const express = require('express')
const router = express.Router()
const Mascota = require('./../../modelos/mascota');


//Leer MASCOTAS
router.get('/', (req, res)=>{
  Mascota.find((err, mascotas) => {
    if (err){
      res.status(404).json({ message: err })
      throw err;
    } 
    res.status(200).json(mascotas);
  });
}) 
//Leer una sola mascota
// GET a /api/user/id (un solo usuario)
router.get('/:id', (req, res) => {
  Mascota.findOne({ id: req.params.id }, (err, mascota) => {
    if (err) throw err;
    res.status(200).json(mascota);
  });
});
//Añadir una mascota



module.exports = router