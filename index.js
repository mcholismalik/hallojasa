'use strict'

const config = require('./config/config')
const http = require('http'),
    express = require('express')

const cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser')

const routes = require('./facade/routes.js'),
    cors = require('./middleware/cors'),
    errorhandle = require('./middleware/errorhandling')

const app = express()

// body Parser
app.set('port', config.port)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// enable cors
app.use(cors)

// routes
app.use(routes)

// index
app.get('/', (req, res) => {
    res.json({
        title: 'OVO Apps',
        body: 'Assalamu\'alaikum'
    })
})

// error handling
app.use((req, res, next) => {
    let err = new Error('Routes not found')
    err.status = 404
    next(err)
})
app.use(errorhandle)

// server listen
http.createServer(app).listen(config.port, () => {
    console.log(`Server started on port ${app.get('port')}`)
})


