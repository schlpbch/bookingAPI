'use strict'
let request = require('request')
let qs = require('querystring')
let moment = require('moment')
let jwt = require('jwt-simple')
let authConfig = require('../../config/authentication/authentication.config')

function createJWT(profile) {
    var payload = {
        id: profile.id,
        name: profile.login,
        avatar: profile.avatar_url,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    };
    return jwt.encode(payload, authConfig.TOKEN_SECRECT);
}

function loginWithGithub(req, res) {
    let requestbody = req.body;
    let params = {
        code: requestbody.code,
        client_id: requestbody.clientId,
        client_secret: authConfig.github.clientSecret,
        redirect_uri: requestbody.redirectUri
    };
    request.get({url: authConfig.github.accessTokenUrl, qs: params}, function (err, response, accessToken) {
        let parsedToken = qs.parse(accessToken);
        var headers = {'User-Agent': 'Satellizer'};
        // Step 2. Retrieve profile information about the current user.
        request.get({
            url: authConfig.github.userApiUrl,
            qs: parsedToken,
            headers: headers,
            json: true
        }, function (err, response, profile) {
            res.json({
                token: createJWT(profile)
            })
        });
    });
}

module.exports = {
    loginWithGithub
}

