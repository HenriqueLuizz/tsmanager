
//Create service de Manager Services
/*
const _ = require('lodash');
const LogService = require('./dblog');

//CRUD construido com o RESTFUL
LogService.methods(['get', 'post', 'put', 'delete']);
LogService.updateOptions({new: true, runValidators: true});
LogService.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext);

//Funcões responsávei por padronizar as mensagens de erro
function sendErrorsOrNext(req, res, next){
    const bundle = res.locals.bundle;

    if(bundle.errors) {
        var errors = parseErrors(bundle.errors);

        res.status(500).json({errors});
    } else {
        next();
    }
}

function parseErrors(nodeRestfulErrors) {
    const errors = [];
    _.forIn(nodeRestfulErrors, error => errors.push(error.message));
    return errors;
}

module.exports = LogService;
*/