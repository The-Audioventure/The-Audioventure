
const Discord = require('discord.js');
const bot = new Discord.Client();

const args = require('minimist')(process.argv.slice(2))

const TOKEN = args['TOKEN'];
console.log(TOKEN)
const { exec } = require('child_process');

bot.on('ready', () => {

    exec('yarn test', (err, stdout, stderr) => {
        if (err) {
            console.info(`Logged in as ${bot.user.tag}!`);
            const channel = bot.channels.cache.get('812771488238665728');
            channel.send('<@247436525321715713> **Push Sent to Github Resulted in an Error:**');
            channel.send(stderr);
            console.log(stdout)
            console.log(stderr)
            setTimeout(function() {process.exit(1);
            }, 2000);
          return;
        }
        else {
            console.info(`Logged in as ${bot.user.tag}!`);
            const channel = bot.channels.cache.get('812771488238665728');
            channel.send('<@247436525321715713> **Push Sent to Github Resulted in a Success:**');
            channel.send(stdout);
            console.log(stdout)
            console.log(stderr)
            setTimeout(function() {process.exit(0);
            }, 2000);
        }
    });
});
    

// bot.channels.cache.get('812771488238665728').send('Hi there! I seem to work properly');
// console.log(bot)
// console.log(bot.channels)
// console.log(bot.channels.cache)
// console.log(bot.channels.cache.get)

// bot.channels.cache.find(channel => {console.log(channel.name); channel.name === 'github-push-tracker'})

// .send('Hi there! I seem to work properly');
bot.login(TOKEN);