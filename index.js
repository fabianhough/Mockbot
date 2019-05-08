//Inspired by 
//https://medium.freecodecamp.org/how-to-create-a-discord-bot-under-15-minutes-fb2fd0083844

const Discord = require('discord.js')
const client = new Discord.Client()

function isLetter(str) {
    return str.length === 1 && str.match(/[a-zA-Z]/i);
  }

function mockify(str)
{
    var new_string = ""
    var count = 0
    for (var i = 0; i < str.length; i++)
    {
        if (isLetter(str.substring(i, i+1)))
        {
            if (count % 2 === 1)
            {
                new_string = new_string + str.substring(i,i+1).toUpperCase()
            }
            else
            {
                new_string = new_string + str.substring(i,i+1).toLowerCase()
            }
            count = count + 1
        }
        else
        {
            new_string = new_string + str.substring(i,i+1)
        }
    }

    return new_string
}

client.on('ready', () => {
    console.log('Logged in as Mockbot!')
})

client.on('message', msg => {
    if (msg.content.length > 6 &&
        msg.content.substring(0,6) === '/mock ') {
        msg.reply(mockify(msg.content.substring(6)))
        //msg.reply('check!')
    }
})

client.login('NTc1NDY0MDk2NjExMTcyMzUz.XNIVDQ.e39iEkbKkordz_CC2Xz7ybY_fAk')

