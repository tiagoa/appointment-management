module.exports = class HttpError extends Error {
    constructor(message, httpStatus, friendlyMessage) {
        super(message)
        this.name = 'HttpError'
        this.httpStatus = httpStatus
        this.friendlyMessage = friendlyMessage
    }
}