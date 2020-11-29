client.on('ready, () => {
 console.log("Hello World")
})

client.on('messageUpdate', async(oldMessage, newMessage) => {
const embed = new Discord.MessageEmbed()
.setColor("#fc3c3c")
.setTitle("Mensagem editada!")
.addField("Nome do canal", `${oldMessage.channel.name}`, true)
.addField("Autor:", `${oldMessage.author.username}`, true)
.addField("Mensagem antiga:", `${oldMessage.content}`, true)
.addField("Mensagem editada:", `${newMessage.content}`)
  let channel = oldMessage.guild.channels.cache.find(x => x.name === 'event-log');
  channel.send({embed});
})