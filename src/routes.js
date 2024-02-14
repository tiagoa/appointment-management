const r = module.exports = require('express').Router()

const wrapController = require('./wrap-controller')
const ClientController = require('./controllers/client-controller')
const ClientRepository = require('./repositories/client-repository')
const ClientService = require('./services/client-service')
const clientRepository = new ClientRepository()
const clientService = new ClientService(clientRepository)
const clientController = new ClientController(clientService)

function isAuthenticated (req, res, next) {
    if (req.get('authorization') === 'Bearer 123') {
        return next()
    }
    res.status(401).send({message: 'unauthorized'})
}

function errorHandler (err, req, res, next) {
    console.log(err)
    res
        .status(err.httpStatus || 500)
        .send({message: err.friendlyMessage || 'internal server error'})
}

r.use(errorHandler)

r.post('/clients', isAuthenticated, wrapController(clientController.newClient))
r.get('/clients', isAuthenticated, wrapController(clientController.getClients))
r.put('/clients/:id', isAuthenticated, wrapController(clientController.updateClient))
r.delete('/clients/:id', isAuthenticated, wrapController(clientController.deleteClient))

r.all('*', (req, res) => res.status(404).send({message: 'not found'}))