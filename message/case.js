"use strict";
const toMs = require('ms')
const chalk = require('chalk')
const fs = require("fs")
const fse = require('fs-extra');
const {
    Sticker,
    StickerTypes
} = require('wa-sticker-formatter')
const moment = require("moment-timezone");
const util = require("util");
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const axios = require("axios");
const yts = require("yt-search");
const gtts = require('node-gtts')
const ggs = require('google-it')
const canvacard = require("canvacard");
const speed = require("performance-now");
const ms = require("parse-ms");
const ytdl = require('ytdl-core');
const xyz = require("@xyzteams/scapers")
const os = require('os');
const {
    join,
    dirname
} = require('path');
const path = require('path');
const {
    removeBackgroundFromImageFile
} = require('remove.bg')
const {
    performance
} = require('perf_hooks')
const fetch = require('node-fetch');
const cheerio = require('cheerio')
const request = require("request")
const anonfile = require('anonfile-lib')
const {
    Primbon
} = require('scrape-primbon')

const primbon = new Primbon()
const {
    youtubeSearch,
    pinterest,
    mediafiredl,
    lyricsv2,
    lyrics,
    facebookdl,
    facebookdlv2,
    tiktokdl,
    tiktokdlv2,
    twitterdl,
    twitterdlv2,
    getZodiac,
    liputan6,
    googleIt,
    wallpaperv2,
    chord,
    googleImage,
    jadwalTVNow,
    gempa,
    stickerTelegram,
    stickerLine,
    latinToAksara,
    aksaraToLatin,
    asmaulhusnajson,
    alquran,
    listJadwalSholat,
    gempaNow,
    instagramdl,
    instagramdlv3,
    instagramdlv2,
    instagramStory,
    savefrom,
    snapsave
} = require('@bochilteam/scraper')

//----------------- LIB FILE ------------------\\
const {
    userXp,
    userLeveling,
} = require("../lib/user");
const TicTacToe = require("../lib/tictactoe")
const {
    msgFilter,
    addSpam,
    SpamExpired,
    cekSpam
} = require('../lib/antispam')
const {
    color
} = require('../lib/color')
const {
    doodstream,
    terabox
} = require('../lib/18+')

const photooxy = require('../lib/photooxy');
const {
    toFirstCase,
    isNumber,
    formatp,
    parseMention,
    resize,
    pickRandom,
    getRandom,
    generateProfilePicture,
    getCase,
    addCase,
    delCase,
    listCase,
    runtime,
    FileSize,
    h2k,
    GIFBufferToVideoBuffer,
    makeid,
    kyun,
    randomNomor,
    jsonformat,
    isUrl,
    fetchJson,
    sleep,
    getBuffer,
} = require("../lib/myfunc");
const {
    floNime,
    UploadFileUgu,
    TelegraPh,
    uploadFile
} = require('../lib/uploader')
const {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg
} = require('../lib/convert')
const {
    instagram4,
    capcutdl,
    mediafiredll,
    instagram2,
    instagram3,
    cekkuota,
    tele,
    ytPlayMp4,
    ytPlayMp3,
    igdl,
    kodepos,
    mediafire,
    ffstalk,
    textpro,
    mlstalk,
    Tiktok,
    surah,
    getSurah,
    listsurah,
    tafsirsurah,
    ephoto,
    emoji
} = require('../lib/scraper')
const {
    addblockcmd,
    deleteblockcmd,
    checkblockcmd
} = require("../lib/blockcmd");
const {
    addError,
    clearAllError,
    deleteError,
    checkError
} = require("../lib/totalerror")
const {
    Nothing,
    Failed,
    Succes,
    addAutoClear,
    autoClearChat,
    checkDataName,
    createDataId,
    addDataId,
    removeDataId,
    checkDataId,
    getHit,
    cmdAdd,
    expiredCmd
} = require("../lib/totalcmd");
const _sewa = require('../lib/sewa')
const _prem = require("../lib/premium");
const {
    clearAllBan,
    addBanned,
    unBanned,
    cekBannedUser
} = require("../lib/banned")
const {
    jadibot,
    stopjadibot,
    listjadibot
} = require('../lib/jadibot.js')
const {
    bad,
    thanks,
    ken,
    dosa,
    katamalem,
    katasiang,
    katasore,
    katalopyu,
    ohayo,
    devoloper1,
    ppMenu,
    ppPrem,
    ppPrem2,
    ppRandom,
    teksspam,
    tekssalah,
    katara,
    katabot,
    katakawai,
    kataaii,
    ppInfo,
    ppDonat,
    badword
} = require('../message/messages')
const {
    vnToxic,
    vnMenu,
    vnSalam,
    vnBot,
    vnAra,
    vnSpam,
    vnPagi,
    vnSiang,
    vnMalam,
    vnOwner,
    vnKawai,
    vnLove
} = require('../temp/audio/autovn.js')
const {
    stikOtw,
    stikSpam,
    stikAdmin
} = require('../temp/sticker/autosticker.js')
// VIRTEX BUKAN BUG
const {
    virtex,
    virtag,
    philip,
    emoji1,
    emoji2,
    virtex2,
    virtex3,
    virtex4,
    virtex5,
    virtex8,
    virtex9,
    virtex10,
    virtex11,
    virtex12,
    slayer,
    ngazap,
    virtexbytsukasa
} = require('../database/virtex/virtex.js')
const {
    virtex6
} = require('../database/virtex/virtex6.js')
const {
    virtex7
} = require('../database/virtex/virtex7.js')
//database 
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const premium = db.data.premium
const listcmdblock = db.data.blockcmd
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard
const anonChat = db.data.anonymous
const allcommand = db.data.allcommand
const sewa = db.data.sewa
const spammer = []

const siminya = JSON.parse(fs.readFileSync('./database/simi.json'))
let secreto = JSON.parse(fs.readFileSync('./database/secreto_balas.json'))

var publik = global.public

//=================================================//
module.exports = async (conn, dev, chatUpdate, store) => {
    //console.log(chatUpdate.messages)
    var multi = db.data.settings['settingbot'].multi
    const m = dev
    var Ownerin = "2349019529423@s.whatsapp.net"
    var ownerNumber = [`${botNumber}@s.whatsapp.net`, `2347041039367@s.whatsapp.net`, `${conn.user.jid}`]
    const Tnow = (new Date() / 1000).toFixed(0)
    const seli = Tnow - m.messageTimestamp.low
    if (seli > Intervalmsg) return console.log((`Message ${Intervalmsg} seconds ago ignored to avoid spamming`))
    try {

        const {
            type,
            now,
            args,
            sender,
            fromMe,
            from,
            botNumber,
            senderNumber,
            groupName,
            groupId,
            groupMembers,
            groupDesc,
            groupOwner,
            pushname,
            itsMe,
            isGroup,
            mentionByTag,
            mentionByReply,
            users,
            budy,
            content,
            body,
        } = dev

        ///_&-
        if (multi) {
            var prefix = /^#.!¦|\\^/.test(body) ? body.match(/^#.!¦|\\^/gi) : '.'
            var thePrefix = "Multi Prefix"
        }

        const isCmd = body.startsWith(prefix)
        const isCommand = isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ""
        const q = args.join(' ')
        const timeWib = moment().tz('Africa/Lagos').format('HH:mm:ss')
        const isOwner = ownerNumber.includes(sender) || checkDataId("owner", sender, DataId)
   const text = args.join(' ')
        const command = (_prem || isOwner) ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
        const theOwner = sender == Ownerin
        const timestampp = speed();
        const latensi = speed() - timestampp
        const quoted = dev.quoted ? dev.quoted : dev
        const mime = (quoted.msg || quoted).mimetype || ''
        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001)
        const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
        const Input = (mentionByTag && mentionByTag[0]) ? mentionByTag[0] :
            (mentionByReply || q ? numberQuery : false);

        //const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
        const replyCommand = isCmd ? isCmd : allcommand.includes(toFirstCase(command))
        const selectedButton = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedButtonId : ''



        const user = global.db.data.users[m.sender]
        const chat = isGroup ? global.db.data.chats[m.chat] : false
        const isSimi = isGroup ? siminya.includes(m.chat) : false
        const kickon = global.db.data.kickon[m.chat]
        const botRun = global.db.data.others['runtime']
        const botTime = (new Date - botRun.runtime) || "Not detected"
        const runTime = clockString(botTime)


        //Waktu
        let d = new Date
        let locale = 'id'
        let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
        let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
        let week = d.toLocaleDateString(locale, {
            weekday: 'long'
        })
        const calender = d.toLocaleDateString("id", {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })


        function clockString(ms) {
            let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
            let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
            let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
            let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
            var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : "";
            let time = d > 0 ? dDisplay + hDisplay + mDisplay + sDisplay : hDisplay + mDisplay + sDisplay
            return time
        }

        //if(selectedText == "register"){
        if (isCmd) {
            if (user) {
                if (!('name' in user)) user.name = pushname
                if (!('id' in user)) user.id = senderNumber
                if (!isNumber(user.exp)) user.exp = 0
                if (!isNumber(user.level)) user.level = 1
                if (!isNumber(user.hit)) user.hit = 1
                if (!isNumber(user.balance)) user.balance = 1000
                if (!isNumber(user.limit)) user.limit = 30
                if (!isNumber(user.glimit)) user.glimit = 30
                if (!('serial' in user)) user.serial = makeid(4)
                if (!isNumber(user.afk)) user.afk = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.lastclaim)) user.lastclaim = 0
                if (!isNumber(user.pc)) user.pc = 0
                if (!('autolevelup' in user)) user.autolevelup = false
                if (!isNumber(user.pc)) user.pc = 0
                if (!user.grade) user.grade = 'Newbie'

            } else {
                global.db.data.users[m.sender] = {
                    name: pushname,
                    id: senderNumber,
                    date: calender,
                    exp: 100,
                    level: 1,
                    hit: 0,
                    balance: 1000,
                    limit: 30,
                    glimit: 30,
                    serial: makeid(4).toUpperCase(),
                    lastclaim: 0,
                    afk: -1,
                    pc: 0,
                    grade: 'Newbie',
                    autolevelup: false
                }

                let me = m.sender
                let anu = "https://wallpapers.com/images/high/might-guy-1920-x-1080-ekgrtxxv50obyyl9.webp";

                let contextInfo = {
                    externalAdReply: {
                        showAdAttribution: false,
                        title: "Saved to database",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnailUrl: anu,
                    },
                };
                let teks = `*]───── REGISTERED ─────[*
 
👤 Name: ${pushname}
☎️ Number: ${senderNumber}
📡 Serial: ${db.data.users[m.sender].serial}
📍 Verified: ${calender}
 `
                await sleep(1000)
                conn.sendMessage(m.chat, {
                    contextInfo,
                    text: teks
                }, {
                    quoted: m
                })
            }
        }


        //if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
        if (isGroup && chat) {
            if (!('name' in chat)) chat.name = groupNmae
            if (!isNumber(chat.add)) chat.add = 0
            if (!('welcome' in chat)) chat.welcome = false
            if (!('detect' in chat)) chat.detect = true
            if (!('sWelcome' in chat)) chat.sWelcome = ''
            if (!('sBye' in chat)) chat.sBye = ''
            if (!('sPromote' in chat)) chat.sPromote = ''
            if (!('sDemote' in chat)) chat.sDemote = ''
            if (!('desc' in chat)) chat.desc = true
            if (!('descUpdate' in chat)) chat.descUpdate = true
            if (!('stiker' in chat)) chat.stiker = false
            if (!("antibot" in chat)) chat.antibot = false
            if (!('antiimage' in chat)) chat.antiimage = false
            if (!('antisticker' in chat)) chat.antisticker = false
            if (!('antivideo' in chat)) chat.antivideo = false;
            if (!('antiaudio' in chat)) chat.antiaudio = false;
            if (!('antiLink' in chat)) chat.antiLink = false
            if (!isNumber(chat.expired)) chat.expired = 0
            if (!('antiBadword' in chat)) chat.antiBadword = true
            if (!('antispam' in chat)) chat.antispam = true
            if (!('antitroli' in chat)) chat.antitroli = false
            if (!('antivirtex' in chat)) chat.antivirtex = true
            if (!('antiwame' in chat)) chat.antiwame = false
            if (!('antitoxic' in chat)) chat.antitoxic = false
            if (!('viewonce' in chat)) chat.viewonce = true
            if (!('nsfw' in chat)) chat.nsfw = false
            if (!("rpg" in chat)) chat.rpg = false;
            if (!('clear' in chat)) chat.clear = false
            if (!isNumber(chat.cleartime)) chat.clearTime = 0
        } else if (isGroup) global.db.data.chats[m.chat] = {
            name: groupName,
            add: 0,
            welcome: false,
            detect: false,
            sWelcome: '',
            sBye: '',
            sPromote: '',
            sDemote: '',
            desc: true,
            descUpdate: true,
            antibot: false,
            antiimage: false,
            antisticker: false,
            antiaudio: false,
            antivideo: false,
            autostiker: false,
            antilink: false,
            antilinkgc: false,
            antidelete: false,
            antiasing: false,
            banchat: false,
            expired: 0,
            antibadword: true,
            antispam: true,
            antitroli: false,
            antivirtex: false,
            antitoxic: false,
            antipromosi: false,
            antihidetag: false,
            viewonce: false,
            nsfw: false,
            rpg: false,
            clear: false,
            clearTime: 0
        }

        const settings = global.db.data.settings['settingbot']
        if (settings) {

            //Auto set
            if (!isNumber(settings.status)) setting.status = new Date() * 1
            if (!('setmenu' in settings)) settings.setmenu = "document"
            if (!('docType' in settings)) settings.docType = "docx"
            if (!('Qoted' in settings)) settings.Qoted = "ftoko"
            if (!('autoBio' in settings)) settings.autoBio = true
            if (!('multi' in settings)) settings.multi = true
            if (!('prefix' in settings)) settings.prefix = "!"
            if (!('fake' in settings)) settings.fake = botName
            if (!('autoblockcmd' in settings)) settings.autoblockcmd = false
            if (!('fake1' in settings)) settings.fake1 = "EhzStore"
            if (!('replyType' in settings)) settings.replyType = "web"
            if (!('setwelcome' in settings)) settings.setwelcome = "type11"
            if (!('autoReport' in settings)) settings.autoReport = true
            if (!('autoLevel' in settings)) settings.autoLevel = true
            if (!('autoSticker' in settings)) settings.autoSticker = false
            if (!('publik' in settings)) settings.publik = true

        } else {
            global.db.data.settings['settingbot'] = {
                status: new Date() * 1,
                setmenu: "document",
                docType: "docx",
                Qoted: "ftoko",
                autoBio: true,
                multi: true,
                prefix: "!",
                fake: botName,
                autoblockcmd: false,
                replyType: "web",
                setwelcome: "type11",
                autoReport: true,
                autoLevel: true,
                autoSticker: false,
                publik: true
            }
        }

        //Security / Keamanan
        const groupMetadata = isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
        const participants = isGroup ? await groupMetadata.participants : ''
        const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const isGroupOwner = isGroup ? groupMetadata.owner : ''
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
        const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = isGroup ? groupAdmins.includes(sender) : false
        const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
        const isAntiLink = isGroup ? db.data.chats[from].antilink : false
        const isWelcome = isGroup ? db.data.chats[from].welcome : true
        const isAntidelete = isGroup ? db.data.chats[from].antidelete : false
        const isKickarea = isGroup ? db.data.chats[from].antiasing : false
        const isAntilinkGc = isGroup ? db.data.chats[from].antilinkgc : false
        const isBanchat = isGroup ? db.data.chats[from].banchat : false
        const isAntiVirtex = isGroup ? db.data.chats[from].antivirtex : false
        const isAntiWame = isGroup ? db.data.chats[from].antiwame : false
        const isAntiToxic = isGroup ? db.data.chats[from].antitoxic : false
        const isBanned = sender ? cekBannedUser(senderNumber, ban) : false
        const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
        const gcount = isPremium ? gcounti.prem : gcounti.user
        const isAntiViewOnce = isGroup ? db.data.chats[from].viewonce : false
        const isAntiImage = isGroup ? db.data.chats[from].antiimage : false
        const isAntiVideo = isGroup ? db.data.chats[from].antivideo : false
        const isAntiAudio = isGroup ? db.data.chats[from].antiaudio : false
        const isAntiSticker = isGroup ? db.data.chats[from].antisticker : false
        const isAntiBot = isGroup ? db.data.chats[from].antibot : false
        const isAntiNsfw = isGroup ? db.data.chats[from].nsfw : false
        const isAntiPromosi = isGroup ? db.data.chats[from].antipromosi : false
        const isGame = isGroup ? db.data.chats[from].game : false
        const thumb = fs.readFileSync('./database/blueimages/thumb.jpeg')
        //const isHit = db.data.users[sender].hit > 1? true : false 

        //User 
        const userLevel = user ? db.data.users[m.sender].level : true
        const userExp = user ? db.data.users[m.sender].exp : true
        const userId = user ? db.data.users[m.sender].id : true
        const amountExp = Math.floor(Math.random() * 10) + 50
        const requiredExp = 10000 * userLevel
        const userPersen = userExp / requiredExp * 100
        const userVerified = user ? db.data.users[m.sender].date : true

        //Ucapan Waktu  
        if (timeWib < "23:59:00") {
            var ucapanWaktu = '𝐇𝐄𝐘🐦‍🔥'
        }
        if (timeWib < "19:00:00") {
            var ucapanWaktu = '𝐇𝐄𝐘🐦‍🔥'
        }
        if (timeWib < "18:00:00") {
            var ucapanWaktu = '𝐇𝐄𝐘🐦‍🔥'
        }
        if (timeWib < "15:00:00") {
            var ucapanWaktu = '𝐇𝐄𝐘🐦‍🔥'
        }
        if (timeWib < "11:00:00") {
            var ucapanWaktu = '𝐇𝐄𝐘🐦‍🔥'
        }
        if (timeWib < "06:00:00") {
            var ucapanWaktu = '𝐇𝐄𝐘🐦‍🔥'
        }
        // Presence Online

        // Disable auto-typing updates
        conn.sendPresenceUpdate('unavailable', from);

        let colors = ['red', 'white', 'black', 'blue', 'yellow', 'green', 'magenta', 'cyan', 'pink', 'gold', 'purple', 'navy', 'gray']
        const isImage = (type === 'imageMessage')
        const isVideo = (type === 'videoMessage')
        const isSticker = (type == 'stickerMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'conversation')
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isViewOnce = (type == 'viewOnceMessageV')
        const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
        const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
        const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
        const isHanMedia = m.mtype
        const pesilit = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
        const messagesD = pesilit.slice(0).trim().split(/ +/).shift().toLowerCase()
        const messagesC = pesilit.slice(0).trim()
        /*/Console Log
        try{
        var virus = m.message.extendedTextMessage.contextInfo.externalAdReply.title.length > 40000
        }catch{
        var virus = 100
        }

        if(type == "groupInviteMessage" && m.message.groupInviteMessage.caption.length > 8000||  type == "contactMessage" && m.message.contactMessage.displayName.length > 8000 || type == "imageMessage" && m.message.imageMessage.caption.length > 8000 || budy.length > 8000 && !itsMe  || type == "extendedTextMessage" && virus > 8000 && !itsMe ||  type == "productMessage" && m.message.productMessage.product.description.length > 8000 && !itsMe ||  type == "listMessage" && !itsMe) {
        if(isGroup && isBotGroupAdmins) conn.sendMessage(from, { delete: m.key})
        if(!isGroup && isBotGroupAdmins) conn.chatModify({ clear: { messages: [{ id: m.id, fromMe: sender == isBotGroupAdmins,timestamp: m.messageTimestamp }] } }, sender, [])
        console.log(chalk.bgRedBright(color("[ VIRTEXT ]", "black")),`Length: ${budy.length} from ${senderNumber} ${isGroup? `Group ${groupName}`: ""}`)
        }*/



        if (!isGroup && !isCmd) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Africa/Lagos').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
        if (isGroup && !isCmd) console.log(color("[GRUP]", "gold"), color(moment.tz('Africa/Lagos').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
        if (!isGroup && isCmd) console.log(color("[CMD]", "blue"), color(moment.tz('Africa/Lagos').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
        if (isGroup && isCmd) console.log(color("[CMD]", "blue"), color(moment.tz('Africa/Lagos').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))

        // Pengubah teks
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
            var str = text.toLowerCase().split('');
            var output = [];
            str.map((v) => {
                const find = replacer.find((x) => x.original == v);
                find ? output.push(find.convert) : output.push(v);
            });
            return output.join('');
        };
        //×××××××××××××××××××××××××//
        //VN saat ada yang toxic
        const anying = vnToxic
        const astaga = anying[Math.floor(Math.random() * anying.length)]
        //Vn Audio Menu
        const vnme = vnMenu
        const dmusic = vnme[Math.floor(Math.random() * vnme.length)]
        //VN saat ada yg bilang bot
        const ulul = vnBot
        const halo = ulul[Math.floor(Math.random() * ulul.length)]

        //VN saat ada yang ucap pagi
        const oyo = vnPagi
        const pagi = oyo[Math.floor(Math.random() * oyo.length)]

        //VN saat ada yang ucap siang
        const oyo1 = vnSiang
        const siang = oyo1[Math.floor(Math.random() * oyo1.length)]

        //VN saat ada yang ucap malam
        const oyo2 = vnMalam
        const malam = oyo2[Math.floor(Math.random() * oyo2.length)]

        //VN saat ada yg akses fitur owner
        const ahenggak = vnOwner
        const gakmau = ahenggak[Math.floor(Math.random() * ahenggak.length)]

        //VN saat ada yg spam
        const alal = vnSpam
        const nospam = alal[Math.floor(Math.random() * alal.length)]

        //VN saat ada yg bilang asalamualaikum
        const alul = vnSalam
        const walaikumsalam = alul[Math.floor(Math.random() * alul.length)]

        //VN saat ada yg bilang i love u
        const awlu = vnLove
        const lopyoutoo = awlu[Math.floor(Math.random() * awlu.length)]

        //VN saat ada yg bilang ara
        const ara = vnAra
        const wibu = ara[Math.floor(Math.random() * ara.length)]

        //VN kawai
        const olah = vnKawai
        const kawai = olah[Math.floor(Math.random() * olah.length)]
        // RESPON STIKER 
        //blueimages otw
        const onde = stikOtw
        const otw =
            onde[Math.floor(Math.random() * onde.length)]
        //blueimages spam
        const spamm = stikSpam
        const spamni =
            spamm[Math.floor(Math.random() * spamm.length)]
        //respon teks
        let listRespon = global.db.data.respon[body]
        if (listRespon) m.reply(listRespon.respon)

        //FAKE REPLY  
        const ments = (teks) => {
            return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [sender]
        }

        const fcall = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            'message': {
                extendedTextMessage: {
                    text: body
                }
            }
        }
        const ehan = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                "contactMessage": {
                    'displayName': `${pushname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;menhera,;;;\nFN: ehanz Ai\nitem1.TEL;waid=${m.sender.split("@")[0]}:+${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': null,
                    thumbnail: null,
                    sendEphemeral: true
                }
            }
        }
        const ftoko = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "16505434800@s.whatsapp.net"
                } : {})
            },
            message: {
                "productMessage": {
                    "product": {
                        "productImage": {
                            "mimetype": "image/jpeg",
                            "jpegThumbnail": fs.readFileSync('./database/blueimages/quoted.jpg')
                        },
                        "title": `${pushname}`,
                        "description": `${ucapanWaktu} kak`,
                        "currencyCode": "IDR",
                        "priceAmount1000": `${pushname}`,
                        "retailerId": `Rp10`,
                        "productImageCount": 1
                    },
                    "businessOwnerJid": `0@s.whatsapp.net`
                }
            }
        }
        const fkontak = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: `0@s.whatsapp.net`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': `${pushname}`,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
                    'jpegThumbnail': fs.readFileSync('./database/blueimages/thumb.jpeg')
                }
            }
        }
        const ftext = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "16505434800@s.whatsapp.net"
                } : {})
            },
            message: {
                "extendedTextMessage": {
                    "text": `${fake}`,
                    "title": `Hmm`,
                    'jpegThumbnail': fs.readFileSync('./database/blueimages/thumb.jpeg')
                }
            }
        }
        const ftroli = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "16505434800@s.whatsapp.net"
                } : {})
            },
            message: {
                orderMessage: {
                    itemCount: 200,
                    status: 1,
                    surface: 2,
                    message: `${fake}\n${ucapanWaktu} kak`,
                    orderTitle: `${ucapanWaktu} kak`,
                    thumbnail: fs.readFileSync('./database/blueimages/thumb.jpeg'),
                    sellerJid: `0@s.whatsapp.net`
                }
            }
        }
        const floc = {
            key: {
                "fromMe": false,
                "participant": `0@s.whatsapp.net`,
                "remoteJid": "6289530863358-1621036495@g.us"
            },
            message: {
                "liveLocationMessage": {
                    "title": `${fake}`,
                    'jpegThumbnail': fs.readFileSync('./database/blueimages/thumb.jpeg')
                }
            }
        }
        const fdoc = {
            key: {
                participant: '0@s.whatsapp.net'
            },
            message: {
                documentMessage: {
                    title: 'Halo bang',
                    jpegThumbnail: fs.readFileSync('./database/blueimages/thumb.jpeg')
                }
            }
        }
        const fsimi = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: "status@broadcast"
                } : {})
            },
            message: {
                "imageMessage": {
                    "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                    "mimetype": "image/jpeg",
                    "caption": 'simi botz',
                    "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                    "fileLength": "28777",
                    "height": 1080,
                    "width": 1079,
                    "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                    "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                    "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                    "mediaKeyTimestamp": "1610993486",
                    "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                }
            }
        }

        //SetReply
        const setReply = async (teks, member = []) => {
            let photo = pickRandom(fotoRandom)

            let contextInfo = {
                forwardingScore: 99999,
                isForwarded: true,
                mentionedJid: member,
                forwardedNewsletterMessageInfo: {
                    newsletterJid,
                    serverMessageId: 100,
                    newsletterName
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: botName,
                    body: `${ucapanWaktu} ${pushname}`,
                    previewType: "PHOTO",
                    thumbnailUrl: photo,
                    sourceUrl: `${web}`
                }
            }

            if (replyType === "web") {
                conn.sendMessage(from, {
                    contextInfo,
                    text: teks
                }, {
                    quoted: fcall
                })
            } else if (replyType === "web2") {
                conn.sendMessage(from, {
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            mediaType: 3,
                            renderLargerThumbnail: true,
                            thumbnailUrl: photo,
                            sourceUrl: `https://wa.me/${botNumber}?text=Hello`
                        }
                    },
                    text: teks
                }, {
                    quoted: m
                })
            } else if (replyType === "mess") {
                conn.sendMessage(from, {
                    id: m.key.id,
                    contextInfo: {
                        forwardingScore: 50,
                        isForwarded: true
                    },
                    showAdAttribution: true,
                    text: teks
                }, {
                    quoted: m
                });
            } else if (replyType === "ftoko") {
                conn.sendMessage(from, {
                    text: teks
                }, {
                    quoted: ftoko
                });
            } else if (replyType === "document") {
                conn.sendMessage(m.chat, {
                    document: fs.readFileSync("./package.json"),
                    fileName: '© Rangelofficial',
                    mimetype: "application/vnd.ms-excel",
                    fileLength: 999999999,
                    bpageCount: 10903,
                    //jpegThumbnail: fs.readFileSync('./database/blueimages/thumbnaildokumen.jpg'),
                    caption: Ehztext(teks),
                    contextInfo: {
                        mentionedJid: [sender],
                        forwardingScore: 9999999,
                        isForwarded: true,
                        externalAdReply: {
                            showAdAttribution: false,
                            title: botName,
                            body: `${ucapanWaktu} kak ${pushname}`,
                            thumbnailUrl: photo,
                            mediaType: 1,
                            sourceUrl: `${web}`,
                        }
                    }
                }, {
                    quoted: m,
                    ephemeralExpiration: 86400
                });
            } else {
                conn.sendMessage(from, {
                    text: "Error SetReply Tidak Di Temukan"
                })
            }
        }
        //Message
        require("./message.js")(senderNumber, prefix, command, setReply)
        const reply = async (teks) => {
            conn.sendMessage(from, {
                text: teks,
                mentions: await ments(teks)
            }, {
                quoted: fcall
            })
        }
        const sendvn = (teks) => {
            conn.sendMessage(from, {
                audio: {
                    url: teks
                },
                ptt: true,
                waveform: [0, 0, 50, 0, 0, 0, 10, 80, 10, 60, 10, 99, 60, 30, 10, 0, 0, 0],
                mimetype: 'audio/mpeg'
            }, {
                quoted: m
            })
        }
        const sendSticker = (teks) => {
            conn.sendMessage(from, {
                sticker: {
                    url: teks
                }
            }, {
                quoted: m
            })
        }
        const sendMusic = (teks) => {
            let img = {
                url: pickRandom(fotoRandom),
                type: "image/jpeg"
            }
            let url = `https://www.youtube.com/@rangelbot`

            let contextInfo = {
                externalAdReply: {
                    showAdAttribution: true,
                    title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`,
                    body: `   ━━━━⬤──────────    klik `,
                    description: 'Now Playing ....',
                    mediaType: 2,
                    thumbnailUrl: img.url,
                    mediaUrl: url
                }
            }

            conn.sendMessage(from, {
                contextInfo,
                mimetype: 'audio/mp4',
                audio: teks
            }, {
                quoted: m
            })
        }
        // AUTO SHOLAT 
        conn.autoshalat = conn.autoshalat ? conn.autoshalat : {}
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.id : m.sender
        let id = m.chat
        if (id in conn.autoshalat) {
            return false
        }
        let jadwalSholat = {
            shubuh: '04:29',
            terbit: '05:44',
            dhuha: '06:02',
            dzuhur: '12:02',
            ashar: '15:15',
            magrib: '17:52',
            isya: '19:01',
        }
        const datek = new Date((new Date).toLocaleString("en-US", {
            timeZone: "Africa/Lagos"
        }));
        const hours = datek.getHours();
        const minutes = datek.getMinutes();
        const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
        for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
            if (timeNow === waktu) {
                let caption = Ehztext(`Hi ${pushname},\nThe time for *${prayer}* has arrived, take ablution water and pray immediately🙂.\n\n*${time}*\n_for the Makassar area and surrounding areas._`)
                conn.autoshalat[id] = [
                    setReply(caption),
                    setTimeout(async () => {
                        delete conn.autoshalat[m.chat]
                    }, 57000)
                ]
            }
        }
        // publik & Self And Banchat
        if (!publik && !itsMe && !isOwner && !theOwner) return
        if (isGroup && isBanchat) {
            if (!itsMe && !isOwner) return
        }
        // Mute Chat grub
        if (isGroup) {
            let mut = db.data.chats[m.chat].mute
            if (mut && !isGroupAdmins && !isOwner && !isGroupOwner) {
                return
            }
        }



        const pickRandom = (arr) => {
            return arr[Math.floor(Math.random() * arr.length)]
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? conn.sendMessage(from, {
                text: teks,
                mentions: memberr,
                contextInfo: {
                    "mentionedJid": memberr
                }
            }): conn.sendMessage(from, {
                mentions: memberr,
                text: teks,
                contextInfo: {
                    "mentionedJid": memberr
                }
            }, {
                quoted: dev
            })
        }
        const math = (teks) => {
            return Math.floor(teks)
        }
        const sendGif = (teks, teksnya) => {
            conn.sendMessage(from, {
                video: teks,
                caption: "Nih!",
                gifPlayback: true
            }, {
                quoted: dev
            })
        };

        //FUNCTION ONLY
        /*/Bot tidak bisa di akses di pc kecuali premium
        if(!isGroup && !isPremium && isCmd) {
        let teks = `Kamu bukan user premium
        silahkan upgrade ke premium agar bisa menggunakan 
        bot secara private chat\n\n${sgc}
        `
        return conn.sendMessage(from,{text: teks})
        }*/
        //user pc

        //AUTO BLOCK CMD
        for (let i = 0; i < listcmdblock.length; i++) {
            if (command === listcmdblock[i].cmd) {
                if (autoblockcmd) {
                    return setReply(mess.block.Bsystem)
                } else {
                    return setReply(mess.block.Bowner)
                }
            }
        }

        //FITUR USER PREMIUM
        if (!checkDataName("premium", "", DataId)) {
            await createDataId("premium", DataId)
        }
        let userPremium = DataId.filter(item => item.name == "premium")
        for (let i of userPremium[0].id) {
            if (command == i && !isPremium) return setReply(`Kamu bukan user premium`)
        }

        //FITUR KHUSUS OWNER
        if (!checkDataName("commands", "", DataId)) {
            await createDataId("commands", DataId)

        }
        let ownerCommands = DataId.filter(item => item.name == "commands")
        for (let i of ownerCommands[0].id) {
            if (command == i && !isOwner) return onlyOwner()
        }

        //FITUR USER LIMIT
        if (!checkDataName("limit", "", DataId)) {
            await createDataId("limit", DataId)
        }
        let userLimit = DataId.filter(item => item.name == "limit")
        for (let i of userLimit[0].id) {
            if (!isOwner && command == i) {
                if (!isPremium && db.data.users[sender].limit < 1) return reply(`Your limit has been used up, please send ${prefix}limit to check the limit.`)
                if (!isPremium) {
                    db.data.users[sender].limit -= 1
                    conn.sendMessage(from, {
                        text: `*\`Your remaining limit ${db.data.users[sender].limit}\`*`
                    }, {
                        quoted: dev
                    })
                }

            }
        }
        //Auto Hit 
        expiredCmd(hitnya, dash)
        const thisHit = `${getHit("run", hitnya)}`
        if (isCmd) {
            db.data.users[sender].hit += 1
            cmdAdd("run", "1d", hitnya)
            Succes(toFirstCase(command), dash, allcommand)
        }
        //××××××××××××××××{××××//
        const addSpammer = function(jid, _db) {
            let position = false
            Object.keys(_db).forEach((i) => {
                if (_db[i].id === jid) {
                    position = i
                }
            })
            if (position !== false) {
                _db[position].spam += 1
            } else {
                let bulin = ({
                    id: jid,
                    spam: 1
                })
                _db.push(bulin)
            }
        }

        const FinisHim = async function(jid, _db) {
            let position = false
            Object.keys(_db).forEach((i) => {
                if (_db[i].id === jid) {
                    position = i
                }
            })
            if (position !== false) {
                if (_db[position].spam > 7) {
                    if (db.data.users[sender].banned.status || !isOwner) {
                        return
                    }
                    let obj = {
                        id: senderNumber,
                        status: true,
                        date: calender,
                        reason: "Spam Bot"
                    }
                    db.data.users[woke].banned = obj
                    console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
                    setReply("Kamu telah di banned karena telah melakukan spam")
                }
            } else {
                console.log(`Spam ke ${_db[position].spam}`)
            }
        }
        //System Expired
        _sewa.expiredCheck(conn, sewa)
        _prem.expiredCheck(premium)
        //autoClearChat(conn,clearchat)

        //ANTI SPAM BERAKHIR
        if (SpamExpired(senderNumber, "Case", AntiSpam)) {
            let position = false
            for (let i of spammer) {
                if (i.id == senderNumber) {
                    position = i
                }
            }

            if (position !== false) {
                spammer.splice(position, 1)
                console.log(chalk.bgGreen(color("[  Remove ]", "black")), "Sukses remove spammer")
            }
        }


        SpamExpired(senderNumber, "NotCase", AntiSpam)
        if (isBanned && !isOwner) {
            return
        } //user terbanned
        if (isCmd && cekSpam("Case", senderNumber, AntiSpam)) {
            addSpammer(senderNumber, spammer)
            FinisHim(senderNumber, spammer)
            console.log(chalk.bgYellowBright(color("[  SPAM  ]", "black")), "antispam Case aktif")
            return
        }

        //ANTI SPAM PRIVATE CHAT
        if (antiSpam && isCmd && msgFilter.isFiltered(from) && !isGroup && !itsMe && !isOwner) {
            addSpam("Case", senderNumber, "5s", AntiSpam)
            addSpammer(senderNumber, spammer)
            return setReply("`YOO,STOP SPAMMING CMD`")
        }

        //ANTI SPAM GROUP CHAT     
        if (antiSpam && isCmd && msgFilter.isFiltered(from) && isGroup && !itsMe && !isOwner) {
            addSpam("Case", senderNumber, "10s", AntiSpam)
            addSpammer(senderNumber, spammer)
            return setReply("`YOO,STOP SPAMMING CMD`")
        }
        if (isCmd && !isOwner) msgFilter.addFilter(from)

        //Auto level users
        if (user && isCmd && userExp >= requiredExp) {
            //const { userXp, userLeveling, } = (await import("../lib/user.js"))
            let link = 'https://telegra.ph/file/9528a0b81d1b46bdb5507.jpg'
            let level = userLevel + 1
            let uang = 1000 * level

            db.data.users[m, sender].exp = userExp - requiredExp
            db.data.users[m.sender].level += 1
            db.data.users[m.sender].money += 1000 * level
            //db.data,user[m.sender].grade = userLeveling(`${db.data.users[sender].level + 1}`)

            let contextInfo = {
                externalAdReply: {
                    showAdAttribution: false,
                    mediaType: 1,
                    title: 'Exp',
                    thumbnailUrl: link,
                    renderLargerThumbnail: true,
                    mediaUrl: 'https://chat.whatsapp.com/GsX10XuzZqQ99jccdcDasi',
                    sourceId: botName,
                    sourceUrl: 'https://chat.whatsapp.com/GsX10XuzZqQ99jccdcDasi'
                }
            }
            let mentions = [sender]
            let text = Ehztext(`◪ *Nama:* ${pushname}
├◆ *Pangkat:* ${userLeveling(`${db.data.users[sender].level + 1}`)}
├◆ *Saldo:* + Rp ${uang.toLocaleString()}
╰◆ *Level:*  ${userLevel} ➠ ${userLevel + 1}

*Note:* ↓
Gunakan saldo untuk membeli limit tambahan
dengan fitur ${prefix}buylimit`)
            //conn.sendMessage(from,{contextInfo, text,mentions})
            setReply(text)
        }
        //USER AFK
        if (user && user.afk > -1) {

            setReply(`${pushname}, Kamu telah berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afk)}`.trim())
            user.afk = -1
            user.afkReason = ''
        }
        let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        for (let jid of jids) {
            const nama = await conn.getName(jid)
            let userAfk = global.db.data.users[jid]
            if (!userAfk) continue
            let afkTime = userAfk.afk
            if (!afkTime || afkTime < 0) continue
            let reason = userAfk.afkReason || ''
            setReply(`
Jangan tag dia!
*${nama}* sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }
        //Auto Sticker Online
        if (db.data.sticker[budy]) {
            if (cekSpam("NotCase", senderNumber, AntiSpam)) return
            addSpam("NotCase", senderNumber, "5s", AntiSpam)
            conn.sendMessage(from, {
                sticker: {
                    url: db.data.sticker[budy].link
                }
            }, {
                quoted: dev
            })
        }
        //Auto VN Online  
        if (db.data.audio[budy]) {
            if (cekSpam("NotCase", senderNumber, AntiSpam)) return
            let nono = {
                key: {
                    fromMe: false,
                    participant: `0@s.whatsapp.net`,
                    ...(from ? {
                        remoteJid: "16505434800@s.whatsapp.net"
                    } : {})
                },
                message: {
                    "extendedTextMessage": {
                        "text": `${pushname} \n「 audio 」 ${db.data.audio[budy].name}`,
                        "title": `Hmm`,
                        'jpegThumbnail': fs.readFileSync('./database/blueimages/thumb.jpeg')
                    }
                }
            }
            const iniQuoted = mentionByReply ? m.quoted.fakeObj : nono
            conn.sendMessage(from, {
                audio: {
                    url: db.data.audio[budy].link
                },
                ptt: true,
                mimetype: 'audio/mpeg'
            }, {
                quoted: iniQuoted
            })
            addSpam("NotCase", senderNumber, "5s", AntiSpam)
        }
        //onlyOwner
        const onlyOwner = async () => {
            let teks = Ehztext(``)
            let contextInfo = {
                forwardingScore: 999,
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterJid,
                    serverMessageId: 100,
                    newsletterName
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: 'ACCESS DENIED ❌',
                    body: '',
                    previewType: "PHOTO",
                    thumbnailUrl: pickRandom(fotoRandom),
                    sourceUrl: ''
                }
            }

            conn.sendMessage(from, {
                contextInfo,
                text: `${teks}`
            }, {
                quoted: ftoko
            })
        }
        //onlyAdmin
        const onlyAdmin = async () => {
            let teks = Ehztext(`*\`HUH\`*`)
            let contextInfo = {
                forwardingScore: 999,
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterJid,
                    serverMessageId: 100,
                    newsletterName
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: 'ACCESS DENIED ❌',
                    body: '',
                    previewType: "PHOTO",
                    thumbnailUrl: pickRandom(fotoRandom),
                    sourceUrl: ''
                }
            }

            conn.sendMessage(from, {
                contextInfo,
                text: `${teks}`
            }, {
                quoted: ftoko
            })
        }
        //onlyAdmin
        const onlyBadmin = async () => {
            let teks = Ehztext(`*\`HUH\`*`)
            let contextInfo = {
                forwardingScore: 999,
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterJid,
                    serverMessageId: 100,
                    newsletterName
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: 'ACCESS DENIED ❌',
                    body: '',
                    previewType: "PHOTO",
                    thumbnailUrl: pickRandom(fotoRandom),
                    sourceUrl: ''
                }
            }

            conn.sendMessage(from, {
                contextInfo,
                text: `${teks}`
            }, {
                quoted: ftoko
            })
        }
        //onlyPremium
        const onlyPremium = async () => {
            let teks = Ehztext(`*\`HUH\`*`)
            let contextInfo = {
                forwardingScore: 999,
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterJid,
                    serverMessageId: 100,
                    newsletterName
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: 'ACCESS DENIED ❌',
                    body: '',
                    previewType: "PHOTO",
                    thumbnailUrl: pickRandom(fotoRandom),
                    sourceUrl: ''
                }
            }

            conn.sendMessage(from, {
                contextInfo,
                text: `${teks}`
            }, {
                quoted: ftoko
            })
        }
        //onlyGroup
        let teks = Ehztext(`Hallo ${pushname}\nSaat Ini Tindakan kamu di batasi oleh Dev Kenshin\nMinta Acc Dulu ya`)
        const onlyGroup = async () => {
            let contextInfo = {
                forwardingScore: 999,
                isForwarded: true,
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterJid,
                    serverMessageId: 100,
                    newsletterName
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: 'ＡＫＳＥＳ ＤＩ ＴＯＬＡＫ ❌',
                    body: '',
                    previewType: "PHOTO",
                    thumbnailUrl: pickRandom(fotoRandom),
                    sourceUrl: ''
                }
            }

            conn.sendMessage(from, {
                contextInfo,
                text: `${teks}\n` + readmore + `\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`
            }, {
                quoted: ftoko
            })
        }
        const onlyLimit = async () => {
            //let image = fs.readFileSync("stik/bot.jpg")
            let yameteh = `*乂 Limit - Expired*

Maaf kak @${sender.split('@')[0]} limit kamu sudah habis!`
            conn.sendMessage(from, {
                text: yameteh
            }, {
                quoted: fkontak
            })
        }

        const onlyGlimit = async () => {
            //let image = fs.readFileSync("stik/bot.jpg") // Sementara tar gw ganti image nya
            let kyahh = `*乂 Limit - Expired*
Maaf kak @${sender.split('@')[0]} limit game kamu sudah habis!`
            conn.sendMessage(from, {
                text: kyahh
            }, {
                quoted: fkontak
            })
        }
        // SendAnti
        const sendAnti = (teks) => {
            let contextInfo = {
                mentionedJid: [sender],
                externalAdReply: {
                    showAdAttribution: true,
                    title: `${botName}`,
                    body: `${baileysVersion}`,
                    previewType: "PHOTO",
                    thumbnailUrl: pickRandom(fotoRandom),
                    sourceUrl: `${sgc}`
                }
            }

            conn.sendMessage(from, {
                contextInfo,
                text: `${teks}\n` + readmore + `\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`
            }, {
                quoted: fkontak
            })
        }
        //AUTO BIO BOT
        if (settings) {} else global.db.data.settings['settingbot'] = {
            status: new Date() * 1,
        }
        if ((new Date() * 1 - settings.status > 2000) && settings && settings.autoBio) {
            let data = global.db.data.others['runtime']
            let time = (new Date - data.runtime)
            let bio = `${botName} 🤖 || 🌎 MODE: ${publik? 'PUBLIC' : 'SELF'} || 🎨 CREATE BY ${ownerName}`
            await conn.updateProfileStatus(bio).catch(_ => _)
            settings.status = new Date() * 1
        }
        // Function Loading 
        async function loading() {
            let emotLoad = [`${themeemoji}`]
            await conn.sendMessage(from, {
                react: {
                    text: emotLoad,
                    key: m.key
                }
            })
        }
        async function loadingerror() {
            let emotLoaderr = ["❌"]
            await conn.sendMessage(from, {
                react: {
                    text: emotLoaderr,
                    key: m.key
                }
            })
        }
        //FUNCTION AREA ===============

        //Make Sticker
        async function makeSticker(media, Sticker, StickerTypes) {
            let jancok = new Sticker(media, {
                pack: packName, // The pack name
                author: authorName, // The author name
                type: StickerTypes.FULL, // The sticker type
                categories: ['🤩', '🎉'], // The sticker category
                id: '12345', // The sticker id
                quality: 70, // The quality of the output file
                background: '#FFFFFF00' // The sticker background color (only for full stickers)
            })
            let stok = getRandom(".webp")
            let nono = await jancok.toFile(stok)
            let nah = fs.readFileSync(nono)
            await conn.sendMessage(from, {
                sticker: nah
            }, {
                quoted: dev
            })
            await fs.unlinkSync(stok)
        }


        //-------------------- 》SECURITY《 ------------------\\
        //ANTI VIEWONCE 
        if ((type == 'viewOnceMessage' || isQuotedViewOnce) && (isAntiViewOnce || budy.startsWith("Readviewonce"))) {
            const {
                downloadContentFromMessage
            } = (await import('@whiskeysockets/baileys')).default
            if (isQuotedViewOnce) {
                var view = m.quoted.message
            } else {
                var view = m.message.viewOnceMessage.message
            }

            let Type = Object.keys(view)[0]
            let media = await downloadContentFromMessage(view[Type], Type == 'imageMessage' ? 'image' : 'video')
            let buffer = Buffer.from([])
            for await (const chunk of media) {
                buffer = Buffer.concat([buffer, chunk])
            }
            if (/video/.test(Type)) {
                conn.sendFile(m.chat, buffer, 'media.mp4', view[Type].caption || '', m)
            } else if (/image/.test(Type)) {
                conn.sendFile(m.chat, buffer, 'media.jpg', view[Type].caption || '', m)
            }
        }
        // ANTI BOT
        if (isGroup && isAntiBot) {
            if (m.isBaileys && m.fromMe == false) {
                if (!isBotGroupAdmins) {} else {
                    sendAnti(`*Another Bot Detected*\n\nHusshhh Get away from this group!!!`)
                    return await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                }
            }
        }
        // ANTI IMAGE
        if (isGroup && isAntiImage && isHanMedia) {
            if (isHanMedia === "imageMessage") {
                if (isGroupAdmins) return setReply('*IMAGE DETECTED*\n*')
                if (!isBotGroupAdmins) {} else {
                    sendAnti(`\`\`\`「 Image Detected 」\`\`\`\n\nSorry,Karna Saya Menghapus Nya, Karna admin/owner Mengaktifkan Anti-Image Pada Groip Ini`)
                    return conn.sendMessage(m.chat, {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: m.key.id,
                            participant: m.key.participant
                        }
                    })
                }
            }
        }
        // ANTI VIDEO
        if (isGroup && isAntiVideo && isHanMedia) {
            if (isHanMedia === "videoMessage") {
                if (!isBotGroupAdmins) {} else {
                    sendAnti(`\`\`\`「 Video Detected 」\`\`\`\n\nSorry, Because I Deleted It, Because Admin/Owner Activated Anti-Video On This Group`)
                    return conn.sendMessage(m.chat, {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: m.key.id,
                            participant: m.key.participant
                        }
                    })
                }
            }
        }
        // ANTI STICKER 
        if (isGroup && isAntiSticker && isHanMedia) {
            if (isHanMedia === "stickerMessage") {
                if (!isBotGroupAdmins) {} else {
                    sendAnti(`\`\`\`「 Sticker Detected 」\`\`\`\n\nSorry,Karna Saya Menghapus Nya, Karna admin/owner Mengaktifkan Anti-Sticker Pada Groip Ini`)
                    return conn.sendMessage(m.chat, {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: m.key.id,
                            participant: m.key.participant
                        }
                    })
                }
            }
        }
        // ANTI AUDIO
        if (isGroup && isAntiAudio && isHanMedia) {
            if (isHanMedia === "audioMessage") {
                if (!isBotGroupAdmins) {} else {
                    sendAnti(`\`\`\`「 Audio Detected 」\`\`\`\n\nSorry,Karna Saya Menghapus Nya, Karna admin/owner Mengaktifkan Anti-Audio Pada Groip Ini`)
                    return conn.sendMessage(m.chat, {
                        delete: {
                            remoteJid: m.chat,
                            fromMe: false,
                            id: m.key.id,
                            participant: m.key.participant
                        }
                    })
                }
            }
        }
        //ANTI LINK GROUP

        if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
            if (isGroupAdmins) return setReply('*「 GROUP LINK DETECTED 」*\nAs a group admin, you are allowed to send links.');
            if (!isBotGroupAdmins) return setReply('*「 GROUP LINK DETECTED 」*\nI am not an admin, so I cannot delete the message or take action.');
            if (ownerNumber.includes(sender)) return setReply('*「 GROUP LINK DETECTED 」*\nAs the bot owner, you are exempt from the group antilink restrictions.');

            let linkgc = await conn.groupInviteCode(from);
            if (budy.includes(`${linkgc}`)) {
                return setReply('*「 GROUP LINK DETECTED 」*\nThis is the group link, so no action will be taken.');
            }

            await setReply('*「 GROUP LINK DETECTED 」*\nYou have sent a prohibited group link. As per the rules of this group, action will be taken.');
            await sleep(2000);

            if (isBotGroupAdmins) {
                await conn.sendMessage(from, {
                    delete: m.key
                });
                conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => {
                    setReply('*「 GROUP LINK DETECTED 」*\nFailed to remove the user. Ensure the bot has the necessary admin permissions.');
                });
            }
        }

        //Auto kick jika itu user yang sudah di tandai
        if (kickon) {
            if (isGroup && kickon.includes(sender)) {

                let teks = `${senderNumber} tidak di izinkan masuk
karena dia telah keluar dari group ini sebelumnya,
dan juga sudah di tandai sebagai user biadap`
                await conn.sendMessage(from, {
                    text: teks,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                }, {
                    quoted: dev
                })
                if (!isBotGroupAdmins) return conn.sendMessage(from, {
                    text: `Gagal  mengeluarkan @${sender} dari group karena bot bukan admin`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                }, {
                    quoted: dev
                })
                if (isBotGroupAdmins) conn.groupParticipantsUpdate(from, [sender], 'remove')
            }
        }




        //ANTI LINK 
        if (isGroup && isAntiLink) {
            if (budy.includes(`https:`)) {
                if (isGroupAdmins) return setReply(`${themeemoji}*「 LINK DETECTED 」*${themeemoji}\n*GROUP ADMINS ARE EXCEPTIONAL*`)
                if (ownerNumber.includes(sender)) return setReply(`${themeemoji}*「 LINK DETECTED  」*${themeemoji}`)
                let linkgc = await conn.groupInviteCode(from)
                if (budy.includes(`${linkgc}`)) return reply(`${themeemoji}*「 GROUP LINK DETECTED  」*${themeemoji}`)
                if (budy.includes('zin admin') || budy.includes('zinmin')) return setReply('Izin Admin diterima')
                setReply(` *「 LINK DETECTED 」*\`You sent a link, sorry you were kicked from the group`)
                setTimeout(() => {
                    if (isBotGroupAdmins) conn.sendMessage(from, {
                        delete: m.key
                    })
                    conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => {
                        setReply(`BOT MUST BE ADMIN`)
                    })
                }, 2000)
            }
        }

        //ANTI ASING/BULE OK
        if (isGroup && isBotGroupAdmins && isKickarea && !itsMe) {
            let member = await groupMembers.map(u => u.id)
            for (let i = 0; i < member.length; i++) {
                if (member[i].slice(0, 2) !== "62") {
                    let usersId = await groupMembers.find(u => u.id == member[i])
                    if (!usersId.groupAdmins) {
                        await conn.groupParticipantsUpdate(from, [member[i]], 'remove')
                        await sleep(1000)
                    }
                }
            }
        }

        //ANTI VIRUS
        if (isGroup && isAntiVirtex) {
            if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ')) {
                if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
                console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
                conn.sendMessage(m.chat, `*TANDAI TELAH DIBACA*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Bang yg ngirim virtex nih:* \nwa.me/${sender.split("@")[0]}`)
                if (!isBotGroupAdmins) {
                    return
                }
                if (isOwner) {
                    return
                }
                await conn.groupParticipantsUpdate(from, [sender], 'remove')
                conn.sendMessage(from, {
                    delete: m.key
                })
                await conn.sendMessage(`${botNumber}@s.whatsapp.net`, {
                    text: `*Hey owner a virtex was detected ${isGroup?`in ${groupName} group*`:''}`
                })
            }
        }


        //ANTI WA.ME
        if (isGroup && isAntiWame) {
            if (budy.includes('https://wa.me') || budy.includes('wa.me') || budy.includes('Https://wa.me') || budy.includes('Wa.me')) {
                if (!isBotGroupAdmins) {
                    return
                }
                setReply(`*LINK WA ME TERDETEKSI*\n\nMaaf bot akan menghapus link tersebut!!,\n\nhubungi Admin  untuk mematikan fitur anti wame`)
                conn.sendMessage(from, {
                    delete: m.key
                })
            }
        }

        // ANTI TOXIC




        //ANTI DELETE
        if (type == 'protocolMessage' && isAntidelete) {
            let mess = chatUpdate.messages[0].message.protocolMessage
            let chats = Object.entries(await conn.chats).find(([user, data]) => data.messages && data.messages[mess.key.id])
            if (chats[1] !== undefined) {
                let msg = JSON.parse(JSON.stringify(chats[1].messages[mess.key.id]))
                await conn.copyNForward(mess.key.remoteJid, msg).catch(e => console.log(e, msg))
            }
        }

        //====================================//




        // Secreto
        if (!isGroup) {
            if (!dev.key.fromMe && secreto.find(i => i.sender === sender)) {
                var dbx = secreto.find(i => i.sender === sender)
                if (dbx.status === 'ENTER-MESSAGE') {
                    if (['conversation', 'extendedTextMessage'].includes(dev.type)) {
                        var teks_balasan = `Hai kak, kamu menerima pesan balasan nih\n\nPesan Balasannya:\n${budy}\n\n\n_ingat pesan ini satu kali kirim saja yaa_`
                        conn.sendMessage(dbx.pengirim, {
                            text: teks_balasan
                        })
                        reply(`Sukses mengirimkan balasan, ingat pesan ini satu kali kirim saja yaa`)
                    } else {
                        var teks_balasan = `Hai kak, kamu menerima pesan balasan nih\n\nPesan Balasannya :\n${budy}\n\n\n_ingat pesan ini satu kali kirim saja yaa_`
                        var pes = await conn.sendMessage(dbx.pengirim, {
                            text: teks_balasan
                        })
                        conn.sendMessage(dbx.pengirim, {
                            forward: dev
                        }, {
                            quoted: pes
                        })
                        reply(`Sukses mengirimkan balasan, ingat pesan ini satu kali kirim saja yaa`)
                    }
                    var pos = secreto.indexOf(dbx)
                    secreto.splice(pos, 1)
                    fs.writeFileSync('./database/secreto_balas.json', JSON.stringify(secreto, null, 2))
                }
            }
        }




        //GAME MATH FUNCTION
        conn.math = conn.math ? conn.math : {}
        if (isGroup && from in conn.math) {
            if (!isGroup) {
                return
            }
            //console.log(conn.math)
            try {
                let id = from
                if (!(id in conn.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
                let math = JSON.parse(JSON.stringify(conn.math[id][1]))
                if (budy == math.result) {
                    user.balance += math.bonus
                    clearTimeout(conn.math[id][3])
                    delete conn.math[id]
                    await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
                } else {
                    /*
if (--conn.math[id][2] == 0) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
setReply(`*kesempatan habis!*\njawabannya adalah *${math.result}*`)
} else setReply(`*jawaban salah!*\nmasih ada ${conn.math[id][2]} kesempatan`)
}
*/
                }
            } catch (err) {
                console.log(err)
            }
        }

        //GAME  teka teki Function
        conn.tekateki = conn.tekateki ? conn.tekateki : {}
        if (isGroup && from in conn.tekateki) {
            if (!isGroup) {
                return
            }
            const similarity = require('similarity')
            const threshold = 0.72
            let id = m.chat
            let json = JSON.parse(JSON.stringify(conn.tekateki[id][1]))

            if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
                user.balance += conn.tekateki[id][2]
                var teks1 = `*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tekateki[id][2]} Money 💸`
                reply(teks1)
                clearTimeout(conn.tekateki[id][3])
                delete conn.tekateki[id]
            } else if (similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
        }


        //GAME tebak kimia Function
        conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
        if (isGroup && from in conn.tebakkimia) {
            if (!isGroup) {
                return
            }
            const similarity = require('similarity')
            const threshold = 0.72
            let id = m.chat
            let json = JSON.parse(JSON.stringify(conn.tebakkimia[id][1]))
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(budy)

            if (budy.toLowerCase() == json.lambang.toLowerCase().trim()) {
                user.balance += conn.tebakkimia[id][2]
                global.db.data.users[m.sender].exp += 10
                var teks3 = `*GAME TEBAK KIMIA*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebakkimia[id][2]} Money 💸`
                reply(teks3)
                clearTimeout(conn.tebakkimia[id][3])
                delete conn.tebakkimia[id]
            } else if (similarity(budy.toLowerCase(), json.lambang.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
            // else setReply(`*Salah!*`)
        }



        //GAME Caklontong Function
        conn.caklontong = conn.caklontong ? conn.caklontong : {}
        if (isGroup && from in conn.caklontong) {
            if (!isGroup) {
                return
            }
            const similarity = require('similarity')
            const threshold = 0.72
            let id = m.chat
            let json = JSON.parse(JSON.stringify(conn.caklontong[id][1]))

            if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
                global.db.data.users[m.sender].exp += conn.caklontong[id][2]
                // global.db.data.users[m.sender].tiketcoin += 1
                setReply(`*Benar!*\n+${conn.caklontong[id][2]} XP\n+1500 Money\n${json.deskripsi}`)
                clearTimeout(conn.caklontong[id][3])
                delete conn.caklontong[id]
            } else if (similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
            // else setReply(`*Salah!*`)

        }


        //GAME tebak Lagu Function
        conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {}
        if (isGroup && from in conn.tebaklagu) {
            if (!isGroup) {
                return
            }
            const similarity = require('similarity')
            const threshold = 0.72
            let id = m.chat
            let json = JSON.parse(JSON.stringify(conn.tebaklagu[id][1]))

            if (budy.toLowerCase() == json.judul.toLowerCase().trim()) {
                user.balance += conn.tebaklagu[id][2]
                var teks4 = `*GAME TEBAK LAGU*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebaklagu[id][2]} Money 💸`
                reply(teks4)
                clearTimeout(conn.tebaklagu[id][3])
                delete conn.tebaklagu[id]
            } else if (similarity(budy.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
            // else setReply(`*Salah!*`)

        }


        //GAME tebaktebak Function
        conn.tebaktebak = conn.tebaktebak ? conn.tebaktebak : {}
        if (isGroup && from in conn.tebaktebak) {
            if (!isGroup) {
                return
            }
            const similarity = require('similarity')
            const threshold = 0.72
            let id = m.chat
            let json = JSON.parse(JSON.stringify(conn.tebaktebak[id][1]))

            if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
                user.balance += conn.tebaktebak[id][2]
                global.db.data.users[m.sender].exp += 50
                var teks5 = `*TEBAK TEBAKAN*\n\nJawaban Kamu Benar!\n Hadiah : +${conn.tebaktebak[id][2]} Money 💸\n EXP: +50`
                // global.db.data.users[m.sender].tiketcoin += 1
                reply(teks5)
                clearTimeout(conn.tebaktebak[id][3])
                delete conn.tebaktebak[id]
            } else if (similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
            // else setReply(`*Salah!*`)

        }
        //Game Family 100
        conn.family = conn.family ? conn.family : {}
        if (isGroup && from in conn.family) {
            if (!isGroup) {
                return
            }
            let similarity = require('similarity')
            let threshold = 0.72 // semakin tinggi nilai, semakin mirip
            let id = m.chat
            let room = conn.family[id]
            let textG = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
            if (!isSurrender) {
                let index = room.jawaban.indexOf(textG)

                if (index < 0) {
                    if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, textG))) >= threshold) return setReply('Dikit lagi!')
                }
                if (!isCmd && room.terjawab[index]) {
                    return
                }
                user.balance += room.winScore
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length

            let caption = `*GAME FAMILY100*

*Soal:* ${room.soal}

Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
 return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0]  : ''}`.trim() : false
 }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
     `.trim()

            conn.sendMessage(from, {
                text: `${caption}`,
                mentions: [room.terjawab + '@s.whatsapp.net']
            }, {
                quoted: dev
            }).then(msg => {
                conn.family[id].msg = msg
            }).catch(_ => _)
            if (isWin || isSurrender) delete conn.family[id]
            //if (isWin || isSurrender) clearTimeout(200000)
        }
        /*/AUTO BLOCK NOMER ASING +212
        let nomerAsing = senderNumber.startsWith('212')
        if (nomerAsing) {
        if(!db.data.users[sender].banned.status) {
        db.data.users[sender].banned.status = true
        db.data.users[sender].banned.reason = "Nomer asing +212"
        }
        console.log(`Nomer asing dari ${senderNumber}`)
        await reply("you are not allowed to using this bot")
        if(!isGroup) await conn.sendMessage(from, {text: "stupid"},{quoted: lep})
        await conn.chatModify({delete: true,lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]},sender)
        return conn.updateBlockStatus(sender, "block") 
        } 
        	*/

        //sendFileUrl
        const sendFileFromUrl = async (from, url, caption, dev, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return conn.sendMessage(from, {
                    video: await convertGif(url),
                    caption: caption,
                    gifPlayback: true,
                    mentions: men ? men : []
                }, {
                    quoted: dev
                })
            }
            let type = mime.split("/")[0] + "Message"
            if (mime.split("/")[0] === "image") {
                return conn.sendMessage(from, {
                    image: await getBuffer(url),
                    caption: caption,
                    mentions: men ? men : []
                }, {
                    quoted: dev
                })
            } else if (mime.split("/")[0] === "video") {
                return conn.sendMessage(from, {
                    video: await getBuffer(url),
                    caption: caption,
                    mentions: men ? men : []
                }, {
                    quoted: dev
                })
            } else if (mime.split("/")[0] === "audio") {
                return conn.sendMessage(from, {
                    audio: await getBuffer(url),
                    caption: caption,
                    mentions: men ? men : [],
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: dev
                })
            } else {
                return conn.sendMessage(from, {
                    document: await getBuffer(url),
                    mimetype: mime,
                    caption: caption,
                    mentions: men ? men : []
                }, {
                    quoted: dev
                })
            }
        }

        //ANONYMOUS CHAT
        const roomChat = Object.values(anonChat).find(room => [room.a, room.b].includes(m.sender) && room.state == 'CHATTING')
        const roomA = Object.values(anonChat).find(room => room.a == m.sender)
        const roomB = Object.values(anonChat).find(room => room.b == m.sender)
        const room = Object.values(anonChat).find(room => room.state == 'WAITING' && room.b == "")

        if (roomChat && !isCmd && !isGroup && roomChat.b !== "") {
            //let nono = m.quoted.fakeObj? m.quoted.fakeObj : m
            let other = [roomChat.a, roomChat.b].find(user => user !== m.sender)
            m.copyNForward(other, true)
        }

        if (room && Date.now() >= room.expired) {

            await conn.sendMessage(room.a, {
                text: "Partner tidak di temukan\nKamu telah keluar dari room anonymous"
            })
            anonChat.splice(anonChat.indexOf(room, 1))
        }
        //Suit PvP
        conn.suit = conn.suit ? conn.suit : {}
        let roof = Object.values(conn.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
        if (roof) {
            let win = ''
            let tie = false
            if (sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(budy) && isGroup && roof.status == 'wait') {
                if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(budy)) {
                    conn.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, dev)
                    delete conn.suit[roof.id]
                    return !0
                }
                roof.status = 'play'
                roof.asal = m.chat
                clearTimeout(roof.waktu)
                //delete roof[roof.id].waktu
                conn.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, {
                    mentions: [roof.p, roof.p2]
                })
                if (!roof.pilih) conn.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
                if (!roof.pilih2) conn.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
                roof.waktu_milih = setTimeout(() => {
                    if (!roof.pilih && !roof.pilih2) conn.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
                    else if (!roof.pilih || !roof.pilih2) {
                        win = !roof.pilih ? roof.p2 : roof.p
                        conn.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
                    }
                    delete conn.suit[roof.id]
                    return !0
                }, roof.timeout)
            }
            let jwb = sender == roof.p
            let jwb2 = sender == roof.p2
            let g = /gunting/i
            let b = /batu/i
            let k = /kertas/i
            let reg = /^(gunting|batu|kertas)/i
            if (jwb && reg.test(budy) && !roof.pilih && !isGroup) {
                roof.pilih = reg.exec(budy.toLowerCase())[0]
                roof.text = budy
                setReply(`Kamu telah memilih ${budy} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
                if (!roof.pilih2) conn.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            if (jwb2 && reg.test(budy) && !roof.pilih2 && !isGroup) {
                roof.pilih2 = reg.exec(budy.toLowerCase())[0]
                roof.text2 = budy
                setReply(`Kamu telah memilih ${budy} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
                if (!roof.pilih) conn.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
            }
            let stage = roof.pilih
            let stage2 = roof.pilih2
            if (roof.pilih && roof.pilih2) {
                clearTimeout(roof.waktu_milih)
                if (b.test(stage) && g.test(stage2)) win = roof.p
                else if (b.test(stage) && k.test(stage2)) win = roof.p2
                else if (g.test(stage) && k.test(stage2)) win = roof.p
                else if (g.test(stage) && b.test(stage2)) win = roof.p2
                else if (k.test(stage) && b.test(stage2)) win = roof.p
                else if (k.test(stage) && g.test(stage2)) win = roof.p2
                else if (stage == stage2) tie = true
                conn.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, {
                    mentions: [roof.p, roof.p2]
                })
                delete conn.suit[roof.id]
            }
        }




        //TicTacToei

        conn.tictac = conn.tictac ? conn.tictac : {}
        let roomf = Object.values(conn.tictac).find(roomf => roomf.id && roomf.tictac && roomf.state && roomf.id.startsWith('tictactoe') && [roomf.tictac.playerX, roomf.tictac.playerO].includes(sender) && roomf.state == 'PLAYING')
        if (roomf) {
            let ok
            let isWin = !1
            let isTie = !1
            let isSurrender = !1
            // reply(`[DEBUG]\n${parseInt(m.text)}`)
            if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(budy)) return
            isSurrender = !/^[1-9]$/.test(budy)
            if (sender !== roomf.tictac.currentTurn) { // nek wayahku
                if (!isSurrender) return !0
            }
            if (!isSurrender && 1 > (ok = roomf.tictac.turn(sender === roomf.tictac.playerO, parseInt(budy) - 1))) {
                setReply({
                    '-3': '*TICTACTOE TELAH BERAKHIR*',
                    '-2': '*INVALID*',
                    '-1': '*POSISI INVALID*',
                    0: 'Posisi Invalid',
                } [ok])
                return !0
            }
            if (sender === roomf.tictac.winner) isWin = true
            else if (roomf.tictac.board === 511) isTie = true
            let arr = roomf.tictac.render().map(v => {
                return {
                    X: '❌',
                    O: '⭕',
                    1: '1️⃣',
                    2: '2️⃣',
                    3: '3️⃣',
                    4: '4️⃣',
                    5: '5️⃣',
                    6: '6️⃣',
                    7: '7️⃣',
                    8: '8️⃣',
                    9: '9️⃣',
                } [v]
            })
            if (isSurrender) {
                roomf.tictac._currentTurn = sender === roomf.tictac.playerX
                isWin = true
            }
            let winner = isSurrender ? roomf.tictac.currentTurn : roomf.tictac.winner
            let str = `*TICTACTOE*

 ID: ${roomf.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} *MENANG!*` : isTie ? `*HASIL SERI*` : `Giliran ${['❌', '⭕'][1 * roomf.tictac._currentTurn]} (@${roomf.tictac.currentTurn.split('@')[0]})`}
❌: @${roomf.tictac.playerX.split('@')[0]}
⭕: @${roomf.tictac.playerO.split('@')[0]}

`
            if ((roomf.tictac._currentTurn ^ isSurrender ? roomf.x : roomf.o) !== m.chat)
                roomf[roomf.tictac._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
            if (roomf.x !== roomf.o) conn.sendText(roomf.x, str, m, {
                mentions: parseMention(str)
            })
            conn.sendText(roomf.o, str, m, {
                mentions: parseMention(str)
            })
            if (isTie || isWin) {
                delete conn.tictac[roomf.id]
            }
        }
        async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
            const {
                default: {
                    Image
                }
            } = await import('node-webpmux')
            const img = new Image()
            const json = {
                'sticker-pack-id': 'parel-kntll',
                'sticker-pack-name': packname,
                'sticker-pack-publisher': author,
                'emojis': categories,
                'is-avatar-sticker': 1,
                ...extra
            }
            let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
            let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
            let exif = Buffer.concat([exifAttr, jsonBuffer])
            exif.writeUIntLE(jsonBuffer.length, 14, 4)
            await img.load(buffer)
            img.exif = exif
            return await img.save(null)
        }

       conn.sendImageAsSticker = async (jid, media, m, options = {}) => {
            let {
                Sticker,
                StickerTypes
            } = require('wa-sticker-formatter')
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`
            }
            let jancok = new Sticker(media, {
                pack: global.packname, // The pack name
                author: global.author, // The author name
                type: StickerTypes.FULL, // The sticker type
                categories: ['🤩', '🎉'], // The sticker category
                id: '12345', // The sticker id
                quality: 50, // The quality of the output file
                background: '#FFFFFF00' // The sticker background color (only for full stickers)
            })
            let stok = getRandom(".webp")
            let nono = await jancok.toFile(stok)
            let nah = fs.readFileSync(nono)
            await conn.sendMessage(jid, {
                sticker: nah
            }, {
                quoted: m
            })
            return await fs.unlinkSync(stok)
        }
        // ==========================================================\\
        try {
            switch (command) {
                case 'self':
                    if (!isOwner) return setReply(mess.only.owner);
                    await loading()
                    if (publik == false) return setReply('*`IT IS ALREADY IN SELF MODE`*');
                    publik = false;
                    let breh = `*\`SELF MODE IS NOW ACTIVE\`*`;
                    setReply(breh);
                    break;
                case 'public':
                    if (!isOwner) return setReply(mess.only.owner);
                    await loading()
                    if (publik) return setReply('*`IT IS ALREADY IN PUBLIC MODE`*');
                    publik = true;
                    let bab = `*\`PUBLIC MODE IS NOW ACTIVE\`*`;
                    setReply(bab);
                    break;
                case 'mode':
                    if (!isOwner) return setReply(mess.only.owner);
                    await loading()
                    let modeStatus = publik ? '`THE BOT IS CURRENTLY IN PUBLIC MODE.`' : '`THE BOT IS CURRENTLY IN PRIVATE MODE.`';
                    setReply(modeStatus);
                    break;
                case 'menu':
                case 'bluedemon': {
                await loading()
                    let {
                        allmenu,
                        fitur
                    } = require('./help')
                    let menunya = allmenu(limitCount, isPremium, thisHit, publik, sender, prefix, pushname)
                    let fiturnya = fitur()
                    let data = global.db.data.others['runtime']
                    let time = (new Date - data.runtime) || "Not detected"
                    //let rm = pickRandom(pdf)
                    if (setmenu == "document") {
                        conn.sendMessage(m.chat, {
                            document: fs.readFileSync("./package.json"),
                            fileName: wm,
                            mimetype: "application/vnd.ms-powerpoint",
                            jpegThumbnail: fs.readFileSync("./database/blueimages/thumb.jpeg"),
                            caption: menunya + fiturnya,
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: true,
                                    title: botName,
                                    body: `${ucapanWaktu} ${pushname}`,
                                    thumbnail: fs.readFileSync('./database/blueimages/thumb.jpeg'),
                                    thumbnailUrl: await pickRandom(fotoRandom),
                                    sourceUrl: web,
                                    mediaType: 1,
                                    renderLargerThumbnail: true
                                }
                            }
                        }, {
                            quoted: m,
                            ephemeralExpiration: 86400
                        });
                    } else if (setmenu == "image") {

                        conn.sendMessage(from, {
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: true,
                                    title: `${botName}`,
                                    body: `${baileysVersion}`,
                                    previewType: "PHOTO",
                                    thumbnailUrl: pickRandom(fotoRandom),
                                    sourceUrl: `${web}`
                                }
                            },
                            image: fs.readFileSync('./database/blueimages/thumb.jpeg'),
                            caption: menunya + fiturnya
                        }, {
                            quoted: ftoko
                        })
                    } else if (setmenu == "gif") {
                        conn.sendMessage(m.chat, {
                            video: fs.readFileSync('./database/blueimages/video1.mp4'),
                            gifPlayback: true,
                            caption: fiturnya,
                            contextInfo: {
                                externalAdReply: {
                                    containsAutoReply: true,
                                    mediaType: 1,
                                    //mediaUrl: 'https://telegra.ph/file/803e9b20c514befd3cffa.jpg',
                                    renderLargerThumbnail: true,
                                    showAdAttribution: true,
                                    sourceUrl: "https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h",
                                    thumbnailUrl: pickRandom(fotoRandom),
                                    title: wm,
                                    body: `${ucapanWaktu} ${pushname}`,
                                },
                            },
                        }, {
                            quoted: m
                        });
                    } else if (setmenu == "katalog") {
                        conn.relayMessage(m.chat, {
                            requestPaymentMessage: {
                                currencyCodeIso4217: 'INR',
                                amount1000: 1234567,
                                requestFrom: m.sender,
                                noteMessage: {
                                    extendedTextMessage: {
                                        text: menunya + fiturnya,
                                        contextInfo: {
                                            externalAdReply: {
                                                showAdAttribution: true
                                            }
                                        }
                                    }
                                }
                            }
                        }, {})
                    } else if (setmenu == "thumbnail") {
                        conn.sendMessage(from, {
                            contextInfo: {
                                externalAdReply: {
                                    showAdAttribution: true,
                                    title: `${week} , ${calender}`,
                                    body: `${botName}`,
                                    mediaType: 1,
                                    renderLargerThumbnail: true,
                                    thumbnailUrl: pickRandom(fotoRandom),
                                    sourceUrl: `${web}`
                                }
                            },
                            text: menunya + fiturnya
                        }, {
                            quoted: m
                        })
                    } else if (setmenu == "payment") {
                        let numb = ["7.76", "15.48", "8.92", "10.72", "13.48", "4.39", "5.99", "2.56"]
                        let amont = numb[Math.floor(Math.random() * numb.length)]
                        conn.relayMessage(from, {
                            requestPaymentMessage: {
                                expiryTimestamp: 0,
                                currencyCodeIso4217: 'USD',
                                amount1000: (amont) * 1000,
                                requestFrom: `${sender.split('@')[0]}@s.whatsapp.net`,
                                noteMessage: {
                                    extendedTextMessage: {
                                        text: menunya + fiturnya,
                                        contextInfo: {
                                            mentionedJid: [m.sender],
                                            externalAdReply: {
                                                showAdAttribution: true,
                                            }
                                        }
                                    }
                                }
                            }
                        }, {})
                    } else if (setmenu == "livelocation") {
                        conn.relayMessage(from, {
                            liveLocationMessage: {
                                degreesLatitude: 35.676570,
                                degreesLongitude: 139.762148,
                                caption: menunya + fiturnya,
                                sequenceNumber: 1656662972682001,
                                timeOffset: 8600,
                                jpegThumbnail: null,
                                contextInfo: {
                                    mentionedJid: [m.sender],
                                    externalAdReply: {
                                        containsAutoReply: true,
                                        showAdAttribution: true,
                                    }
                                }
                            }
                        }, {
                            quoted: m
                        })
                    }
                    await sleep(1500)
                    sendvn(dmusic)
                }
                break
               case 'tagall': {
    if (!isGroup) return setReply(mess.only.group);
    if (!isGroupAdmins && !isOwner) return reply(mess.only.admin);

    try {
        // Notify that tagging is in progress
        await loading();

        // Fetch group metadata
        const groupMetadata = await conn.groupMetadata(m.chat);
        const participants = groupMetadata.participants;

        // Extract all participant IDs and prepare the mentions
        const mentions = participants.map(p => p.id);
        const participantsList = participants.map(participant =>
            `${themeemoji} @${participant.id.split('@')[0]}`
        ).join('\n');

        const message = `🐦‍🔥 *\`${pushname} 𝐒𝐮𝐦𝐦𝐨𝐧𝐬\`* 🐦‍🔥\n\n${participantsList}\n> 𝐁𝐋𝐔𝐄𝐃𝐄𝐌𝐎𝐍 𝐓𝐄𝐂𝐇`;

        // Send the tag message as a reply
        reply(message, { mentions });

        // Send a confirmation message
    } catch (error) {
        console.error(error);
        reply("An error occurred while tagging everyone.");
    }
    break;
}
case 'tag':
            case 'hidetag': {
                if (!m.isGroup) return setReply(mess.only.group);

                // Check if the user is an admin, group owner, bot owner, or premium user
                if (!isAdmins && !isOwner) {
                    return setReply(mess.only.admin);
                }

                // Check if there's a quoted message or text input
                let quotedMessage;
                if (m.quoted) {
                    quotedMessage = m.quoted.text; // Use quoted message text
                } else if (q) {
                    quotedMessage = q; // Use provided text
                } else {
                    quotedMessage = `${themeemoji}${themeemoji}${themeemoji}`; // Default emoji message
                }

                // Send the message tagging all participants
                await conn.sendMessage(m.chat, {
                    text: quotedMessage,
                    mentions: participants.map(a => a.id) // Tag all participants
                });

                break;
            }
                case 'addowner': {
                    if (!isOwner) return setReply(mess.only.owner);

                    // Ensure Input is a string and contains '@' symbol
                    if (!Input || typeof Input !== 'string' || !Input.includes('@')) {
                        return setReply("Please provide a valid user ID (e.g., user@domain.com).");
                    }

                    if (checkDataId("owner", Input, DataId)) return setReply("User is already an owner");

                    if (!checkDataName("owner", Input, DataId)) {
                        await createDataId("owner", DataId);
                    }

                    addDataId(Input, "owner", DataId);
                    setReply(`Successfully added ${Input.split("@")[0]} to the owner list`);
                }
                break;
                case 'delowner': {
                    if (!isOwner) return setReply(mess.only.owner);

                    try {
                        if (!Input) return setReply("Please provide a valid user ID to remove.");

                        // Ensure Input is a string and properly formatted
                        if (typeof Input !== 'string' || !Input.includes('@')) {
                            return setReply("Invalid input format. Please provide a valid user ID (e.g., user@domain.com).");
                        }

                        // Check if the user is an owner
                        if (!checkDataId("owner", Input, DataId)) {
                            return setReply("User is not an owner.");
                        }

                        // Remove the user from the owner list
                        removeDataId("owner", Input, DataId);

                        // Send confirmation message
                        setReply(`Successfully removed ${Input.split("@")[0]} from the owner list.`);
                    } catch (err) {
                        console.log(err);
                        setReply(`An error occurred: ${err.message}`);
                    }
                }
                break;
                case 'listowner': {
                if (!isOwner) return setReply(mess.only.owner)
                await loading()
                    if (!checkDataName("owner", q, DataId)) {
                        await createDataId("owner", DataId);
                    }

                    let nana = await DataId.filter(item => item.name == "owner");
                    if (!nana || nana.length === 0) return setReply("No owners found");

                    let teks = "List of Owners:\n";
                    let nunu = nana[0].id;

                    // Ensure nunu is an array of strings
                    if (Array.isArray(nunu)) {
                        for (let i of nunu) {
                            if (typeof i === 'string') {
                                teks += `- wa.me/${i.split("@")[0]} \n`;
                            } else {
                                console.error("Invalid value in owner list:", i);
                            }
                        }
                    } else {
                        console.error("Invalid 'id' value:", nunu);
                    }

                    setReply(teks);
                }
                break;
                case 'ping': {
   
                    const startTime = performance.now();

                    // Send a preliminary message to notify that the ping is being measured
                    const pingMsg = await conn.sendMessage(m.chat, {
                        text: '𝐑𝐞𝐚𝐝𝐢𝐧𝐠 𝐩𝐢𝐧𝐠 ⫸'
                    });

                    // Capture the end time after the message is sent
                    const endTime = performance.now();
                    const latensi = (endTime - startTime).toFixed(3); // Calculate the latency in milliseconds

                    // Relay an edited message with the calculated ping
                    await conn.relayMessage(m.chat, {
                        protocolMessage: {
                            key: pingMsg.key,
                            type: 14, // Protocol type for editing messages
                            editedMessage: {
                                conversation: `*𝐃𝐞𝐦𝐨𝐧 𝐁𝐨𝐭 𝐒𝐩𝐞𝐞𝐝: ${latensi} ᴍꜱ*`
                            }
                        }
                    }, {});
                }
                break;
                case 'delete':
                case 'del':
                case 'd': {
                    if (!isOwner) return reply(mess.only.owner); // Ensure only the owner can delete messages
                    if (!m.quoted) return; // Exit if there is no quoted message

                    try {
                        // Delete the quoted message
                        await conn.sendMessage(m.chat, {
                            delete: {
                                remoteJid: m.chat, // The chat from which to delete the message
                                fromMe: false, // Set to false to delete others' messages
                                id: m.quoted.id, // The ID of the quoted message
                                participant: m.quoted.sender // The sender of the quoted message
                            }
                        });

                        // Delete the command message itself
                        await conn.sendMessage(m.chat, {
                            delete: {
                                remoteJid: m.chat, // The chat from which to delete the message
                                fromMe: true, // Set to true to delete the bot's message (command message)
                                id: m.id // The ID of the current command message
                            }
                        });
                    } catch (err) {
                        console.log("Error while deleting messages:", err); // Log any errors for debugging
                    }
                }
                break;
                case 'read':
                case 'vv': {
                    const {                     downloadContentFromMessage
                    } = require('@whiskeysockets/baileys')
                    await loading()
                    if (!m.quoted) return setReply(`Reply to view once message`)
                    if (m.quoted.mtype !== 'viewOnceMessageV2') return setReply(`This is not a view once message`)
                    let msg = m.quoted.message
                    let type = Object.keys(msg)[0]
                    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
                    let buffer = Buffer.from([])
                    for await (const chunk of media) {
                        buffer = Buffer.concat([buffer, chunk])
                    }
                    if (/video/.test(type)) {
                        return conn.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
                    } else if (/image/.test(type)) {
                        return conn.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
                    }
                }
                break
case 'vv2': {
if (!isOwner) return setReply(mess.only.owner)
    const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
    await loading();
    
    if (!m.quoted) return setReply(`Reply to view once message`);
    if (m.quoted.mtype !== 'viewOnceMessageV2') return setReply(`This is not a view once message`);

    try {
        let msg = m.quoted.message;
        let type = Object.keys(msg)[0];
        let media = await downloadContentFromMessage(msg[type], type === 'imageMessage' ? 'image' : 'video');
        let buffer = Buffer.from([]);

        for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        let fileType = /video/.test(type) ? 'media.mp4' : 'media.jpg';
        let caption = msg[type]?.caption || `${botName}`;

        // Send the file to your own DM (m.sender)
        await conn.sendMessage(m.sender, {
            [fileType === 'media.mp4' ? 'video' : 'image']: buffer,
            caption: caption,
        });
    } catch (error) {
        console.error("Error in read case:", error);
        reply("An error occurred while processing the view once message. Please try again later.");
    }
    break;
}
                case 'runtime': {
                    let data = global.db.data.others['runtime']
                    let time = (new Date - data.runtime) || 'long time'
                    setReply(`${themeemoji} *BOT HAS BEEN RUNNING FOR ${runtime(process.uptime())}*`)
                }
                break
                case 'kick': {
                    if (!isGroup) return setReply(mess.only.group);
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin);
                    if (!isGroupAdmins && !isOwner) return reply(mess.only.admin);

                    const mentioned = mentionByTag || (args[0] ? [`${args[0]}@s.whatsapp.net`] : []);
                    if (mentioned.length === 0) return reply('Please tag or provide the number of the user to kick.');

                    try {
                        await conn.groupParticipantsUpdate(m.chat, mentioned, 'remove');
                        reply(`Successfully kicked ${mentioned.map(v => `@${v.split('@')[0]}`).join(', ')}`, mentioned);
                    } catch (error) {
                        reply('Failed to kick the user. Make sure I have the correct permissions.');
                        console.error(error);
                    }
                    break;
                }
                case 'add': {
                    if (!isGroup) return setReply(mess.only.group);
                    if (!isBotGroupAdmins) return setReply(mess.only.badmin);
                    if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin);

                    const number = args[0]?.replace(/[^0-9]/g, ''); // Extract number from input
                    if (!number) return setReply('Please provide the number of the user to add.');

                    const user = number.includes('@s.whatsapp.net') ? number : `${number}@s.whatsapp.net`;

                    try {
                        await conn.groupParticipantsUpdate(m.chat, [user], 'add');
                        reply(`Successfully added @${number}`, [user]);
                    } catch (error) {
                        setReply('Failed to add the user. Make sure the number is valid and I have the correct permissions.');
                        console.error(error);
                    }
                    break;
                }
                case 'antilink': {
                    if (!isGroup) return setReply(mess.only.group)
                    if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin) // Check if the user is a group admin or owner

                    if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1') {
                        if (isAntiLink) return setReply('THE FEATURE IS ALREADY ACTIVE.');
                        db.data.chats[from].antilink = true;
                        let ih = `THE ANTILINK FEATURE HAS BEEN ACTIVATED.`;
                        setReply(ih);
                    } else if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
                        if (!isAntiLink) return setReply('THE ANTILINK FEATURE IS ALREADY OFF.');
                        db.data.chats[from].antilink = false;
                        let ih = `THE ANTILINK FEATURE HAS BEEN DEACTIVATED.`;
                        setReply(ih);
                    } else if (!q) {
                        reply(`*ANTI LINK MODE*\n ${prefix + command} on/off`);
                    }
                }
                break;
                case 'getsession': {
                    // Check if the sender is the owner
     // Replace with your WhatsApp owner number
                    if (!isOwner) return reply(mess.only.owner);

                    const credsPath = './session/creds.json';
                    const fs = require('fs');

                    try {
                        // Check if the file exists
                        if (!fs.existsSync(credsPath)) {
                            return reply('Sorry, the session file does not exist.');
                        }

                        // Send the session file as a document
                        await conn.sendMessage(m.chat, {
                            document: fs.readFileSync(credsPath), // Read the file
                            mimetype: 'application/json',
                            fileName: 'ᴄʀᴇᴅꜱ.ᴊꜱᴏɴ ʙy ʙʟᴜᴇxᴅᴇᴍᴏɴ' // Name of the file to send
                        }, {
                            quoted: m
                        });
                    } catch (error) {
                        console.error(error);
                        reply(`An error occurred: ${error.message}`);
                    }
                    break;
                }
                case 'mute': {
                    // Check if the command is being used in a group
                    if (!m.isGroup) return setReply(mess.only.group);

                    // Check if the user is an admin or the owner of the bot
                    if (!isOwner && !isAdmins) return setReply(mess.only.admin);

                    // Check if the bot has admin rights
                    if (!isBotAdmins) return setReply(mess.only.Badmin);

                    try {
                        // Mute the group (only admins can send messages)
                        await conn.groupSettingUpdate(m.chat, 'announcement');
                        reply(mess.success);
                    } catch (err) {
                        console.error(err);
                        reply('Failed to mute the group. Please try again.');
                    }
                    break;
                }
                case 'unmute': {
                    // Check if the command is being used in a group
                    if (!m.isGroup) return setReply(mess.only.group);

                    // Check if the user is an admin or the owner of the bot
                    if (!isOwner && !isAdmins) return setReply(mess.only.admin);

                    // Check if the bot has admin rights
                    if (!isBotAdmins) return setReply(mess.only.Badmin);

                    try {
                        // Unmute the group (everyone can send messages)
                        await conn.groupSettingUpdate(m.chat, 'not_announcement');
                        reply(mess.success);
                    } catch (err) {
                        console.error(err);
                        reply('Failed to unmute the group. Please try again.');
                    }
                    break;
                }
                case 'welcome': {
                    if (!isGroup) return setReply(mess.only.group)
                    if (!isAdmins && !isOwner) return setReply(mess.only.admin)
                    if (!q) return setReply("Enter the query 'on' or 'off'");
                    if (q == 'on') {
                        if (chat.welcome == true) return setReply('Welcome is already active');
                        db.data.chats[from].welcome = true;
                        setReply('SUCCESSFULLY ACTIVATED WELCOME IN THIS GROUP');
                    } else if (q == 'off') {
                        if (chat.welcome == false) return setReply('WELCOME IS ALREADY INACTIVE');
                        db.data.chats[from].welcome = false;
                        setReply('SUCCESSFULLY DEACTIVATED WELCOME IN THIS GROUP');
                    } else setReply('Choose "on" or "off"');
                }
                break;
                case 'promote':
                    if (!isGroup && !isGroupAdmins) return setReply(mess.only.group)
                    if (!isBotGroupAdmins) return setReply(mess.only.badmin)
                    let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    await conn.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote')
                    reply(mess.success)
                    break
                case 'demote':
                    if (!isGroup && !isGroupAdmins) return setReply(mess.only.group)
                    if (!isBotGroupAdmins) return setReply(mess.only.badmin)
                    let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    await conn.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                    setReply(mess.success)
                    break
                case 'tagadmin':
                case 'listadmin': {
                    if (!m.isGroup) return setReply(mess.only.group)
                    const groupAdmins = participants.filter(p => p.admin)
                    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
                    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-` [0] + '@s.whatsapp.net'
                    let text = Ehztext(`   
*Group Admins:*
${listAdmin}
`.trim())
                    conn.sendMessage(m.chat, {
                        text: text,
                        mentions: [...groupAdmins.map(v => v.id), owner]
                    }, {
                        quoted: m
                    })
                }
                break
                case 'tagme': {
                    let menst = [sender]
                    conn.sendMessage(from, {
                        text: `@${senderNumber}`,
                        mentions: menst
                    })
                }
                break
                case 'kickall': {
                    if (!isGroup && !isGroupAdmins) return setReply(mess.only.group)
                    if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
                    const xeonkickall = (args[0] === 'numBut') ?
                        q.replace(`${args[0]} `, '').split('|') :
                        (Number(args[0])) ?
                        groupMetadata.participants
                        .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${botNumber}@s.whatsapp.net`)
                        .map(item => item.id) :
                        groupMetadata.participants
                        .filter(item => item.id !== botNumber && item.id !== `${botNumber}@s.whatsapp.net`)
                        .map(item => item.id);
                    if (chat.welcome == false)
                        db.data.chats[from].welcome = false
                    for (let remove of xeonkickall) {
                        await conn.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
                        await sleep(100);
                    }
                    reply(mess.success);
                }
                break
                case 'infogc':
                case 'gcinfo': {
                    if (!isGroup) return setReply(mess.only.group)
                    let _meta = await conn.groupMetadata(from)
                    console.log(_meta)
                    let _img = await conn.profilePictureUrl(_meta.id, 'image')

                    let caption = `*G R O U P I N F O*


Anti Link : *${isAntiLink ? 'ACTIVE✅' : 'UNACTIVE❌'}*
Anti Virtex : *${isAntiVirtex ? 'ACTIVE✅' : 'UNACTIVE❌'}*
Anti Asing : *${isKickarea ? 'ACTIVE✅' : 'UNACTIVE❌'}*
Anti Delete : *${isAntidelete ? 'ACTIVE✅' : 'UNACTIVE❌'}*
Anti ViewOnce : *${isAntiViewOnce ? 'ACTIVE✅' : 'UNACTIVE❌'}*
Anti Toxic : *${isAntiToxic ? 'ACTIVE✅' : 'UNACTIVE❌'}*


⭓ *Name :* ${_meta.subject}
⭓ *Group ID :* ${_meta.id}
⭓ *Created on :* ${moment(_meta.creation * 1000).format('ll')}
⭓ *GC owner:* ${_meta.subjectOwner}
⭓ *Admins length:* ${_meta.participants.filter(x => x.admin === 'admin').length}
⭓ *participants length:* ${_meta.participants.filter(x => x.admin === null).length}
⭓ *Desc :* 
${_meta.desc}`

                    await conn.sendMessage(from, {
                        caption,
                        image: await getBuffer(_img)
                    }, {
                        quoted: fcall
                    })
                }
                break
                case 'setppgc': {
                    if (!isGroup) return setReply(mess.only.group)
                    if (!isGroupAdmins) return setReply(mess.only.admin)
                    if (!isBotGroupAdmins) return setReply(mess.only.badmin)
                    if (isImage || isQuotedImage) {
                        let media = await conn.downloadAndSaveMediaMessage(quoted, makeid(5))
                        await conn.updateProfilePicture(from, {
                                url: media
                            })
                            .then(res => {
                                reply(mess.success)
                                fs.unlinkSync(media)
                            }).catch(() => reply(mess.error.api))
                    } else {
                        setReply(`Send/reply images with captions ${command}`)
                    }
                }
                break
                case 'getppgc':
                    if (!isGroup) return setReply(mess.only.group)
                    if (!isGroupAdmins) return setReply(mess.only.admin)
                    await reply(mess.wait)
                    try {
                        var ppimg = await conn.profilePictureUrl(from, 'image')
                    } catch (err) {
                        console.log(err)
                        var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                    await conn.sendMessage(from, {
                        image: {
                            url: ppimg
                        }
                    }, {
                        quoted: m
                    })
                    break
                case 'delppgc': {
                    if (!isGroup) return setReply(mess.only.group)
                    if (!isGroupAdmins) return setReply(mess.only.admin)
                    if (!isBotGroupAdmins) return setReply(mess.only.badmin)
                    await conn.removeProfilePicture(from)
                }
                break
                case 'setnamegc': case 'setgcname': {
    if (!isGroup) return setReply(mess.only.group);
    if (!isGroupAdmins) return setReply(mess.only.admin);
    if (!isBotGroupAdmins) return setReply(mess.only.badmin);
    if (!q || q.trim().length === 0) return setReply(`Usage: ${command} <new group name>`);
    
    await conn.groupUpdateSubject(from, q)
        .then(() => {
            reply(mess.success);
        })
        .catch(() => {
            setReply(mess.error.api);
        });
    break;
}

case 'setdesc': {
    if (!isGroup) return setReply(mess.only.group);
    if (!isGroupAdmins) return setReply(mess.only.admin);
    if (!isBotGroupAdmins) return setReply(mess.only.badmin);
    if (!q || q.trim().length === 0) return setReply(`Usage: ${command} <new group description>`);
    
    await conn.groupUpdateDescription(from, q)
        .then(() => {
            reply(mess.success);
        })
        .catch(() => {
            setReply(mess.error.api);
        });
    break;
}
                case 'inspect': {
                    const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
                    let code = q.match(rex1);
                    if (code === null) return reply("No invite url detected.");
                    code = code[0].replace("chat.whatsapp.com/", "");
                    let nana = await conn.groupGetInviteInfo(code)
                    //console.log(nana)
                    let {
                        id,
                        subject,
                        creator,
                        creation,
                        desc,
                        descId
                    } = await conn.groupGetInviteInfo(code).catch(async () => {
                        return reply("Invalid invite url.");
                    });
                    let text = Ehztext(
                        `Subject: ${subject}\nGroupId: ${id}${creator ? `\nCreator: ${creator.split("@")[0]}` : ""}
Create At: ${new Date(creation * 1000).toLocaleString()}` + `${desc ? `\nDesc: ${desc}\nDescId: ${descId}` : ""}`)
                    setReply(text)

                }
                break
case 'revoke': case 'resetgclink': {
  if (!isGroup) return setReply(mess.only.group)
  if (!isOwner && !isGroupAdmins) return setReply(mess.only.admin)
  if (!isBotGroupAdmins) return setReply(mess.only.badmin)
conn.groupRevokeInvite(from)
}
break

case 'opentime': {
    if (!isGroup) return setReply(mess.only.group);
    if (!isGroupAdmins) return setReply(mess.only.admin);
    if (!isBotGroupAdmins) return setReply(mess.only.badmin);
    
    if (args[1] == "seconds") {
        var timer = args[0] * `1000`;
    } else if (args[1] == "minutes") {
        var timer = args[0] * `60000`;
    } else if (args[1] == "hours") {
        var timer = args[0] * `3600000`;
    } else if (args[1] == "days") {
        var timer = args[0] * `86400000`;
    } else {
        return setReply("*Choose:*\nseconds\nminutes\nhours\ndays\n\n*Example:*\n10 seconds");
    }

    reply(`Open time ${q} starts now`);
    setTimeout(() => {
        const open = Ehztext(`*On time*: The group is now opened by an admin\nMembers can now send messages`);
        conn.groupSettingUpdate(from, 'not_announcement');
        reply(open);
    }, timer);
    break;
}

case 'closetime': {
    if (!isGroup) return setReply(mess.only.group);
    if (!isGroupAdmins) return setReply(mess.only.admin);
    if (!isBotGroupAdmins) return setReply(mess.only.badmin);
    
    if (args[1] == "seconds") {
        var timer = args[0] * `1000`;
    } else if (args[1] == "minutes") {
        var timer = args[0] * `60000`;
    } else if (args[1] == "hours") {
        var timer = args[0] * `3600000`;
    } else if (args[1] == "days") {
        var timer = args[0] * `86400000`;
    } else {
        return setReply(`Example: ${prefix}closetime 5 seconds`);
    }

    let ko = await conn.sendMessage(from, { text: `Close time ${q} starts now` }, { quoted: m });
    setTimeout(() => deleteMessage(ko), 5000);

    setTimeout(() => {
        const close = Ehztext(`*On time*: The group is now closed by an admin\nOnly admins can send messages`);
        conn.groupSettingUpdate(from, 'announcement');
        reply(close);
    }, timer);
}
break;
case 'linkgroup': case 'gclink':{
    if (!isGroup) return setReply(mess.only.group);
    if (!isGroupAdmins) return setReply(mess.only.admin);
    if (!isBotGroupAdmins) return setReply(mess.only.badmin);
let response = await conn.groupInviteCode(from)
conn.sendText(from, `https://chat.whatsapp.com/${response}\n\n${themeemoji} *Group link: ${groupMetadata.subject}*`, m, { detectLink: true })
}
break
case 'antidelete': {
    if (!isGroup) return setReply(mess.only.group);
    if (!isGroupAdmins) return setReply(mess.only.admin);
    if (!isBotGroupAdmins) return setReply(mess.only.badmin);

    if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1') {
        if (isAntidelete) return setReply("ANTIDELETE IS ALREADY ENABLED!");
        db.data.chats[from].antidelete = true;
        setReply("SUCCESSFULLY ENABLED ANTIDELETE!");
    } else if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
        if (!isAntidelete) return setReply("ANTIDELETE IS ALREADY DISABLED!");
        db.data.chats[from].antidelete = false;
        setReply("SUCCESSFULLY DISABLED ANTIDELETE!");
    } else if (!q) {
        reply(`*ANTIDELETE MODE*\n ${prefix + command} on/off`);
    }
}
break;
case 'antivirtex': {
    if (!isGroup) return setReply(mess.only.group);
    if (!isGroupAdmins) return setReply(mess.only.admin);
    if (!isBotGroupAdmins) return setReply(mess.only.badmin);

    const mode = args[0]?.toLowerCase(); // Normalize input for case-insensitivity

    if (["on", "enable", "1"].includes(mode)) {
        if (isAntiVirtex) return setReply("ANTIVIRTEX IS ALREADY ENABLED!");
        db.data.chats[from].antivirtex = true;
        setReply("SUCCESSFULLY ENABLED ANTIVIRTEX!");
    } else if (["off", "disable", "0"].includes(mode)) {
        if (!isAntiVirtex) return setReply("Antivirtex Is Already Disabled!");
        db.data.chats[from].antivirtex = false;
        setReply("SUCCESSFULLY DISABLED ANTIVIRTEX!");
    } else {
        setReply(`*ANTI VIRTEX MODE*\nUsage: ${prefix + command} on/off`);
    }
    break;
}
case 'antibot': {
    if (!isGroup) return setReply(mess.only.group);
    if (!isGroupAdmins) return setReply(mess.only.admin);
    if (!isBotGroupAdmins) return setReply(mess.only.badmin);

    const mode = args[0]?.toLowerCase(); // Normalize input for case-insensitivity
    if (!mode || !["on", "off"].includes(mode)) {
        return setReply(`*ANTI-BOT MODE*\nUsage: ${prefix + command} on/off`);
    }

    if (mode === "on") {
        if (db.data.chats[from]?.antibot === true) return setReply("ANTIBOT IS ALREADY ENABLED!");
        db.data.chats[from].antibot = true;
        setReply("SUCCESSFULLY ENABLED ANTIBOT!");
    } else if (mode === "off") {
        if (db.data.chats[from]?.antibot === false) return setReply("ANTIBOT IS ALREADY DISABLED!");
        db.data.chats[from].antibot = false;
        setReply("SUCCESSFULLY DISABLED ANTIBOT!");
    }
    break;
}
case 'antiviewonce': {
    if (!isGroup) return setReply(mess.only.group);
    if (!isGroupAdmins) return setReply(mess.only.admin);

    const mode = args[0]?.toLowerCase(); // Normalize input for case-insensitivity
    if (!mode || !["on", "off", "enable", "disable", "1", "0"].includes(mode)) {
        return setReply(`*VIEW ONCE MODE*\n• ${prefix + command} on\n• ${prefix + command} off`);
    }

    if (["on", "enable", "1"].includes(mode)) {
        if (isAntiViewOnce) return setReply("The View Once feature is already enabled!");
        db.data.chats[from].viewonce = true;
        setReply(`The ${command} feature has been successfully enabled.`);
    } else if (["off", "disable", "0"].includes(mode)) {
        if (!isAntiViewOnce) return setReply(`The ${command} feature is already disabled!`);
        db.data.chats[from].viewonce = false;
        setReply(`The ${command} feature has been successfully disabled.`);
    }
    break;
}
case 'yts': {
    if (!q) return reply("Please provide a search query.");
   await loading()

    try {
        const searchResults = await yts(q);
        const videoResults = searchResults.all.filter((v) => v.type === 'video');
        if (!videoResults || videoResults.length === 0) return setReply("No videos found.");

        const videoID = videoResults[0].videoId;
        const thumbnail = `https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`;

        let responseMessage = `🔎 *YouTube Search Results:*\n`;
        for (let video of videoResults) {
            responseMessage += `
📜 *Title:* ${video.title}
📈 *Views:* ${video.views}
📅 *Uploaded:* ${video.ago}
⏱️ *Duration:* ${video.timestamp}
🎥 *Channel:* ${video.author.name}
🔗 *Link:* ${video.url}\n\n`;
        }

        // Send search results with the first video thumbnail
        await conn.sendMessage(
            from,
            {
                caption: responseMessage.trim(),
                image: { url: thumbnail },
            },
            { quoted: dev }
        );
    } catch (error) {
        console.error(error);
        setReply("An error occurred while fetching the YouTube search results.");
    }
    break;
}
case 'tiktok':
            case 'tt': {           
                if (!q) return reply(`\`No Tiktok link detected\`\n*Example:  ${prefix + command} link*`);
         await loading()
                try {
                    const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(text)}`);
                    const vidnya = data.video.noWatermark;
                    const caption = `*[ TIKTOK DOWNLOADER ]*

\`𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐃 𝐁𝐘 ${botname}\`
`;
                    conn.sendMessage(m.chat, {
                        caption: caption,
                        video: {
                            url: vidnya
                        }
                    }, {
                        quoted: m
                    })
                } catch {
                    const response = await fetchJson(`https://api.tiklydown.eu.org/api/download/v3?url=${encodeURIComponent(q)}`);
                    const videoUrl = response.result.video;
                    const caption = `*[ TIKTOK DOWNLOADER ]*

*Likes*: _${response.result.statistics.likeCount ?? ''}_
*Comments*: _${response.result.statistics.commentCount ?? ''}_
*Shares*: _${response.result.statistics.shareCount ?? ''}_
*By*: _${response.result.author.nickname ?? ''}_

\`𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐃 𝐁𝐘 ${botName}\`
        `;
                    conn.sendMessage(m.chat, {
                        caption: caption,
                        video: {
                            url: videoUrl
                        }
                    }, {
                        quoted: m
                    })
                }
                break;
            }

case 'ig': 
case 'instagram': {
    try {
        if (!q) return reply(`\`No Instagram link detected\`\n*Example:  ${prefix + command} link*`);
        await loading()
        // Make API request using the new URL
        let res = await fetchJson(`https://api.giftedtech.my.id/api/download/instadl?apikey=gifted&type=video&url=${q}`);
        
        if (res.status !== 200 || !res.success) {
            return setReply("Failed to fetch Instagram video.");
        }
        
        const { thumbnail, download_url } = res.result;

        // Send the video file
        await conn.sendMessage(from, {
            video: { url: download_url },
            caption: `*INSTAGRAM VIDEO DOWNLOADER*\n\nDownload Link: ${download_url}`,
        }, { quoted: m });

        // Optional: Send thumbnail
        await conn.sendMessage(from, {
            image: { url: thumbnail },
            caption: `Thumbnail of the video.`
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        setReply("An error occurred while processing your request.");
    }
    break;
}
case 'ytmp4':
case 'playmp4': {
    if (!args[0]) return reply(`\`No YouTube link detected\`\n*Example: ${prefix + command} link*`);
    await loading();
    try {
        // Fetch video details
        const response = await fetchJson(`https://api.giftedtech.my.id/api/download/ytvideo?apikey=gifted&url=${args[0]}`);
        if (response.status !== 200 || !response.success) {
            return setReply(`Failed to fetch video details. Please ensure the link is correct.`);
        }

        const { quality, title, thumbnail, download_url } = response.result;

        const caption = `❖ *Title*: ${title}\n❖ *Quality*: ${quality}\n${botName}\n*Preparing your video...*`;
        await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption }, { quoted: m });

        // Send the video
        await conn.sendMessage(m.chat, {
            video: { url: download_url },
            mimetype: 'video/mp4',
            fileName: `${title}.mp4`
        }, { quoted: m });

        // Fetch audio details (assuming audio API exists)
        const audioResponse = await fetchJson(`https://api.giftedtech.my.id/api/download/ytaudio?apikey=gifted&url=${args[0]}`);
        if (audioResponse.status === 200 && audioResponse.success) {
            const { audio_url, title: audioTitle } = audioResponse.result;

            // Send the audio
            await conn.sendMessage(m.chat, {
                audio: { url: audio_url },
                mimetype: 'audio/mpeg',
                fileName: `${audioTitle}.mp3`
            }, { quoted: m });
        } else {
            setReply(`Failed to fetch audio details. Please ensure the link is correct.`);
        }
    } catch (error) {
        console.error(error);
        setReply(`An error occurred while processing your request. Please try again later.`);
    }
    break;
}
case 'fb':
case 'facebook':
case 'facebookvid': {
    if (!q) {
        return reply(`\`No Facebook link detected\`\n*Example:  ${prefix + command} link*`);
    }
 // Send a waiting message
   await loading()
    try {
        // Fetch video data from the new API
        const response = await fetchJson(`https://api.giftedtech.my.id/api/download/facebook?apikey=gifted&url=${encodeURIComponent(q)}`);

        // Validate API response
        if (!response || !response.success || !response.result) {
            return reply("Failed to fetch the video. Ensure the link is valid and try again.");
        }

        const { hd_video, sd_video, title } = response.result;
        const videoUrl = hd_video || sd_video; // Prefer HD video if available
        const videoQuality = hd_video ? "HD" : "SD";

        // Prepare the caption
        const captionText = `*[ DOWNLOAD COMPLETED BY ${botName} ]*\n\n❖ Title: ${title}\n❖ Quality: ${videoQuality}`;

        // Send the video
        await conn.sendMessage(
            from,
            {
                video: { url: videoUrl },
                caption: captionText,
            },
            { quoted: m }
        );

    } catch (error) {
        console.error(error); // Log the error for debugging
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'ytmp3': {
    if (!q) {
        return reply(`\`No YouTube link detected\`\n*Example:  ${prefix + command} link*`);
    }
    await loading()
    try {
        // Fetch audio data from the API
        const response = await fetchJson(`https://api.giftedtech.my.id/api/download/ytmp3?apikey=gifted&url=${encodeURIComponent(q)}`);

        // Validate API response
        if (!response || !response.success || !response.result) {
            return reply("Failed to fetch the audio. Ensure the link is valid and try again.");
        }

        const { quality, title, thumbnail, download_url } = response.result;

        // Prepare the caption
        const captionText = `*[ DOWNLOAD COMPLETED BY ${botName} ]*\n\n❖ Title: ${title}\n❖ Quality: ${quality}`;

        // Send the thumbnail with details
        await conn.sendMessage(
            from,
            {
                image: { url: thumbnail },
                caption: captionText,
            },
            { quoted: m }
        );

        // Send the MP3 file
        await conn.sendMessage(
            from,
            {
                audio: { url: download_url },
                mimetype: 'audio/mpeg',
                fileName: `${title}.mp3`,
            },
            { quoted: m }
        );

    } catch (error) {
        console.error(error); // Log the error for debugging
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'mediafire': case 'mfdl':
    if (args.length < 1) return reply(`\`No Mediafire link detected\`\n*Example:  ${prefix + command} link*`); // Prompt if no link is provided
    
    await loading() // Send waiting message
    
    // Fetch the Mediafire download link from the new API
    const apiUrl = `https://api.giftedtech.my.id/api/download/mediafiredl?apikey=gifted&url=${encodeURIComponent(args.join(' '))}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(async (data) => {
            if (data.success) {
                let tuks = `*---------[ Data Successfully Retrieved ]---------*

File Name : ${data.result.fileName}\n> ${botName}`;
                reply(tuks); // Respond with file details
                console.log(data);

                // Fetch and send the media file
                try {
                    var media = await getBuffer(data.result.downloadLink);
                    await conn.sendMedia(from, media, dev, { fileName: data.result.fileName });
                } catch (err) {
                    console.error("Error downloading or sending media:", err);
                    reply("Failed to download the file. Please try again later.");
                }
            } else {
                reply("Failed to fetch the Mediafire data. Please check the URL or try again later.");
            }
        })
        .catch((err) => {
            console.error("Error with API request:", err);
            setReply('An error occurred while fetching data, please try again later.');
        });

    // Deduct user limit
    if (!isPremium) global.db.data.users[sender].limit -= 1;
    break;
case 'githubdl':
case 'gitclone': {
    try {
        if (!q) return reply(`\`No GitHub link detected\`\n*Example:  ${prefix + command} link without .git*`);

        await loading();

        // Make API request using the provided GitHub URL
        let res = await fetchJson(`https://api.giftedtech.my.id/api/download/gitclone?apikey=gifted&url=${q}`);

        if (res.status !== 200 || !res.success) {
            return setReply("Failed to fetch GitHub repository.");
        }

        const { name, download_url } = res.result;

        // Download the ZIP file using the download URL
        const zipFile = await fetch(download_url);
        const zipBuffer = await zipFile.buffer();

        // Send the ZIP file to the user
        await conn.sendMessage(from, {
            document: zipBuffer,
            mimetype: "application/zip",
            fileName: `${name}.zip`
        }, { quoted: m });

    } catch (e) {
        console.error(e);
        setReply("An error occurred while processing your request.");
    }
    break;
}
case 'block': {
                if (!isOwner) return reply(mess.only.owner);
await loading()
                let users;

                if (isGroup) {
                    // In a group, block the sender of the quoted message or the number from the input text
                    if (m.quoted && m.quoted.sender) {
                        users = m.quoted.sender;
                    } else if (text) {
                        users = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
                    }
                } else {
                    // In a private chat, block the other person's number
                    users = m.chat;
                }

                if (users) {
                    // Ensure the number is not an empty string and contains valid characters
                    if (users.replace(/[^0-9]/g, '').length < 7) {
                        return reply('Invalid number. Please provide a valid number.');
                    }

                    // Block the user
                    await conn.updateBlockStatus(users, "block");
                    reply(mess.success);
                } else {
                    reply("Please reply to the message or input the number you want to block.");
                }
                break;
            }
            case 'unblock': {
                if (!isOwner) return setReply(mess.only.group);

                let users;

                if (isGroup) {
                    // In a group, unblock the sender of the quoted message or the number from the input text
                    users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
                } else {
                    // In a private chat, unblock the other person's number
                    users = m.chat;
                }

                if (users) {
                    // Ensure the number is not an empty string and contains valid characters
                    if (users.replace(/[^0-9]/g, '').length < 7) {
                        return reply('Invalid number. Please provide a valid number.');
                    }

                    // Unblock the user
                    await conn.updateBlockStatus(users, "unblock");
                    reply(mess.success);
                } else {
                    reply("Please reply to the message or input the number you want to unblock.");
                }
                break;
            }
            case 'clearchat':
            case 'clear': {
                if (!isOwner) return setReply(mess.only.owner);

                conn.chatModify({
                        delete: true,
                        lastMessages: [{
                            key: m.key,
                            messageTimestamp: m.messageTimestamp
                        }]
                    },
                    m.chat
                );

                reply(mess.success);
            }
            break;
case 'join': {
                if (!isOwner) return setReply(mess.only.owner); // Check if the user is the owner
                if (!text) return reply(`\`No Group link detected\`\n*Example:  ${prefix + command} link*`);
                if (!isUrl(text) || !text.includes('chat.whatsapp.com')) return reply('`Invalid Link!`');

                const result = text.split('https://chat.whatsapp.com/')[1];
await loading()
                try {
                    await conn.groupAcceptInvite(result);
                } catch (error) {
                    // Handle different error responses
                    if (error.response) {
                        switch (error.response.status) {
                            case 400:
                                return reply('Group Not Found❗');
                            case 401:
                                return reply('Bot Kicked From The Group❗');
                            case 409:
                                return reply('Bot Has Already Joined the Group❗');
                            case 410:
                                return reply('Group URL Has Been Reset❗');
                            case 500:
                                return reply('Group Is Full❗');
                            default:
                                return reply('An unknown error occurred.');
                        }
                    }
                    reply('An unexpected error occurred.');
                }
                break;
            }
        case 'leavegc':
	if (!isOwner) return setReply(mess.only.owner)
	await loading()
	await conn.groupLeave(from)
	break
      case 'setname':
case 'setbotname': {
    if (!isOwner) return setReply(mess.only.owner); // Restrict access to owners only
    if (!text) return reply(`*Example: ${prefix + command} BLUE DEMON*`); // Ensure text is provided

    try {
        await conn.updateProfileName(text); // Update the bot's profile name
        reply(`*SUCCESSFULLY CHANGED NAME TO \`${text}\`*`);
    } catch (error) {
        console.error(error);
        reply("An error occurred while updating the name. Please try again.");
    }
    break;
}

case 'setbio':
case 'setbotbio': {
    if (!isOwner) return setReply(mess.only.owner); // Restrict access to owners only
    if (!q) return reply(`*Example: ${prefix + command} Text*`); // Ensure a bio text is provided

    try {
        await conn.updateProfileStatus(q); // Update the bot's profile bio/status
        reply(`*BIO HAS BEEN CHANGED TO \`${q}\`*`);
    } catch (error) {
        console.error(error);
        reply("An error occurred while updating the bio. Please try again.");
    }
    break;
}
case 's':
case 'sticker': 
case 'take': {
    if (!m.quoted) {
        return setReply(`*Reply to an image or video with the caption ${prefix + command}*\n> Video Duration: 1-9 Seconds`);
    }

    let mime = (m.quoted.msg || m.quoted).mimetype || '';
    
    try {
        if (/image/.test(mime)) {
            // Handle image sticker creation
            let media = await m.quoted.download();
            await conn.sendImageAsSticker(m.chat, media, m, {
                packname: packName || 'Sticker Pack',
                author: authorName || 'Bot'
            });
        } else if (/video/.test(mime)) {
            // Check video duration
            if ((m.quoted.msg || m.quoted).seconds > 9) {
                return setReply(`*Video duration must be 1-9 seconds!*\nReply to a shorter video with ${prefix + command}`);
            }

            // Handle video sticker creation
            let media = await m.quoted.download();
            await conn.sendVideoAsSticker(m.chat, media, m, {
                packname: packName || 'Sticker Pack',
                author: authorName || 'Bot'
            });
        } else {
            // Unsupported media type
            setReply(`*Unsupported media type!*\nReply to an image or video with the caption ${prefix + command}\n> Video Duration: 1-9 Seconds`);
        }
    } catch (err) {
        console.error('Error creating sticker:', err);
        setReply(`Failed to create sticker. Please try again.`);
    }
}
break;
case 'gemini': {
    if (!q) return reply(`*Please provide a query.*\n\n*Example:* ${prefix + command} Hello, which model are you?`);
    
    await loading();
    
    try {
        // Construct API URL
        const apiUrl = `https://api.giftedtech.my.id/api/ai/geminiai?apikey=gifted&q=${encodeURIComponent(q)}`;
        
        // Fetch AI response
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (res.status !== 200 || !res.success) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Send AI response with the image
        const aiResponse = res.result;
        await conn.sendMessage(from, {
            image: { url: './database/blueimages/gemini.jpg' },
            caption: `*Gemini AI Response:*\n\n\`\`\`${aiResponse}\`\`\`\n> ${botName}`,
        }, { quoted: m });
    } catch (error) {
        console.error("Error in Gemini case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'chatgpt': {
    if (!q) return reply(`*Please provide a query.*\n\n*Example:* ${prefix + command} Hello, which model are you?`);
    
    await loading();
    
    try {
        // Construct API URL
        const apiUrl = `https://api.giftedtech.my.id/api/ai/gpt4?apikey=gifted&q=${encodeURIComponent(q)}`;
        
        // Fetch AI response
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (res.status !== 200 || !res.success) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Send AI response with the image
        const aiResponse = res.result;
        await conn.sendMessage(from, {
            image: { url: './database/blueimages/chatgpt.jpg' },
            caption: `*ChatGPT Response:*\n\n\`\`\`${aiResponse}\`\`\`\n> ${botName}`,
        }, { quoted: m });
    } catch (error) {
        console.error("Error in ChatGPT case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'blackbox': {
    if (!q) return reply(`*Please provide a query.*\n\n*Example:* ${prefix + command} Hello, which model are you?`);
    
    await loading();
    
    try {
        // Construct API URL
        const apiUrl = `https://api.giftedtech.my.id/api/ai/blackbox?apikey=gifted&q=${encodeURIComponent(q)}`;
        
        // Fetch AI response
        const response = await fetch(apiUrl);
        const res = await response.json();

        // Validate API response
        if (res.status !== 200 || !res.success) {
            return reply("Failed to process your request. Please try again later.");
        }

        // Send AI response with the image
        const aiResponse = res.result;
        await conn.sendMessage(from, {
            image: { url: './database/blueimages/blackbox.jpg' },
            caption: `*Blackbox AI Response:*\n\n\`\`\`${aiResponse}\`\`\`\n> ${botName}`,
        }, { quoted: m });
    } catch (error) {
        console.error("Error in Blackbox case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'play':
case 'songs': {
    if (!text) return reply(`\`No music title detected.\`\n*Example: ${prefix + command} Alan Walker - Faded*`);

    try {
        await loading()

        // Search for the video using the text provided
        let search = await yts(text);
        let video = search.videos[0];
        if (!video) return reply("No results found for the provided query.");

        let { title, thumbnail, url } = video;

        // Inform the user that the download is starting
        reply(`🎶 *Found:* ${title}\n${botName}\nDownloading your audio now...`);

        // Fetch audio details from the new API
        let apiUrl = `https://api.giftedtech.my.id/api/download/ytplay?apikey=gifted&url=${encodeURIComponent(url)}`;
        let res = fetch(apiUrl); // Fetch audio data asynchronously
        let json = await (await res).json(); // Parse JSON

        // Validate API response
        if (json.status !== 200 || !json.success) {
            return reply("Failed to fetch audio. Please try again later.");
        }

        let audioUrl = json.result.audio[0]?.download_url;
        if (!audioUrl) return reply("Audio URL not found in the API response.");

        // Prepare and send the audio file
        conn.sendMessage(m.chat, {
            audio: { url: audioUrl },
            mimetype: "audio/mp4",
            fileName: `${json.result.title}.mp3`,
            contextInfo: {
                externalAdReply: {
                    title: json.result.title,
                    body: "Music Downloaded",
                    thumbnailUrl: json.result.thumbnail,
                    mediaUrl: url,
                    mediaType: 2,
                    renderLargerThumbnail: true,
                },
            },
        }, { quoted: m });

    } catch (error) {
        console.error("Error in play case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'lyrics': {
    if (!text) return reply(`\`No song title detected.\`\n*Example: ${prefix + command} Spectre Alan Walker*`);
    await loading();

    try {
        // Construct the API URL
        let apiUrl = `https://api.giftedtech.my.id/api/search/lyrics?apikey=gifted&query=${encodeURIComponent(text)}`;

        // Fetch the lyrics data
        let res = await fetch(apiUrl);
        let json = await res.json();

        // Validate API response
        if (json.status !== 200 || !json.success) {
            return reply("Failed to fetch lyrics. Please try again later.");
        }

        // Get the artist, title, and lyrics
        let { Artist, Title, Lyrics } = json.result;

        // Format the message with lyrics
        let message = `🎶 *Artist:* ${Artist}\n🎵 *Title:* ${Title}\n\n*Lyrics:*\n${readmore}\`\`\`${Lyrics}\`\`\`\n> ${botName}`;

        // Send the message with the lyrics and the image
        await conn.sendMessage(from, {
            image: { url: './database/blueimages/lyrics.jpg' },  // Image path
            caption: `${message}`,
        }, { quoted: m });

    } catch (error) {
        console.error("Error in lyrics case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'listcase': {
//let { listCase } = require('./lib/scrapelistCase.js')
setReply(listCase())
}
break
case 'setppbot':
            case 'setpp': {
                if (!isOwner) return setReply(mess.only.owner)
                await loading()
                if (!quoted) return reply(`Send/Reply to Images With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Send/Reply to Images With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Send/Reply to Images With Caption ${prefix + command}`)
                var medis = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == `full`) {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await conn.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    reply(mess.success)
                } else {
                    var memeg = await conn.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    reply(mess.success)
                }
            }
            break
case 'google': {
    if (!text) return reply(`\`No search query detected.\`\n*Example: ${prefix + command} Gifted Md*`);
    
    await loading()

    try {
        let apiUrl = `https://api.giftedtech.my.id/api/search/google?apikey=gifted&query=${encodeURIComponent(text)}`;
        let res = await fetch(apiUrl);
        let json = await res.json();

        if (json.status !== 200 || !json.success || !json.results || json.results.length === 0) {
            return reply("Failed to fetch results or no results found.");
        }

        let results = json.results.slice(0, 5); // Limit to 5 results for brevity
        let message = `🌐 *Google Search Results*\n\n🔍 *Query:* ${text}\n\n`;

        results.forEach((result, index) => {
            message += `${themeemoji} *${index + 1}.* \`${result.title}\` ${result.url}\n${result.description}\n\n`;
        });

        message += `> ${botName}`;

        await conn.sendMessage(from, {
            image: { url: './database/blueimages/google.jpg' },
            caption: message,
        }, { quoted: m });

    } catch (error) {
        console.error("Error in google case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'happymod': {
    if (!text) return reply(`\`No query detected.\`\n*Example: ${prefix + command} WhatsApp*`);
    
    await loading();

    try {
        let apiUrl = `https://api.giftedtech.my.id/api/search/happymod?apikey=gifted&query=${encodeURIComponent(text)}`;
        let res = await fetch(apiUrl);
        let json = await res.json();

        if (json.status !== 200 || !json.success || !json.results || !json.results.data) {
            return reply("Failed to fetch results or no results found.");
        }

        let results = json.results.data.slice(0, 5); // Limit to 5 results for brevity
        let message = `🎮 *HappyMod Search Results*\n\n🔍 *Query:* ${text}\n\n`;

        results.forEach((result, index) => {
            message += `${themeemoji} *${index + 1}.* *${result.name}*\n*Version:* ${result.version}\n[Download Here](${result.url})\n\n`;
        });

        message += `> ${botName}`;

        await conn.sendMessage(from, {
            image: { url: './database/blueimages/happymod.jpg' },
            caption: message,
        }, { quoted: m });

    } catch (error) {
        console.error("Error in happymod case:", error);
        reply("An error occurred while processing your request. Please try again later.");
    }
    break;
}
case 'update': {
                if (!isOwner) return reply(mess.only.owner);
                await loading()
                reply("*𝐔𝐏𝐃𝐀𝐓𝐈𝐍𝐆.....*");
                try {
                    const githubRawUrl = 'https://raw.githubusercontent.com/BLUEXDEMONl/BLUEDEMON-UPDATE-/refs/heads/main/case.js';
                    const response = await fetch(githubRawUrl);

                    if (!response.ok) {
                        return reply('𝐒𝐄𝐑𝐕𝐄𝐑 𝐔𝐍𝐃𝐄𝐑 𝐌𝐀𝐈𝐍𝐓𝐄𝐍𝐀𝐍𝐂𝐄🔪');
                    }

                    const newFileContent = await response.text();

                    // Update the blue file
                    const fs = require('fs');
                    fs.writeFileSync('./message/case.js', newFileContent, 'utf8');

                    reply('𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 𝐔𝐏𝐃𝐀𝐓𝐄𝐃');
                } catch (error) {
                    console.error("Error updating file:", error);
                    reply("Failed to update file. Please check the console for errors.");
                }

                break;
            }
case 'hrt':
            case 'love': {

                // Array of heart emojis to send one by one
                const heartEmojis = [
                    '♥️', '❣️', '💘', '💝', '💖', '💗', '💓', '💞', '💕', '❤️‍🔥',
                    '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍', '💕',
                    '🫀', '💓', '💝', '💞', '💓', '💘', '💗', '💝', '💓'
                ];

                // Send the initial message
                const loveMsg = await conn.sendMessage(m.chat, {
                    text: heartEmojis[0]
                }, {
                    quoted: m
                });

                // Function to update the message with new emojis
                const updateMessage = async (index = 1) => {
                    if (index < heartEmojis.length) {
                        await conn.relayMessage(m.chat, {
                            protocolMessage: {
                                key: loveMsg.key,
                                type: 14,
                                editedMessage: {
                                    conversation: heartEmojis[index]
                                }
                            }
                        }, {});

                        // Schedule the next update after 2 seconds
                        setTimeout(() => updateMessage(index + 1), 1000);
                    }
                };

                // Start updating the message with heart emojis one by one
                setTimeout(() => updateMessage(), 1000);
                break;
            }
            case 'confuse':
            case 'conf': {
                // Array of confused-themed emojis to send one by one
                const confusedEmojis = [
                    '😕', '🤔', '😵', '😵‍💫', '🤷', '🤷‍♂️', '🤷‍♀️', '😮‍💨', '😐', '🤨',
                    '🙃', '😬', '😯', '😖', '😑', '😳', '🤪', '🤯'
                ];

                // Send the initial confused emoji
                const confuseMsg = await conn.sendMessage(m.chat, {
                    text: confusedEmojis[0]
                }, {
                    quoted: m
                });

                // Function to update the message with new confused emojis
                const updateMessage = async (index = 1) => {
                    if (index < confusedEmojis.length) {
                        await conn.relayMessage(m.chat, {
                            protocolMessage: {
                                key: confuseMsg.key,
                                type: 14,
                                editedMessage: {
                                    conversation: confusedEmojis[index]
                                }
                            }
                        }, {});

                        // Schedule the next update after 2 seconds
                        setTimeout(() => updateMessage(index + 1), 1000);
                    }
                };

                // Start updating the message with confused emojis one by one
                setTimeout(() => updateMessage(), 1000);
                break;
            }
            case 'angry':
            case 'gtf': {
                // Array of angry-themed stickers/emojis to send one by one
                const angryEmojis = [
                    '😡', '😠', '🤬', '👿', '💢', '🔥', '😾', '😤', '🤯', '💥',
                    '😾', '👺', '👊', '🗯️', '😒', '👎', '🥵', '🧨', '👹', '💣',
                    '😠', '👊', '💥', '😡', '🤬', '🔥', '🖕🏽'
                ];

                // Send the initial angry emoji
                const angryMsg = await conn.sendMessage(m.chat, {
                    text: angryEmojis[0]
                }, {
                    quoted: m
                });

                // Function to update the message with new emojis/stickers
                const updateMessage = async (index = 1) => {
                    if (index < angryEmojis.length) {
                        await conn.relayMessage(m.chat, {
                            protocolMessage: {
                                key: angryMsg.key,
                                type: 14,
                                editedMessage: {
                                    conversation: angryEmojis[index]
                                }
                            }
                        }, {});

                        // Schedule the next update after 2 seconds
                        setTimeout(() => updateMessage(index + 1), 1000);
                    }
                };

                // Start updating the message with angry emojis/stickers one by one
                setTimeout(() => updateMessage(), 1000);
                break;
            }













































































































































































































































































































                default:


                    if (isCmd) {
                        await Nothing(toFirstCase(command), dash, allcommand)
                        const stringSimilarity = require("string-similarity");
                        let matches = await stringSimilarity.findBestMatch(toFirstCase(command), allcommand)
                       //reply(`*Command ${prefix+command} not available*\nSIMILAR ${prefix+matches.bestMatch.target.toLowerCase()}\n*\`Message Blue-demon for any CMD suggestion\`*`) 
                    }
            } //Akhir switch command
            //autosticker
            if (db.data.settings['settingbot'].autoSticker) {
                if (m.key.fromMe) return
                if (/image/.test(mime) && !/webp/.test(mime)) {
                    let mediac = await conn.downloadAndSaveMediaMessage(quoted, makeid(5))
                    conn.sendImageAsSticker(from, mediac, m, {
                        packname: global.packName,
                        author: global.authorName
                    })
                    reply(`Auto sticker detected`)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return
                    let mediac = await conn.downloadAndSaveMediaMessage(quoted, makeid(5))
                    conn.sendVideoAsSticker(from, mediac, m, {
                        packname: global.packName,
                        author: global.authorName
                    })
                }
            }
            //User Private Chat
            if (!isGroup && user && isPremium && new Date - user.pc < 86400000) {} else if (!isGroup && user && isPremium && !itsMe) {
                setReply(`Hai ${ucapanWaktu} kak *${pushname}*  ada yang bisa aku bantu ? silakan ketik ${prefix}menu`)
                user.pc = new Date * 1
            }
            //Jika ada yg panggil bot
            if (katabot.includes(budy)) {
                if (cekSpam("NotCase", senderNumber, AntiSpam)) return
                addSpam("NotCase", senderNumber, "10s", AntiSpam)
                sendvn(halo)
            }
            //Jika ada yg lopyu
            if (katalopyu.includes(budy)) {
                if (cekSpam("NotCase", senderNumber, AntiSpam)) return
                addSpam("NotCase", senderNumber, "10s", AntiSpam)
                sendvn(lopyoutoo)
            }
            //Jika ada yang bilang ohayo pagi bot akan merespon✓
            if (ohayo.includes(budy)) {
                if (cekSpam("NotCase", senderNumber, AntiSpam)) return
                if (timeWib >= '11:00' && timeWib <= '23:50') return setReply("Hadeuh sekarang udah ga pagi kak")
                addSpam("NotCase", senderNumber, "10s", AntiSpam)
                sendvn(pagi)
                //setReply(`${ucapanWaktu} kak`)
            }
            //Jika ada yang bilang oyasumi malem bot akan merespon✓
            if (katamalem.includes(budy)) {
                if (cekSpam("NotCase", senderNumber, AntiSpam)) return
                if (timeWib >= '06:00' && timeWib <= '17:00') return setReply("Hadeuh sekarang udah ga malem kak")
                addSpam("NotCase", senderNumber, "10s", AntiSpam)
                sendvn(malam)
                //setReply(`${ucapanWaktu} kak`)
            }
            //Jika ada yang bilang koniciwa siang bot akan merespon✓
            if (katasiang.includes(budy)) {
                if (cekSpam("NotCase", senderNumber, AntiSpam)) return
                if (timeWib >= '06:00' && timeWib <= '00:00') return setReply("Hadeuh sekarang udah ga siang kak")
                addSpam("NotCase", senderNumber, "10s", AntiSpam)
                sendvn(siang)
                //setReply(`${ucapanWaktu} kak`)
            }
            //Jika ada yg ucap salam bot akan merespon   
            if (budy.startsWith('Assalamualaikum') || budy.startsWith('assalamualaikum')) {
                if (cekSpam("NotCase", senderNumber, AntiSpam)) return
                addSpam("NotCase", senderNumber, "10s", AntiSpam)
                sendvn(walaikumsalam)
            }
            //Jika ada yg ara bot✓
            if (katara.includes(budy)) {
                if (cekSpam("NotCase", senderNumber, AntiSpam)) return
                addSpam("NotCase", senderNumber, "10s", AntiSpam)
                sendvn(wibu)
            }

  
            if (budy.includes('ekprefix')) {
                if (cekSpam("NotCase", senderNumber, AntiSpam)) return
                addSpam("NotCase", senderNumber, "10s", AntiSpam)
                conn.sendMessage(from, {
                    text: `Baik kak untuk prefix saat ini adalah : 「  ${thePrefix}  」`
                }, {
                    quoted: dev
                })
            }
            //Jika ada yg toxic botz akan merespon✓
            if (bad.includes(budy)) {
                if (cekSpam("NotCase", senderNumber, AntiSpam)) return
                addSpam("NotCase", senderNumber, "10s", AntiSpam)
                sendvn(astaga)

            }



            //AUTO RESPON SIMI VIA REPLY/TAG BOT
            if (isSimi) {
                const isReplySticker = type === 'stickerMessage' && content.includes('stickerMessage')
                const isQuotedReplySticker = type === 'stickerMessage' && content.includes('extendedTextMessage')
                const mentionByReplySticker = type == "stickerMessage" && m.message.stickerMessage.contextInfo != null ? m.message.stickerMessage.contextInfo.participant || "" : ""
                if (isGroup && chat.simi && Input == botNumber && isGroup && !replyCommand && !isAudio && !allcommand.includes(toFirstCase(command)) || isGroup && chat.simi && mentionByReplySticker == botNumber && isSticker && !replyCommand || body.toLowerCase().includes(botName.toLowerCase())) {
                    await sleep(2000)
                    conn.sendPresenceUpdate('recording', from)
                    if (isQuotedReplySticker || isReplySticker) {
                        await sleep(2000)
                        let namastc = await pickRandom(Object.keys(db.data.sticker))
                        conn.sendMessage(from, {
                            sticker: {
                                url: db.data.sticker[namastc].link
                            }
                        }, {
                            quoted: fsimi
                        })
                    } else {
                        let jawab = ["Afa iyah 🗿", "Oh", "Aku ga ngerti om 🐦", "Boong", "🗿", "🐦", "Oh gitu 🐦"]
                        let teks1 = pickRandom(jawab)
                        let teks2 = body
                        let hasil = [`${teks1}`, `${teks2}`]
                        let random = pickRandom(hasil)
                        let kata = mentionByTag ? body.replace(mentionByTag, "") : body
                        let kato = ["Kenapa ?", "Ha ?", "Napa tag gua ?", "napa ?", "ya ?", "apa ?", "Hmm ?"]
                        let acak = pickRandom(kato)
                        if (kata == "") return conn.sendMessage(from, {
                            text: acak
                        }, {
                            quoted: fsimi
                        })
                        let nana = /sayang|bercanda/
                        try {
                            await sleep(1000)
                            let simi = await getMessage(kata, 'id')
                            m.reply(simi.replace(nana, "****"))
                        } catch (e) {
                            Log(e)
                            await sleep(1000)
                            //conn.sendMesage(from,{text:random},{quoted:fsimi})
                            reply(random)
                        }

                        async function mainSimi(aw) {
                            let res = await fetchJson(`https://api.miftahganzz.my.id/api/ai/simisimi?q=${aw}&apikey=officialdittaz`)
                            let data = res.respon
                            let pesan = data.replace('simi', Botname).replace('Simi', Botname)
                            return pesan
                        }

                        async function getMessage(yourMessage, langCode) {
                            const res = await axios.post(
                                'https://api.simsimi.vn/v2/simtalk',
                                new URLSearchParams({
                                    'text': yourMessage,
                                    'lc': langCode
                                })
                            )

                            if (res.status > 200)
                                throw new Error(res.data.success);
                            return res.data.message.replace('simi', botName)
                        }


                    }
                }
            }
        } catch (err) {
            console.log(err)
            //add to dashboard
            if (isCmd) Failed(toFirstCase(command), dash)
            let e = util.format(err)
            if (err.message.includes("Cannot find module")) {
                let module = err.message.split("Cannot find module '")[1].split("'")[0]
                let teks = `Module ${module} belom di install
silakan install terlebih dahulu`
                return await conn.sendText(dev.key.remoteJid, teks, dev)
            }
            await conn.sendText(Ownerin, `]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${botName}`, dev)
            if (checkError(err.message, db.data.listerror)) return
            addError(err.message, command, db.data.listerror)
            if (autoblockcmd) {
                addblockcmd(command, listcmdblock)
                await setReply("Command telah di block karena terjadi error")
            }

            if (autoReport) {
                if (isQuotedImage) {
                    var media = "Reply Image ✅"
                } else if (isQuotedVideo) {
                    var media = "Reply Video ✅"
                } else if (isQuotedSticker) {
                    var media = "Reply Sticker ✅"
                } else if (isQuotedAudio) {
                    var media = "Reply Audio ✅"
                } else if (isQuotedTeks) {
                    var media = "Reply Teks ✅"
                } else if (isQuotedTag) {
                    var media = "Reply Tag ✅"
                } else {
                    var media = "No Quoted ❌"
                }

                if (q.length > "0") {
                    var tetek = q
                } else if (q.length == "0") {
                    var tetek = "No Query ❌"
                }

                if (isGroup && isBotGroupAdmins) {
                    let linkgc = await conn.groupInviteCode(from)
                    var yeh = `https://chat.whatsapp.com/${linkgc}`
                } else if (isGroup && !isBotGroupAdmins) {
                    var yeh = `Botz Is Not Admin`
                } else if (!isGroup) {
                    var yeh = `Botz Is Not In The Group`
                }

                let teks = `\n*]───── 「 Laporan Bug ⚠️」 ─────[*\n\n👤 Nama : ${pushname}\n📳 Nomer : wa.me/${senderNumber}\n📢 Info Laporan :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'Di private chat'}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`

                conn.sendText(Ownerin, teks, dev)

                if (!autoblockcmd) {
                    //await conn.sendMessage(from,{ text: "Laporan error telah dikirim ke Developer Botz"})
                }

                if (isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio) {
                    let media = await conn.downloadAndSaveMediaMessage(quoted, makeid(5))
                    await conn.sendMedia(Ownerin, media, dev, {
                        caption: "System Error"
                    })
                    await fs.unlinkSync(media)
                }

            }
        }




    } catch (err) {
        console.log(chalk.bgRed(color("[  ERROR  ]", "black")), util.format(err))
        let e = String(err)
        if (e.includes("this.isZero")) {
            return
        }
        if (e.includes("rate-overlimit")) {
            if (!publik) return
            publik = false
            await conn.sendMessage(botNumber + "@s.whatsapp.net", {
                text: `Terjadi rate-overlimit
Bot telah mengganti dari mode publik ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`
            })
            await setTimeout(() => {
                publik = true
                conn.sendMessage(botNumber + "@s.whatsapp.net", {
                    text: `Berhasil mengubah mode self ke mode publik`
                })
            }, 60000)
            return
        }
        if (e.includes('Connection Closed')) {
            return
        }
        if (e.includes('Timed Out')) {
            return
        }
        if (e.includes('Value not found')) {
            return
        }
        console.log(color('Message Error : %s', 'white'), color(util.format(e), 'green'))
        if (Console) {
            conn.sendMessage(Ownerin, {
                text: util.format(e)
            })
        }
        //console.log(e)
    }
}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.bgGreen(color("[  UPDATE ]", "black")), chalk.white(`${__filename}`))
    delete require.cache[file]
    require(file)
})
