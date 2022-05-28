const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	LolKey: 'https://api.lolhuman.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://api.lolhuman.xyz': 'Fiktod'
}

// Other
global.owner = ['6281233738677']
global.premium = ['0']
global.ownername = 'FikriiSky'
global.botname = 'BOT MD'
global.packname = '© SewaBot 10K Manen'
global.gc = 'https://chat.whatsapp.com/KpS9eHNALBs3mXXJGtzuZE'
global.limitawal = '100'
global.author = 'FikriiSky'
global.sessionName = 'sessionya'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⌕'
global.mess = {
    success: 'Berhasil',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = fs.readFileSync('./media/pepe.jpg')
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
