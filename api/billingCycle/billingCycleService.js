const billingCycle = require('./billingCycle')

// define os metodos do crud com seus verbos
billingCycle.methods(['get', 'post', 'put', 'delete'])

// configuracoes do metodo de update
billingCycle.updateOptions({ 
    new: true,  // tras sempre o novo registro no update e nao o antigo como por default
    runValidators: true
})

module.exports = billingCycle