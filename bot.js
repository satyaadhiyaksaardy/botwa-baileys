require('dotenv').config();  // Load environment variables
const { connectToWhatsApp } = require('./services/baileys');

// Start the WhatsApp bot
connectToWhatsApp().then(() => {
    console.log('Bot started successfully.');
}).catch((err) => {
    console.error('Error starting bot:', err);
});
