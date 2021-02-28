const DIG = require("discord-image-generation");

const { MessageAttachment } = require("discord.js");

 module.exports = {

     name: "gay",
     description: "NOICE",

     run : async (client, message, args) => {

        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author; 

        let img = await new DIG.Gay().getImage(user.displayAvatarURL({ format: "png", dynamic: false }));  

        let attachment = new MessageAttachment(img, "gay.png");

        return message.channel.send(attachment);
    }
     }