const AccessControl = require('accesscontrol');
const controle = new AccessControl()

controle
    .grant('assinante')
    .readAny('post', ['id', 'titulo', 'conteudo', 'autor'])

controle
    .grant('editor')
    .extend('assinante')
    .createOwn('post')
    .deleteOwn('post')

controle
    .grant('admin')
    .createAny('post')
    .deleteAny('post')
    .readAny('usuario')
    .deleteAny('usuario')
    .readAny('post')
    .deleteAny('post')

module.exports = controle