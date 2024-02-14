module.exports = class ClientRepository {
    data = [{id: 1, nome: "jao"}]
    currentId = 2

    create = (data) => {
        const client = {
            ...data,
            id: this.currentId++
        }
        this.data.push(client)
        return client
    }

    get = (id) => {
        if (!!id) this.data.find((i) => i.id === id)
        return this.data
    }

    update = (id, data) => {
        const idx = this.data.findIndex(i => i.id === id)

        let x = {...this.data[idx], ...data}
        console.log(this.data[idx])
        console.log(x)
        this.data[idx] = x
        return this.data[idx]
    }

    delete = (id) => {
        const idx = this.data.findIndex(i => i.id === id)
        this.data.splice(idx, 1)
    }
}