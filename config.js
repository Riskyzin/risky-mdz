/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6282179438863
   * Follow https://github.com/shoukosagiri-po
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	risky: 'https://ziy.herokuapp.com',
}

// Apikey Website Api
global.APIKeys = {
	'https://ziy.herokuapp.com': 'xZiyy',
}

// Other
global.owner = ['5588996926980']
global.owner1 = ['558896926980'] // case : owner 
global.premium = ['558899119039']
global.packname = `🌟 Xinzz - Md`
global.author = '⛩ Xinzz - Md'
global.sessionName = 'roother'
global.prefa = ['/']
global.sp = '⭔'
global.mess = {
    success: '✓ 𝙎𝙪𝙘𝙚𝙨𝙨𝙤',
    admin: '𝙎𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙥𝙤𝙧 𝘼𝙙𝙢𝙞𝙣𝙨!',
    botAdmin: '𝙎𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙨𝙚 𝙚𝙪 𝙛𝙤𝙧 𝘼𝙙𝙢𝙞𝙣',
    owner: '𝙍𝙚𝙘𝙪𝙧𝙨𝙤 𝙖𝙥𝙚𝙣𝙖𝙨 𝙥𝙖𝙧𝙖 𝙤 𝙍𝙞𝙨𝙠𝙮',
    group: '𝙎𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙚𝙢 𝙜𝙧𝙪𝙥𝙤𝙨!',
    private: '𝙎𝙤́ 𝙥𝙤𝙙𝙚 𝙨𝙚𝙧 𝙪𝙩𝙞𝙡𝙞𝙯𝙖𝙙𝙤 𝙣𝙤 𝙘𝙝𝙖𝙩 𝙥𝙧𝙞𝙫𝙖𝙙𝙤!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '𝘼𝙜𝙪𝙖𝙧𝙙𝙚...',
    endLimit: '𝙑𝙤𝙘𝙚̂ 𝙘𝙝𝙚𝙜𝙤𝙪 𝙖𝙤 𝙨𝙚𝙪 𝙡𝙞𝙢𝙞𝙩𝙚!',
}
global.limitawal = {
    premium: "Infinity",
    free: 5
}
global.thumb = fs.readFileSync('./lib/tsuchan.png')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
