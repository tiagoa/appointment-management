module.exports = class ClientService {
    constructor (clientRepository) {
        this.clientRepository = clientRepository
    }

    create = (data) => {
        return this.clientRepository.create(data)
    }

    getClients = () => {
        return this.clientRepository.get()
    }

    getClient = (id) => {
        return this.clientRepository.get(id)
    }
    
    updateClient = (id, data) => this.clientRepository.update(id, data)
    
    deleteClient = id => this.clientRepository.delete(id)
}