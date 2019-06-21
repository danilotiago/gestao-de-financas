const express = require('express')
const auth = require('./auth')
const authService = require('../api/user/authService')
const billingCycleService = require('../api/billingCycle/billingCycleService')
const billingCycleSummaryService = require('../api/billingSummary/billingSummaryService')

module.exports = server => {

    /**
     * rotas abertas
     */
    const openApi = express.Router()

    openApi.post('/login', authService.login)
    openApi.post('/signup', authService.signup)
    openApi.post('/validateToken', authService.validateToken)
    
    /**
     * rotas protegidas
     */
    const protectedApi = express.Router()

    protectedApi.use(auth)

    billingCycleService.register(protectedApi, '/billingCycles')

    protectedApi.route('/billingSummary')
        .get(billingCycleSummaryService.getSummary)

    /**
     * registrando rotas no express
     */
    server.use('/oapi', openApi)
    server.use('/api', protectedApi)
}