const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/financeiro', {
    useNewUrlParser: true,
    useFindAndModify: false 
})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' é menor que o valor mínimo de '{MIN} para o atributo '{PATH}'"
mongoose.Error.messages.Number.max = "O '{VALUE}' é maior que o valor máximo de '{MAX} para o atributo '{PATH}'"
mongoose.Error.messages.String.enum = "O '{VALUE}' não é valido para o atributo '{PATH}'"