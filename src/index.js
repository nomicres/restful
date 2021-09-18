const express = require('express')

const app = require('./app')
const middleware = require('./middleware')
const routes = require('./routes')

module.exports = app(express(), { middleware, routes })
