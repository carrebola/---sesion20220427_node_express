console.log('database');

//ahora tambien importamos mongoose
const express  = require('express');
const mongoose = require('mongoose');
const url = "mongodb+srv://carlos_soc_fpllefia:fpllefia_soc_carlos@cluster0.w1e6t.mongodb.net/bdmascotas?retryWrites=true&w=majority";


// conexion a la base de datos
// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useFindAndModify', false);
mongoose
   .connect(url, { useNewUrlParser: true })
   .then(() => {
     console.log(`DB connected @ ${url}`);
   })
   .catch(err => console.error(`Connection error ${err}`));


// la ruta del archivo del modelo es relativa a la de user.js
const Mascota = require('./src/modelos/mascota');

// GET a /api/users (todos los usuarios)

  Mascota.find((err, mascotas) => {
    if (err) throw err;
    console.log(mascotas);
    //res.status(200).json(mascotas);
  });
