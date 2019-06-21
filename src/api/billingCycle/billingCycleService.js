const billingCycle = require('./billingCycle')
const _ = require('lodash')

// define os metodos do crud com seus verbos
billingCycle.methods(['get', 'post', 'put', 'delete'])

// configuracoes do metodo de update
billingCycle.updateOptions({ 
    new: true,  // tras sempre o novo registro no update e nao o antigo como por default
    runValidators: true
})

billingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle

    if (bundle.errors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

function parseErrors(nodeRestfulErrors) {
    const errors = []

    _.forIn(nodeRestfulErrors, (error, param) => errors.push(error.message))

    return errors
}

billingCycle.route('count', function(req, res, next) {
    billingCycle.countDocuments(function(error, value) {
        if (error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})


module.exports = billingCycle