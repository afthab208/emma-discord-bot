const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "woah",
    category: "extra",
    run: async (client, message, args) => {
        
        let mention;

        if(!args.length) return message.channel.send(' Usage: -trump <anything you want to say>');

        try {
            const text = args.join(' ')
            const url = `https://chilledcoders.ml/woah?text=`
            const encoded = url + encodeURIComponent(text);
            
            const embed = new MessageEmbed()
                .setImage(encoded)
            await message.channel.send(embed)
        } catch (e) {
            console.log(e)
        }

    }
}
    
