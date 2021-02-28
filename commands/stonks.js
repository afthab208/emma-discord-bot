const DIG = require("discord-image-generation");

const { MessageAttachment } = require("discord.js");

 module.exports = {

     name: "stonks",
     description: "NOICE",

     run : async (client, message, args) => {

        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author; 

        let img = await new DIG.Stonk().getImage(user.displayAvatarURL({ format: "png", dynamic: false }));  

        let attachment = new MessageAttachment(img, "stonks.png");

        return message.channel.send(attachment);
    }
     }