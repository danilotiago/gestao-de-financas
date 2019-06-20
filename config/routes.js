const express = require('express')
const billingCycleService = require('../api/billingCycle/billingCycleService')

module.exports = server => {
    
    const router = express.Router()

    billingCycleService.register(router, '/billingCycles')

    server.use('/api', router)

}