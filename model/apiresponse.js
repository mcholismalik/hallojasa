const ApiResponse = {
    build: (status, code, message, data) => {
        return build(status, code, message, data)
    },
    ok: (message = 'Ok', data = {}) => {
        return build(200, message, data)
    },
    created: (message = 'Data created', data = {}) => {
        return build(201, message, data)
    },
    accepted: (message = 'Accepted', data = {}) => {
        return build(202, message, data)
    },
    noContent: (message = 'No content', data = {}) => {
        return build(204, message, data)
    },
    badRequest: (message = 'Bad request', data = {}) => {
        return error(400, message, data)
    },
    forbidden: (message = 'Forbidden', data = {}) => {
        return error(403, message, data)
    },
    notAcceptable: (message = 'Not Acceptable', data = {}) => {
        return error(406, message, data)
    },
    conflict: (message = 'Conflict', data = {}) => {
        return error(409, message, data)
    },
    unAuthorized: (message = 'Unauthorized', data = {}) => {
        return error(401, message, data)
    },
    notFound: (message = 'Data not found', data = {}) => {
        return error(404, message, data)
    },
    unProcessableEntity: (message = 'Unprocessable Entity', data = {}) => {
        return error(422, message, data)
    },
    internalServerError: (message = 'Internal Server Error', data = {}) => {
        return error(500, message, data)
    },
    serviceUnAvailable: (message = 'Service Unavailable', data = {}) => {
        return error(503, message, data)
    },
    notImplemented: (message = 'Not Implemented', data = {}) => {
        return error(501, message, data)
    },
    badGateway: (message = 'Bad Gateway', data = {}) => {
        return error(502, message, data)
    },
    unknownError: (message = 'Unknown Error', data) => {
        data = ({ name: data.name, message: data.message } || {})
        return error(505, message, data)
    }
}

const build = (code, message, data) => {
    return {
        meta: {
            success: true,
            status: code,
            timestamp: new Date().getTime(),
            message: message
        },
        data: data
    }
}

const error = (code, message, data) => {
    return {
        meta: {
            success: false,
            status: code,
            timestamp: new Date().getTime(),
            message: message
        },
        error: data
    }
}

module.exports = ApiResponse