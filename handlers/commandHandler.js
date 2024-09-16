const config = require('../config/config')
const { handlePing } = require('../features/ping');
const { handleHello } = require('../features/hello');
const { handleWeatherInfo } = require('../features/weatherInfo');
const { handleCctv } = require('../features/cctv')

async function handleCommand(sock, messageKey, messageContent) {
    const { prefix } = config
    const sender = messageKey.remoteJid
    const command = messageContent.slice(prefix.length).trim();

    if (command === 'ping') {
        await handlePing(sock, sender);
    } else if (command === 'hello') {
        await handleHello(sock, sender);
    } else if (command === 'ingfo-cuaca') {
        await handleWeatherInfo(sock, messageKey);
    } else if (command === 'ingfo-atas') {
        await handleCctv(sock, messageKey, 'atas');
    } else if (command === 'ingfo-bawah') {
        await handleCctv(sock, messageKey, 'bawah');
    } else {
        return
    }
}

module.exports = { handleCommand };
