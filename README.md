# WhatsApp Bot Starter - Baileys

A base code for creating your own personal WhatsApp bot using the [Baileys](https://github.com/WhiskeySockets/Baileys) library. This project is designed to be easily customizable and self-hosted, making it a perfect starting point for anyone looking to build a WhatsApp bot with minimal setup.

## Key Features

- Fetch CCTV images from an API endpoint.
- Send a simple greeting message ("hello").
- Respond to "ping" requests.
- Fetch weather prediction images from an API.

## Installation

To get started with this WhatsApp bot, follow the steps below:

1. Clone the repository:
   ```bash
   git clone https://github.com/satyaadhiyaksaardy/botwa-baileys.git
   cd botwa-baileys

2. Copy .env.example to .env and update the necessary configurations:
   ```bash
   cp .env.example .env
3. Run the bot using Docker Compose:
   ```bash
   docker-compose up
4. Scan the QR code that appears in the terminal using WhatsApp on your phone to log into your account.

## Usage

Once the bot is up and running, it will respond to predefined commands. You can customize the commands by modifying the ```commandHandler.js``` file. Here are the default commands available:

- **hello**: The bot will greet you back with a simple message.
- **ping**: The bot will reply with "pong" to confirm it's running.
- **fetch CCTV image**: Use a specific command to request CCTV footage from an API.
- **fetch weather image**: Retrieve weather predictions from an API.

Feel free to edit or add more commands in the ```commandHandler.js``` file to suit your needs.

## Setup Requirements

- **Docker** is required to run the bot. It handles all dependencies and configuration.
- You'll need to scan the WhatsApp QR code once to authenticate the bot with your personal WhatsApp account.
- Node.js and the [Baileys library](https://github.com/WhiskeySockets/Baileys) are used under the hood to connect to WhatsApp.

## Is it Beginner-Friendly?

Yes! The setup is simple and well-suited for beginners. You don't need extensive programming knowledge to get the bot running, just basic knowledge of Docker and WhatsApp's Web interface.

## Self-Hosting

This project is designed to be self-hosted. You'll run the bot on your own server or local machine using Docker.

## Contributing

Contributions are welcome! If you have ideas for improvements, feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.

## Future Plans
While there are no specific features planned at the moment, future updates may include more commands and integrations based on feedback and personal needs. Stay tuned!