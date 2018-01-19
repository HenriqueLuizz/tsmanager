const jsonfile = require('jsonfile-promised');
//const jsonfile = require('jsonfile');
const fs = require('fs');

/*
set DATA=%DATE%
set HORARIO=%TIME%
set USUARIO=%USERNAME%
Echo ********************** >> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Stop\Stop.log
Echo As %HORARIO% de %DATA%, O usuario %USUARIO%, realizou a start dos servicos Protheus>> D:\TOTVS\Microsiga\AdminProtheus\Scripts\Log\Stop\Stop.log
*/
module.exports = {
    /*saveLogStart(log, type){

        //update Log

        let archiveLogStart = __dirname + '/data/' + LogStart + '.json';
        //let archiveLogStop = __dirname + '/data/' + LogStop + '.json';

        if(fs.existsSync(archiveLogStart)){
            this.addLog(archiveLogStart, log);
        }else{
            this.createArchive(archiveLogStart,{})
            .then(() => {
                this.adicionaTempoAoCurso(archiveLogStart, type);
            })
        }
    },*/
    addLog(archiveName, content){
        //concat log - for jsonfile
        const logFile = this.getDataFile(archiveName);
        let result = JSON.stringify(logFile);
        //logFile.concat(content);

        console.log('Concat Log File: ' + result);
        /*
        jsonfile.writeFile(archiveName, logFile, {spaces: 2})
        .then(() => {
            console.log('Arquivo Atualizado!');
        }).catch((err)=>{
            console.log(err);
        })
        */
    },
    createDataFile(archiveName, content){
        return jsonfile.writeFile(archiveName, content)
            .then(() => {
                console.log('Arquivo Criado!');
            }).catch((err) => {
                console.log(err);
            });
    },
    getDataFile(archiveName){
        let result;
        jsonfile.readFile(archiveName, function(err, obj) {
            //console.dir(obj)
            result = obj;
          })
        /*fs.readFile(archiveName, (err, data) => {
            //if (err) throw err;
            if (err) {
                console.log(err);
                return err;
            }else{
                console.log(data)
                return data;
            }
            });*/
    },
    getNameService(archiveLog){
        return jsonfile.readFile(archiveName);
    }
}

function newFunction(data) {
    console.dir(data);
}
