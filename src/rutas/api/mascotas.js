
const express = require('express')
//para convertir los datos del cuerpo de las peticiones post en objetos json
const  bodyParser = require('body-parser')

const app = express()
const router = express.Router()
const Mascota = require('./../../modelos/mascota');

//parseo de json
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

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
router.post('/', jsonParser, (req, res) => {
    
  // QUÍ FLATA ESCRIBIR EN BD
  res.send({mensaje: "quieres añadir una mascota",
  dato:req.body.raza})  
});


module.exports = router