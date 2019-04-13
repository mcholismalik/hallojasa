const ApiResponse = require('../model/apiresponse')

module.exports = (err, req, res, next) => {
    if (err) {
        switch (err.status) {
            case 400:
                res.json(ApiResponse.badRequest(err.statusText, err.errors))
                break
            case 404:
                res.json(ApiResponse.notFound(err.statusText, err.errors))
                break
            case 500:
                res.json(ApiResponse.internalServerError(err.statusText, err.errors))
                break
            default:
                res.json(ApiResponse.internalServerError(err.statusText, err))
        }
    }
}