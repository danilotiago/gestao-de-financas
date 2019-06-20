const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/financeiro', {useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."