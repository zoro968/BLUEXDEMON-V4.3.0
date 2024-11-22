const version = require("@whiskeysockets/baileys/package.json").version
const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Africa/Lagos').format('HH:mm:ss')
const timeWit= moment().tz('Africa/Lagos').format('HH:mm:ss')
const timeWita = moment().tz('Africa/Lagos').format('HH:mm:ss')
const { color, bgcolor } = require('../lib/color')
const {kyun} = require("../lib/myfunc");
moment.tz.setDefault("Africa/Lagos").locale("id");

const Ehztext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var ehz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: ehz[style].split('')[i]
    })
  );
  var str = text.split('');
  var output = [];
  str.map((v) => {
    if (v.toUpperCase() !== v.toLowerCase() && v === v.toUpperCase()) {
      // If the character is uppercase, push it unchanged
      output.push(v);
    } else {
      // If the character is lowercase or not a letter, find and convert it
      const find = replacer.find((x) => x.original == v.toLowerCase());
      find ? output.push(find.convert) : output.push(v);
    }
  });
  return output.join('');
};

let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})

////Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 


let dt = moment(Date.now()).tz('Africa/Lagos').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

/*
let yes = "*「 _Error_ * ❌"
let no =""

const feat = (q) => {
    let status = false
    Object.keys(db.data.listerror).forEach((i) => {
        if (db.data.listerror[i].cmd === q) {
            status = true
        }
    })
    return status
}
*/



exports.allmenu =  ( limitCount, isPremium,thisHit, publik, sender, prefix, pushname) => {
try{ 
var saldo = db.data.users[sender].balance.toLocaleString() 
} catch{ 
var saldo = db.data.users[sender].balance
}
return Ehztext(`
┏━━━\`𝘽𝙇𝙐𝙀 𝙓 𝘿𝙀𝙈𝙊𝙉\`
┃■ 𝐔𝐒𝐄𝐑  :  ${pushname}
┃■ 𝐒𝐓𝐀𝐓𝐔𝐒 :  ${isPremium ? '𝐏𝐫𝐞𝐦𝐢𝐮𝐦':'𝐅𝐫𝐞𝐞'}
┃■ 𝐌𝐎𝐃𝐄 : ${publik ? "𝐏𝐮𝐛𝐥𝐢𝐜" : "𝐒𝐞𝐥𝐟"}
┃■ 𝐑𝐔𝐍 𝐈𝐍 : ${runWith} 
┃■ 𝐃𝐀𝐓𝐄 :  *${calender}*
┃■ 𝐓𝐈𝐌𝐄 :  *${timeWib}*
┗━━━━━━━━━━━━━━
 ${readmore}`)}

exports.fitur = (prefix) => {
return Ehztext(`
     \`☛ 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 ☚\`
*➼ addowner*
*➼ delowner*
*➼ listowner*
*➼ self*
*➼ public*
*➼ mode*
*➼ delete*
*➼ read*
*➼ clearchat*
*➼ setpp*
*➼ block*
*➼ unblock* 
*➼ setbotname*
*➼ setbio*
*➼ listcase*
*➼ update*

    \`☛ 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 ☚\`
*➼ tagall*
*➼ antilink*
*➼ antivirtex*
*➼ antidelete*
*➼ antibot*
*➼ revoke*
*➼ promote*
*➼ demote*
*➼ kick*
*➼ add*
*➼ mute*
*➼ tag*
*➼ unmute*
*➼ welcome*
*➼ tagadmin*
*➼ listadmin*
*➼ tagme*
*➼ kickall*
*➼ gcinfo*
*➼ setppgc*
*➼ setgcname*
*➼ setdesc*
*➼ getppgc*
*➼ delppgc*
*➼ inspect*
*➼ revoke*
*➼ resetgclink*
*➼ opentime*
*➼ closetime*
*➼ gclink*
*➼ leavegc*

      \`☛ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑𝐒 ☚\`
*➼ play*
*➼ yts <link>*
*➼ ytmp3 <link>*
*➼ ytmp4 <link>*
*➼ tiktok <link>*
*➼ facebook <link>*
*➼ instagram <link>*
*➼ gitclone <link>*
*➼ mediafire <link>*
*➼ githubdl <link>*
*➼*

      \`☛ 𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔 ☚\`
*➼ vv*
*➼ vv2*
*➼ runtime*
*➼ ping*
*➼ getsession*
*➼ join*
*➼ sticker*
*➼ take*

      \`☛ 𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔 ☚\`
*➼ lyrics*
*➼ google*
*➼ happymod*

      \`☛ 𝐀𝐈 𝐌𝐄𝐍𝐔 ☚\`
*➼ gemini*
*➼ chatgpt*
*➼ blackbox*

      \`☛ 𝐅𝐔𝐍 𝐌𝐄𝐍𝐔 ☚\`
*➼ love*
*➼ conf*
*➼ angry*
*➼ hrt*
➼
➼
➼
➼
➼
`
)}
  



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
	delete require.cache[file]
	require(file)
})
