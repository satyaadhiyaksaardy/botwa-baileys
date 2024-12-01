const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { sendReaction } = require('../utils/helper');
const config = require('../config/config');

async function handleCctv(sock, messageKey, location) {
    const { cctvApiUrl, cctvApiToken } = config;
    // Send the initial reply
    await sendReaction(sock, messageKey, '⏳');

    try {
        // Fetch the JSON response
        const response = await axios.get(cctvApiUrl + 'ingfo/' + location, { responseType: 'json', headers: { Authorization: cctvApiToken } });
        
        const { count, image } = response.data;

        // Decode base64 image
        const imageBuffer = Buffer.from(image, 'base64');
        const imagePath = path.join(__dirname, `cctv_image_${Date.now()}.jpg`);

        // Save the decoded image to a file
        fs.writeFileSync(imagePath, imageBuffer);

        // Send the image along with a caption
        await sock.sendMessage(messageKey.remoteJid, { 
            image: { url: imagePath }, 
            caption: `Here is the info, detected ${count} person(s).` 
        });

        // Send the final reaction
        await sendReaction(sock, messageKey, '👍');

        // Clean up: Delete the temporary image file
        fs.unlinkSync(imagePath);

    } catch (error) {
        console.error('Error fetching or sending image:', error);
        await sendReaction(sock, messageKey, '❌');
        await sock.sendMessage(messageKey.remoteJid, { text: 'An error occurred while fetching the CCTV image.' });
    }
}

module.exports = { handleCctv };
