const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use('/', routes)

function startServer (port) {
    return new Promise((resolve, reject) => {
        const server = app.listen(port, resolve)
        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                reject(new Error('porta em uso'))
            }
        })
    })
}

async function start () {
    try {
        await startServer(3000)
        console.log('listening on port 3000')
    } catch (err) {
        console.log(err.message)
    }
}

start()