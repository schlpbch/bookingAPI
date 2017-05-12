/**
 * Created by kevinkreuzer on 12.05.17.
 */
'use strict'
const devEnvironmentConfiguration = require('./development.environment')
const prodEnvironmentConfiguration = require('./production.environment')
const PROD_ENV = 'production'

const loadEnvironmentConfig = () => {
    if (process.env.ENVIRONMENT === PROD_ENV) {
        return prodEnvironmentConfiguration
    }
    return devEnvironmentConfiguration
}

module.exports = {
    loadEnvironmentConfig
}
