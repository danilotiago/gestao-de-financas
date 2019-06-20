const express = require('express')
const billingCycleService = require('../api/billingCycle/billingCycleService')
const billingCycleSummaryService = require('../api/billingSummary/billingSummaryService')

module.exports = server => {
    
    const router = express.Router()

    billingCycleService.register(router, '/billingCycles')

    server.use('/api', router)

    router.route('/billingSummary')
        .get(billingCycleSummaryService.getSummary)
}