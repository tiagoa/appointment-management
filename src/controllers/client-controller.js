module.exports = class ClientController {
    constructor(clientService) {
        this.clientService = clientService
    }

    newClient = ({ body }) => {
        const client = this.clientService.create(body)
        return client
    }

    getClients = () => {
        const clients = this.clientService.getClients()
        return clients
    }

    getClient = ({params: {id}}) => {
        const client = this.clientService.getClient(Number(id))
        return client
    }

    updateClient = ({body, params: {id}}) => {
        const client = this.clientService.updateClient(Number(id), body)
        return client
    }

    deleteClient = ({params: {id}}) => {
        this.clientService.deleteClient(Number(id))
        return
    }
}