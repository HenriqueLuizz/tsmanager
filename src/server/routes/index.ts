var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    
    app.route('/v1/services')
        .post(api.adiciona)
        .get(api.lista);

    app.route('/v1/services/:serviceId')
        .delete(api.remove)
        .get(api.busca)
        .put(api.atualiza);

    app.get('/v1/grupos', api.listaGrupos)
    app.get('/v1/services/grupo/:grupoId', api.listaPorGrupo);
        
    app.all('/*', function(req, res) {
        res.sendFile(path.join(app.get('clientPath'), 'index.html'));
    });
};