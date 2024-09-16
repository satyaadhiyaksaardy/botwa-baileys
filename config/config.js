module.exports = {
    botName: 'Tongtong-Bot',
    port: 3005,
    environment: process.env.NODE_ENV || 'development',
    prefix: process.env.PREFIX || '!',
    weatherInfoUrl: process.env.WEATHER_INFO_URL || 'localhost',
    cctvApiUrl: process.env.CCTV_API_URL || 'localhost',
    cctvApiToken: process.env.CCTV_API_TOKEN
};
