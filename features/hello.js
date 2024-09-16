async function handleHello(sock, sender) {
    await sock.sendMessage(sender, { text: 'Hello! How can I assist you today?' });
}

module.exports = { handleHello };
