const express = require('express')
const enrutador = express.Router()

const mascotas = require('./rutas/api/mascotas')
const usuarios = require('./rutas/api/usuarios')

enrutador.use('/mascotas', mascotas)
enrutador.use('/usuarios', usuarios)

module.exports = enrutador




