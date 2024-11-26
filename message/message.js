module.exports = async (senderNumber, prefix, command, setReply) => {
  global.mess = {
    wait: '*`𝐏𝐑𝐎𝐂𝐄𝐒𝐒𝐈𝐍𝐆 𝐀 𝐒𝐄𝐂....`*',
    success: '`𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋`',
    limit: `[❕] Limit kamu sudah habis nihh\nKalau kamu mau unlimited limit, kamu bisa membeli premium, hanya 10 ribu sudah bisa membeli unlimited limit selama 3 bulan,\nSilahkan ketik ${prefix}owner untuk mengetahui pemilik bot ini dan melanjutkan pembayaran nya, makasih sudah memakai bot`,
    only: {
      prem: '`𝐓𝐇𝐈𝐒 𝐅𝐄𝐀𝐓𝐔𝐑𝐄 𝐈𝐒 𝐎𝐍𝐋𝐘 𝐅𝐎𝐑 𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐌𝐄𝐌𝐁𝐄𝐑𝐒`',
      group: '`𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐚𝐧 𝐨𝐧𝐥𝐲 𝐛𝐞 𝐚𝐜𝐜𝐞𝐬𝐬𝐞𝐝 𝐰𝐢𝐭𝐡𝐢𝐧 𝐚 𝐠𝐫𝐨𝐮𝐩`',
      private: '`𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐚𝐧 𝐨𝐧𝐥𝐲 𝐛𝐞 𝐚𝐜𝐜𝐞𝐬𝐬𝐞𝐝 𝐢𝐧 𝐩𝐫𝐢𝐯𝐚𝐭𝐞 𝐜𝐡𝐚𝐭`',
      ownerB: '`𝐖𝐇𝐎 𝐀𝐑𝐄 𝐔 𝐇𝐔𝐇🤨?`',
      owner: '`𝐖𝐇𝐎 𝐀𝐑𝐄 𝐔 𝐇𝐔𝐇🤨?`',
      admin: '`𝐓𝐇𝐈𝐒 𝐅𝐄𝐀𝐓𝐔𝐑𝐄 𝐂𝐀𝐍 𝐎𝐍𝐋𝐘 𝐁𝐄 𝐀𝐂𝐂𝐄𝐒𝐒𝐄𝐃 𝐁𝐘 𝐀𝐃𝐌𝐈𝐍!!!`',
      Badmin: '`𝐌𝐀𝐊𝐄 𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍 𝐓𝐎 𝐁𝐄 𝐀𝐁𝐋𝐄 𝐓𝐎 𝐔𝐒𝐄 𝐓𝐇𝐈𝐒`'
    }
  };

  const fs = require("fs");
  const chalk = require("chalk");

  // Watch for file changes and reload if updated
  const file = require.resolve(__filename);
  fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(chalk.redBright(`Reloading file: ${__filename}`));
    delete require.cache[file];
    require(file);
  });
};