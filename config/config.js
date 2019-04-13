module.exports = {
    port: 9001,
    secretKey: 'OvOmYS3cretK3Y',
    payLoad: {
        iss: 'http://localhost/',
        aud: 'http://localhost',
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }
}