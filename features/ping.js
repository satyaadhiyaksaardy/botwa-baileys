async function handlePing(sock, sender) {
    await sock.sendMessage(sender, { text: 'pong' });
}

module.exports = { handlePing };
