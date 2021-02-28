const DIG = require("discord-image-generation");

const { MessageAttachment } = require("discord.js");

 module.exports = {

     name: "facepalm",
     description: "NOICE",

     run : async (client, message, args) => {

        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author; 

        let img = await new DIG.Facepalm().getImage(user.displayAvatarURL({ format: "png", dynamic: false }));  

        let attachment = new MessageAttachment(img, "fp.png");

        return message.channel.send(attachment);
    }
     }