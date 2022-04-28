//Cargamos la libreria de express y mongoose
const express = require('express')
const mongoose = require('mongoose')
//cargamos la libreria de cors
const cors = require('cors')
//Cargamos el archivo con las rutas
const enrutador = require('./src/enrutador.js')

//Creamos un objeto express
const app = express()

// *************** MIDDLEWARES ***************
//Evitamos problemas de cors cuando accedemos desde distintos dominios
app.use(cors())

//Asociamos la raiz con los archivos que hay en la carpeta public para páginas estáticas
app.use('/', express.static(__dirname + '/src/public'));

//Las rutas /api las gestionamos desde el archivo enrutador
app.use('/api', enrutador)

//****** Conexión con la base de datos ******
const url = "mongodb+srv://carlos_soc_fpllefia:fpllefia_soc_carlos@cluster0.w1e6t.mongodb.net/bdmascotas?retryWrites=true&w=majority";

mongoose
   .connect(url, { useNewUrlParser: true })
   .then(() => {
     console.log(`DB connected @ ${url}`);
   })
   .catch(err => console.error(`Connection error ${err}`));
//*******************************************


//Escuchamos en puerto 8000
app.listen(8000,()=>{
    console.log('Has levantado un servidor escuchando en el puerto 8000');
})

