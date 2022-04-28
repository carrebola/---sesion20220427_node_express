

const mascotas = require('./rutas/api/mascotas')
const usuarios = require('./rutas/api/usuarios')



const enrutador = {}
enrutador.setRutas = (app)=>{
    
    app.use('/api/mascotas', mascotas)
    app.use('/api/usuarios', usuarios)
}

module.exports = enrutador



