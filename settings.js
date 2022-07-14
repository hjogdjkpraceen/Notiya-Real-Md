//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝙿𝚁𝙰𝚅𝚆𝙴𝚈𝙰 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['+94763572554']
global.premium = ['+94763572554']
global.ownernomer = ['+94763572554']
global.ownername = '🎖️͟͞᭕𝑯ᴀᴡ⃝⃕ʟᴇ۞͢͠࿔⃝ප්‍රවියා᭄™͢🤹'
global.botname = '🎖️͟͞᭕𝑯ᴀᴡ⃝⃕ʟᴇ۞͢͠࿔⃝ප්‍රවියා᭄™͢🤹'
global.footer = '🎖️͟͞᭕𝑯ᴀᴡ⃝⃕ʟᴇ۞͢͠࿔⃝ප්‍රවියා᭄™͢🤹'
global.ig = 'https://github.com/NotiyaReal/Notiya-Real-Md'
global.region = 'Sri Lanka, Central Province, Polonnaruwa'
global.sc = 'https://github.com/NotiyaReal/Notiya-Real-Md'
global.myweb = 'https://chat.whatsapp.com/IcpbcshZDmQHgnJL8hYNkQ'
global.packname = 'Notiya Multy-Device Edition'
global.author = '🎖️͟͞᭕𝑯ᴀᴡ⃝⃕ʟᴇ۞͢͠࿔⃝ප්‍රවියා᭄™͢🤹'
global.sessionName = 'session'
global.prefa = ['!','.']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: '🚫ඇඩ්මින් Command භාවිතය ඔබට තහනම්! ɴᴏᴛɪʏᴀ ʀᴇᴀʟ',
    botAdmin: 'මා මෙහි Admin කෙනෙකු නොවේ!',
    owner: 'එය භාවිතකල හැක්කෙ බොට් අයිතිකරුට පමණි!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'එය භාවිතකල හැක්කෙ බොට් අයිතිකරුට පමණි!',
    wait: 'රැදී සිටින්න...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
