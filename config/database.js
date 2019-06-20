const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/financeiro', {useNewUrlParser: true })