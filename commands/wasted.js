

const { MessageAttachment } = require('discord.js')

module.exports = {
    name: "wasted",
    category: "extra",
    run: async (client, message, args) => {       
        

        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author; 
       

        let link = `https://some-random-api.ml/canvas/wasted/?avatar=${user.avatarURL({ format: 'png'})}`


let attachment = new MessageAttachment(link, 'rip.png');
message.channel.send(attachment); 




            
            
       

    }
}
    