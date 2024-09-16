const config = require('../config/config')
const { handleCommand } = require('./commandHandler');
const { logMessage } = require('../utils/logger')

async function handleMessage(sock, m) {
    const { prefix } = config
    const message = m.messages[0];
    if (!message.message || message.key.fromMe) return;

    const messageKey = message.key;
    const messageContent = message.message.conversation || message.message.extendedTextMessage?.text;

    logMessage(messageKey.remoteJid, messageContent)

    if (typeof messageContent === 'undefined' || !messageContent.startsWith(prefix)) return;

    // Handle the message content and respond based on command
    await handleCommand(sock, messageKey, messageContent);
}

module.exports = { handleMessage };
