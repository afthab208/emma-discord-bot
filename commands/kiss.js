const DIG = require("discord-image-generation");

const { MessageAttachment } = require("discord.js");
module.exports = {

    name: "kiss",
    description: "NOICE",

     async run (client, message, args) {

        const userarray = message.mentions.users.array();
            
        const user = userarray[0] || client.users.cache.get(args[0]);
        const user2 = userarray[1] || client.users.cache.get(args[1]);

        const img = await new DIG.Kiss().getImage(user.displayAvatarURL({ dynamic: false, format: 'png' }), user2.displayAvatarURL({ dynamic: false, format: 'png' }));
        const attach = new MessageAttachment(img, "kiss.png");
        message.channel.send(attach);
       
    }
}