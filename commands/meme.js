const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports = {
  name: "meme",
  description: "Get a meme!",
  category: "fun",
  run: async (bot, message, args) => {
    let subreddits = ["dankmemes", "dank", "meme", "memes"];
    let subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    let img = await api(subreddit, true);
    const Embed = new MessageEmbed()
      .setTitle(`A meme from r/${subreddit}`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("RANDOM")
      .setImage(img);
    message.channel.send(Embed);
  },
};