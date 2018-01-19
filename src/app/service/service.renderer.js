const { ipcRenderer } = require("electron");

module.exports = function sendService (sendIp,serviceName) {

    ipcRenderer.send('start-service', sendIp, serviceName);
}