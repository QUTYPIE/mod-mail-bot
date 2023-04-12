//This is server.js file where your bot will be hosted 24/7. Do not edit anything here or your bot will not work.

const express = require('express');

const server = express();

 

server.all('/', (req, res) => {

  res.send(`<title>ModMail.js</title><b><size=50>ModMail.js - [V1.2.1] <i>by ₦ł₵₭  ₣ɄⱤɎ#6023 </i></size></b><br><br><i><color=green>Server.js is ready!</color> Your bot is going to be 24/7 if you host it on uptimerobot.</i><br><br>Click on the button below to join T.F.A official discord server!<br><a type="button" href="https://discord.gg/CdCfgSC3qy"><button>Join for support</button></a><footer><br><br>Warning:<br><b>Do not remove the credits or the developer name on this homepage!! You can change the developer's name (₦ł₵₭  ₣ɄⱤɎ#6023) in index.js or other files, except this homepage!</b></footer>`)

})

 

function keepAlive() {

  server.listen(3000, () => { 

    console.log('\x1b[36m%s\x1b[0m','[MODMAIL] ModMail.js is Running!')

    console.log('\x1b[36m%s\x1b[0m','[MODMAIL] Version: V1.2.1 [OFFICIAL]')

    console.log('\x1b[35m%s\x1b[0m','[SETUP] If you have a problem with the bot, please read SETUP.md or DM the Developer: Q U T Y P I E <3')

    console.log('\x1b[37m%s\x1b[0m','---------------------------------------------------------')

    console.log('\x1b[31m%s', '[WARNING] If this project is stucked in the "[SERVER] Server.js is loading..." part, Go read SETUP.md for help!');

    console.log('\x1b[33m%s','[SERVER] Server.js is loading...')

  ;});

}

 

module.exports = keepAlive;
