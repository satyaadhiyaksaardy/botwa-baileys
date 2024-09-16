const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const { handleMessage } = require('../handlers/messageHandler');

async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState('./auth_info');
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true,
    });

    sock.ev.on('creds.update', saveCreds);
    sock.ev.on('messages.upsert', async (msg) => handleMessage(sock, msg));
    return sock;
}

module.exports = { connectToWhatsApp };
