"use strict";
require("./settings.js")
const {
    Browsers,
    DisconnectReason,
    makeInMemoryStore,
    makeWASocket,
    MessageRetryMap,
    //useSingleFileAuthState,
    useMultiFileAuthState,
    makeCacheableSignalKeyStore,
    fetchLatestBaileysVersion,
    generateMessageTag
} = require("@whiskeysockets/baileys")
const chalk = require('chalk')
const fs = require("fs");
const yargs = require('yargs')
const {
    readdirSync,
    readFileSync,
    existsSync
} = fs;
const logg = require('pino')
const chokidar = require('chokidar')
const qrcode = require('qrcode')
const simple = require('./lib/simple')
//const yargs = require('yargs/yargs')
const CFonts = require('cfonts')
const path = require('path')
const {
    join,
    dirname
} = require('path')
const {
    Boom
} = require('@hapi/boom')
const _ = require('lodash')
const {
    fileURLToPath,
    pathToFileURL
} = require('url')
const syntaxerror = require('syntax-error')
const {
    format
} = require('util')
const axios = require('axios')
const welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
const {
    color
} = require("./lib/color");
const spin = require('spinnies')
const {
    getRandom,
    getBuffer,
    sleep
} = require("./lib/myfunc");
if (runWith.includes("eplit")) {}
const connect = require("./server.js")
const PORT = process.env.PORT || 3000
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

process.on('uncaughtException', console.error)
const {
    createRequire
} = require('module');
const requireFromFile = createRequire(__filename);


global.__filename = function filename(pathURL = __filename, rmPrefix = process.platform !== 'win32') {
    return rmPrefix ? /file:\/\/\//.test(pathURL) ?
        url.fileURLToPath(pathURL) : pathURL : url.pathToFileURL(pathURL).toString();
};
global.__require = function require(dir = __filename) {
    return createRequire(dir);
}

global.opts = new Object(
    yargs(process.argv.slice(2))
    .exitProcess(false)
    .parse()
);

const spinner = {
    "interval": 120,
    "frames": [
        "✖ [░░░░░░░░░░░░░░░]",
        "✖ [■░░░░░░░░░░░░░░]",
        "✖ [■■░░░░░░░░░░░░░]",
        "✖ [■■■░░░░░░░░░░░░]",
        "✖ [■■■■░░░░░░░░░░░]",
        "✖ [■■■■■░░░░░░░░░░]",
        "✖ [■■■■■■░░░░░░░░░]",
        "✖ [■■■■■■■░░░░░░░░]",
        "✖ [■■■■■■■■░░░░░░░]",
        "✖ [■■■■■■■■■░░░░░░]",
        "✖ [■■■■■■■■■■░░░░░]",
        "✖ [■■■■■■■■■■■░░░░]",
        "✖ [■■■■■■■■■■■■░░░]",
        "✖ [■■■■■■■■■■■■■░░]",
        "✖ [■■■■■■■■■■■■■■░]",
        "✖ [■■■■■■■■■■■■■■■]"
    ]
}
let globalSpinner;
const getGlobalSpinner = (disableSpins = false) => {
    if (!globalSpinner) globalSpinner = new spin({
        color: 'blue',
        succeedColor: 'green',
        spinner,
        disableSpins
    });
    return globalSpinner;
}
let spins = getGlobalSpinner(false)
const start = (id, text) => {
    spins.add(id, {
        text: text
    })
}
const success = (id, text) => {
    spins.succeed(id, {
        text: text
    })

}
console.log(color(`⠀⠀⠀⠀⠀⠀
THANKS FOR DEPLOYING
`, 'deeppink'))
CFonts.say('BLUE DEMON', {
    font: 'chrome',
    align: 'left',
    gradient: ['red', 'magenta']
})



const msgRetryCounterMap = MessageRetryMap || {}
const useStore = !process.argv.includes('--no-store')
const doReplies = !process.argv.includes('--no-reply')


const connectToWhatsApp = async () => {

    setInterval(() => {

        let data = global.db.data.others['runtime']

        if (data) {
            if ((new Date - data.lastTime) > (60000 * 60)) {
                data.runtime = +new Date
                data.lastTime = +new Date
                console.log("Runtime updated")
            } else data.lastTime = +new Date
        } else {
            global.db.data.others['runtime'] = {
                runtime: +new Date,
                lastTime: +new Date
            }
            console.log("New update runtime")
        }

    }, 60_000)

    const {
        Low
    } = (await import("lowdb"))
    const chalk = (await import("chalk"))

    const {
        JSONFile
    } = (await import("lowdb/node"))
    global.db = new Low(new JSONFile(`database/database.json`))

    global.DATABASE = global.db
    global.loadDatabase = async function loadDatabase() {
        if (global.db.READ) return new Promise((resolve) => setInterval(function() {
            (!global.db.READ ? (clearInterval(conn), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null)
        }, 1 * 1000))
        if (global.db.data !== null) return
        global.db.READ = true
        await global.db.read()
        global.db.READ = false
        global.db.data = {
            allcommand: [],
            anonymous: [],
            blockcmd: [],
            banned: [],
            premium: [],
            claim: [],
            data: [],
            sewa: [],
            antispam: [],
            dashboard: [],
            listerror: [],
            jadibot: {},
            sticker: {},
            audio: {},
            hittoday: [],
            clearchat: [],
            users: {},
            chats: {},
            settings: {},
            kickon: {},
            others: {},
            respon: {},
            ...(global.db.data || {})
        }
        global.db.chain = _.chain(global.db.data)
    }
    loadDatabase()


    const {
        state,
        saveCreds
    } = await useMultiFileAuthState("session")
    const store = makeInMemoryStore({
        logger: logg().child({
            level: 'fatal',
            stream: 'store'
        })
    })
    const {
        version,
        isLatest
    } = await fetchLatestBaileysVersion()
    if (global.db.data) await global.db.write()

    setInterval(() => {
        let data = global.db.data.others['runtime']
        if (data) {
            if ((new Date - data.lastTime) > (60000 * 60)) {
                data.runtime = +new Date
                data.lastTime = +new Date
                console.log("Runtime updated")
            } else data.lastTime = +new Date
        } else {
            global.db.data.others['runtime'] = {
                runtime: +new Date,
                lastTime: +new Date
            }
            console.log("New update runtime")
        }

    }, 60_000)

    const patchMessageBeforeSending = (message) => {
        const requiresPatch = !!(
            message.buttonsMessage ||
            message.listMessage ||
            message.templateMessage
        );
        if (requiresPatch) {
            message = {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadataVersion: 2,
                            deviceListMetadata: {},
                        },
                        ...message,
                    },
                },
            };
        }
        return message;
    }

    const getMessage = async (key) => {
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
            return msg?.message || undefined
        }
        return {
            conversation: 'hello'
        }
    }

    const auth = {
        creds: state.creds,
        keys: makeCacheableSignalKeyStore(state.keys, logg().child({
            level: 'fatal',
            stream: 'store'
        })),
    }

    const connectionOptions = makeWASocket({
        logger: logg({
            level: "silent"
        }),
        printQRInTerminal: !pairingCode,
        auth,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
    });
    if (pairingCode && !connectionOptions.authState.creds.registered) {
        await clearConsole();
        console.log(`📣MAKE SURE YOU INPUT YOUR NUMBER IN THE settings.js file\n\nCONNECTING TO ${pairingNumber}`)
        setTimeout(async () => {
            let code = await connectionOptions.requestPairingCode(pairingNumber)
            code = code?.match(/.{1,4}/g)?.join("-") || code
            console.log(`Pairing code: ${code.toUpperCase()}`);
        }, 3000)

    }
    async function clearConsole() {
        const isWindows = process.platform === 'win32';
        const isLinuxOrMac = process.platform === 'linux' || process.platform === 'darwin';

        return new Promise((resolve, reject) => {
            const command = isWindows ? 'cls' : (isLinuxOrMac ? 'clear' : '');
            if (command) {
                require('child_process').exec(command, (error, stdout, stderr) => {
                    if (error) {
                        console.error(error);
                        reject(error);
                    } else {
                        console.log(stdout);
                        resolve();
                    }
                });
            } else {
                console.log('Platform not supported for clearing console.');
                resolve();
            }
        });
    }

    global.conn = simple.makeWASocket2(connectionOptions)
    connect(conn, PORT)

    store.bind(conn.ev)
    conn.waVersion = version


    //welcome
    conn.ev.on('group-participants.update', async (anu) => {
        require('./message/group.js')(conn, anu)
    })


    //auto reject call
    if (anticall === true) {
        conn.ev.on('call', async (json) => {
            const {
                id,
                from,
                status
            } = json[0];
            if (status === 'offer') {
                if (from === "2347041039367@s.whatsapp.net") return;
                console.log(json);

                // Reject the call
                await conn.rejectCall(id, from);

                // Notify the caller about unavailability
                await conn.sendMessage(from, {
                    text: `*\`CALL DETECTED\`*\n> *USER UNAVAILABLE*`
                });
            }
        });
    }

    conn.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            if (global.db.data) await global.db.write()
            if (!chatUpdate.messages) return;
            var m = chatUpdate.messages[0] || chatUpdate.messages[chatUpdate.messages.length - 1]
            if (!m.message) return
            if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
            m = simple.smsg(conn, m, store)

            require('./message/case')(conn, m, chatUpdate, store)

        } catch (err) {
            console.log(err)
        }
    })



    conn.ev.process(async (events) => {

        if (events['connection.update']) {
            const update = events['connection.update']
            const {
                connection,
                lastDisconnect,
                qr
            } = update
            if (qr) {
                let qrkode = await qrcode.toDataURL(qr, {
                    scale: 20
                })
                qrwa = Buffer.from(qrkode.split`,` [1], 'base64')
            }

            const reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (global.db.data == null) await loadDatabase()
            if (connection === 'close') {
                qrwa = null
                console.log(color(lastDisconnect.error, 'deeppink'));

                if (lastDisconnect.error == "Error: Stream Errored (unknown)") {
                    process.send('reset')

                } else if (reason === DisconnectReason.badSession) {

                    console.log(color(`Bad Session File, Please Delete Session and Scan Again`));
                    process.send('reset')

                } else if (reason === DisconnectReason.connectionClosed) {

                    console.log(color("[SYSTEM]", "white"), color('Connection closed, reconnecting...', 'deeppink'));
                    process.send('reset')

                } else if (reason === DisconnectReason.connectionLost) {

                    console.log(color("[SYSTEM]", "white"), color('Connection lost, trying to reconnect', 'deeppink'));
                    process.send('reset')

                } else if (reason === DisconnectReason.connectionReplaced) {

                    console.log(color("Connection Replaced, Another New Session Opened, Please Close Current Session First"));
                    conn.logout();

                } else if (reason === DisconnectReason.loggedOut) {

                    console.log(color(`Device Logged Out, Please Scan Again And Run.`));
                    conn.logout();

                } else if (reason === DisconnectReason.restartRequired) {

                    console.log(color("Restart Required, Restarting..."));
                    connectToWhatsApp();
                    process.send('reset')

                } else if (reason === DisconnectReason.timedOut) {

                    console.log(color("Connection TimedOut, Reconnecting..."));
                    connectToWhatsApp();

                }

            } else if (connection === 'connecting') {
                //console.log(`${color(`[`,`white`)+color(`1`,`red`)+color(`]`,`white`)}`,`WA v${version.join('.')}`)
                //await sleep(400) 
                console.log(`${color(`[`,`white`)+color(`2`,`red`)+color(`]`,`white`)}`, `${calender}`)
                //await sleep(400) 
                console.log(`${color(`[`,`white`)+color(`3`,`red`)+color(`]`,`white`)}`, `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`)
                //await sleep(400)  
                console.log(`${color(`[`,`white`)+color(`4`,`red`)+color(`]`,`white`)}`, "data 5")
                //await sleep(400)  
                console.log(color(`]─`, `magenta`), `「`, color(`BLUE DEMON`, `blue`), `」`, color(`─[`, `magenta`))
                //await sleep(400)  
                start(`1`, `Connecting...`)
            } else if (connection === 'open') {
                qrwa = null

                conn.sendMessage('2347041039367@s.whatsapp.net', {
                    image: {
                        url: './database/blueimages/bluex.jpg'
                    }, // Path to your image
                    caption: `  *『 \`𝘽𝙇𝙐𝙀 𝙓 𝘿𝙀𝙈𝙊𝙉\` 』*\n\n*\`CONNECTED SUCCESSFULLY\`*\n> Support us by following our channel\n https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h\n\n \`\`\`wait for 30s\`\`\``
                });

                success(`1`, `[■■■■■■■■■■■■■■■] Connected`)
            }
        }
        const bot = db.data.others['restart']
        if (bot) {
            const m = bot.m
            const from = bot.from
            let text = 'Bot is connected'
            await conn.sendMessage(from, {
                text
            }, {
                quoted: m
            })
            delete db.data.others['restart']
        }
        if (events['creds.update']) {
            await saveCreds()
        }



        // history received
        if (events['messaging-history.set']) {
            const {
                chats,
                contacts,
                messages,
                isLatest
            } = events['messaging-history.set']
            console.log(`recv ${chats.length} chats, ${contacts.length} contacts, ${messages.length} msgs (is latest: ${isLatest})`)
        }



        //------------------------------------[BATAS]--------------------------------\\

    })

    //Function untuk update gempa BMKG
    let gempa = db.data.others['updateGempa']
    let data1 = db.data.others['infogempa']
    if (!gempa) db.data.others['updateGempa'] = []

    if (gempa && gempa.length > 0) {

        setInterval(async () => {
            const {
                data
            } = await axios.get("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
            let nana = /TimurLaut|Tenggara|BaratDaya|BaratLaut|Utara|Timur|Selatan|Barat/
            let lokasi = data.Infogempa.gempa.Wilayah 
            let waktu = data.Infogempa.gempa.Jam
            let caption = ` *INFO GEMPA*

*Date:* ${data.Infogempa.gempa.Tanggal}
*Time:* ${data.Infogempa.gempa.Jam}
*Coordinates:* ${data.Infogempa.gempa.Coordinates}
*Magnitude:* ${data.Infogempa.gempa.Magnitude}
*Depth:* ${data.Infogempa.gempa.Kedalaman}
*Lokasi:* ${data.Infogempa.gempa.Wilayah}
*Potention:* ${data.Infogempa.gempa.Potensi}
*Effect:* ${data.Infogempa.gempa.Dirasakan}

*Note:*
_Untuk menonaktifkan fitur otomatis update gempa tersebut, silahkan ketik .updategempa off_
`

            if (data1) {
                let getGroups = await conn.groupFetchAllParticipating()
                let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anus = groupss.map(v => v.id)
                let image = {
                    url: "https://data.bmkg.go.id/DataMKG/TEWS/" + data.Infogempa.gempa.Shakemap
                }

                if (data1.lokasi !== lokasi && data1.lokasi !== waktu) {

                    data1.lokasi = lokasi
                    data1.waktu = waktu

                    for (let i of gempa) {
                        if (!anus.includes(i)) {
                            gempa.splice(gempa.indexOf(i, 1))
                            console.log("remove auto update on group")
                        } else {
                            await sleep(3000)
                            conn.sendMessage(i, {
                                image,
                                caption
                            })
                        }
                    }
                }


            } else {
                let getGroups = await conn.groupFetchAllParticipating()
                let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anus = groupss.map(v => v.id)

                db.data.others['infogempa'] = {
                    lokasi: lokasi,
                    waktu: waktu
                }


                for (let i of gempa) {
                    if (!anus.includes(i)) {
                        gempa.splice(gempa.indexOf(i, 1))
                        console.log("remove auto update on group")
                    } else {
                        await sleep(3000)
                        conn.sendMessage(i, {
                            image,
                            caption
                        })
                    }
                }

            }

        }, 60_000 * 10)

    }



    const Log = (text) => {
        console.log(text)
    }




    function clockString(ms) {
        let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
        let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
        let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
        let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
        var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " day, ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hour, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minute, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " second") : "";
        let time = d > 0 ? dDisplay + hDisplay + mDisplay + sDisplay : hDisplay + mDisplay + sDisplay
        return time
    }



    global.chalk = chalk
    global.clockString = clockString
    global.Log = Log

    return conn
}

connectToWhatsApp()