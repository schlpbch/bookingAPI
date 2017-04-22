'use strict'
module.exports = {
    loginWithGithub
}

function loginWithGithub(req, res) {


    console.log('Der Request', req.body);

    /*
    let code = req.swagger.params.authData.code;
    let client_id = req.swagger.params.authData.client_id;
    let redirectURI = req.swagger.params.authData.redirectUri;

    console.log('Code', code)
    console.log('client Id', client_id)
    console.log('Redirect', redirectURI)
    */
    res.json({
        text: 'Alles klar'
    })
}

