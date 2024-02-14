module.exports = (controllerAction) => {
    return async (req, res, next) => {
        try {
            const { body, params, query, headers } = req
            const response = await controllerAction({ body, params, query, headers })
            res.send(response)
        } catch (err) {
            next(err)
        }
    }
}
