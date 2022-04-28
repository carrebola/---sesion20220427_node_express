
// necesitamos importar mongoose
const mongoose = require('mongoose');

// los modelos se crean a partir de un schema
const mascotaEsquema = new mongoose.Schema({
  id: Number,
  nombre: String,
  raza: String,
  fechaNacimiento: Date
});
// el schema describe la pinta de un documento de la coleccion

// creamos el modelo llamando a mongoose.model(nombre, schema)
const Mascota = mongoose.model('mascotas', mascotaEsquema);

// hay que exportar el modelo para usarlo despues en otros archivos
module.exports = Mascota;