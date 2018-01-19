

//Create a conection with DB
/*
const mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,ObjectId = Schema.ObjectId;

//const db_passwd = '1234';
//const db_user = 'root';
//const db_port = '27017';
const db_local = 'localhost';
const db_name = 'db_tsmanager';

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : `mongodb://${db_local}/${db_name}`;

//module.exports = mongoose.connect(url, {useMongoClient: true});
mongoose.connect(url, {useMongoClient: true});

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true }, //User system
    server: { type: String, required: true }, //Date system
    status: { type: Boolean, required: false } //Status service
});

const Service = mongoose.model('Service', serviceSchema);
*/