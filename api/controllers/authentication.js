'use strict'
let request = require('request');
let qs = require('querystring');
let moment = require('moment');
let jwt = require('jwt-simple');

let clientSecret = '9d3893393de2dfd406ab091b9b0a97d153550e71';
let accessTokenUrl = 'https://github.com/login/oauth/access_token';
let userApiUrl = 'https://api.github.com/user';
let TOKEN_SECRET = 'awesomeBookingSecret'

function createJWT(profile) {
    var payload = {
        sub: profile.id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    };
    return jwt.encode(payload, TOKEN_SECRET);
}

function loginWithGithub(req, res) {
    let requestbody = req.body;
    let params = {
        code: requestbody.code,
        client_id: requestbody.clientId,
        client_secret: clientSecret,
        redirect_uri: requestbody.redirectUri
    };
    request.get({url: accessTokenUrl, qs: params}, function (err, response, accessToken) {
        let parsedToken = qs.parse(accessToken);
        var headers = {'User-Agent': 'Satellizer'};
        // Step 2. Retrieve profile information about the current user.
        request.get({
            url: userApiUrl,
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

