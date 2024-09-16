function logMessage(sender, message) {
    console.log(`[${new Date().toISOString()}] ${sender}: ${message}`);
}

module.exports = { logMessage };
