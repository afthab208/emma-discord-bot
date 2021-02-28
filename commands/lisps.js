const DIG = require("discord-image-generation");

const { MessageAttachment } = require("discord.js");

 module.exports = {

     name: "pp",
     description: "NOICE",

     run : async (client, message, args) => {

        const text = args.join(' ')

        let img = await new DIG.LisaPresentation().getImage(text);  

        let attachment = new MessageAttachment(img, "lisapr.png");

        return message.channel.send(attachment);
    }
     }