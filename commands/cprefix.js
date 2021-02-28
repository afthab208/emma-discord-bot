  
const db = require("quick.db")
const { default_prefix } = require("../config.json")

module.exports = {
  name: "prefix",
  category: "moderation",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  run: async (client, message, args) => {
    //PERMISSION
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You are not allowed or do not have permission to change prefix")
    }
    
    if(!args[0]) {
      return message.channel.send("Please give the prefix that you want to set")
    } 
    
    if(args[1]) {
      return message.channel.send("You can not set prefix a double argument")
    }
    
    if(args[0].length > 3) {
      return message.channel.send("You can not send prefix more than 3 characters")
    }
    
    if(args.join("") === default_prefix) {
      db.delete(`prefix_${message.guild.id}`)
     return await message.channel.send("Prefix Reset <a:emoji_42:795305649943740426>")
    }
    
    db.set(`prefix_${message.guild.id}`, args[0])
  await message.channel.send(` Bot Prefix Set  to ${args[0]}`)
    
  }
}