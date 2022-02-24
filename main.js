// ⚠️ Only modify this file if you know what you're doing!

import "bot-worker-header";
import { TicTacToeBot } from "./bot";

let bot;

zilch.onMessage(async (channel, message) => {
  if (channel === "init") {
    bot = new TicTacToeBot(message);
  } else if (channel === "move") {
    return await bot.move(message);
  }
});
zilch.signal("BotReady");
