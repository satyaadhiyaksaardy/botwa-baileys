const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { sendReaction } = require('../utils/helper');
const config = require('../config/config')

async function handleWeatherInfo(sock, messageKey) {
    const { weatherInfoUrl } = config
    // Send the initial reply
    await sendReaction(sock, messageKey, '⏳');

    try {
        // Fetch the image
        const response = await axios.get(weatherInfoUrl, { responseType: 'arraybuffer' });

        // Save the image temporarily
        const imagePath = path.join(__dirname, 'weather_image.jpg');
        fs.writeFileSync(imagePath, response.data);

        // Send the image
        await sock.sendMessage(messageKey.remoteJid, { 
            image: { url: imagePath }, 
            caption: 'Here is the latest weather image.' 
        });

        // Send the final reply

        await sendReaction(sock, messageKey, '👍');

        // Clean up: Delete the temporary image file
        fs.unlinkSync(imagePath);

    } catch (error) {
        console.error('Error fetching or sending image:', error);
        await sendReaction(sock, messageKey, '❌');
        await sock.sendMessage(sender, { text: 'An error occurred while fetching the weather image.' });
    }
}

module.exports = { handleWeatherInfo };
