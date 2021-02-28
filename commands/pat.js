const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "pat",
    category: "extra",
    run: async (client, message, args) => {
        const url = 'https://some-random-api.ml/animu/pat';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`@${message.author.username} pats at @${message.mentions.users.first().username || message.mentions.members.first()}`)
            .setImage(data.link)

        await message.channel.send(embed)
    }
}