async function sendReaction(sock, messageKey, emoji) {
    await sock.sendMessage(messageKey.remoteJid, {
        react: {
            text: emoji,
            key: messageKey
        }
    });
}

module.exports = { sendReaction };