const config = require('../config/config');
const { handlePing } = require('../features/ping');
const { handleHello } = require('../features/hello');
const { handleWeatherInfo } = require('../features/weatherInfo');
const { handleCctv } = require('../features/cctv');

async function handleCommand(sock, messageKey, messageContent) {
    try {
        const sender = messageKey.remoteJid;
        const command = messageContent.slice(config.prefix.length).trim().toLowerCase();

        // if (command in config.commands) {
        switch (command) {
            case config.commands.ping:
                await handlePing(sock, sender);
                break;
            case config.commands.hello:
                await handleHello(sock, sender);
                break;
            case config.commands.weatherInfo:
                await handleWeatherInfo(sock, messageKey);
                break;
            case config.commands.cctvAtas:
                await handleCctv(sock, messageKey, 'atas');
                break;
            case config.commands.cctvBawah:
                await handleCctv(sock, messageKey, 'bawah');
                break;
            default:
                break;
        }
        // }

    } catch (error) {
        console.error('Error handling command:', error);
        await sock.sendMessage(sender, { text: 'An error occurred. Please try again later.' });
    }
}

module.exports = { handleCommand };
