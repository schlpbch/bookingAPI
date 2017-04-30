/**
 * Created by kevinkreuzer on 24.04.17.
 */

let github = {
    clientId: '78c57dbf89006d064fcc',
    clientSecret: process.env.GITHUB_SECRET || 'default',
    accessTokenUrl: 'https://github.com/login/oauth/access_token',
    userApiUrl: 'https://api.github.com/user'
}

module.exports = {
    TOKEN_SECRECT: process.env.TOKEN_SECRET || 'default',
    github
}
