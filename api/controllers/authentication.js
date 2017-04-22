'use strict'

function loginWithGithub(req, res) {
    let requestbody = req.body;
    let code = requestbody.code;
    let clientId = requestbody.clientId;
    let redirectUri = requestbody.redirectUri;

    console.log('code', code)
    console.log('clientId', clientId)
    console.log('redirectURI', redirectUri)

    res.json({
        text: 'Alles klar'
    })
}

module.exports = {
    loginWithGithub
}

