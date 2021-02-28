const { MessageAttachment } = require('discord.js')

module.exports = {
    name: "smart",
    category: "extra",
    run: async (client, message, args) => {       
        

        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author; 
       

        let link = `https://api.no-api-key.com/api/v2/smrt?image=${user.avatarURL({ format: 'png'})}`


let attachment = new MessageAttachment(link, 'smart.png');
message.channel.send(attachment); 




            
            
       

    }
}
    