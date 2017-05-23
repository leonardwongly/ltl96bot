var TelegramBot = require('node-telegram-bot-api'),
    // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
    telegram = new TelegramBot("242777033:AAF7Y35QRQBuMcvhTYmwyBK9BXqizwBGPgo", { polling: true });

telegram.on("text", (message) => {
  telegram.sendMessage(message.chat.id, "Hello world");
});

telegram.on("text", (message) => {
  if(message.text.toLowerCase().indexOf("/name") === 0){
    telegram.sendMessage(message.chat.id, "I am a bot with no name");
  }
});
