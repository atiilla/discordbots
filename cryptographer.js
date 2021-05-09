const Discord = require("discord.js") // require the discord.js wrapper
const client = new Discord.Client() // Declare client to be a new Discord Client (bot)
var base64 = require('base-64');
require('dotenv').config()

client.once("ready", () => {
    console.log(`[STATUS] ${client.user.tag} is now online!\n[INFO] \n[INFO] Bot serving on Ready to serve in ${client.guilds.cache.size} servers\n[INFO] Bot serving ${client.users.cache.size} users\n[Invite Link] https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot`)
});

function encoder(enctype,plaintext){
    let encoded;
    switch(enctype){
        case 'base64':
            encoded = base64.encode(plaintext)
    }
    console.log(`EncType: ${enctype}\nPlainText: ${plaintext}\nEncoded: ${encoded}`)
    let model = new Discord.MessageEmbed()
    .setTitle('Encrypted')
    .setDescription(`EncryptionType: ${enctype}\nInput: ${plaintext}\nEncoded: ${encoded}`)
    .setColor('GREEN')
    .setTimestamp()
    .setFooter('Thanks for using my service.')
    
    return model;

}

function decoder(enctype,plaintext){
    let encoded;
    switch(enctype){
        case 'base64':
            encoded = base64.encode(plaintext)
    }
    console.log(`EncType: ${enctype}\nPlainText: ${plaintext}\nEncoded: ${encoded}`)
    let model = new Discord.MessageEmbed()
    .setTitle('Encrypted')
    .setDescription(`EncryptionType: ${enctype}\nInput: ${plaintext}\nEncoded: ${encoded}`)
    .setColor('GREEN')
    .setTimestamp()
    .setFooter('Thanks for using my service.')
    
    return model;

}


client.on('message',async (message) =>{
 //   console.log(message.channel)

    // encode
    if(message.channel.name == "encode-decode"){
        if(message.content.startsWith("!encode")){
            let content = message.content.split(" ");
            console.log(content)
            let enctype = content[1];
            let plaintext = content[2];
           // encoder(enctype,plaintext);
            message.channel.send(encoder(enctype,plaintext))
            
        }
    }

    // decode
    if(message.channel.name == "encode-decode"){
        if(message.content.startsWith("!decode")){
            let plaintext = message.content.substr(8,message.content.length)
            
        }
    }
    
})


client.login(process.env.CRYPTOGRAPHER_TOKEN); // Login with the token make sure to add it when starting