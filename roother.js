require('./config')
const {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
BufferJSON,
WA_DEFAULT_EPHEMERAL,
generateWAMessageFromContent,
proto,
generateWAMessageContent,
generateWAMessage,
prepareWAMessageMedia,
areJidsSameUser,
WAFlag,
getContentType
} = require('@adiwajshing/baileys')
const {  } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const hx = require("hxz-api")
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const toMs = require('ms')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const nsfw = JSON.parse(fs.readFileSync('./lib/nsfw.json'))
const antivenda = JSON.parse(fs.readFileSync('./lib/antivenda.json'))
const antilink = JSON.parse(fs.readFileSync('./lib/antilink.json'))
const antiloc = JSON.parse(fs.readFileSync('./lib/antiloc.json'))
const antiimg = JSON.parse(fs.readFileSync('./lib/antiimg.json'))
const antidoc = JSON.parse(fs.readFileSync('./lib/antidoc.json'))
const antictt = JSON.parse(fs.readFileSync('./lib/antictt.json'))
const anticat = JSON.parse(fs.readFileSync('./lib/anticat.json'))
const dontback = JSON.parse(fs.readFileSync('./src/dontback.json'))
const { porno } = require('./lib/scraper')
const bemvindo = JSON.parse(fs.readFileSync('./lib/bemvindo.json'))
const logo = fs.readFileSync('./midias/logo.png')
const { aiovideodl } = require('./lib/scraper.js')
const maker = require('mumaker')
const { palavras } = require('./lib/conselho.js');
const countMessage = JSON.parse(fs.readFileSync('./lib/countmsg.json'))
const _adv = JSON.parse(fs.readFileSync('./lib/advertencia.json'))
const time2 = moment().tz('America/Fortaleza').format('HH:mm:ss')
  

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

const content = JSON.stringify(m.message)
        const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
		const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')

function monospace(string) {
return '```' + string + '```'
}
module.exports = client = async (client, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#%^&./\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_*!#,|`÷?;:%^&./\\©^]/gi) : '/'
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        //const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const from = m.chat
        const pushname = m.pushName || "Sem Nome"
        const botNumber = await client.decodeJid(client.user.id)
        const isCreator = [botNumber, '558896926980', ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
        const isNsfw = m.isGroup ? nsfw.includes(m.chat) : true
        const isAntivenda = m.isGroup ? antivenda.includes(m.chat) : true
        const isAntilink = m.isGroup ? antilink.includes(m.chat) : true
        const isAnticat = m.isGroup ? anticat.includes(m.chat) : true
        const isAntiloc = m.isGroup ? antiloc.includes(m.chat) : true
        const isAntiimg = m.isGroup ? antiimg.includes(m.chat) : true
        const isAntidoc = m.isGroup ? antidoc.includes(m.chat) : true
        const isAntictt = m.isGroup ? antictt.includes(m.chat) : true
        const isBemvindo = m.isGroup ? bemvindo.includes(m.chat) : true
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const dbids = []
      for(i=0;i<dontback.length;++i) {
        dbids.push(dontback[i].groupId)
      }
      const isDontBack = (m.isGroup && dbids.indexOf(from) >= 0) ? true : false
       
        const reply = (teks) => {
        client.sendMessage(m.chat, teks, text, {quoted:m,thumbnail : ''})
}	

        var conselho = palavras[Math.floor(Math.random() * palavras.length)]
if (command) {
await client.sendPresenceUpdate('composing', m.chat)
}

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
            
if(m.isGroup && groupIdscount.indexOf(m.chat) >= 0) {
  
var ind = groupIdscount.indexOf(m.chat)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.jid)}
if(numbersIds.indexOf(m.sender) >=0) {
var indnum = numbersIds.indexOf(m.sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./lib/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
jid: m.sender,
messages: messages,
cmd_messages: cmd_messages
})

fs.writeFileSync('./lib/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(m.isGroup) {
countMessage.push({
groupId: m.chat,
numbers: [{
jid: m.sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./lib/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}

if (isAnticat && m.mtype === 'productMessage') {
      if (isAdmins) return
        if (isCreator) return
await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

if (isAntidoc && m.mtype === 'documentMessage') {
      if (isAdmins) return
        if (isCreator) return
await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

if (isAntiloc && m.mtype === 'locationMessage') {
      if (isAdmins) return
        if (isCreator) return
await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

if (isAntictt && m.mtype === 'contactMessage') {
      if (isAdmins) return
        if (isCreator) return
await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

if (isAntiimg && m.mtype === 'imageMessage') {
      if (isAdmins) return
        if (isCreator) return
await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
/*if (m.mtype === 'imageMessage' && m.isGroup) {
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    kur = await fetchJson(`https://hardianto.xyz/api/tools/ceknsfw?url=${util.format(anu)}&apikey=hardianto`)
                 if(kur.result.output.nsfw_score > 0.5) {
                 m.reply(`⚠ _A imagem é um *NSFW*!_\n${kur.result.output.nsfw_score}%`)
                 await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                 }
                m.reply(`🔞 _Probabilidade de ser *NSFW*:_\n${kur.result.output.nsfw_score}%`)
                }
                await fs.unlinkSync(media)
}
*/
const palavrasANA = [
{
original: 'PARADOXO',
embaralhada: 'XOPARODA',
dica: 'CANAL'
},
{
original: 'ESCADA',
embaralhada: 'CAESDA',
dica: 'OBJETO'
},
{
original: 'AKAME',
embaralhada: 'MEAKA',
dica: 'PERSONAGEM'
},
{
original: 'ALBEDO',
embaralhada: 'EBDOLA',
dica: 'OVERLORD'
},
{
original: 'SHALLTEAR',
embaralhada: 'ALLSHTEAR',
dica: 'OVERLORD'
},
{
original: 'AINZ-SAMA',
embaralhada: 'NZAI-MASA',
dica: 'OVERLORD'
},
{
original: 'ELFEN LIED',
embaralhada: 'DELI FENEL',
dica: 'ANIME'
},
{
original: 'STEINS GATE',
embaralhada: 'TEGA EINSTS',
dica: 'ANIME'
},
{
original: 'ÁGUIA',
embaralhada: 'IAUGÁ',
dica: 'ANIMAL'
},
{
original: 'LAGARTO',
embaralhada: 'GARLATO',
dica: 'ANIMAL'
},
{
original: 'MINHOCA',
embaralhada: 'CAOHNMI',
dica: 'ANIMAL'
},
{
original: 'CHIMPANZÉ',
embaralhada: 'ZÉPANMIHC',
dica: 'ANIMAL'
},
{
original: 'TATU',
embaralhada: 'UTTA',
dica: 'ANIMAL'
},
{
original: 'GUAXINIM',
embaralhada: 'XIMINGAU',
dica: 'ANIMAL'
},
{
original: 'URSO',
embaralhada: 'SOUR',
dica: 'ANIMAL'
},
{
original: 'PINGUIM',
embaralhada: 'MIGUPIN',
dica: 'ANIMAL'
},
{
original: 'ORNITORRINCO',
embaralhada: 'ROCIRORNITON',
dica: 'ANIMAL'
},
{
original: 'BUCETA',
embaralhada: 'ATUCEB',
dica: 'COMIDA'
},
{
original: 'NEON GENESIS EVANGELION',
embaralhada: 'NOEN SEISNEG GELIONEVAN',
dica: 'ANIME'
},
{
original: 'CORPSE PARTY',
embaralhada: 'PSECOR TYPAR',
dica: 'ANIME'
},
{
original: 'OVERLORD',
embaralhada: 'ROLDOVER',
dica: 'ANIME'
},
{
original: 'ASTOLFO',
embaralhada: 'TOLFOAS',
dica: 'PERSONAGEM ANIME'
},
{
original: 'ZERO TWO',
embaralhada: 'EROZ OWT',
dica: 'PERSONAGEM ANIME'
},
{
original: 'E=M.C²',
embaralhada: ',.E²',
dica: 'EQUIVALÊNCIA MASSA-ENERGIA'
},
{
original: 'ALBERT EINSTEIN',
embaralhada: 'BERTAL TEINSEIN',
dica: 'FISICO-TEÓRICO'
},
{
original: 'STEPHEN KING',
embaralhada: 'PHENSTE GINK',
dica: 'ESCRITOR'
},
{
original: 'KONOSUBA',
embaralhada: 'BASUNOKO',
dica: 'ANIME'
},
{
original: 'MEGUMIN',
embaralhada: 'MINGUME',
dica: 'PERSONAGEM ANIME'
},
{
original: 'AQUA',
embaralhada: 'QUAA',
dica: 'PERSONAGEM ANIME'
},
{
original: 'DARKNESS',
embaralhada: 'KNESDARS',
dica: 'PERSONAGEM ANIME'
},
{
original: 'HINATA',
embaralhada: 'TANAHI',
dica: 'PERSONAGEM ANIME'
},
{
original: 'SWORD ART ONLINE',
embaralhada: 'WORDS RAT NELION',
dica: 'ANIME'
},
{
original: 'MIRAI NIKKI',
embaralhada: 'RAIMI KINIK',
dica: 'ANIME'
},
{
original: 'BORUTO',
embaralhada: 'TORUBO',
dica: 'PERSONAGEM ANIME'
},
{
original: 'CORNO',
embaralhada: 'ONROC',
dica: 'VOCÊ'
},
{
original: 'KRATOS',
embaralhada: 'TOSKRA',
dica: 'BOM DE GUERRA'
},
{
original: 'ESCANOR',
embaralhada: 'NORESCA',
dica: 'PERSONAGEM ANIME'
},
{
original: 'STAR WARS',
embaralhada: 'RATS RASW',
dica: 'FILME'
},
{
original: 'STAN LEE',
embaralhada: 'TANS ELE',
dica: 'CRIADOR DO HOMEM ARANHA'
},
{
original: 'ZEROTWO',
embaralhada: 'TOWROZE',
dica: 'PERSONAGEM ANIME'
},
{
original: 'BUNDA',
embaralhada: 'DABUN',
dica: 'VOCÊ JÁ DEU'
},
{
original: 'FÊMUR',
embaralhada: 'MURFÊ',
dica: 'PARTE DO CORPO'
},
{
original: 'DARLING IN THE FRANXX',
embaralhada: 'RINGDAL NI HTE XANXFR',
dica: 'ANIME'
},
{
original: 'SIMBA',
embaralhada: 'BASIM',
dica: 'REI LEÃO'
},
{
original: 'CUPHEAD',
embaralhada: 'DAHEPUC',
dica: 'JOGO'
},
{
original: 'FREE FIRE',
embaralhada: 'EFRE REFI',
dica: 'JOGO DE CORNO'
},
{
original: 'GRAND THEFT AUTO',
embaralhada: 'GANDR HEFTT TOAU',
dica: 'GTA'
},
{
original: 'TREVOR',
embaralhada: 'VORRET',
dica: 'GTA V'
},
{
original: 'SEBASTIÃO',
embaralhada: 'ÃOTISEBAS',
dica: 'NOME'
},
{
original: 'LEON E NILCE',
embaralhada: 'NOLE E CELNI',
dica: 'COISA DE NERD'
},
{
original: 'COISA DE NERD',
embaralhada: 'SAICO ED REND',
dica: 'CANAL YOUTUBE'
},
{
original: 'VOICE MAKERS',
embaralhada: 'ECIOV KERSMA',
dica: 'CANAL YOUTUBE'
},
{
original: 'MIA KHALIFA',
embaralhada: 'MAI LIFAHAK',
dica: 'ATRIZ PORNO'
},
{
original: 'SASHA GREY',
embaralhada: 'SHASA REYG',
dica: 'ATRIZ PORNO'
},
{
original: 'STOYA',
embaralhada: 'YATOS',
dica: 'ATRIZ PORNO'
},
{
original: 'ECCHI',
embaralhada: 'HICCE',
dica: 'GENÊRO ANIME'
},
{
original: 'SIRIUS',
embaralhada: 'RIUSSI',
dica: 'ESTRELA'
},
{
original: 'EVA',
embaralhada: 'VEA',
dica: 'NOME'
},
{
original: 'CORRA',
embaralhada: 'RACOR',
dica: 'FILME'
},
{
original: 'DARK',
embaralhada: 'KARD',
dica: 'SÉRIE NETFLIX'
},
{
original: 'SOBERANO',
embaralhada: 'RANOBESO',
dica: 'REI'
},
{
original: 'RATO',
embaralhada: 'TORA',
dica: 'MOUSE'
},
{
original: 'MOUSE',
embaralhada: 'SMOUE',
dica: 'RATO'
},
{
original: 'PUBG',
embaralhada: 'GUBP',
dica: 'JOGO'
},
{
original: 'FINAL FANTASY',
embaralhada: 'LANFI TASYFAN',
dica: 'JOGO'
},
{
original: 'GOD OF WAR',
embaralhada: 'DOG FO RAW',
dica: 'JOGO'
},
{
original: 'CRASH BANDICOOT',
embaralhada: 'SAHCR COTOBANDI',
dica: 'JOGO'
},
{
original: 'CU',
embaralhada: 'CU',
dica: 'CU'
},
{
original: 'GADO',
embaralhada: 'DOGA',
dica: 'VOCÊ'
},
{
original: 'MÉXICO',
embaralhada: 'XICOMÉ',
dica: 'PAÍS'
},
{
original: 'MÉXICO',
embaralhada: 'XICOMÉ',
dica: 'PAÍS'
},
{
original: 'CANADÁ',
embaralhada: 'DÁCANA',
dica: 'PAÍS'
},
{
original: 'INGLATERRA',
embaralhada: 'GLAINRATER',
dica: 'PAÍS'
},
{
original: 'BRASIL',
embaralhada: 'LISBAR',
dica: 'PAÍS'
},
{
original: 'EQUADOR',
embaralhada: 'QUADORE',
dica: 'PAÍS'
},
{
original: 'PARIS',
embaralhada: 'RISPA',
dica: 'CIDADE'
},
{
original: 'BOQUETE',
embaralhada: 'QUETEBO',
dica: 'ATO LIBIDINOSO'
},
{
original: '',
embaralhada: 'XICOMÉ',
dica: 'PAÍS'
},
{
original: 'GOSTOSO',
embaralhada: 'TOSOGOS',
dica: 'CRIADOR DO BOT'
},
{
original: 'IMAGINE DRAGONS',
embaralhada: 'GINEIMA GONSDRA',
dica: 'BANDA'
},
{
original: 'BRKSEDU',
embaralhada: 'DUEKSBR',
dica: 'YOUTUBER'
},
{
original: 'VIBRADOR',
embaralhada: 'DORBRIVA',
dica: 'OBJETO LIBIDINOSO'
},
{
original: 'SEXO',
embaralhada: 'XOSE',
dica: 'VOCÊ NUNCA FEZ'
},
{
original: 'BUNDA',
embaralhada: 'DANBU',
dica: 'VOCÊ JÁ DEU'
},
{
original: 'ALBEDO',
embaralhada: 'DOBEAL',
dica: 'BOT'
},
{
original: 'ANOTHER',
embaralhada: 'THERANO',
dica: 'ANIME'
},
{
original: 'PETER PARKER',
embaralhada: 'KERRAP TERPE',
dica: 'MARVEL'
},
{
original: 'TONY STARK',
embaralhada: 'TARKS NYTO',
dica: 'MARVEL'
},
{
original: 'HULK',
embaralhada: 'KHLU',
dica: 'MARVEL'
},
{
original: 'SCORPION',
embaralhada: 'ONPICORS',
dica: 'MORTAL KOMBAT'
},
{
original: 'MORTAL KOMBAT',
embaralhada: 'BATMOK LAMORT',
dica: 'MORTAL KOMBAT'
},
{
original: 'CETRION',
embaralhada: 'TRIONCE',
dica: 'MORTAL KOMBAT'
},
{
original: 'MISAKI MEI',
embaralhada: 'MIE KISAMI',
dica: 'ANIME'
},
{
original: 'NAGATORO',
embaralhada: 'GATONARO',
dica: 'PERSONAGEM'
},
{
original: 'SASUKE',
embaralhada: 'KESUSA',
dica: 'PERSONAGEM'
},
{
original: 'GAY',
embaralhada: 'YAG',
dica: 'VOCÊ'
},
{
original: 'RISKY',
embaralhada: 'YRSKI',
dica: 'DONO DA BOT'
},
{
original: 'BANANA',
embaralhada: 'NABANA',
dica: 'COMIDA'
},
{
original: 'NETFLIX',
embaralhada: 'TFLIXNE',
dica: 'APLICATIVO'
},
{
original: 'YOUTUBE',
embaralhada: 'TUBEYOU',
dica: 'APLICATIVO'
},
{
original: 'PORTUGAL',
embaralhada: 'TUGALPOR',
dica: 'PAÍS'
},
{
original: 'PISTOLA',
embaralhada: 'TOPISLA',
dica: 'OBJETO'
},
		
{
original: 'CAMARÃO',
embaralhada: 'MARÃOCA',
dica: 'COMIDA'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'FOGUETE',
embaralhada: 'TEFOGUE',
dica: 'OBJETO'
},
{
original: 'SKATE',
embaralhada: 'TEASK',
dica: 'OBJETO'
},
{
original: 'MACACO',
embaralhada: 'CACOMA',
dica: 'ANIMAL'
},
{
original: 'LASANHA',
embaralhada: 'NHASALA',
dica: 'COMIDA'
},
{
original: 'PASTEL',
embaralhada: 'PATELS',
dica: 'COMIDA'
},
{
original: 'COXINHA',
embaralhada: 'XICONHA',
dica: 'COMIDA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'SASUKE',
embaralhada: 'ESASUK',
dica: 'PERSONAGEM'
},
{
original: 'CAVALO',
embaralhada: 'LACAVO',
dica: 'ANIMAL'
},
{
original: 'LEVI',
embaralhada: 'EVIL',
dica: 'PERSONAGEM'
},
{
original: 'KAMAITACHI',
embaralhada: 'TAICAMAKHI',
dica: 'CANTOR'
},
{
original: 'LUBA',
embaralhada: 'UBAL',
dica: 'YOUTUBER'
},
{
original: 'GRÊMIO',
embaralhada: 'OMÊGRI',
dica: 'TIME'
},
{
original: 'SATURNO',
embaralhada: 'UTARSON',
dica: 'PLANETA'
},
{
original: 'MIKASA',
embaralhada: 'KAMISA',
dica: 'PERSONAGEM'
},
{
original: 'LEÃO',
embaralhada: 'OLEÃ',
dica: 'ANIMAL'
},
{
original: 'SAKURA',
embaralhada: 'SUKARA',
dica: 'PERSONAGEM'
},
{
original: 'HADES',
embaralhada: 'SEDAH',
dica: 'MITOLOGIA'
},
{
original: 'CORRIDA',
embaralhada: 'ARROCID',
dica: 'ESPORTE'
},
{
original: 'ODIN',
embaralhada: 'NODI',
dica: 'MITOLOGIA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'GUATEMALA',
embaralhada: 'LATEMAGUA',
dica: 'PAÍS'
},
{
original: 'CEREJA',
embaralhada: 'ECREJA',
dica: 'FRUTA'
},
{
original: 'VENEZUELA',
embaralhada: 'ZUNEEVELA',
dica: 'PAÍS'
},
{
original: 'HISTÓRIA',
embaralhada: 'TÓRISIAH',
dica: 'MATÉRIA'
},
{
original: 'INSTAGRAM',
embaralhada: 'TAGRAMINS',
dica: 'APLICATIVO'
},
{
original: 'WHATSAPP',
embaralhada: 'TSWHAAPP',
dica: 'APLICATIVO'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'CELULAR',
embaralhada: 'CELARLU',
dica: 'OBJETO'
},
{
original: 'NOTEBOOK',
embaralhada: 'TENOBOOK',
dica: 'OBJETO'
},
{
original: 'COMPUTADOR',
embaralhada: 'PUCOMDORTA',
dica: 'OBJETO'
},
{
original: 'LANTERNA',
embaralhada: 'TERLANNA',
dica: 'OBJETO'
},
{
original: 'CACHORRO',
embaralhada: 'CAORROCHO',
dica: 'ANIMAL'
},
{
original: 'DESENTUPIDOR',
embaralhada: 'SENDETUDORPI',
dica: 'OBJETO'
},
{
original: 'TOMATE',
embaralhada: 'ATEMOT',
dica: 'ALIMENTO'
},
{
original: 'SAXOFONE',
embaralhada: 'ASXOEOFN',
dica: 'INSTRUMENTO MUSICAL'
},
{
original: 'CAZAQUISTÃO',
embaralhada: 'ZAACQIUSÃOT',
dica: 'PAÍS'
},
{
original: 'CROÁCIA',
embaralhada: 'CRCÁOAI',
dica: 'PAÍS'
},
{
original: 'HUNGRIA',
embaralhada: 'UHGINRA',
dica: 'PAÍS'
},
{
original: 'MEGAFONE',
embaralhada: 'MOEFGNEA',
dica: 'OBJETO'
},
{
original: 'CINTURA',
embaralhada: 'RCIANUT',
dica: 'CORPO HUMANO'
},
{
original: 'ABDÔMEN',
embaralhada: 'MBÔDENA',
dica: 'CORPO HUMANO'
},
{
original: 'VAGNER',
embaralhada: 'GNEVAR',
dica: 'NOME'
},
{
  original: 'GEOVANA',
embaralhada: 'OAENVAG',
dica: 'NOME'
},
{
  original: 'MAÇA',
embaralhada: 'Mçaa',
dica: 'FRUTA'
},
{
  original: 'GARFO',
embaralhada: 'FGROA',
dica: 'OBJETO'
},
{
  original: 'CADEIRA',
embaralhada: 'CIAEDRA',
dica: 'Objeto'
},
{
  
original: 'TANGERINA',
embaralhada: 'RITAANGNE',
dica: 'ALIMENTO'
}
]

// FAKE
const fgc = {key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "558896926980-1632378982@g.us","inviteCode": "𝗥𝗜𝗦𝗞𝗬 𝗠𝗢𝗗𝗭 - 𝗫𝗜𝗡𝗭𝗭 ⛩🔥","groupName": "P", "caption": `𝗫𝗜𝗡𝗭𝗭 𝗕𝗢𝗧 - 𝗢𝗙𝗜𝗖𝗜𝗔𝗟`, 'jpegThumbnail': 'https://i.pinimg.com/originals/b7/06/05/b70605c47600edaab3ba8fa35b03eed6.png'}}}
const ftroli = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "88996926980@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2004,status: 1,surface : 1,message: `𝗥𝗜𝗦𝗞𝗬 𝗠𝗢𝗗𝗭 - 𝗫𝗜𝗡𝗭𝗭 💎🚀`,orderTitle: 'Bang',thumbnail: '', sellerJid: '0@s.whatsapp.net'}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5588996929680-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
//FAKEREPLY LOCATION
const fhidetag = {key : {fromMe:false, //by Guntur
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `Mensagem de\n${pushname}`, 
                            orderTitle: `𝗥𝗶𝘀𝗸𝘆 𝗠𝗼𝗱𝘇 🔥`,
                            thumbnail: logo, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}

const flokasi = {
key : {
participant : '0@s.whatsapp.net'
},message: {locationMessage:{name: 'Brazil',
jpegThumbnail: logo}}}
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('nsfw' in chats)) chats.nsfw = false
                if (!('antivenda' in chats)) chats.antivenda = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
                nsfw: false,
                antivenda: false,
            }
		          
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
        const addWarn = (sender, advr) => {
	let position = false
	Object.keys(_adv).forEach((i) => {
		if (_adv[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_adv[position].adv += advr
		fs.writeFileSync('./lib/advertencia.json', JSON.stringify(_adv))
	}
}
	const getWarn = (m) => {
	let position = false
	Object.keys(_adv).forEach((i) => {
		if (_adv[i].id === m.sender) {
			position = i
		}
	})
	if (position !== false) {
		return _adv[position].adv
	}
}

const getWarnId = (m) => {
	let position = false
	Object.keys(_adv).forEach((i) => {
		if (_adv[i].id === m.sender) {
			position = i
		}
	})
	if (position !== false) {
		return _adv[position].id
	}
}

const chetwarnx = getWarn(m)
var advertencia = 'primeira'
            if (chetwarnx === 0) {
                advertencia = 'primeira'
            } else if (chetwarnx === 1) {
                advertencia = 'segunda'
            } else if (chetwarnx === 2) {
                advertencia = 'terceira'
	        } else if (chetwarnx === 3) {
                advertencia = 'quarta'
            } else if (chetwarnx === 4) {
                advertencia = 'quinta'
            } else if (chetwarnx === 5) {
                advertencia = 'sexta'
            }
const addWarnId = (m) => {
	const aadv = { id: m, adv: 0, }
	_adv.push(aadv)
	fs.writeFileSync('./lib/advertencia.json', JSON.stringify(_adv))
}    
        // Public & Self
       if (!m.isGroup && !isCreator && !isPremium) {
        if (isCreator && isPremium) return
        anjay = await getBuffer('https://animesonline.com.br/wp-content/uploads/2020/11/wallpaper-hd-anime-girl.jpg')
               anu = `🌟 O USO DA BOT É PÚBLICO!
➖➖➖➖➖➖➖➖➖➖➖➖➖
- Entre no grupo para utilizar os comandos da bot(gratuito).
- Após essa mensagem, você será bloqueado!
⚙️ Entre e utilize!
- Atualizado: 17/05/2022
➖➖➖➖➖➖➖➖➖➖➖➖➖
✅ Uso Ilimitado [FREE]
➖➖➖➖➖➖➖➖➖➖➖➖➖
🏷️ Tags: #RiskyRobbot
©️Risky Modz | | @Riskyzin
`
                let btn = [{
                                urlButton: {
                                    displayText: 'Entrar no Grupo',
                                    url: 'https://chat.whatsapp.com/ITuJbH035pkHEBpOXxjrY0'
                                }
                            }
                            ]
                       await client.send5ButImg(m.chat, anu, client.user.name, anjay, btn).then(res => {
            client.updateBlockStatus(m.sender, 'block')
            client.chatModify({ clear: { message: { id: from }} }, m.chat, [])
            })
            return
        }
               
// nsfw off
               const NsfwOff = () => { 
                 let buttons = [
                        { buttonId: 'nsfwon', buttonText: { displayText: 'Ativar' }, type: 1 }     
                    ]
                    client.sendButtonText(m.chat, buttons, `𝑂𝑙𝑎́, *@${m.sender.split("@")[0]}*. 𝑂 𝒎𝒐𝒅𝒐 𝒏𝒔𝒇𝒘 𝑛𝑎̃𝑜 𝑒𝑠𝑡𝑎́ 𝑎𝑡𝑖𝑣𝑎𝑑𝑜 𝑛𝑒𝑠𝑠𝑒 𝑔𝑟𝑢𝑝𝑜, 𝑒𝑛𝑡𝑎̃𝑜 𝑛𝑎̃𝑜 𝑣𝑜𝑢 𝑒𝑥𝑒𝑐𝑢𝑡𝑎𝑟 𝒏𝒆𝒏𝒉𝒖𝒎 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 𝑝𝑎𝑟𝑎 𝒎𝒂𝒊𝒐𝒓𝒆𝒔 𝒅𝒆 𝒅𝒆𝒛𝒐𝒊𝒕𝒐 𝒂𝒏𝒐𝒔.`, `𝑨𝒑𝒆𝒏𝒂𝒔 𝒐𝒔 𝒂𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓𝒆𝒔 𝒑𝒐𝒅𝒆𝒎 𝒂𝒕𝒊𝒗𝒂𝒓.`, m)
                }
        // Push Message To Console && Auto Read
        if (m.message) {
            client.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MENSAGEM ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> De'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Em'), chalk.green(m.isGroup ? pushname : 'Chat Privado', m.chat))
        }
	// ANAGRAMA 
	// JOGOS OFICIAIS //

if(m.isGroup && fs.existsSync(`./src/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return m.reply('está perto')
if(budy.toUpperCase() == dataAnagrama.original) { client.sendMessage(m.chat, { text: `Parabéns! ${pushname} 🥳 ganhou o jogo!\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`}, { quoted: m }), fs.unlinkSync(`./src/anagrama-${from}.json`)		
recompensa = `Correto!`
m.reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
client.sendMessage(m.chat, { text: `╭═•ೋ❀๑🎮๑❀ೋ•═╮ 
                𝐗𝐈𝐍𝐙𝐙-𝐌𝐃💎
            𝐀𝐍𝐀𝐆𝐑𝐀𝐌𝐀💬
  ╰═•ೋ❀๑🎮๑❀ೋ•═╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╭╼━═━━≺🎠≻━━═━╾╮
╎❀ۣۜۜ͜͡ ⚠️ DESCUBRA A PALAVRA
╎❀ۣۜۜ͜͡ ⛑️ ANAGRAMA: ${dataAnagrama2.embaralhada}
╎❀ۣۜۜ͜͡ ✨ DICA: ${dataAnagrama2.dica}
╰╼━═━━≺🎠≻━━═━─╯
`})
}, 5000)
}}

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limite resetado')
        }, {
            scheduled: true,
            timezone: "America/Fortaleza"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await client.setStatus(`${client.user.name} | Tempo : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    // anti nota fake
if (budy.includes("BOM DIA") || (budy.includes("om Dia") || (budy.includes("om dia")))){	    
client.sendMessage(m.chat, { react: { text: "⛅", key: m.key }})
}
if (budy.includes("Boa noite") || (budy.includes("oa No") || (budy.includes("boa noite")))){	    
client.sendMessage(m.chat, { react: { text: "🌕", key: m.key }})
}
	  // Anti Link
        if (m.isGroup && isAntilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`Nao sou admin -_-`)
        let gclink = (`https://chat.whatsapp.com/`+await client.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return
        if (isAdmins) return
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }      
	if (budy.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) {
      if (isAdmins) return
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        
	        if (budy.match("www.")){
		      if (isAdmins) return
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        
                if (budy.match("Www.")){
		      if (isAdmins) return
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
	
	        if (budy.match("https://vm.tiktok.com/")){
	      if (isAdmins) return
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
	
	        if (budy.match("://chat.whatsapp.com/")){
      if (isAdmins) return
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
	
		        if (budy.match("https://s.kwai.app/")){
	      if (isAdmins) return
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }

        if (budy.match("bit.ly")){
	      if (isAdmins) return
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }                
        
                if (budy.match("ttps://")){
	      if (isAdmins) return
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }  
        
                              if (budy.match("ot gay")){
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }        
        }
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
//Anti nota fake
        if (m.isGroup && isAntivenda) {	
	        if (budy.match("💰")){
	      if (isAdmins) return
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
if (budy.match("awar")){
        if (isAdmins) return
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }               
    
            if (budy.match("://chat.whatsapp.com/")){
        if (isAdmins) return
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
    if (budy.match("💸")){
        if (isAdmins) return
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }       
            if (budy.match("💠")){
        if (isAdmins) return
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
if (budy.match("🤑")){
        if (isAdmins) return
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
	        if (budy.match("🤑")){
      if (isAdmins) return m.reply('oi')
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
	
		        if (budy.match("R$")){
	      if (isAdmins) return
        if (isCreator) return
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: client.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, client.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        client.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            client.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await client.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await client.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await client.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await client.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await client.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await client.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await client.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, client.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?desisto|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': '𝙊 𝙟𝙤𝙜𝙤 𝙖𝙘𝙖𝙗𝙤𝙪.',
	    '-2': '𝙄𝙣𝙫𝙖𝙡𝙞𝙙𝙤',
	    '-1': '𝙋𝙤𝙨𝙞𝙘̧𝙖̃𝙤 𝙄𝙣𝙫𝙖́𝙡𝙞𝙙𝙖',
	    0: '𝙋𝙤𝙨𝙞𝙘̧𝙖̃𝙤 𝙄𝙣𝙫𝙖́𝙡𝙞𝙙𝙖',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
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
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `𝙄𝙙 𝙙𝙖 𝙎𝙖𝙡𝙖: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} 𝙑𝙚𝙣𝙘𝙚𝙪!` : isTie ? `𝙁𝙞𝙢 𝙙𝙚 𝙅𝙤𝙜𝙤` : `𝙑𝙞𝙧𝙖𝙧 ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Digite *desisto* para desistir e admitir a derrota`	  
 if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
        console.log(`@${roof.p2.split`@`[0]}`)
	    client.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    client.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) client.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) client.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) client.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    client.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) client.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) client.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
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
	    client.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
Razao de esta AFK${user.afkReason ? ' nenhuma ' + user.afkReason : ''}
As ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} Motivo ${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'jogodavelha': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Oponente encontrado!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'Jogando'
            let arr = room.game.render().map(v => {
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
            }[v]
            })
            let str = `𝙄𝙙 𝙙𝙖 𝙎𝙖𝙡𝙖: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Vez de @${room.game.currentTurn.split('@')[0]}

Digite *desista* para desistir e admitir a derrota`
   if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Parceiro' + (text ? `digite o comando abaixo ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            client.sendText(m.chat, `𝙋𝙧𝙞𝙢𝙚𝙞𝙧𝙤 𝙙𝙚𝙡𝙚𝙩𝙚 𝙖 𝙨𝙚𝙨𝙨𝙖̃𝙤 𝙖𝙣𝙩𝙚𝙧𝙞𝙤𝙧.`, m)
            } else if (!this.game) {
            m.reply(`𝙎𝙚𝙨𝙨𝙖̃𝙤 𝙅𝙤𝙜𝙤 𝙙𝙖 𝙑𝙚𝙡𝙝𝙖🎮 𝙞𝙣𝙞𝙘𝙞𝙖𝙙𝙖.`)
            } else throw '?'
            } catch (e) {
            m.reply('Sucesso')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Complete seu terno anterior`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Não consegue jogar consigo mesmo !`)
            if (!m.mentionedJid[0]) return m.reply(`_Sobre quem você quer ser?_ Marque a pessoa.. Exemplo : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `A pessoa que você está desafiando está jogando naipe com outra pessoa :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} desafiou @${m.mentionedJid[0].split`@`[0]} pra jogar

Por favor, @${m.mentionedJid[0].split`@`[0]} digite aceitar/rejeitar`
            this.suit[id] = {
            chat: await client.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'Esperando...',
            waktu: setTimeout(() => {
            if (this.suit[id]) client.sendText(m.chat, `_Tempo limite do terno_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            break
            case 'grupoo': {
                m.reply('https://instagram.com/riskyzin')
            }
            break
              case 'dontback':
          if (!m.isGroup) return m.reply(mess.admin)
          if (!isAdmins) return m.reply(mess.admin)
          if (args.length < 1) return m.reply('Hmmmm')
          if (Number(args[0]) === 1) {
            var ind = dbids.indexOf(from)
            if(isDontBack) {
              dontback[ind].actived = true
            } else {
              dontback.push({
                groupId: from,
                actived: true,
                number: []
              })
            }
            fs.writeFileSync('./src/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
            m.reply(`Ativou com sucesso o recurso de don't back neste grupo✔️`)
          } else if (Number(args[0]) === 0) {
            var ind = dbids.indexOf(from)           
            if(isDontBack) {
              dontback[ind].actived = false
            } else {
              dontback.push({
                groupId: from,
                actived: false,
                number: []
              })
            }
            fs.writeFileSync('./src/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
            m.reply(`Desativou com sucesso o recurso de don't back neste grupo✔️`)
          } else {
            m.reply('1 para ativar, 0 para desativar')
          }
        break
        case 'dbackadd':
          if (!m.isGroup) return m.reply(mess.admin)
          if (!isAdmins) return m.reply(mess.admin)
          if (args.length < 1) return m.reply('Diga o numero sem espaço, + ou traço')
          if (isNaN(args[0])) return m.reply('Diga o numero sem espaço, + ou traço')
          var ind = dbids.indexOf(from)
          if(isDontBack) {
            var numind = dontback[ind].number.indexOf(args[0])
            if(numind >= 0) return m.reply('*Esse Número ja esta incluso*')
            dontback[ind].number.push(args[0])
          } else {
            dontback.push({
              groupId: from,
              actived: false,
              number: [args[0]]
            })
          }
          fs.writeFileSync('./src/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
          m.reply(`*Número adicionado a lista de don't back*`)

        break
        case 'dbackrm':
          if (!m.isGroup) return m.reply(mess.admin)
          if (!isAdmins) return m.reply(mess.admin)
          if (args.length < 1) return m.reply('Diga o numero sem espaço, + ou traço')
          if (isNaN(args[0])) return m.reply('Diga o numero sem espaço, + ou traço')
          var ind = dbids.indexOf(from)
          if(!isDontBack) return m.reply('*Nenhum Número não foi adicionado*')
          var numind = dontback[ind].number.indexOf(args[0])
          if(numind < 0) return m.reply('*Esse número não está incluso*')
          dontback[ind].number.splice(numind, 1)
          fs.writeFileSync('./src/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
          m.reply(`*Número removido a lista de don't back*`)
        break
        case 'dbacklist':
          if (!m.isGroup) return m.reply(mess.admin)
          if (!isAdmins) return m.reply(mess.admin)
          var ind = dbids.indexOf(from)
          if(!isDontBack) return m.reply('*Nenhum Número não foi adicionado*')
          teks = '*Números que vou moer na porrada se voltar 😡:*\n'
          for(i=0;i<dontback[ind].number.length;++i) {
            teks += `➤ *${dontback[ind].number[i]}*\n`
          }
          teks += '*Esses ai vou descer meu martelo do ban 🥵*'
          m.reply(teks)
        break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    client.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    client.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    client.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    client.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    client.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    client.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    client.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
             case 'porno': case 'porn': case 'bokep': {
                                            if(!isNsfw) return NsfwOff()
                               if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
                m.reply(mess.wait)
                anu = await porno()
                client.sendMessage(m.chat, { video: { url: 'https://tikporntok.com/'+anu.video }, caption: `⭔ Titulo : ${anu.title}\n⭔ Views : ${anu.views}\n⭔ Tags : ${anu.tags}\n⭔ Likes : ${anu.like}\n⭔ Deslikes : ${anu.dislike}\n⭔ Favoritados : ${anu.favorite}\n⭔ Upado em : ${anu.upload}\n⭔ Descrição : ${anu.desc}\n\nRisky - Xinzz Md` }, { quoted: m })
            }
            break
            case 'maker': {
branch = `╎❀ۣۜۜ͜͡ 🍨`
akaik = `╭═•ೋ❀๑🦄๑❀ೋ•═╮ 
         🍃𝐗𝐈𝐍𝐙𝐙-𝐌𝐃🍃
    ☕ 𝐌𝐄𝐍𝐔-𝐌𝐀𝐊𝐄𝐑 ☕
╰═•ೋ❀๑🦄๑❀ೋ•═╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

╭╼━═━━≺Ⓜ️≻━━═━╾╮
╎
${branch} ${prefix}advancedglow
${branch} ${prefix}thunder2
${branch} ${prefix}candy
${branch} ${prefix}christmas
${branch} ${prefix}3dchristmas
${branch} ${prefix}sparklechristmas
${branch} ${prefix}deepsea
${branch} ${prefix}scifi
${branch} ${prefix}rainbow
${branch} ${prefix}waterpipe
${branch} ${prefix}spooky
${branch} ${prefix}pencil
${branch} ${prefix}circuit
${branch} ${prefix}discovery
${branch} ${prefix}metalic
${branch} ${prefix}fiction
${branch} ${prefix}demon
${branch} ${prefix}transformer
${branch} ${prefix}berry
${branch} ${prefix}thunder
${branch} ${prefix}magma
${branch} ${prefix}3dstone
${branch} ${prefix}neonlight
${branch} ${prefix}glitch
${branch} ${prefix}harrypotter
${branch} ${prefix}brokenglass
${branch} ${prefix}papercut
${branch} ${prefix}watercolor
${branch} ${prefix}multicolor
${branch} ${prefix}neondevil
${branch} ${prefix}underwater
${branch} ${prefix}graffitibike
${branch} ${prefix}snow
${branch} ${prefix}cloud
${branch} ${prefix}honey
${branch} ${prefix}fruitjuice
${branch} ${prefix}biscuit
${branch} ${prefix}strawberry
${branch} ${prefix}matrix
${branch} ${prefix}blood
${branch} ${prefix}dropwater
${branch} ${prefix}lava
${branch} ${prefix}rock
${branch} ${prefix}bloodglas
${branch} ${prefix}hallowen
${branch} ${prefix}darkgold
${branch} ${prefix}joker
${branch} ${prefix}firework
${branch} ${prefix}skeleton
${branch} ${prefix}blackpink
${branch} ${prefix}sand
${branch} ${prefix}glue
${branch} ${prefix}1917
╎
╰╼━═━━≺Ⓜ️≻━━═━─╯`
let message = await prepareWAMessageMedia({ video: fs.readFileSync('./midias/maker.mp4'), gifPlayback:true, jpegThumbnail:logo }, { upload: client.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: akaik,
hydratedFooterText: "© XINZZBOT ~ RISKY",
hydratedButtons: [{
urlButton: {
displayText: '𝙂𝙧𝙪𝙥𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡',
url: 'https://chat.whatsapp.com/ITuJbH035pkHEBpOXxjrY0'
}
}, {
urlButton: {
displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢',
url: 'https://instagram.com/riskyzin'
}
}, {
quickReplyButton: {
displayText: '𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙𝙚',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: '𝘾𝙤𝙣𝙩𝙖𝙩𝙤',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: '𝘿𝙚𝙡𝙚𝙩𝙖𝙧',
id: 'd'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
client.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await client.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await client.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    client.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, client.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    client.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, client.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    client.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, client.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    client.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, client.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    client.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, client.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    client.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    client.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, client.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break

            case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
             if (!q) return m.reply(`Exemplo : ${prefix + command} RISKY`) 
             m.reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                client.sendMessage(m.chat, { image: { url: anu }, caption: `*FEITO!*` }, { quoted: m })
             }
             break
            case 'matematica': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nDigite:: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                client.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'casal': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫𝙊 𝘾𝙖𝙨𝙖𝙡 𝙋𝙚𝙧𝙛𝙚𝙞𝙩𝙤

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'casal', buttonText: { displayText: '𝙈𝙞𝙣𝙝𝙖 𝘼𝙡𝙢𝙖 𝙂𝙚̂𝙢𝙚𝙖' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, jawab, client.user.name, m, {mentions: ments})
            }
            break
            
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, jawab, client.user.name, m, {mentions: menst})
            }
            break
            
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                client.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': case 'entrar': {
if (!isPremium) return m.reply(`❌ Você não é o Risky!`)
                if (!text) throw ('Coloque o link do grupo')
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalido!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                let buttons = [
                        { buttonId: 'menu', buttonText: { displayText: '✅ MENU' }, type: 1 },
                        { buttonId: 'lista', buttonText: { displayText: '🚀 LISTA' }, type: 1 }
                    ]
                await client.groupAcceptInvite(result).then((res) => client.sendButtonText(res, buttons, `🌟Oi! Fui covidado pelo *${pushname}* para entrar no grupo.\n🥰 Meu nome é Xinzz-Md e é uma honra conhecê-los!\n\n🦄 Sou uma bot programada para administrar e tenho muitos outros tipos de recursos.`, 'Segue o menu:', fgc)).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': case 'vazar':{
                if (!isCreator) throw mess.owner
                await client.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break

	case 'kick': case 'ban': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => console.log(`*Quitado* @${mek}`)).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.groupParticipantsUpdate(m.chat, [users], 'add').then((res) =>  console.log(`*Add* @${mek}`)).catch((err) => m.reply(jsonformat(err)))
	}
	break

	case 'promover': case 'pm': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator && !isPremium) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        teks = `\n       ⭔ @${users.split('@')[0]} *𝙎𝙚 𝙩𝙤𝙧𝙣𝙤𝙪 𝘼𝙙𝙢𝙞𝙣!*       \n`
		await client.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'rebaixar': case 'dm': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins && !isCreator && !isPremium) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        teks = `\n       ⭔ @${users.split('@')[0]} *𝙋𝙚𝙧𝙙𝙚𝙪 𝙨𝙚𝙪 𝘼𝙙𝙢𝙞𝙣!*       \n`
		await client.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })).catch((err) => m.reply(jsonformat(err)))
	}
	break

        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        teks = `\n       ⭔ @${users.split('@')[0]} *𝙀𝙨𝙨𝙚 𝙢𝙚𝙢𝙗𝙧𝙤 𝙛𝙤𝙞 𝙗𝙡𝙤𝙦𝙪𝙚𝙖𝙙𝙤!*       \n`
		await client.updateBlockStatus(users, 'block').then((res) => client.sendMessage(m.chat, { text: teks }, { quoted: m })).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
        teks = `\n       ⭔ @${users.split('@')[0]} *𝙈𝙚𝙢𝙗𝙧𝙤 𝙙𝙚𝙨𝙗𝙡𝙤𝙦𝙪𝙚𝙖𝙙𝙤!*       \n`
        console.log(users)
		await client.updateBlockStatus(users, 'unblock').then((res) => client.sendMessage(m.chat, { text: teks }, { quoted: m })).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setnome': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw '𝘾𝙖𝙙𝙚̂ 𝙤 𝙩𝙚𝙭𝙩𝙤 ?'
                await client.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw '𝘾𝙖𝙙𝙚̂ 𝙤 𝙩𝙚𝙭𝙩𝙤?'
                await client.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await client.downloadAndSaveMediaMessage(quoted)
                await client.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgp': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙘𝙤𝙢 𝙪𝙢𝙖 𝙞𝙢𝙖𝙜𝙚𝙢 ${prefix + command}`
                if (/webp/.test(mime)) throw `𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙘𝙤𝙢 𝙪𝙢𝙖 𝙞𝙢𝙖𝙜𝙚𝙢 ${prefix + command}`
                let media = await client.downloadAndSaveMediaMessage(quoted)
                await client.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Marcar Todos* 〙✪══
 
 ➲ *𝙍𝙚𝙘𝙖𝙙𝙤 : ${q ? q : '𝙣𝙖𝙙𝙞𝙣𝙝𝙖'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break

          case 'ht': case 'hidetag': {
            if (!quoted) throw `𝙏𝙚𝙭𝙩𝙤/𝙄𝙢𝙖𝙜𝙚𝙢/𝙍𝙚𝙨𝙥𝙤𝙨𝙩𝙖/𝙁𝙞𝙜𝙪𝙧𝙞𝙣𝙝𝙖 𝙘𝙤𝙢 ${prefix + command}` 
            if (!m.isGroup) throw mess.group
            if (!isAdmins) throw mess.admin
            const ewtext = quoted.text.replace(/(^HIDETAG)/gi,'')
            if (/webp/.test(mime)){
                try{
                    let media = await quoted.download()
                    let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author, mentions: participants.map(a => a.id) })
                    await fs.unlinkSync(encmedia)
                }catch{
                    let { webp2mp4File } = require('./lib/uploader')
                    let media = await client.downloadAndSaveMediaMessage(quoted)
                    let webpToMp4 = await webp2mp4File(media)
                    let encmedia = await client.sendVideoAsSticker(m.chat, webpToMp4.result, m, { packname: global.packname, author: global.author, mentions: participants.map(a => a.id) })
                    await fs.unlinkSync(encmedia)
                }
            } else if (/video/.test(mime)) {
                let media = await client.downloadAndSaveMediaMessage(quoted)
                try{
                    await client.sendMessage(m.chat, { video: { url: media }, mimetype: 'video/mp4', filename: `${quoted.text}.mp4`, caption: ewtext ? ewtext : '', mentions: participants.map(a => a.id) }, { quoted: m })
                    await fs.unlinkSync(media)
                }catch{
                    await client.sendMessage(m.chat, { video: { url: media }, mimetype: 'video/mp4', filename: `${quoted.text}.mp4`, caption: ewtext ? ewtext : '', mentions: participants.map(a => a.id) }, { quoted: m })
                    await fs.unlinkSync(media) 
                }
            } else if (/audio/.test(mime)) {
                let media = await quoted.download()
                let { toPTT } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                client.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true, mentions: participants.map(a => a.id) }, {quoted:m})
            } else if (/image/.test(mime)) {
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    try{
                        client.sendMessage(m.chat, { image: buffer, caption: ewtext ? ewtext : '', mentions: participants.map(a => a.id) }, { quoted: m })
                    }catch{
                        client.sendMessage(m.chat, { image: buffer, caption: ewtext ? ewtext : '', mentions: participants.map(a => a.id) }, { quoted: m })
                    }
                    fs.unlinkSync(ran)
                })
            } else if (Boolean(ewtext)) {
                console.log(ewtext)
                client.sendMessage(m.chat, { text : text, mentions: participants.map(a => a.id)}, { quoted: fhidetag })
            } else {
                throw `Reply/Send Image/Text/Sticker With ${prefix + command}` 
            }
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw '𝘿𝙞𝙜𝙞𝙩𝙚 𝙖𝙡𝙜𝙤!'
                let anu = await styletext(text)
                let teks = `𝙀𝙨𝙩𝙞𝙡𝙤 𝙙𝙚 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖: ${text}\n\n`
                for (let i of anu) {
                    teks += `⭔ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break

    case 'lista':{
clau = `Olá, ${pushname}!
Este é o menu em lista onde você tem visão geral de todos os meus menus.
Aqui você pode escolher o que deseja de maneira mais prática.`
	         const sections = [
  {
  title: " ",
  rows: [
  {title: "❀ۣۜۜ͜͡⚜ 𝐌𝐄𝐍𝐔 𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋", rowId: "menu"}
  ]
  },
  {
  title: `Sub-Menu Xinzz-Md`,
  rows: [
  {title: "❀ۣۜۜ͜͡🍷 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐀𝐃𝐌𝐈𝐍", rowId: "admin"},
  {title: "❀ۣۜۜ͜͡🍷 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃", rowId: "download"},
  {title: "❀ۣۜۜ͜͡🍷 𝐌𝐄𝐍𝐔 𝐃𝐎 𝐏𝐑𝐄𝐌𝐈𝐔𝐌", rowId: "vip"},
  {title: "❀ۣۜۜ͜͡🍷 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐀𝐏𝐋𝐈𝐂𝐀𝐓𝐈𝐕𝐎𝐒", rowId: "aplicativos"},
  {title: "❀ۣۜۜ͜͡🍷 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀", rowId: "pesquisa"},
  {title: "❀ۣۜۜ͜͡🍷 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐂𝐑𝐈𝐀𝐂𝐀𝐎", rowId: "maker"},
  {title: "❀ۣۜۜ͜͡🍷 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐕𝐎𝐙", rowId: "voz"},
  {title: "❀ۣۜۜ͜͡🍷 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐄𝐃𝐈𝐂𝐀𝐎", rowId: "ephoto"},
  {title: "❀ۣۜۜ͜͡🍷 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐈𝐌𝐀𝐆𝐄𝐍𝐒️", rowId: "photoxy"},
  {title: "❀ۣۜۜ͜͡🍷 𝐌𝐄𝐍𝐔  𝐉𝐎𝐆𝐎𝐒", rowId: "jogos"},
  {title: "❀ۣۜۜ͜͡🍷 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐀𝐍𝐈𝐌𝐄️", rowId: "anime"},
  {title: "❀ۣۜۜ͜͡🍷 𝐌𝐄𝐍𝐔 𝐀𝐃𝐔𝐋𝐓𝐎", rowId: "adulto"},
  ]
  },
  {
  title: " ",
  rows: [
  {title: "❀ۣۜۜ͜͡🌟 𝐌𝐄𝐔 𝐂𝐑𝐈𝐀𝐃𝐎𝐑", rowId: "dono"}
  ]
  },
  ]
  const listMessage = {
  text: clau,
  footer: '© RISKYBOT ~ RISKY',
  buttonText: "Ver Lista",
  sections
  }
  const sendMsg = await client.sendMessage(m.chat, listMessage, {quoted: m})
}
break

               case 'voto': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Ainda há votos neste chat!_\n\n*${prefix}deletevote* - aceitar apaga votos_`
            if (!text) throw `Digite o motivo da votação, exemplo: *${prefix + command} dono gostoso`
            m.reply(`A votação começa!\n\n*${prefix}upvote* - para sim\n*${prefix}devote* - para não\n*${prefix}checkvote* - para verificar o voto\n*${prefix}deletevote* - para excluir votos`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTO 」*

*Razão:* ${vote[m.chat][0]}

┌〔 𝘼𝙘𝙚𝙞𝙩𝙖𝙧 𝙑𝙤𝙩𝙤 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 𝙍𝙚𝙘𝙪𝙨𝙖𝙧 𝙑𝙤𝙩𝙤𝙤 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}deletevote* para deletar votos`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: client.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            client.sendMessage(m.chat, buttonMessageVote)
	    }
            break

               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Votou em SIM'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Razao:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - para deletar voto`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: client.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            client.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
             case 'facebook': case 'fbdl': case 'fbmp4': case 'fb': {
if (!args[0]) return m.reply(`Exemplo :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `*| FACEBOOK DOWNLOADER |*

Tipo : video/${resd.medias[0].extension}
Qualidade : ${resd.medias[0].quality}
Tamanho : ${resd.medias[0].formattedSize}

_Para qualidade HD você pode clicar no botão abaixo_`
let buttons = [
{buttonId: `fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'QualidadeHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: "© RISKYBOT ~ RISKY",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Risky Official ~ Facebook Downloader",
body:"facebook downloader",
thumbnail: logo,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
client.sendMessage(m.chat, buttonMessage, {quoted:m})
} catch(e) {
console.log(e)
m.reply("Link invalido!")
}
}
break
case 'fbddl': {
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "FEITO!",
footer: "© RISKYBOT ~ RISKY",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Risky Official ~ Facebook Downloader",
body: " Facebook Downloader",
thumbnail: logo,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
client.sendMessage(m.chat, buttonMessage, {quoted:m})
}
break
case 'ttk': case 'ttdl': case 'tiktok': case 'ttmp4': case 'ttmp3': case 'tiktoknowm': {
if (!isUrl(args[0])) return m.reply(`Example :\n${prefix + command} <url>\nUses :\n${prefix + command} https://vt.tiktok.com/ZSdDo97dC/`)
let res = await aiovideodl(args[0])
if (isUrl(args[0])) {
texttk = `*| TIKTOK DOWNLOADER |*

Descrição : ${res.title}
Tamanho : ${res.medias[1].formattedSize}
Tipo : ${res.medias[1].extension ? "video/" + res.medias[1].extension : "undefined"}

_Selecione marca dagua ou áudio e aguarde alguns instantes_`
let buttons = [
{buttonId: `ttvd ${args[0]}}`, buttonText: {displayText: `× Marca D'água`}, type: 1},
{buttonId: `ttad ${args[0]}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
video: {url:res.medias[1].url},
caption: texttk,
footer: "© RISKYBOT ~ RISKY",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Risky Official ~ Tiktok Downloader",
body:res.title,
thumbnail: logo,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
client.sendMessage(from, buttonMessage, {quoted:m})
} else {
m.reply("Link Error!")
}
}
break
case 'ttad': {
let res = await aiovideodl(args[0])
client.sendMessage(from, {audio:{url:res.medias[2].url}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:"Risky Official ~ Tiktok Downloader",
body:res.title,
thumbnail: logo,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}}, {quoted:m})
}
break
case 'ttvd': {
let res = await aiovideodl(args[0])
texttk = `*| TIKTOK DOWNLOADER |*

Caption : ${res.title}
Size : ${res.medias[0].formattedSize}
Type : ${res.medias[0].extension ? "video/" + res.medias[0].extension : "undefined"}

_Para ver a lista de menus pressione o botão abaixo ou digite menu_`
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:res.medias[0].url},
caption: texttk,
footer: "© RISKYBOT ~ RISKY",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Risky Official ~ Tiktok Downloader",
body:res.title,
thumbnail: logo,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
client.sendMessage(from, buttonMessage, {quoted:m})
}
break
             case 'igdl': case 'instagram': {

if (!args[0]) return m.reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n⭔ Username : ${resed.user.username ? resed.user.name : "Riskyzin"}\n⭔ Seguidores : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `iggg ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Selecione a mídia abaixo para fazer o download_`
let buttons = anu_list
let buttonMessage = {
image:logo,
jpegThumbnail:logo,
caption: textbv,
footer: "© XINZZBOT ~ RISKY",
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, {quoted:m})
})
} catch (err) {
m.reply(String(err))
}
}
break
case 'iggg': {
if (args[0] === "mp4") {
client.sendMessage(m.chat, {video:{url:args[1]}, caption:'Feito!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
client.sendMessage(m.chat, {image:{url:args[1]}, caption:'Feito!'}, {quoted:m})
} else {
m.reply(" Error! ")
}
}
break
case 'mp44' : {
if (!args[0]) return m.reply("Link??")
try {
client.sendMessage(m.chat, {video:{url:args[0]}, caption:"Succeso", contextInfo:{externalAdReply:{
title:"RISKYBOT - Risky",
body:"© XINZZBOT ~ RISKY",
thumbnail: logo,
mediaType:2,
mediaUrl: "https://www.youtube.com/watch?v=Om5zyTOYkPs&t=1s&ab_channel=Xinzz%E3%82%92",
sourceUrl: "https://instagram.com/riskyzin"
}}}, {quoted:m})
} catch {
m.reply("Linknya Error")
}
}
break

case 'banativos':
if (!isAdmins) throw mess.admin
if (!m.isGroup) throw mess.group
if(groupIdscount.indexOf(m.chat) >= 0) {
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.jid) >=0) { 
var indnum = numbersIds.indexOf(obj.jid)
if(countMessage[ind].numbers[indnum].messages <= args[0]) {
if(groupAdmins.includes(obj.jid)) {
m.reply(`@${obj.jid} ta liberado por ser admin`)
} else {
client.groupParticipantsUpdate(m.chat, [obj.jid], 'remove')
}
}
} else {
if(groupAdmins.includes(obj.jid)) {
m.reply(`@${obj.jid} ta liberado por ser admin`)
} else {
client.groupParticipantsUpdate(m.chat, [obj.jid], 'remove')
}
}
}
}
break

case 'filtroativo':
if (!m.isGroup) throw mess.group
teks = `*Membros que só mandaram ${args[0]} mensagens:*\n`
mem = []
if(groupIdscount.indexOf(m.chat) < 0) return m.reply('*O bot não tem ainda dados sobre o grupo*')
for(let obj of groupMembers) {
if(args[0] != 0) { 
if(numbersIds.indexOf(obj.jid) >=0) { 
var indnum = numbersIds.indexOf(obj.jid)
if(countMessage[ind].numbers[indnum].messages == args[0]) {
teks+= `*➣ @${obj.jid.split('@')[0]}*\n`
mem.push(obj.jid)
}
}
} else {
if(numbersIds.indexOf(obj.jid) < 0) { 
teks+= `*➣ @${obj.jid.split('@')[0]}*\n`
mem.push(obj.jid)
}
}
}
m.reply(teks)
break

case 'atividade':
try{
if (!isAdmins) throw mess.admin
if(m.isGroup && groupIdscount.indexOf(m.chat) >= 0) {
var ind = groupIdscount.indexOf(m.chat)
teks = `*Atividade dos membros do grupo:*\n`
mem = []
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.jid) >=0) {
var indnum = numbersIds.indexOf(obj.jid)
teks += `➣ *@${countMessage[ind].numbers[indnum].jid.split('@')[0]}*\n*Mensagens: ${countMessage[ind].numbers[indnum].messages}\n*Comandos: ${countMessage[ind].numbers[indnum].cmd_messages}*\n`
} else {
teks += `➣ *@${obj.jid.split('@')[0]}*\n*Mensagens: 0*\n*Comandos: 0*\n`
}
mem.push(obj.jid)
}
m.reply(teks)
} else return m.reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'rankativo':
if (!m.isGroup) throw mess.group
if(groupIdscount.indexOf(m.chat) < 0) return m.reply('*O bot não tem ainda dados sobre o grupo*')
var ind = groupIdscount.indexOf(m.chat)
if(countMessage[ind].numbers.length < 3) return m.reply('*Necessita do registro de 3 usuarios*')
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
boardi = '*🔥Ranking dos membros mais ativos🔥*\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`
else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].jid.split('@')[0]}\n*Mensagens: ${countMessage[ind].numbers[i].messages}*\n*Comandos dados: ${countMessage[ind].numbers[i].cmd_messages}*\n\n`

mentioned_jid.push(countMessage[ind].numbers[i].jid)
} 
m.reply(boardi)
} catch (err) {
console.log(err)
m.reply(`*É necessário 3 pessoas para se construir um ranking*`)
}
break

case 'checkativo':
if (!m.isGroup) throw mess.group
if(groupIdscount.indexOf(m.chat) < 0) return m.reply('*O bot não tem ainda dados sobre o grupo*')
var ind = groupIdscount.indexOf(m.chat)
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('*Marque o número que deseja puxar a atividade*')
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
m.reply(`*Consulta da atividade de @${mentioned[0].split('@')[0]} no grupo*\n*Mensagens: ${countMessage[ind].numbers[indnum].messages}*\n*Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}*`)
}
else {
m.reply(`*Consulta da atividade de @${mentioned[0].split('@')[0]} no grupo*\n*Mensagens: 0*\n*Comandos dados: 0*`)
}
break

                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Votou em NAO'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTOS 」*

*Razão:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - para deletar voto`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: client.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            client.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTO 」*

*Razão:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - para deletar voto


©${client.user.id}
`
client.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Excluir sessão de votação neste grupo com sucesso')
	    }
            break
               case 'group': case 'grupo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await client.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`✅𝙂𝙧𝙪𝙥𝙤 𝙁𝙚𝙘𝙝𝙖𝙙𝙤 𝙘𝙤𝙢 𝙎𝙪𝙘𝙚𝙨𝙨𝙤`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await client.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`✅𝙂𝙧𝙪𝙥𝙤 𝘼𝙗𝙚𝙧𝙩𝙤 𝙘𝙤𝙢 𝙎𝙪𝙘𝙚𝙨𝙨𝙤`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: '🔓𝘼𝙗𝙧𝙞𝙧' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: '🔒𝙁𝙚𝙘𝙝𝙖𝙧' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `Modo do Grupo`, client.user.name, m)

             }
            }
            break

            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await client.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await client.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `Mode Edit Info`, client.user.name, m)

            }
            }
            break
            case 'antivenda':    case 'antinota': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antivenda) return m.reply(`Ja foi ativado antes!`)
                db.data.chats[m.chat].antivenda = true
                m.reply(`Ativado com sucesso!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antivenda) return m.reply(`Ja foi desativado antes!`)
                db.data.chats[m.chat].antivenda = false
                m.reply(`Desativado com sucesso!`)
                } else {
                 let buttons = [
                        { buttonId: 'antivendaon', buttonText: { displayText: 'Ativar' }, type: 1 },
                        { buttonId: 'antivendaoff', buttonText: { displayText: 'Desativar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `✅ 𝙈𝙊𝘿𝙊 𝘼𝙉𝙏𝙄-𝙑𝙀𝙉𝘿𝘼𝙎\n\n𝙎𝙀𝙍𝘼́ 𝙋𝙍𝙊𝙄𝘽𝙄𝘿𝙊 𝙑𝙀𝙉𝘿𝘼𝙎 𝙀 𝙀𝙈𝙊𝙅𝙄𝙎 𝘿𝙀 𝙉𝙊𝙏𝘼 𝙁𝘼𝙆𝙀 𝙉𝙀𝙎𝙎𝙀 𝙂𝙍𝙐𝙋𝙊!`, client.user.name, m)
                }
             }
             break
             
case `antivendaoff`: 
if (!isAdmins && !isCreator) return m.reply('Apenas admins')
if (!isAntivenda) return m.reply(`_Já está desativado!_`)
antivenda.splice(m.chat, 1)
fs.writeFileSync('./lib/antivenda.json', JSON.stringify(antivenda))
m.reply('_Modo desativado com sucesso!_')
break

case `antivendaon`: 
if (!isAdmins && !isCreator) return m.reply('Apenas admins')
if (isAntivenda) return m.reply(`_Já está ativado!_`)
antivenda.push(m.chat)
fs.writeFileSync('./lib/antivenda.json', JSON.stringify(antivenda))
m.reply('_Modo ativado com sucesso!_')
break
              case 'boton': {
                can = `┈━═❀ 
𝙎𝙀𝙅𝘼𝙈 𝘽𝙀𝙈 𝙑𝙄𝙉𝘿𝙊𝙎!💙
𝙂𝙍𝙐𝙋𝙊 𝙁𝙀𝙄𝙏𝙊 𝙋𝙍𝘼 𝙁𝘼𝙕𝙀𝙍 𝙉𝙊𝙑𝘼𝙎 𝘼𝙈𝙄𝙕𝘼𝘿𝙀𝙎👩, 𝙁𝙄𝙂𝙐𝙍𝙄𝙉𝙃𝘼𝙎🏝 𝙀 𝙏𝙍𝙀𝙏𝘼𝙎🥊!
𝙎𝙀𝙈 𝙈𝙄𝙈𝙄𝙈𝙄 𝙋𝙊𝙍𝙍𝘼!🥵
❀═━┈

❖ ── ✦ ──『✙』── ✦ ──❖ 
⚠️ 𝘼𝙏𝙀𝙉𝘾̧𝘼̃𝙊 𝙉𝘼𝙎 𝙍𝙀𝙂𝙍𝘼𝙎! ⚠️
❖ ── ✦ ──『✙』── ✦ ──❖ 
 
❌𝑃𝑅𝑂𝐼𝐵𝐼𝐷𝑂 𝑀𝐸𝑁𝑂𝑅𝐸𝑆 𝐷𝐸 15 𝐴𝑁𝑂𝑆.
❌𝑃𝑅𝑂𝐼𝐵𝐼𝐷𝑂 𝐺𝑂𝑅𝐸 𝐸 𝑃𝑂𝑅𝑁𝑂𝐺𝑅𝐴𝐹𝐼𝐴𝑆.
❌𝑃𝑅𝑂𝐼𝐵𝐼𝐷𝑂 𝑄𝑈𝐴𝐿𝑄𝑈𝐸𝑅 𝑇𝐼𝑃𝑂 𝐷𝐸 𝐿𝐼𝑁𝐾.
❌𝑃𝑅𝑂𝐼𝐵𝐼𝐷𝑂 𝑁𝑈𝑀𝐸𝑅𝑂𝑆 𝐹𝐴𝐾𝐸𝑆.
❌ 𝑃𝑅𝑂𝐼𝐵𝐼𝐷𝑂 𝑄𝑈𝐴𝐿𝑄𝑈𝐸𝑅 𝑇𝐼𝑃𝑂 𝐷𝐸 𝐹𝐿𝑂𝑂𝐷.`
                 let buttons = [
                        { buttonId: 'aaa', buttonText: { displayText: 'A' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, can, 'https://chat.whatsapp.com/HGWgbrGPyIj4u5sxuZ4RdD', m)
                }
             
             break
            case 'antilinks':    case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antivenda) return m.reply(`Ja foi ativado antes!`)
                db.data.chats[m.chat].antivenda = true
                m.reply(`Ativado com sucesso!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antivenda) return m.reply(`Ja foi desativado antes!`)
                db.data.chats[m.chat].antivenda = false
                m.reply(`Desativado com sucesso!`)
                } else {
                 let buttons = [
                        { buttonId: 'antilinkon', buttonText: { displayText: 'Ativar' }, type: 1 },
                        { buttonId: 'antilinkoff', buttonText: { displayText: 'Desativar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `🌐 𝙈𝙊𝘿𝙊 𝘼𝙉𝙏𝙄-𝙇𝙄𝙉𝙆\n\n𝙇𝙄𝙉𝙆𝙎 𝙎𝙀𝙍𝘼̃𝙊 𝙋𝙊𝙄𝘽𝙄𝘿𝙊𝙎 𝙉𝙀𝙎𝙎𝙀 𝙂𝙍𝙐𝙋𝙊!!`, client.user.name, m)
                }
             }
             break
             
case `antilinkoff`: 
if (!isAdmins && !isCreator) return m.reply('Apenas admins')
if (!isAntilink) return m.reply(`_Já está desativado!_`)
antilink.splice(m.chat, 1)
fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilink))
m.reply('_Modo desativado com sucesso!_')
break

case `antilinkon`: 
if (!isAdmins && !isCreator) return m.reply('Apenas admins')
if (isAntilink) return m.reply(`_Já está ativado!_`)
antilink.push(m.chat)
fs.writeFileSync('./lib/antilink.json', JSON.stringify(antilink))
m.reply('_Modo ativado com sucesso!_')
break
            case 'antiloc':    case 'antilocalizacao': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin

                 let buttons = [
                        { buttonId: 'antilocon', buttonText: { displayText: 'Ativar' }, type: 1 },
                        { buttonId: 'antilocoff', buttonText: { displayText: 'Desativar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `!!`, client.user.name, m)
                }            
             break
             
case `antilocoff`: 
if (!isAdmins && !isCreator) return m.reply('Apenas admins')
if (!isAntiloc) return m.reply(`_Já está desativado!_`)
antiloc.splice(m.chat, 1)
fs.writeFileSync('./lib/antiloc.json', JSON.stringify(antiloc))
m.reply('_Modo desativado com sucesso!_')
break

case `antilocon`: 
if (!isAdmins && !isCreator) return m.reply('Apenas admins')
if (isAntiloc) return m.reply(`_Já está ativado!_`)
antiloc.push(m.chat)
fs.writeFileSync('./lib/antiloc.json', JSON.stringify(antiloc))
m.reply('_Modo ativado com sucesso!_')
break
            case 'antidocumento':    case 'antidoc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin

                 let buttons = [
                        { buttonId: 'antidocon', buttonText: { displayText: 'Ativar' }, type: 1 },
                        { buttonId: 'antidocoff', buttonText: { displayText: 'Desativar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `!!`, client.user.name, m)
                }            
             break
             
case `antidocoff`: 
if (!isAdmins && !isCreator) return m.reply('Apenas admins')
if (!isAntidoc) return m.reply(`_Já está desativado!_`)
antidoc.splice(m.chat, 1)
fs.writeFileSync('./lib/antidoc.json', JSON.stringify(antidoc))
m.reply('_Modo desativado com sucesso!_')
break

case `antidocon`: 
if (!isAdmins && !isCreator) return m.reply('Apenas admins')
if (isAntidoc) return m.reply(`_Já está ativado!_`)
antidoc.push(m.chat)
fs.writeFileSync('./lib/antidoc.json', JSON.stringify(antidoc))
m.reply('_Modo ativado com sucesso!_')
break
            case 'antiimg':    case 'antiimagem': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin

                 let buttons = [
                        { buttonId: 'antiimgon', buttonText: { displayText: 'Ativar' }, type: 1 },
                        { buttonId: 'antiimgoff', buttonText: { displayText: 'Desativar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `!!`, client.user.name, m)
                }            
             break
             
case `antiimgoff`: 
if (!isAdmins && !isCreator) return m.reply('Apenas admins')
if (!isAntiimg) return m.reply(`_Já está desativado!_`)
antiimg.splice(m.chat, 1)
fs.writeFileSync('./lib/antiimg.json', JSON.stringify(antiimg))
m.reply('_Modo desativado com sucesso!_')
break

case `antiimgon`: 
if (!isAdmins && !isCreator) return m.reply('Apenas admins')
if (isAntiimg) return m.reply(`_Já está ativado!_`)
antiimg.push(m.chat)
fs.writeFileSync('./lib/antiimg.json', JSON.stringify(antiimg))
m.reply('_Modo ativado com sucesso!_')
break
            case 'antictt':    case 'anticontato': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) throw mess.admin

                 let buttons = [
                        { buttonId: 'antictton', buttonText: { displayText: 'Ativar' }, type: 1 },
                        { buttonId: 'anticttoff', buttonText: { displayText: 'Desativar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `╭═•ೋ❀๑👤๑❀ೋ•═╮ 
                𝐗𝐈𝐍𝐙𝐙-𝐌𝐃💎
        ❌𝐀𝐍𝐓𝐈-𝐂𝐎𝐍𝐓𝐀𝐓𝐎❌
╰═•ೋ❀๑👤๑❀ೋ•═╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╭╼━═━━≺🎠≻━━═━╾╮
╎❀ۣۜۜ͜͡ ⚠ SERÁ PROIBIDO VCARDS
╎ - Banirei quem enviar contatos
╰╼━═━━≺🎠≻━━═━─╯`, client.user.name, m)
                }            
             break
             
case `anticttoff`: 
if (!isAdmins && !isCreator) return m.reply('Apenas admins')
if (!isAntictt) return m.reply(`_Já está desativado!_`)
antictt.splice(m.chat, 1)
fs.writeFileSync('./lib/antictt.json', JSON.stringify(antictt))
m.reply('_Modo desativado com sucesso!_')
break

case `antictton`: 
if (!isAdmins && !isCreator) return m.reply('Apenas admins')
if (isAntictt) return m.reply(`_Já está ativado!_`)
antictt.push(m.chat)
fs.writeFileSync('./lib/antictt.json', JSON.stringify(antictt))
m.reply('_Modo ativado com sucesso!_')
break
             case 'listamaker':{
                    if (!q>4) return m.reply('𝐷𝑖𝑔𝑖𝑡𝑒 𝑎𝑙𝑔𝑢𝑚𝑎 𝑐𝑜𝑖𝑠𝑎 𝑛𝑎 𝑓𝑟𝑒𝑛𝑡𝑒 𝑑𝑜 𝑐𝑜𝑚𝑎𝑛𝑑𝑜. 𝐸𝑥: /𝑳𝒊𝒔𝒕𝒂𝒎𝒂𝒌𝒆𝒓 𝑹𝒊𝒔𝒌𝒚')
               lmk = args.join(" ")

aa = `🚀 BEM VINDO AO *MENU MAKER V2*!

⛩ CRIAÇÃO RÁPIDA PARA DESIGNS!
🦄 MENU EFICIENTE E AUTOMÁTICO!

🔥 BOA SORTE!
`
             const sections = [
  {
  title: `ANIME : NARUTO`,
  rows: [
{title: `HINATA`, rowId: `hinataa ${lmk}`},
{title: `NARUTO`, rowId: `narutoo ${lmk}`},
{title: `SASUKE`, rowId: `sasukee ${lmk}`},
{title: `BORBOLETA`, rowId: `advancedglow ${lmk}`},
{title: `ARCO-ÍRIS`, rowId: `rainbow ${lmk}`},
{title: `NUVENS`, rowId: `cloud ${lmk}`},
{title: `NEVE`, rowId: `snow ${lmk}`},
{title: `RAIOS V1`, rowId: `thunder ${lmk}`},
{title: `RAIOS V2`, rowId: `thunder2 ${lmk}`},
{title: `FALHAS`, rowId: `glitch ${lmk}`},
{title: `MATRIX`, rowId: `matrix ${lmk}`},
{title: `DEMONIACO NEON`, rowId: `neondevil ${lmk}`},
{title: `DEMONIACO`, rowId: `demon ${lmk}`}
  ]
  },
  ]
  const listMessage = {
  text: aa,
  footer: '© RISKYBOT ~ RISKY',
  buttonText: "Escolher Tema",
  sections
  }
  const sendMsg = await client.sendMessage(m.chat, listMessage, {quoted: m})
  }
  break
             case 'nsfw':	case 'modonsfw': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].nsfw) return m.reply(`Ja foi ativado antes!`)
                db.data.chats[m.chat].nsfw = true
                m.reply(`Ativado com sucesso!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].nsfw) return m.reply(`Ja foi desativado antes!`)
                db.data.chats[m.chat].nsfw = false
                m.reply(`Desativado com sucesso!`)
                } else {
                 let buttons = [
                        { buttonId: 'nsfwon', buttonText: { displayText: 'Ativar' }, type: 1 },
                        { buttonId: 'nsfwoff', buttonText: { displayText: 'Desativar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `MODO NSFW`, client.user.name, m)
                }
             }
             break
case `nsfwoff`: 
if (!isAdmins && !isCreator) return
if (!isNsfw) return m.reply(`_🔞 Já está desativado!_`)
nsfw.splice(m.chat, 1)
fs.writeFileSync('./lib/nsfw.json', JSON.stringify(nsfw))
m.reply('_🔞 Modo desativado com sucesso!_')
break

case `nsfwon`: 
if (!isAdmins && !isCreator) return
if (isNsfw) return m.reply(`_🔞 Já esta ativado!_`)
nsfw.push(m.chat)
fs.writeFileSync('./lib/nsfw.json', JSON.stringify(nsfw))
m.reply('_🔞 Modo ativado com sucesso!_')
break

case 'bemvindo':	case 'bv': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                 let buttons = [
                        { buttonId: 'bvon', buttonText: { displayText: 'Ativar' }, type: 1 },
                        { buttonId: 'bvoff', buttonText: { displayText: 'Desativar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `MODO DE BOAS-VINDAS\nAo ativar, mensagem de boas-vindas serão enviadas quando um membro entra ou sai do grupo.`, client.user.name, m)               
             }
             break
case `bvoff`: 
if (!isAdmins && !isCreator) return
if (!isBemvindo) return m.reply(`_🔞 Já está desativado!_`)
bemvindo.splice(m.chat, 1)
fs.writeFileSync('./lib/bemvindo.json', JSON.stringify(bemvindo))
m.reply('_Modo desativado com sucesso!_')
break

case `bvon`: 
if (!isAdmins && !isCreator) return
if (isBemvindo) return m.reply(`_🔞 Já esta ativado!_`)
bemvindo.push(m.chat)
fs.writeFileSync('./lib/bemvindo.json', JSON.stringify(bemvindo))
m.reply('_Modo ativado com sucesso!_')
break

 case 'antifake': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antifake) return m.reply(`Ja foi ativado antes!`)
                db.data.chats[m.chat].antifake = true
                m.reply(`Ativado com sucesso!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antifake) return m.reply(`Ja foi desativado antes!`)
                db.data.chats[m.chat].antifake = false
                m.reply(`Desativado com sucesso!`)
                } else {
                 let buttons = [
                        { buttonId: 'antifakeon', buttonText: { displayText: 'Ativar' }, type: 1 },
                        { buttonId: 'antifakeoff', buttonText: { displayText: 'Desativar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `MODO antifake`, client.user.name, m)
                }
             }
             break
case `antifakeoff`: 
if (!isAdmins && !isCreator) return m.reply('Apenas admins')
db.data.chats[m.chat].antifake = false
m.reply('_🇧🇷 Modo Antifake desativado!_')
break

case `antifakeon`: 
if (!isAdmins && !isCreator) return m.reply('Apenas admins')
db.data.chats[m.chat].antifake = true
m.reply('_🇧🇷 Modo Antifake ativado!_')
break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${client.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${client.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `Mute Bot`, client.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgp': {
                if (!m.isGroup) throw mess.group
                let response = await client.groupInviteCode(m.chat)
                client.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink: ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw '𝙈𝙚𝙣𝙨𝙖𝙜𝙚𝙣𝙨 𝙩𝙚𝙢𝙥𝙤𝙧𝙖́𝙩𝙞𝙖𝙨 value enable/disable'
                if (args[0] === 'enable') {
                    await client.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await client.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'd': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Marque uma mensagem do bot!'
                client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let getGroups = await client.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'A',
                                    url: ''
                                }
                            }, {
                                urlButton: {
                                    displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢',
                                    url: 'https://instagram.com/riskyzin'                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙𝙚',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '𝘾𝙤𝙣𝙩𝙖𝙩𝙤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '𝙂𝙧𝙪𝙥𝙤',
                                    id: 'grupoo'
                                }
                            }]
                      let txt = `「 𝙏𝙧𝙖𝙣𝙨𝙢𝙞𝙨𝙨𝙖̃𝙤 𝙂𝙋 」\n\n${text}`
                      client.send5ButImg(i, txt, client.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'sc':
            case 'planos':
anu = `✅🚀 *PLANOS DA XINZZ-MD* 🚀✅
- Os preços a seguir, são fixos:

⛩ USUÁRIO PREMIUM:
↳R$ 5,00 (Eterno)

© Xinzz - Risky ヅ`

 let btn = [{
                                urlButton: {
                                    displayText: 'Comprar ViP',
                                    url: 'https://api.whatsapp.com/send/?phone=5588996926980&text=Oi,%20Risky!%20Estou%20interessado%20em%20ser%20ViP%20da%20Risky%20Robbot.'
                                }
                            }]
             client.send5ButImg(m.chat, anu, client.user.name, global.thumb, btn)                
            break            
         
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Qual texto?\n\nExemplo: ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                clevis = await getBuffer('https://w0.peakpx.com/wallpaper/235/77/HD-wallpaper-pretty-face-pretty-blond-cg-blush-beautiful-adorable-sweet-nice-anime-beauty-anime-girl-long-hair-blue-eyes-female-lovely-blonde-blonde-hair-blond-hair-hat-kawaii-girl-cap-blushing.jpg')
                m.reply(`Enviando transmissão para bate-papo de ${anu.length}\nTempo de conclusão ${anu.length * 1.5} segundos`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: '🍧 Instagram',
                                    url: 'https://instagram.com/riskyzin'
                                }
                            }, {
                                urlButton: {
                                    displayText: '🥂 Grupo',
                                    url: 'https://chat.whatsapp.com/ITuJbH035pkHEBpOXxjrY0'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '☕ Ping',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🍷 Ajuda',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '🍫 Ser ViP',
                                    id: 'sc'
                                }
                            }]
                      let txt = `╭═•ೋ❀๑🦄๑❀ೋ•═╮ 

   𝐓𝐑𝐀𝐍𝐒𝐌𝐈𝐒𝐒𝐀𝐎 𝐆𝐄𝐑𝐀𝐋

╰═•ೋ❀๑🦄๑❀ೋ•═╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
\n\n${text}`
                      client.send5ButImg(yoi, txt, client.user.name, clevis, btn)
		}
		m.reply('𝙎𝙪𝙘𝙚𝙨𝙨𝙤!')
            }
            break
            
            case 'conselho':
m.reply(conselho)
break

            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `⭔ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                client.sendTextWithMentions(m.chat, teks, m)
            }
            break

            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *𝙇𝙞𝙨𝙩𝙖 𝙙𝙖𝙨 𝙘𝙤𝙣𝙫𝙚𝙧𝙨𝙖𝙨*\n\n𝘾𝙝𝙖𝙩 𝙩𝙤𝙩𝙖𝙡 : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *𝙉𝙤𝙢𝙚 :* ${nama}\n⬡ *𝙐𝙨𝙚𝙧 :* @${i.split(',')[0]}\n⬡ *𝘾𝙝𝙖𝙩 :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 client.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *𝙇𝙞𝙨𝙩𝙖 𝙙𝙚 𝙜𝙧𝙪𝙥𝙤𝙨*\n\n𝙏𝙤𝙩𝙖𝙡 : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await client.groupMetadata(i)
                    // let ownersplitajg = `@${metadata.owner.split(',')[0]}`
                    //  console.log(`@${ew.split`@`}`)
                     teks += `⬡ *𝙉𝙤𝙢𝙚 :* ${metadata.subject}\n⬡ *𝘿𝙤𝙣𝙤 :* @${metadata.owner.split`@`[0]}\n⬡ *𝙄𝙙 :* ${metadata.id}\n⬡ *𝘾𝙧𝙞𝙖𝙘̧𝙖̃𝙤 :* ${moment(metadata.creation * 1000).tz('America/Fortaleza').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *𝙈𝙚𝙢𝙗𝙧𝙤𝙨 :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                    //  m.reply(teks)
                    //  console.log(teks)
                    }
                ewewew = `ew`
                // m.reply(teks)
                client.sendTextWithMentions(m.chat, teks, m)
                }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    client.sendText(m.chat, '𝙇𝙞𝙨𝙩𝙖 𝙊𝙣𝙡𝙞𝙣𝙚:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
             
            case 'sticker': case 's': case 'f2': case 'f': case 'figu': case 'figu2': {
            if (!quoted) return m.reply(`marque um Video/Imagem com o comando ${prefix + command}`)
            if (!isMedia) return
            m.reply(mess.wait)
            try{
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: `${pushname}`, author: `${groupName}` })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('10s no maximo!')
                let media = await quoted.download()
                let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: `${pushname}`, author: `${groupName}` })
                await fs.unlinkSync(encmedia)
            } else {
                throw `𝙈𝙖𝙧𝙦𝙪𝙚 𝙪𝙢 𝙫𝙞́𝙙𝙚𝙤 𝙤𝙪 𝙛𝙤𝙩𝙤 𝙘𝙤𝙢 ${prefix + command}\n𝘿𝙪𝙧𝙖𝙘̧𝙖̃𝙤 𝙙𝙚 𝙫𝙞́𝙙𝙚𝙤: 1-9 𝙎𝙚𝙜𝙪𝙣𝙙𝙤𝙨`
                }
            }catch(e){
            console.log(e)
            client.sendMessage(m.chat, { react: { text: "❌", key: m.key }})
            m.reply('Ocorreu um erro na hora da conversão.')
            }
            }
            break

            case 'fofc': case 'figu3': case 'f3': {
            if (!quoted) return m.reply(`marque uma mensagem`)
            mp3334 = args.join(" ")
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: `   ⛩・Entre no nosso\n grupo do WhatsApp:\n ⤻bit.ly/WorldOfSticker\n\n 🍃・Personagem\n ⤻${mp3334}`, author: `🇧🇷・Figurinha criada\npela comunidade:\n'Xinzz - Md'\n\n🌟・Feita por:\n⤻${pushname}` })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('10s no maximo!')
                let media = await quoted.download()
                let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: `   ⛩・Entre no nosso\n grupo do WhatsApp:\n ⤻bit.ly/WorldOfSticker\n\n 🍃・Personagem\n ⤻${mp3334}`, author: `🇧🇷・Figurinhas criada\npela comunidade:\n'Xinzz - Md'\n\n🌟・Feita por:\n⤻${pushname}` })
                await fs.unlinkSync(encmedia)
            } else {
                throw `𝙈𝙖𝙧𝙦𝙪𝙚 𝙪𝙢 𝙫𝙞́𝙙𝙚𝙤 𝙤𝙪 𝙛𝙤𝙩𝙤 𝙘𝙤𝙢 ${prefix + command}\n𝘿𝙪𝙧𝙖𝙘̧𝙖̃𝙤 𝙙𝙚 𝙫𝙞́𝙙𝙚𝙤: 1-9 𝙎𝙚𝙜𝙪𝙣𝙙𝙤𝙨`
                }
            }
            break

case 'anal':
linu = await fetchJson(`https://meme-api.herokuapp.com/gimme/anal`)
anus = await getBuffer(linu.url)
await client.sendVideoAsSticker(m.chat, anus, m, { packname: global.packname, author: global.author })
break
                                case 'pesquisa':  case 'pesquisas': {
                let buttons = [
                    {buttonId: `menu `, buttonText: {displayText: 'Voltar'}, type: 1},
                ]
                let buttonMessage = {
                    image: { url: `https://wallpapers.com/images/high/anime-girl-izumi-sagiri-6v8q05dnzw5xyrlu.jpg` },
                    caption: `
╔═❖•ೋ° 💎 °ೋ•❖═╗
          𝙍𝙞𝙨𝙠𝙮 𝙍𝙤𝙗𝙤𝙩
    𝙈𝙚𝙣𝙪 𝙙𝙚 𝙋𝙚𝙨𝙦𝙪𝙞𝙨𝙖
╚═❖•ೋ° 💎 °ೋ•❖═╝

╔═❖•ೋ❬ 🚀️ ❭ೋ•❖═╗
║
║⋆⃟ۣۜ🔎➣ temp [cidade]
║⋆⃟ۣۜ🔎➣ play [titulo]
║⋆⃟ۣۜ🔎➣ yts [titulo]
║⋆⃟ۣۜ🔎➣ google [titulo]
║⋆⃟ۣۜ🔎➣ gimage [titulo]
║⋆⃟ۣۜ🔎➣ pinterest [titulo]
║⋆⃟ۣۜ🔎➣ wallpaper [titulo]
║⋆⃟ۣۜ🔎➣ wikimedia [titulo]
║⋆⃟ۣۜ🔎➣ ytsearch [titulo]
║⋆⃟ۣۜ🔎➣ ringtone [titulo]
│
╚═❖•ೋ❬ 🔥️ ❭ೋ•❖═╝}`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: fgc })
            }
            break

                                case 'jogos': {
                let buttons = [
                    {buttonId: `menu `, buttonText: {displayText: 'Voltar'}, type: 1},
                ]
                let buttonMessage = {
                    image: { url: `https://i.pinimg.com/originals/c8/94/94/c8949456fc78ec38b67ed1635d2e1ef1.jpg` },
                    caption: `
╭═•ೋ❀๑🦄๑❀ೋ•═╮ 
        🍃𝐗𝐈𝐍𝐙𝐙-𝐌𝐃🍃
      🎮 𝐌𝐄𝐍𝐔-𝐆𝐀𝐌𝐄𝐒 🎮
 ╰═•ೋ❀๑🦄๑❀ೋ•═╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

╭╼━═━━≺🌟≻━━═━╾╮
╎❀ۣۜۜ͜͡ 🎁 /Anagrama
╎❀ۣۜۜ͜͡ 🎁 /Jogodavelha
╎❀ۣۜۜ͜͡ 🎁 /Matematica 
╰╼━═━━≺🌟≻━━═━─╯`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break

                                case 'converter': {
                let buttons = [
                    {buttonId: `menu `, buttonText: {displayText: 'Voltar'}, type: 1},
                ]
                let buttonMessage = {
                    image: { url: `https://c4.wallpaperflare.com/wallpaper/957/734/331/anime-anime-girls-hololive-gawr-gura-cat-ears-hd-wallpaper-thumb.jpg` },
                    caption: `
╔═❖•ೋ° 💎 °ೋ•❖═╗
          𝙍𝙞𝙨𝙠𝙮 𝙍𝙤𝙗𝙤𝙩
    𝙈𝙚𝙣𝙪 𝙙𝙚 𝘾𝙤𝙣𝙫𝙚𝙧𝙨𝙖𝙤
╚═❖•ೋ° 💎 °ೋ•❖═╝

╔═❖•ೋ❬ 🚀️ ❭ೋ•❖═╗
║
║⋆⃟ۣۜ💿➣ toimage
║⋆⃟ۣۜ💿➣ sticker
║⋆⃟ۣۜ💿➣ telesticker
║⋆⃟ۣۜ💿➣ emojimix
║⋆⃟ۣۜ💿➣ tovideo
║⋆⃟ۣۜ💿➣ togif
║⋆⃟ۣۜ💿➣ tourl
║⋆⃟ۣۜ💿➣ tovn
║⋆⃟ۣۜ💿➣ tomp3
║⋆⃟ۣۜ💿➣ toaudio
║⋆⃟ۣۜ💿➣ ebinary
║⋆⃟ۣۜ💿➣ dbinary
║⋆⃟ۣۜ💿➣ styletext
║
║⋆⃟ۣۜ💿➣ attp
║⋆⃟ۣۜ💿➣ attp2
║⋆⃟ۣۜ💿➣ attp3
║⋆⃟ۣۜ💿➣ attp4
║⋆⃟ۣۜ💿➣ attp5
║⋆⃟ۣۜ💿➣ attp6
║⋆⃟ۣۜ💿➣ attp7
║
║⋆⃟ۣۜ💿➣ negobam
║⋆⃟ۣۜ💿➣ faustao
║⋆⃟ۣۜ💿➣ chapolin
║
╚═❖•ೋ❬ 🔥️ ❭ೋ•❖═╝}`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
                                case 'photoxy': {
                let buttons = [
                    {buttonId: `menu `, buttonText: {displayText: 'Voltar'}, type: 1},
                ]
                let buttonMessage = {
                    image: { url: `http://a1wallpapers.com/wp-content/uploads/2021/08/Anime-Girl-Laptop-Wallpaper-2.jpg` },
                    caption: `
╔═❖•ೋ° 💎 °ೋ•❖═╗
          𝙍𝙞𝙨𝙠𝙮 𝙍𝙤𝙗𝙤𝙩
     𝙈𝙚𝙣𝙪 𝙋𝙝𝙤𝙩𝙤𝙭𝙮
╚═❖•ೋ° 💎 °ೋ•❖═╝

╔═❖•ೋ❬ 🚀️ ❭ೋ•❖═╗
║
║⋆⃟ۣۜ📷➣ romance
║⋆⃟ۣۜ📷➣ silk
║⋆⃟ۣۜ📷➣ stars
║⋆⃟ۣۜ📷➣ partyneon
║⋆⃟ۣۜ📷➣ fur
║⋆⃟ۣۜ📷➣ flaming
║⋆⃟ۣۜ📷➣ butterfly
║⋆⃟ۣۜ📷➣ gerbang
║⋆⃟ۣۜ📷➣ neonlight
║⋆⃟ۣۜ📷➣ typography
║⋆⃟ۣۜ📷➣ harrypotter
║⋆⃟ۣۜ📷➣ vintage
│
╚═❖•ೋ❬ 🔥️ ❭ೋ•❖═╝}`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break

                                case 'adulto': {
                let buttons = [
                    {buttonId: `menu `, buttonText: {displayText: 'Voltar'}, type: 1},
                ]
                let buttonMessage = {
                    image: { url: `https://c4.wallpaperflare.com/wallpaper/232/970/518/anime-manga-anime-girls-illustration-fan-art-hd-wallpaper-preview.jpg` },
                    caption: `
╔═❖•ೋ° 💎 °ೋ•❖═╗
          𝙍𝙞𝙨𝙠𝙮 𝙍𝙤𝙗𝙤𝙩
    𝘼𝙙𝙪𝙡𝙩𝙤 𝙚 𝘼𝙡𝙚𝙖𝙩𝙤𝙧𝙞𝙤
╚═❖•ೋ° 💎 °ೋ•❖═╝

╔═❖•ೋ❬ 🚀️ ❭ೋ•❖═╗
║
║⋆⃟ۣۜ🌟➣ cafe
║⋆⃟ۣۜ🌟➣ couple
║⋆⃟ۣۜ🌟➣ anime
║
║⋆⃟ۣۜ🔞➣ yuri (nsfw)
║⋆⃟ۣۜ🔞➣ gangbang (nsfw)
║⋆⃟ۣۜ🔞➣ panties (nsfw)
║⋆⃟ۣۜ🔞➣ hentai (nsfw)
║⋆⃟ۣۜ🔞➣ femdom (nsfw)
║⋆⃟ۣۜ🔞➣ panties (nsfw)
║⋆⃟ۣۜ🔞➣ ass (nsfw)
║⋆⃟ۣۜ🔞➣ pussy (nsfw)
║⋆⃟ۣۜ🔞➣ orgy (nsfw)
║⋆⃟ۣۜ🔞➣ nekos (nsfw)
║⋆⃟ۣۜ🔞➣ trap (nsfw)
║⋆⃟ۣۜ🔞➣ blowjob (nsfw)
║⋆⃟ۣۜ🔞➣ piroca (nsfw)
║
║⋆⃟ۣۜ🔞➣ anal (nsfw)
║⋆⃟ۣۜ🔞➣ buceta (nsfw)
║⋆⃟ۣۜ🔞➣ bunda (nsfw)
║⋆⃟ۣۜ🔞➣ peitos (nsfw)
║⋆⃟ۣۜ🔞➣ peitos2 (nsfw)
║⋆⃟ۣۜ🔞➣ porno (nsfw)
║⋆⃟ۣۜ🔞➣ tubarao (nsfw)
║⋆⃟ۣۜ🔞➣ video18 (nsfw)
║⋆⃟ۣۜ🔞➣ aleatorio18 (nsfw)
║
╚═❖•ೋ❬ 🔥️ ❭ೋ•❖═╝}`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
                                case 'ephoto': {
                let buttons = [
                    {buttonId: `menu `, buttonText: {displayText: 'Voltar'}, type: 1},
                ]
                let buttonMessage = {
                    image: { url: `https://www.teahub.io/photos/full/180-1803040_gaming-anime-girl-wallpapers-4k.jpg` },
                    caption: `
╭═•ೋ❀๑🦄๑❀ೋ•═╮ 
         🍃𝐗𝐈𝐍𝐙𝐙-𝐌𝐃🍃
     🍡 𝐌𝐄𝐍𝐔-𝐄𝐏𝐇𝐎𝐓𝐎 🍡
╰═•ೋ❀๑🦄๑❀ೋ•═╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

╭╼━═━━≺Ⓜ️≻━━═━╾╮
╎
╎❀ۣۜۜ͜͡🧁 anonymous-neon
╎❀ۣۜۜ͜͡🧁 colorful-angelwing
╎❀ۣۜۜ͜͡🧁 azzenka-league-of-kings
╎❀ۣۜۜ͜͡🧁 galaxyangel-wing
╎❀ۣۜۜ͜͡🧁 neon-devilwing
╎❀ۣۜۜ͜͡🧁 galaxy-text3
╎❀ۣۜۜ͜͡🧁 ninja-mascot
╎❀ۣۜۜ͜͡🧁 yasuo
╎❀ۣۜۜ͜͡🧁 freefire
╎❀ۣۜۜ͜͡🧁 anonymhacker
╎❀ۣۜۜ͜͡🧁 avatardota
╎❀ۣۜۜ͜͡🧁 fpslogo
╎
╰╼━═━━≺Ⓜ️≻━━═━─╯`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break

            case 'emojimix': {
	        if (!text) throw `𝙀𝙭𝙚𝙢𝙥𝙡𝙤 : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await client.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw '𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙪𝙢𝙖 𝙁𝙞𝙜𝙪𝙧𝙞𝙣𝙝𝙖'
                if (!/webp/.test(mime)) throw `𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙪𝙢𝙖 𝙁𝙞𝙜𝙪𝙧𝙞𝙣𝙝𝙖 𝙘𝙤𝙢 *${prefix + command}*`
                m.reply(mess.wait)
                console.log(quoted)
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    client.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw '𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙪𝙢𝙖 𝙛𝙞𝙜𝙪𝙧𝙞𝙣𝙝𝙖 𝙖𝙣𝙞𝙢𝙖𝙙𝙖'
                if (!/webp/.test(mime)) throw `𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙪𝙢𝙖 𝙁𝙞𝙜𝙪𝙧𝙞𝙣𝙝𝙖 𝘼𝙣𝙞𝙢𝙖𝙙𝙖 *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙪𝙢 𝙑𝙞́𝙙𝙚𝙤/𝘼𝙪́𝙙𝙞𝙤 𝙪𝙨𝙖𝙣𝙙𝙤 𝙤 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 ${prefix + command}`
            if (!quoted) throw `𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙪𝙢 𝙑𝙞́𝙙𝙚𝙤/𝘼𝙪́𝙙𝙞𝙤 𝙪𝙨𝙖𝙣𝙙𝙤 𝙤 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            client.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙪𝙢 𝙑𝙞́𝙙𝙚𝙤/𝘼𝙪́𝙙𝙞𝙤 𝙪𝙨𝙖𝙣𝙙𝙤 𝙤 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙪𝙢 𝙑𝙞́𝙙𝙚𝙤/𝘼𝙪́𝙙𝙞𝙤 𝙪𝙨𝙖𝙣𝙙𝙤 𝙤 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 ${prefix + command}`
            if (!quoted) throw `𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙪𝙢 𝙑𝙞́𝙙𝙚𝙤/𝘼𝙪́𝙙𝙞𝙤 𝙪𝙨𝙖𝙣𝙙𝙤 𝙤 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            client.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg', fileName: `Convertido By ${client.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            client.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'restart':
      case 'reiniciar':
             if (!isCreator) return 
             exec(`pm2 restart 0`)
             m.reply('_Reiniciando..._')
             setTimeout(() => {
m.reply('Oi')
}, 50000);
             break
            case 'togif': {
                if (!quoted) throw '𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙪𝙢𝙖 𝙛𝙞𝙜𝙪𝙧𝙞𝙣𝙝𝙖 𝙖𝙣𝙞𝙢𝙖𝙙𝙖 𝙪𝙨𝙖𝙣𝙙𝙤 𝙤 𝙘𝙤𝙢𝙖𝙣𝙙𝙤'
                if (!/webp/.test(mime)) throw `𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙪𝙢𝙖 𝙛𝙞𝙜𝙪𝙧𝙞𝙣𝙝𝙖 𝙖𝙣𝙞𝙢𝙖𝙙𝙖 𝙪𝙨𝙖𝙣𝙙𝙤 𝙤 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 *${prefix + command}*`
                m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': case 'tolink': {
	        if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
                m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'testar': {
                m.reply('🔎 _Verificando imagem, aguarde..._')
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    kur = await fetchJson(`https://hardianto.xyz/api/tools/ceknsfw?url=${util.format(anu)}&apikey=hardianto`)
                 if(kur.result.output.nsfw_score > 0.5) m.reply(`⚠ _A imagem é um *NSFW*!_\n${kur.result.output.nsfw_score}%`)
                m.reply(`🔞 _Probabilidade de ser *NSFW*:_\n${kur.result.output.nsfw_score}%`)
                }
                await fs.unlinkSync(media)
            }
            break
     /*       case 'ytplay2': case 'play2': {
if (!text) throw `Exemplo : ${prefix + command} YKWIM?`
             const sections = [
  {
  title: `EXIBIR APENAS UM RESULTADO`,
  rows: [
  {title: `APENAS O PRIMEIRO RESULTADO!`, rowId: `play222 ${text}`, description: `🌟 RECOMENDADO`}
  ]
  },
  {
  title: "EXIBIR TODOS RESULTADOS",
  rows: [
  {title: `TODOS OS RESULTADOS!`, rowId: `play22 ${text}`, description: `⚠️ PODE CONTER FLOOD`}
  ]
  },
  {
  title: "DELETAR MENSAGEM",
  rows: [
  {title: `DELETAR MENSAGEM!`, rowId: `d`, description: `❌ DELETAR ESSA MENSAGEM`}
  ]
  },
  ]
  const listMessage = {
  text: `ESCOLHA UMA OPÇÃO E ENVIE-A`,
  footer: `Hora: ${time2}`,
  buttonText: "Escolher Comando",
  sections
  }
  const sendMsg = await client.sendMessage(m.chat, listMessage, {quoted: m})
  }
  break*/
  	  case 'play2': {
 if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
	  if (!text) return m.reply(`Exemplo : ${prefix + command} YKWIM?`)
	  m.reply('_[ *Aguarde* ] Pesquisando resultados..._')
    datai = [];
    let yts = require("yt-search")
let ysearch = await yts(text)
hdata = ysearch.all
num = 1
for(let i=0; i<hdata.length; i++){
datai.push({
  "rows": [
{
"title": `Titulo: ${hdata[i].title}`,
description: `Duração: ${hdata[i].timestamp || "Sem Informação"}  Canal: ${hdata[i].author.name}  Tipo: MP3`,
"rowId": `playyyr3 ${hdata[i].url}`
},
{
"title": `Titulo: ${hdata[i].title}`,
description: `Duração: ${hdata[i].timestamp || "Sem Informação"}  Canal: ${hdata[i].author.name}  Tipo: MP4`,
"rowId": `playyyr4 ${hdata[i].url}`
}
], title: `Resultado: ${num}`})
num += 1
}
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `╭═• ೋ☆๑🥂๑☆ೋ •═╮              
    💎𝐃𝐎𝐖𝐍-𝐇𝐈𝐁𝐑𝐈𝐃𝐎💎
╰═• ೋ☆๑🥂๑☆ೋ •═╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​`,
                    description: `❀ۣۜۜ͜͡ 🎠 Bem-vindo, ${pushname}!
Este menu tem o melhor servidor para downloads.
Você pode escolher o tipo de retorno.
MP3: Opção 1
MP4: Opção 2
Não esqueça de me seguir no Insta 👻!
`,
                    buttonText: "Ver Resultados",
                    footerText: `https://instagram.com/riskyzin`,
                    listType: "SINGLE_SELECT",
                    sections: datai }}), {quoted: m})
            client.relayMessage(m.chat, template.message, { messageId: template.key.id })
          }
            break
            case 'xnxx': {
 if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
	  if (!text) return m.reply(`Exemplo : ${prefix + command} YKWIM?`)
	  m.reply('_[ *Aguarde* ] Pesquisando resultados..._')
    datai = [];
//let ysearch = await fetchJson(`https://zenzapis.xyz/searching/xnxx?apikey=80cf6021a9&query=${text}`)
ysearch = await fetchJson(`https://mnazria.herokuapp.com/api/porn?search=${text}`)
hdata = ysearch.result
num = 1
for(let i=0; i<hdata.length; i++){
datai.push({
  "rows": [
{
"title": `Titulo: ${hdata[i].title}`,
description: `Clique aqui para baixar`,
"rowId": `xnxxdl ${hdata[i].url}`
}
], title: `Resultado: ${num}`})
num += 1
}
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `╭═• ೋ☆๑🥂๑☆ೋ •═╮              
    🔞 𝐃𝐎𝐖𝐍-𝐏𝐎𝐑𝐍 🔞
╰═• ೋ☆๑🥂๑☆ೋ •═╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​���​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​`,
                    description: `❀ۣۜۜ͜͡ 🎠 Bem-vindo, ${pushname}!
Este menu tem o melhor servidor para downloads.
Você pode escolher o tipo de retorno.

Não esqueça de me seguir no Insta 👻!
`,
                    buttonText: "Ver Resultados",
                    footerText: `https://instagram.com/riskyzin`,
                    listType: "SINGLE_SELECT",
                    sections: datai }}), {quoted: m})
            client.relayMessage(m.chat, template.message, { messageId: template.key.id })
          }
            break
                                                  case 'xnxxdl':{
  if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
if(!text) return m.reply('digite algo')
let fgcc = {key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "558896926980-1632378982@g.us","inviteCode": "❀ۣۜۜ͜͡ 𝐗𝐈𝐍𝐙𝐙 - 𝐏𝐋𝐀𝐘𝐄𝐑🍰","groupName": "P", "caption": `❀ۣۜۜ͜͡ 𝐗𝐈𝐍𝐙𝐙 - 𝐏𝐋𝐀𝐘𝐄𝐑🍰`, 'jpegThumbnail': logo}}}
 			if (text < 7) return m.reply(`*Coloque o nome da música!*\n\n📌Exemplo: *${prefix + command}* Lil Peep Broken Smile`)
    mp34 = args.join(" ")
        m.reply('_[ *Aguarde* ] Enviando para o servidor de Download..._') 
        try{
     let aakik = await fetchJson(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${mp34}`)
     //let aakik = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=hooh&url=${mp34}`)
              // await client.sendMessage(m.chat, { video: { url: aakik.result.files.low }, mimetype: 'video/mp4', fileName: `${aakik.title}.mp4`, caption: `_👻 Porno baixado com sucesso!_` }, { quoted: fgcc })
                   await client.sendMessage(m.chat, { video: { url: aakik.mp4 }, mimetype: 'video/mp4', fileName: `${aakik.title}.mp4`, caption: `_👻 Porno baixado com sucesso!_` }, { quoted: fgcc })
                                                   }catch(e){
                                                           console.log(e)
m.reply('Erro durante a execução do comando.')
}
                                    }
                                    break    
case 'ytplay22': case 'play22': {
if (!text) throw `Example : ${prefix + command} story wa anime`
thb = await getBuffer("https://i.ibb.co/pzqCgxZ/381a90d76801325aad52d15b9d97fafcafcafd03.jpg")
m.reply(mess.wait)
let yts = require("yt-search")
let search = await yts(text)
let no = 1
                for (let i of search.all) {
             const sections = [
  {
  title: `MEDIA 1 - MP3`,
  rows: [
  {title: `${i.title}`, rowId: `playyyr3 ${i.url}`, description: `Canal: ${i.author.name}`}
  ]
  },
  {
  title: "MEDIA 1 - MP4",
  rows: [
  {title: `${i.title}`, rowId: `playyyr4 ${i.url}`, description: `Canal: ${i.author.name}`}
  ]
  },
  ]
  const listMessage = {
  text: `Resultado ${no++}\n\nTitulo: ${i.title}\n\nCanal: ${i.author.name}`,
  footer: '© RISKYBOT ~ RISKY',
  buttonText: "Escolher Saída",
  sections
  }
  const sendMsg = await client.sendMessage(m.chat, listMessage, {quoted: m})
  }
  }
  break
  case 'animes': case 'anime':{
aa = `🌟 BEM-VINDO AO *MENU DE ANIME*, ${pushname}!
🚀 AQUI VOCÊ PODERÁ ENCONTRAR FOTOS DE ANIMES,
😻 DE MANEIRA AUTOMÁTICA E RÁPIDA!

🏆 SIGA A LISTA:
`
             const sections = [
  {
  title: `ANIME : NARUTO`,
  rows: [
  {title: `MADARA UCHIHA`, rowId: `pinterestt Uchiha Madara`},
  {title: `SASUKE UCHIHA`, rowId: `pinterestt Uchiha Sasuke`},
  {title: `ITACHI UCHIHA`, rowId: `pinterestt Uchiha Itachi`},
  {title: `SHISUI UCHIHA`, rowId: `pinterestt Uchiha Shisui`},
  {title: `NARUTO UZUMAKI`, rowId: `pinterestt Naruto Uzumaki`},
  {title: `SAKURA HARUNO`, rowId: `pinterestt Sakura Haruno`},
  {title: `MINATO NAMIKAZE`, rowId: `pinterestt Minato Nakimaze`},
  {title: `KAKASHI HATAKE`, rowId: `pinterestt Kakashi Hatake`}
  ]
  },
    {
  title: `ANIME : JUJUTSU KAISEN`,
  rows: [
  {title: `YUJI ITADORI`, rowId: `pinterestt Yuji Itadori`},
  {title: `MEGUMI FUSHIGURO`, rowId: `pinterestt Megumi Fushiguro`},
  {title: `NOBARA KUGISAKI`, rowId: `pinterestt Nobara Kugisaki`},
  {title: `GOKO SATORU`, rowId: `pinterestt Gojo Satoru`},
  {title: `TOGE INUMAKI`, rowId: `pinterestt Toge Inumaki`},
  {title: `SUKUNA`, rowId: `pinterestt Sukuna`},
  {title: `NORITOSHI KAMO`, rowId: `pinterestt Noritoshi Kamo`},
  {title: `AOI TODO`, rowId: `pinterestt Aoi Todo`}
  ]
  },
  ]
  const listMessage = {
  text: aa,
  footer: '© RISKYBOT ~ RISKY',
  buttonText: "Escolher Saída",
  sections
  }
  const sendMsg = await client.sendMessage(m.chat, listMessage, {quoted: m})
  }
  break
  case 'warn':
case 'penalizar':
case 'aviso':
				if (!m.isGroup) return m.reply('apenas em grupos')
					if (!isAdmins && !isCreator) return m.reply('Apenas admins')
					if (!isBotAdmins) return m.reply('Apenas se eu for admin')
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return reply('*Marque uma mensagem!*')
			const warnuser = m.message.extendedTextMessage.contextInfo.participant
			const currentWWarn = getWarn(warnuser)
			const checkIdWWarn = getWarnId(warnuser)
			
			var advertenciaa = 'primeira'
            if (currentWWarn === 0) {
                advertenciaa = 'primeira'
            } else if (currentWWarn === 1) {
                advertenciaa = 'segunda'
            } else if (currentWWarn === 2) {
                advertenciaa = 'terceira'
	        } else if (currentWWarn === 3) {
                advertenciaa = 'quarta'
            } else if (currentWWarn === 4) {
                advertenciaa = 'quinta'
            } else if (currentWWarn === 5) {
                advertenciaa = 'sexta'
            }

					if (currentWWarn === undefined && checkIdWWarn === undefined) addWarnId(warnuser)
					addWarn(warnuser, 1)
					client.sendMessage(m.chat, { text: `⚠️️ Você recebeu a *${advertenciaa}* advertencia a @${warnuser.split("@")[0]}\n\n*📌Nota:* 4 advertencias = ban`}, { quoted: m })
		if (currentWWarn === 3) {
		                client.sendMessage(m.chat, { text: `⚠️️ @${warnuser.split("@")[0]} você superou as 4 advertencias. Adeus`}, { quoted: m })
					setTimeout( () => {
			client.groupRemove(from, [warnuser]).catch((e)=>{m.reply('❎ Error, não pude kikar o usuario')})
			addWarn(`${warnuser}`, -4)
			}, 1000)
			}
break
case 'play222': {
if (!text) throw `Example : ${prefix + command} story wa anime`
thb = await getBuffer("https://i.ibb.co/pzqCgxZ/381a90d76801325aad52d15b9d97fafcafcafd03.jpg")
m.reply(mess.wait)
let yts = require("yt-search")
let search = await yts(text)
let no = 1             
const sections = [
  {
  title: `MEDIA 1 - MP3`,
  rows: [
  {title: `${search.all[0].title}`, rowId: `playyyr3 ${search.all[0].url}`, description: `Canal: ${search.all[0].author.name}`}
  ]
  },
  {
  title: "MEDIA 1 - MP4",
  rows: [
  {title: `${search.all[0].title}`, rowId: `playyyr4 ${search.all[0].url}`, description: `Canal: ${search.all[0].author.name}`}
  ]
  },
  ]
  const listMessage = {
  text: `Resultado ${no++}\n\nTitulo: ${search.all[0].title}\n\nCanal: ${search.all[0].author.name}`,
  footer: '© RISKYBOT ~ RISKY',
  buttonText: "Escolher Saída",
  sections
  }
  const sendMsg = await client.sendMessage(m.chat, listMessage, {quoted: m})
  }
  break
  case 'play': {
if (!text.includes('youtube') && !text.includes('youtu.be')) return m.reply('Link Invalido!')
m.reply(mess.wait)
let search = await fetchJson(`https://rei-api.herokuapp.com/api/dl/ytav?url=${text}`)
datak = search.result
let no = 1             
const sections = [
  {
  title: `RETORNO = AUDIO/MP4`,
  rows: [
  {title: `${datak.title}`, rowId: `buffs3 ${datak.audio[0].url}`, description: `Qualidade: ${datak.audio[0].bitrate}`},
  {title: `${datak.title}`, rowId: `buffs3 ${datak.audio[1].url || 'n'}`, description: `Qualidade: ${datak.audio[1].bitrate || 'n'}`},
  {title: `${datak.title}`, rowId: `buffs3 ${datak.audio[2].url || 'n'}`, description: `Qualidade: ${datak.audio[2].bitrate || 'n'}`}
   ]
  },
    {
  title: `RETORNO = VIDEO/MP4`,
  rows: [
  {title: `${datak.title}`, rowId: `buffs4 ${datak.video[0].url || 'n'}`, description: `Qualidade: ${datak.video[0].quality || 'n'}`},
  ]
  },
  ]
  const listMessage = {
  text: `🍨 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎!\n\n🍭𝐄𝐒𝐂𝐎𝐋𝐇𝐀 𝐀 𝐅𝐎𝐑𝐌𝐀 𝐃𝐎 𝐒𝐄𝐔 𝐑𝐄𝐓𝐎𝐑𝐍𝐎:`,
  footer: '❀ۣۜۜ͜͡⚜ 𝐑𝐈𝐒𝐊𝐘 𝐌𝐎𝐃𝐙',
  buttonText: "🔊𝐀𝐔𝐃𝐈𝐎 / 𝐕𝐈𝐃𝐄𝐎📼",
  sections
  }
  const sendMsg = await client.sendMessage(m.chat, listMessage, {quoted: m})
  }
  break

case 'buffs3':{
m.reply('Baixando musica...')
client.sendMessage(m.chat, {audio:{url: text }, caption:'Feito!'}, {quoted:m})
}
break
case 'buffs4':{
m.reply('Baixando video...')
client.sendMessage(m.chat, {video:{url: text }, caption:'Feito!'}, {quoted:m})
}
break
  case 'playyyr':{
if (args[0] === "mp4") {
m.reply(mess.wait)
risis = await fetchJson(`https://leyscoders-api.herokuapp.com/api/playmp4?q=${text}&apikey=MIMINGANZ`)
risos = (risis.result.audio)
client.sendMessage(m.chat, {video:{url:risos}, caption:'Feito!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "mp3") {
m.reply(mess.wait)
risis = await fetchJson(`https://leyscoders-api.herokuapp.com/api/playmp3?q=${text}&apikey=MIMINGANZ`)
risos = (risis.result.audio)
client.sendMessage(m.chat, {audio:{url:risos}, caption:'Feito!'}, {quoted:m})
} else {
m.reply(" Error! ")
}
}
  break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
                }
                client.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `⭔ *𝙏𝙞𝙩𝙪𝙡𝙤* : ${g.title}\n`
                teks += `⭔ *𝘿𝙚𝙨𝙘𝙧𝙞𝙘̧𝙖̃𝙤* : ${g.snippet}\n`
                teks += `⭔ *𝙇𝙞𝙣𝙠* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
                case 'gig': {
if (!args[0]) return ads("Mau cari gambar apa kak?")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${args.join(" ")}`, buttonText: {displayText: 'PRÓXIMA IMAGEM'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*| GOOGLE IMAGE |*

🤠 Texto : ${text}
🔗 Media Url : ${images}`,
footer: "© XINZZBOT ~ RISKY",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"XINZZBOT - RISKY",
body:"© XINZZBOT ~ RISKY",
thumbnail: logo,
mediaType:2,
mediaUrl: "https://www.youtube.com/watch?v=Om5zyTOYkPs&ab_channel=Xinzz%E3%82%92",
sourceUrl: "https://www.youtube.com/watch?v=Om5zyTOYkPs&ab_channel=Xinzz%E3%82%92"
}}
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
        case 'gimage': {
 if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
        if (!text) throw `Exemple : ${prefix + command} texto`
        m.reply(mess.wait)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: '𝙋𝙧𝙤𝙭𝙞𝙢𝙖 𝙄𝙢𝙖𝙜𝙚𝙢'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GOOGLE IMAGEM 」-------*
🤠 *𝙏𝙞𝙩𝙪𝙡𝙤* : ${text}
🔗 *𝙇𝙞𝙣𝙠* : ${images}`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
        
        case 'play5': case 'ytplay5': {
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let ytvc = await hx.youtube(anu.url)
let buttons = [
{buttonId: `ytvd ${ytvc.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `ytad ${ytvc.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `*| YOUTUBE PLAY |*

⭔ Título ${anu.title}
⭔ Comando : Pesquisa
⭔ ID : ${anu.videoId}
⭔ Duração : ${anu.timestamp}
⭔ Views : ${anu.views}
⭔ Data de pub. : ${anu.ago}
⭔ Autor : ${anu.author.name}
⭔ Canal : ${anu.author.url}
⭔ Desc : ${anu.description}
⭔ Url : ${anu.url}`,
footer: "© XINZZBOT ~ RISKY",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: anu.title,
body: "© XINZZBOT ~ RISKY",
thumbnail: logo,
mediaType:2,
mediaUrl: anu.url,
sourceUrl: anu.url
}}
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break

case 'ytdl': case 'yt': case 'youtube': case 'ytmp4': case 'ytmp3': {
if (!args[0]) return m.reply(mess.linkm)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `*| YOUTUBE DOWNLOADER |*

⭔ Título ${res.title}
⭔ Size : ${res.size}
⭔ Quality : ${res.quality}

_Selecione vídeo ou áudio e aguarde um pouco_`
let buttons = [
{buttonId: `ytvd ${res.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `ytad ${res.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumb},
caption: textyt,
footer: "© XINZZBOT ~ RISKY",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: res.title,
body: "© XINZZBOT ~ RISKY",
thumbnail: {url:res.thumb},
mediaType:2,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
client.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
m.reply("Erro com o link!")
}
}
break
case 'ytvd': {
luogo = await getBuffer('https://img.wallpapersafari.com/desktop/1280/1024/56/39/udSWqy.jpg')
client.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Success", contextInfo:{externalAdReply:{
title:"XINZZBOT - By Risky",
body:"© XINZZBOT ~ RISKY",
thumbnail: luogo,
mediaType:2,
mediaUrl: "https://www.youtube.com/watch?v=sQYcDlUr_KY&ab_channel=Railgun",
sourceUrl: "https://www.youtube.com/watch?v=sQYcDlUr_KY&ab_channel=Railgun"
}}}, {quoted:m})
}
break
case 'ytad': {
luogo = await getBuffer('https://img.wallpapersafari.com/desktop/1280/1024/56/39/udSWqy.jpg')
client.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:"XINZZBOT - By Risky",
body:"© XINZZBOT ~ RISKY",
thumbnail: luogo,
mediaType:2,
mediaUrl: "https://www.youtube.com/watch?v=sQYcDlUr_KY&ab_channel=Railgun",
sourceUrl: "https://www.youtube.com/watch?v=sQYcDlUr_KY&ab_channel=Railgun"
}}}, {quoted:m})
}
break
	    case 'play5': case 'ytplay5': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Titulo : ${anu.title}
⭔ Saída : Pesquisa
⭔ ID : ${anu.videoId}
⭔ Duração : ${anu.timestamp}
⭔ Views : ${anu.views}
⭔ Upado : ${anu.ago}
⭔ Autor : ${anu.author.name}
⭔ Canal : ${anu.author.url}
⭔ Descrição : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
           
            	    case 'admin': case 'administrador': {
                let buttons = [
                    {buttonId: `group open `, buttonText: {displayText: 'Abrir Grupo'}, type: 1},
                    {buttonId: `group close `, buttonText: {displayText: 'Fechar Grupo'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://wallpapercave.com/wp/wp5124570.jpg` },
                    caption: `
╭═•ೋ❀๑🦄๑❀ೋ•═╮ 
            🍃𝐗𝐈𝐍𝐙𝐙-𝐌𝐃🍃
         ⛩ 𝐌𝐄𝐍𝐔-𝐀𝐃𝐌𝐈𝐍 ⛩
 ╰═•ೋ❀๑🦄๑❀ೋ•═╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
  
╭╼━═━━≺🦄≻━━═━╾╮
╎❀ۣۜۜ͜͡ 🍧 /antivenda
╎❀ۣۜۜ͜͡ 🍧 /antilink
╎❀ۣۜۜ͜͡ 🍧 /bemvindo 
╎❀ۣۜۜ͜͡ 🍧 /modonsfw 
╎❀ۣۜۜ͜͡ 🍧 /anticontato 
╎❀ۣۜۜ͜͡ 🍧 /anticatalogo 
╎❀ۣۜۜ͜͡ 🍧 /antiimagem 
╎❀ۣۜۜ͜͡ 🍧 /antilocalizacao
╎❀ۣۜۜ͜͡ 🍧 /antidocumento
╎❀ۣۜۜ͜͡ 🍧 /atividade
╎❀ۣۜۜ͜͡ 🍧 /ranativo
╎❀ۣۜۜ͜͡ 🍧 /filtroativo
╎❀ۣۜۜ͜͡ 🍧 /checkativo
╎❀ۣۜۜ͜͡ 🍧 /setnome
╎❀ۣۜۜ͜͡ 🍧 /setdesc
╎❀ۣۜۜ͜͡ 🍧 /setppgp
╎❀ۣۜۜ͜͡ 🍧 /promover
╎❀ۣۜۜ͜͡ 🍧 /rebaixar
╎❀ۣۜۜ͜͡ 🍧 /tagall 
╎❀ۣۜۜ͜͡ 🍧 /linkgp
╎❀ۣۜۜ͜͡ 🍧 /ht 
╎❀ۣۜۜ͜͡ 🍧 /ban
╎❀ۣۜۜ͜͡ 🍧 /add
╰╼━═━━≺🕸≻━━═━─╯`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            
                case 'aplicativos': case 'aplicativo': {
                let buttons = [
                    {buttonId: `d `, buttonText: {displayText: '🗑️ DELETAR'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: `https://wallpapers.com/images/high/dark-anime-jigoku-shoujo-nbo5biqzcbkiwpjq.jpg` },
                    caption: `
╔═❖•ೋ° 💎 °ೋ•❖═╗
          𝙍𝙞𝙨𝙠𝙮 𝙍𝙤𝙗𝙤𝙩
    𝙈𝙚𝙣𝙪 𝙙𝙚 𝘼𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙫𝙤𝙨
╚═❖•ೋ° 💎 °ೋ•❖═╝

╔═❖•ೋ❬ 🚀️ ❭ೋ•❖═╗
║
║⋆⃟ۣۜ🏆➣ Youtube
║⋆⃟ۣۜ🏆➣ Spotify
║⋆⃟ۣۜ🏆➣ Powerdirector
║⋆⃟ۣۜ🏆➣ Capcut
║⋆⃟ۣۜ🏆➣ Minecraft
║⋆⃟ۣۜ🏆➣ Stumbleguys
║⋆⃟ۣۜ🏆➣ Subwaysurfes
║⋆⃟ۣۜ🏆➣ Among us
║
╚═❖•ೋ❬ 🔥️ ❭ೋ•❖═╝}`,
                    footer: `Exemplo: ${prefix}app Spotify`,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
 case 'play1': {
if(!q) return m.reply('digite algo')
 			if (q < 7) return m.reply(`*Coloque o nome da música!*\n\n📌Exemplo: *${prefix + command}* Lil Peep Broken Smile`)
    mp34 = args.join(" ")
        m.reply('🚀🌟 _Baixando sua Música/Vídeo!_') 
       let akik = await fetchJson(`https://leyscoders-api.herokuapp.com/api/playmp3?q=${mp34}&apikey=dappakntlll`)                               
                                        let buttons = [
                    {buttonId: `letra ${q}`, buttonText: {displayText: 'Letra'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: akik.result.thumb },
                    caption: `
*⏯️Musica/Vídeo Encontrada*
        
‣ *📌Título* : ${akik.result.title}
‣ *📂Arquivo* : Mp3/mp4
‣ *♐By* : Risky Modz` ,
                    footer: client.user.name+'\nDependendo do servidor, sua musica sera envada em alguns segundos!',
                    buttons: buttons,
                    headerType: 4
                }
                
                await client.sendMessage(m.chat, buttonMessage, { quoted: m }) 
                let fovt = (akik.result.audio)
      await client.sendMessage(m.chat, { audio: { url: fovt }, mimetype: 'audio/mpeg', fileName: `Xinzzrobbot.mp3` }, { quoted: m })
                       }
                                    break 
                                    case 'temp':
{
        if (q < 5) return m.reply(`*Coloque o nome da cidade!*\n\n📌Exemplo: São Paulo`)
try{
tempo = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=9812d3d112a064b71367b98015247c53&units=metric&language=pt_br`)
anu = `
[🔎] *CIDADE INFO*
Cidade: ${tempo.name}
Longitude: ${tempo.coord.lon}
Latitude: ${tempo.coord.lat}
Continente: ${tempo.sys.country}

[☁] *TEMPO INFO*
Nuvens: ${tempo.clouds.all}
Velocidade: ${tempo.wind.speed}
Visibilidade: ${tempo.visibility}
Por do Sol: ${tempo.sys.sunrise}
Nascer do Sol: ${tempo.sys.sunset}

[🌡] *TEMPERATURAS*
Temperatura: ${tempo.main.temp}
Temperatura Min: ${tempo.main.temp_min}
Temperatura Max: ${tempo.main.temp_max}

Humidade: ${tempo.main.humidity}
`

if(tempo.main.temp > 27 ) return m.reply(anu+'\nEmoji: 🔥')
if(tempo.main.temp < 27 ) return m.reply(anu+'\nEmoji: ❄️')
}catch{
m.reply('Não encontrado! Tente sem acento.')
}
}
break
   case 'play3':{
 //  if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
if(!q) return m.reply('digite algo')
//if (!budy.match("https://") && !isPremium) return m.reply('🤕 - Desculpe, mas essa função funciona apenas com Links.')
 			if (q < 7) return m.reply(`*Coloque o nome da música!*\n\n📌Exemplo: *${prefix + command}* Lil Peep Broken Smile`)
    mp34 = args.join(" ")
        m.reply('🚀🌟 _Baixando sua Música/Vídeo!_') 
        try{
       let aakik = await fetchJson(`https://api.dhamzxploit.my.id/api/ytplaymp3?text=${mp34}`)
                        anjay = await getBuffer(aakik.video.image)
                    anu = `*⏯️Musica/Vídeo Encontrada*
        
‣ *📌Título* : ${aakik.video.title}
‣ *📂Arquivo* : Mp3
‣ *📏Tamanho* : ${aakik.result.size}
‣ *⏲️Tempo* : ${aakik.video.timestamp}
‣ *♐By* : Risky Modz`
                                        let btn = [{
                                urlButton: {
                                    displayText: 'Aúdio',
                                    url: `${aakik.result.url}`
                                }
                            },{
                                quickReplyButton: {
                                    displayText: 'Letra',
                                    id: `letra ${mp34}`
                                }
                                },{
                                quickReplyButton: {
                                    displayText: 'Deletar',
                                    id: 'd'
                                }
                            }]
                        await client.send5ButImg(m.chat, anu, 'Caso sua música não seja enviada, clique nos links a seguir:', anjay, btn, {quoted: fgc})
                                        forus = await getBuffer(aakik.result.url)
               await client.sendMessage(m.chat, {document: forus, mimetype: 'audio/mpeg', fileName: `${aakik.result.title} pela ${client.user.name}.mp3`}, { quoted : fgc }) 
                                                           }catch(e){
m.reply('Ocorreu algum erro durante a execução do comando.')
}
                                    }
                                    break   
                                       case 'playyyr3':{
  if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
if(!q) return m.reply('digite algo')
let fgcc = {key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "558896926980-1632378982@g.us","inviteCode": "❀ۣۜۜ͜͡ 𝐗𝐈𝐍𝐙𝐙 - 𝐏𝐋𝐀𝐘𝐄𝐑🍰","groupName": "P", "caption": `❀ۣۜۜ͜͡ 𝐗𝐈𝐍𝐙𝐙 - 𝐏𝐋𝐀𝐘𝐄𝐑🍰`, 'jpegThumbnail': logo}}}
 			if (text < 7) return m.reply(`*Coloque o nome da música!*\n\n📌Exemplo: *${prefix + command}* Lil Peep Broken Smile`)
    mp34 = args.join(" ")
        m.reply('_[ *Aguarde* ] Enviando para o servidor de Download..._') 
        try{
       let aakik = await fetchJson(`https://brizas-api.herokuapp.com/sociais/ytmp3?apikey=brizaloka&url=${mp34}`)
                                        forus = await getBuffer(aakik.link)
               await client.sendMessage(m.chat, {document: forus, mimetype: 'audio/mpeg', fileName: `${aakik.title} pela ${client.user.name}.mp3`}, { quoted : fgcc }) 
                                                           }catch(e){
m.reply('Erro durante a execução do comando.')
}
                                    }
                                    break     
                                      case 'playyyr4':{
   if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
if(!text) return m.reply('digite algo')
let fgcc = {key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "558896926980-1632378982@g.us","inviteCode": "❀ۣۜۜ͜͡ 𝐗𝐈𝐍𝐙𝐙 - 𝐏𝐋𝐀𝐘𝐄𝐑🍰","groupName": "P", "caption": `❀ۣۜۜ͜͡ 𝐗𝐈𝐍𝐙𝐙 - 𝐏𝐋𝐀𝐘𝐄𝐑🍰`, 'jpegThumbnail': logo}}}
 			if (text < 7) return m.reply(`*Coloque o nome da música!*\n\n📌Exemplo: *${prefix + command}* Lil Peep Broken Smile`)
    mp34 = args.join(" ")
        m.reply('_[ *Aguarde* ] Enviando para o servidor de Download..._') 
        try{
       let aakik = await fetchJson(`https://brizas-api.herokuapp.com/sociais/ytmp4?apikey=brizaloka&url=${mp34}`)
               await client.sendMessage(m.chat, { video: { url: aakik.link }, mimetype: 'video/mp4', fileName: `${aakik.title}.mp4`, caption: `Baixado com sucesso pela Xinzz - Md` }, { quoted: fgcc })
                                                           }catch(e){
                                                           console.log(e)
m.reply('Erro durante a execução do comando.')
}
                                    }
                                    break       
       case 'chapolin':
       if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
                                if (!text) throw `Qual texto?`
       m.reply(mess.wait)
       try{

                client.sendMessage(m.chat, { audio: { url: `http://brizas-api.herokuapp.com/imitar/chapolin?apikey=brizaloka&text=${q}` }, mimetype: 'audio/mpeg', fileName: `Xinzzrobbot.mp3` }, { quoted: m })
  }catch{
    m.reply(`Servidor Offline`)
  }
  break
  
       case 'patolino':
      if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
      if (!text) throw `Qual texto?`
      m.reply(mess.wait)
      try{
      client.sendMessage(m.chat, { audio: { url: `http://brizas-api.herokuapp.com/imitar/patolino?apikey=brizaloka&text=${q}` }, mimetype: 'audio/mpeg', fileName: `Xinzzrobbot.mp3` }, { quoted: m })
      }catch{
      m.reply(`Servidor Offline`)
      }
     break
      case 'eminem':
      if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
      if (!text) throw `Qual texto?`
      m.reply(mess.wait)
      try{
      client.sendMessage(m.chat, { audio: { url: `http://brizas-api.herokuapp.com/imitar/eminem?apikey=brizaloka&text=${q}` }, mimetype: 'audio/mpeg', fileName: `Xinzzrobbot.mp3` }, { quoted: m })
      }catch{
      m.reply(`Servidor Offline`)
      }
     break
      case 'ibere':
      if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
      if (!text) throw `Qual texto?`
      m.reply(mess.wait)
      try{
      client.sendMessage(m.chat, { audio: { url: `http://brizas-api.herokuapp.com/imitar/ibere?apikey=brizaloka&text=${q}` }, mimetype: 'audio/mpeg', fileName: `Xinzzrobbot.mp3` }, { quoted: m })
      }catch{
      m.reply(`Servidor Offline`)
      }
     break
     
      case 'faustao': case'faustao':
      if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
                               if (!text) throw `Qual texto?`
       m.reply(mess.wait)
       try{

                client.sendMessage(m.chat, { audio: { url: `http://brizas-api.herokuapp.com/imitar/faustao?apikey=brizaloka&text=${q}` }, mimetype: 'audio/mpeg', fileName: `Xinzzrobbot.mp3` }, { quoted: m })
  }catch{
    m.reply(`Servidor Offline`)
  }
  break
         case 'negobam':
         if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
                         if (!text) throw `Qual texto?`
       m.reply(mess.wait)
       try{

                client.sendMessage(m.chat, { audio: { url: `http://brizas-api.herokuapp.com/imitar/negobam?apikey=brizaloka&text=${q}` }, mimetype: 'audio/mpeg', fileName: `Xinzzrobbot.mp3` }, { quoted: m })
  }catch{
    m.reply(`Servidor Offline`)
  }
  break
                                    case 'letra':{
if (budy.match("https://")) return m.reply('🤕 - Desculpe, mas essa função não funciona com Links.')
try{
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/lirik?q=${q}&apikey=MIMINGANZ`)
}catch(e){
m.reply('Comando Offline')
}
               if (anu.result == "") return m.reply('❌ Nenhuma letra encontrada!')
ccg =
`• 𝐋𝐄𝐓𝐑𝐀: 
${anu.result} 
  
🎩 𝐁𝐘: 𝐑𝐈𝐒𝐊𝐘 𝐌𝐎𝐃𝐙`
m.reply(ccg)
}
break         
	    case 'ytmp3': case 'ytaudio': {
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let anu = await fetchJson(`https://hardianto.xyz/api/yt/playmp3?query=${q}&apikey=hardianto`)
                client.sendImage(m.chat, anu.thumb, `⭔ Title : ${anu.title}\n⭔ Canal : ${anu.channel}\n⭔ Ext : MP3\n⭔ Resolução : 128kbps`, m)
                client.sendMessage(m.chat, { audio: { url: anu.url }, mimetype: 'audio/mpeg', fileName: `${anu.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                client.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                client.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                client.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                client.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'emoji': {
if (!args.join(" ")) return m.reply('Qual emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await client.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption:"Feito!"}, {quoted:m})
await client.sendMessage(from, {text:"s"}, {quoted:mese})
})
}
break

case 'hidetag': {
if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
client.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break

case 'inspect': {
{
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
client.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `     「 INSPETOR DE GRUPO 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject atualizada por : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject atualizada às : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Criado por : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Criado às : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total de Membros : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc atualizada por : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc atualizada às : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("America/Fortaleza").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "Sem Descrição"}
`
try {
pp = await client.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
client.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await client.parseMention(tekse) })
})
}
}
break

case 'advancedglow':
    if(!q) return m.reply (`Penggunaan ${prefix + command} teks`)
    m.reply (mess.wait)
    maker.textpro("https://textpro.me/free-advanced-glow-text-effect-873.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Risky Modz` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thunder2':
{
    if(!q) return m.reply (`Penggunaan ${prefix + command} teks`)
    m.reply (mess.wait)
    maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Risky Modz` }, { quoted: m }))
  .catch((err) => console.log(err));
   }
   break


case 'pinterest': case 'image': {
if (!args.join(" ")) return m.reply("O que você quer baixar?")
    yu = await getBuffer('https://telegra.ph/file/9419c2fd0247077043abf.jpg')
try {
hx.pinterest(args.join(" ")).then(async(res) => {
imgnyee = res[Math.floor(Math.random() * res.length)]
let buttons = [
{buttonId: `pinterest ${args.join(" ")}`, buttonText: {displayText: 'Proxima Imagem'}, type: 1}
]
let buttonMessage = {
image: { url: imgnyee },
caption:  '⭔ Título : ' + args.join(" ") + '\n⭔ Link : '+imgnyee,
footer: "© DEV - RISKY",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"XINZZBOT - By Risky",
body:"© XINZZBOT ~ RISKY",
thumbnail: yu,
mediaType:2,
mediaUrl: "https://www.youtube.com/watch?v=K3Qzzggn--s",
sourceUrl: "https://www.youtube.com/watch?v=K3Qzzggn--s"
}}
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
}).catch(_ => _)
} catch {
m.reply("Erro")
}
}
break
case 'pinterestt':{
m.reply('Carregando...')
    yuu = await getBuffer('https://telegra.ph/file/9419c2fd0247077043abf.jpg')
try {
hx.pinterest(args.join(" ")).then(async(res) => {
imgnyee = res[Math.floor(Math.random() * res.length)]
let buttons = [
{buttonId: `pinterestt ${args.join(" ")}`, buttonText: {displayText: 'Proxima Imagem'}, type: 1}
]
let buttonMessage = {
image: { url: imgnyee },
caption: `${text}`,
footer: "© DEV - RISKY",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"XINZZBOT - By Risky",
body:"© XINZZBOT ~ RISKY",
thumbnail: yuu,
mediaType:2,
mediaUrl: "https://www.youtube.com/watch?v=K3Qzzggn--s",
sourceUrl: "https://www.youtube.com/watch?v=K3Qzzggn--s"
}}
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
}).catch(_ => _)
} catch {
m.reply("Erro")
}
}
break
            case 'pinterest2': {
                m.reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                client.sendMessage(m.chat, { image: { url: result }, caption: '⭔ 𝙇𝙞𝙣𝙠 : '+result }, { quoted: m })
            }
            break
                            case 'gifhentai':
{
           if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
                    try{                 
m.reply('🔞 _Espere um pouco..._')
                       amem = await getBuffer(`https://zenzapis.xyz/api/morensfw/hentaigif?apikey=80cf6021a9`)
let encmedia = await client.sendImageAsSticker(m.chat, amem, m, { packname: `❀ۣۜۜ͜͡🧁 𝐗𝐈𝐍𝐙𝐙 - 𝐌𝐃\n⤻Comando Hentai`, author: `❀ۣۜۜ͜͡💎 𝐗𝐈𝐍𝐙𝐙 - 𝐕𝐈𝐏\n⤻Gifhentai` })
                await client.sendMessage(m.chat, { video: { url: amem, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(encmedia)
		                        } catch(e) {
                        m.reply(e)
                    }
                    }
                break
            case 'ass': case 'yuri': case 'pussy': case 'orgy': case 'hentai': case 'panties': case 'femdom': case 'gangbang': case 'trap': case 'blowjob': {
                if(!isNsfw) return NsfwOff()
                m.reply(mess.wait)
                akaa = await fetchJson(`https://ziy.herokuapp.com/api/nsfw/${command}?apikey=xZiyy`)
                client.sendMessage(m.chat, { image: { url: akaa.result }, caption: '𝙄𝙢𝙖𝙜𝙚𝙢 𝙂𝙚𝙧𝙖𝙙𝙖 ' }, { quoted: m })
            }
            break
                        case 'hentaivideo': case 'videohentai':{
                                    if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
                if(!isNsfw) return NsfwOff()
                m.reply(mess.wait)
                akaa = await fetchJson(`https://zenzapis.xyz/downloader/hentaivid?apikey=80cf6021a9`)
                client.sendMessage(m.chat, { video: { url: akaa.result.video_1 }, caption: '❀ۣۜۜ͜͡📼 𝐕𝐈𝐃𝐄𝐎 𝐆𝐄𝐑𝐀𝐃𝐎! ' }, { quoted: m })
            }
            break
            case 'tubarão': case 'tubarao':
{
            if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
  if(!isNsfw) return NsfwOff()
var pack = [
  "https://i.imgur.com/XbW7FO2.jpg",
  "https://i.imgur.com/ciuzM98.jpg",
  "https://i.imgur.com/uHsrrrx.jpg",
  "https://i.imgur.com/PVi8YDi.jpg",
  "https://i.imgur.com/FLC3ZXE.jpg",
  "https://i.imgur.com/54m52tX.jpg",
  "https://i.imgur.com/OsxYPgQ.jpg",
  "https://i.imgur.com/vpw6Xnr.jpg",
  "https://i.imgur.com/aAyPrZx.jpg",
  "https://i.imgur.com/Gh3ORCd.jpg",
  "https://i.imgur.com/rjGhygM.jpg",
  "https://i.imgur.com/zdHVFEI.jpg",
  "https://i.imgur.com/kAplnSG.jpg",
  "https://i.imgur.com/15UiO8o.jpg",
  "https://i.imgur.com/qjjyr6G.jpg",
  "https://i.imgur.com/bQZRhBU.jpg",
  "https://i.imgur.com/vpw6Xnr.jpg",
  "https://i.imgur.com/aAyPrZx.jpg",
  "https://i.imgur.com/Gh3ORCd.jpg",
  "https://i.imgur.com/rjGhygM.jpg",
  "https://i.imgur.com/0MhmmF4.jpg",
  "https://i.imgur.com/2MX4wvq.jpg",
  "https://i.imgur.com/HYL5ggu.jpg",
  "https://i.imgur.com/7ZjOD2a.jpg",
  "https://i.imgur.com/zbEUy3m.jpg",
  "https://i.imgur.com/tZ6vlg6.jpg",
  "https://i.imgur.com/jdPns8O.jpg",
  "https://i.imgur.com/VyjBQHT.jpg",
  "https://i.imgur.com/ozAGqBD.jpg",
  "https://i.imgur.com/DsSj9S1.jpg",
  "https://i.imgur.com/KYHpjNc.jpg",
]
let lolii = pack[Math.floor(Math.random() * pack.length)]
client.sendMessage(m.chat, { image: { url: lolii }, caption: '𝙄𝙢𝙖𝙜𝙚𝙢 𝙂𝙚𝙧𝙖𝙙𝙖 ' }, { quoted: m })
.catch((err) => {
console.log(err)
            m.reply("📵 - _Erro ao enviar a imagem. Tente novamente!_")
            })
            }
          break
                      case 'aleatorio18': case 'aleatorio+18':
{
            if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
  if(!isNsfw) return NsfwOff()
pacck = await fetchJson('https://meme-api.herokuapp.com/gimme/LegalTeens')
pack = (pacck.url)
client.sendMessage(m.chat, { image: { url: pack }, caption: '𝙄𝙢𝙖𝙜𝙚𝙢 𝙂𝙚𝙧𝙖𝙙𝙖 ' }, { quoted: m })
.catch((err) => {
console.log(err)
            m.reply("📵 - _Erro ao enviar a imagem. Tente novamente!_")
            })
            }
          break
                      case 'video+18': case 'video18':
{
if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
  if(!isNsfw) return NsfwOff()
var paack = [
"https://l.top4top.io/m_2235dduf01.mp4",
"https://a.top4top.io/m_2235268m61.mp4",
"https://b.top4top.io/m_2235k7hze2.mp4",
"https://c.top4top.io/m_2235lxohb3.mp4",
"https://d.top4top.io/m_2235jwd2e4.mp4",
"https://e.top4top.io/m_2235h5b1z5.mp4",
"https://f.top4top.io/m_2235gihcu6.mp4",
"https://l.top4top.io/m_2235dp7m41.mp4",
"https://a.top4top.io/m_2235zxue82.mp4",
"https://b.top4top.io/m_2235m3bhf3.mp4",
"https://c.top4top.io/m_2235vjyio4.mp4",
"https://d.top4top.io/m_2235m9tdu5.mp4",
"https://e.top4top.io/m_2235y2kon6.mp4",
"https://f.top4top.io/m_2235rhid57.mp4",
"https://g.top4top.io/m_2235zgsqf8.mp4",
"https://i.top4top.io/m_2235drxxg10.mp4",
"https://d.top4top.io/m_2235fzynm1.mp4",    
"https://e.top4top.io/m_22354t3zk2.mp4",
"https://f.top4top.io/m_2235gyxgh3.mp4",
"https://g.top4top.io/m_22357cmft4.mp4", 
"https://i.top4top.io/m_2235mcizm6.mp4",
"https://j.top4top.io/m_2235gwsn17.mp4",
"https://k.top4top.io/m_2235gzzjc8.mp4",
"https://a.top4top.io/m_2235l9y1310.mp4",  
"https://l.top4top.io/m_2235r1opz1.mp4",    
"https://a.top4top.io/m_22358cuuu2.mp4",
"https://b.top4top.io/m_22350c9br3.mp4",
"https://c.top4top.io/m_22355p2js4.mp4",  
"https://d.top4top.io/m_2235lv7415.mp4",
"https://e.top4top.io/m_2235q8z3f6.mp4",     
"https://b.top4top.io/m_22358oas31.mp4",
"https://c.top4top.io/m_2235xg7o62.mp4",
"https://d.top4top.io/m_2235ut91p3.mp4",
"https://e.top4top.io/m_22352ktoj4.mp4",
"https://f.top4top.io/m_2235hcqj65.mp4",
"https://g.top4top.io/m_2235j81s76.mp4", 
"https://d.top4top.io/m_2235993nu1.mp4",
"https://c.top4top.io/m_22352lrsd1.mp4",
"https://g.top4top.io/m_2235pi8791.mp4",
"https://g.top4top.io/m_22428pnh01.mp4",
"https://i.top4top.io/m_2242jpc3c1.mp4",
"https://f.top4top.io/m_2235sxi5y1.mp4"
]
var llolii = paack[Math.floor(Math.random() * paack.length)]
client.sendMessage(m.chat, { video: { url: llolii }, caption: '✅ 𝗩𝗶𝗱𝗲𝗼 𝗚𝗲𝗿𝗮𝗱𝗼 𝗰𝗼𝗺 𝗦𝘂𝗰𝗲𝘀𝘀𝗼!' }, { quoted: m })
.catch((err) => {
console.log(err)
            m.reply("📵 - _Erro ao enviar a imagem. Tente novamente!_")
            })
            }
          break
               case 'buceta': {
                               if(!isNsfw) return NsfwOff()
                               if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
                               m.reply(mess.wait)
                akaa = await fetchJson(`https://meme-api.herokuapp.com/gimme/pussy`)
                client.sendMessage(m.chat, { image: { url: akaa.url }, caption: '𝙄𝙢𝙖𝙜𝙚𝙢 𝙂𝙚𝙧𝙖𝙙𝙖 ' }, { quoted: m })
            }
            break
                           case 'piroca': {
                               if(!isNsfw) return NsfwOff()
                               if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
                               m.reply(mess.wait)
                akaa = await fetchJson(`https://meme-api.herokuapp.com/gimme/cock`)
                client.sendMessage(m.chat, { image: { url: akaa.url }, caption: '𝙄𝙢𝙖𝙜𝙚𝙢 𝙂𝙚𝙧𝙖𝙙𝙖 ' }, { quoted: m })
            }
            break
            case 'bunda': {
                               if(!isNsfw) return NsfwOff()
                               if (!isPremium) throw `Você não é um usuário premium!`
                akaa = await fetchJson(`https://meme-api.herokuapp.com/gimme/ass`)
                client.sendMessage(m.chat, { image: { url: akaa.url }, caption: '𝙄𝙢𝙖𝙜𝙚𝙢 𝙂𝙚𝙧𝙖𝙙𝙖 ' }, { quoted: m })
            }
            break
            case 'peitos': {
                               if(!isNsfw) return NsfwOff()
                               if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
                m.reply(mess.wait)
                akaa = await fetchJson(`https://meme-api.herokuapp.com/gimme/tits`)
                client.sendMessage(m.chat, { image: { url: akaa.url }, caption: '𝙄𝙢𝙖𝙜𝙚𝙢 𝙂𝙚𝙧𝙖𝙙𝙖 ' }, { quoted: m })
            }
            break

            case 'peitos2': {
                               if(!isNsfw) return NsfwOff()
                               if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
                m.reply(mess.wait)
                akaa = await fetchJson(`https://meme-api.herokuapp.com/gimme/boobs`)
                client.sendMessage(m.chat, { image: { url: akaa.url }, caption: '𝙄𝙢𝙖𝙜𝙚𝙢 𝙂𝙚𝙧𝙖𝙙𝙖 ' }, { quoted: m })
            }
            break
                    case 'gay':{
    m.reply(mess.wait)
    let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
            caak = (`https://some-random-api.ml/canvas/gay?avatar=${util.format(anu)}`)
            client.sendMessage(m.chat, { image: { url: caak }, caption: '𝙄𝙢𝙖𝙜𝙚𝙢 𝙂𝙚𝙧𝙖𝙙𝙖' }, { quoted: m })         
                    } else {
                        m.reply('É necessário usar uma imagem')
}
}
                    break
                    case 'ssweb':
                    if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
m.reply(`⏰ - _Aguarde alguns segundos enquanto tiro print de *${q}*!_`)
if (!isCreator) return reply(`_Você não pode utilizar esse comando!_`)
sswbe = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${q}`)
client.sendMessage(m.chat, { image: { url: sswbe.screenshot }, caption: '𝙄𝙢𝙖𝙜𝙚𝙢 𝙂𝙚𝙧𝙖𝙙𝙖' }, { quoted: m })
.catch((err) => {
console.log(err)
  m.reply(`❌ - _Ocorreu um erro ao executar o comando *${command}*. Tente novamente mais tade._`)
})
break
	    case 'couple': case 'casal': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                client.sendMessage(m.chat, { image: { url: random.male }, caption: `𝙈𝙖𝙨𝙘𝙪𝙡𝙞𝙣𝙤` }, { quoted: m })
                client.sendMessage(m.chat, { image: { url: random.female }, caption: `𝙁𝙚𝙢𝙞𝙣𝙞𝙣𝙤` }, { quoted: m })
            }
	    break
	  
            case 'coffe': case 'cafe': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: '𝙋𝙧𝙤𝙭𝙞𝙢𝙖 𝙄𝙢𝙖𝙜𝙚𝙢'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ 𝘾𝙖𝙛𝙚́ 𝙖𝙡𝙚𝙖𝙩𝙤́𝙧𝙞𝙤`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return m.reply('𝘿𝙞𝙜𝙞𝙩𝙚 𝙖𝙡𝙜𝙤 𝙣𝙤 𝙏𝙞𝙩𝙪𝙡𝙤')
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `𝙋𝙖𝙥𝙚𝙡 𝙙𝙚 𝙋𝙖𝙧𝙚𝙙𝙚 ${text}`, buttonText: {displayText: '𝙋𝙧𝙤𝙭𝙞𝙢𝙖 𝙄𝙢𝙖𝙜𝙚𝙢'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `⭔ 𝙏𝙞𝙩𝙪𝙡𝙤 : ${result.title}\n⭔ 𝘾𝙖𝙩𝙚𝙜𝙤𝙧𝙞𝙖 : ${result.type}\n⭔ 𝘿𝙚𝙩𝙖𝙡𝙝𝙚 : ${result.source}\n⭔ 𝙇𝙞𝙣𝙠 : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw '𝘿𝙞𝙜𝙞𝙩𝙚 𝙖𝙡𝙜𝙤 𝙥𝙧𝙤 𝙏𝙞𝙩𝙪𝙡𝙤'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `𝙒𝙞𝙠𝙞𝙢𝙚𝙙𝙞𝙖: ${text}`, buttonText: {displayText: '𝙋𝙧𝙤𝙭𝙞𝙢𝙖 𝙄𝙢𝙖𝙜𝙚𝙢'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ 𝙏𝙞𝙩𝙪𝙡𝙤 : ${result.title}\n⭔ 𝙁𝙤𝙣𝙩𝙚 : ${result.source}\n⭔ 𝙇𝙞𝙣𝙠 : ${result.image}`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `𝙌𝙪𝙤𝙩𝙚𝙨𝙖𝙣𝙞𝙢𝙚`, buttonText: {displayText: '𝙋𝙧𝙤𝙭𝙞𝙢𝙤'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\n𝙥𝙤𝙧: '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: '𝘼𝙥𝙚𝙧𝙩𝙚 𝙤 𝙗𝙤𝙩𝙖̃𝙤 𝙖𝙗𝙖𝙞𝙭𝙤',
                    buttons: buttons,
                    headerType: 2
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break

	    case 'typography': case 'romance': case 'stars': case 'flaming': case 'vintage': case 'fur': case 'gerbang': case 'partyneon': case 'silk': case 'butterfly': case 'harrypotter': case 'neonlight': {
                if (!text) throw 'Digite algo'
                m.reply(mess.wait)
                client.sendMessage(m.chat, { image: { url: (`https://violetics.pw/api/photooxy/${command}?apikey=beta&text=${q}`) }, caption: `𝙋𝙝𝙤𝙩𝙤 𝙊𝙭𝙮 ${command}` }, { quoted: m })
            }
            break
            
                case 'anonymous-neon': case 'azzenka-league-of-kings': case 'colorful-angelwing': case 'galaxy-text3': case 'galaxyangel-wing': case 'ninja-mascot': case 'neon-devilwing': case 'yasuo': {
                if (!text) throw 'Digite algo'
                m.reply(mess.wait)
                client.sendMessage(m.chat, { image: { url: (`https://violetics.pw/api/ephoto360/${command}?apikey=beta&text=${q}`) }, caption: `𝙀𝙥𝙝𝙤𝙩𝙤 𝙊𝙭𝙮 ${command}` }, { quoted: m })
            }
            break
            
            case 'freefire': case 'fpslogo': case 'avatardota': case 'anonymhacker': {
                if (!text) throw 'Digite algo'
                m.reply(mess.wait)
                client.sendMessage(m.chat, { image: { url: (`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=RINTISAJA&text=${q}`) }, caption: `𝙀𝙥𝙝𝙤𝙩𝙤 𝙊𝙭𝙮 ${command}` }, { quoted: m })
            }
            break
            
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'procurargp': {
if (args.length < 1) return m.reply(`Exemplo :\n${prefix + command} Figurinhas`)
nae = args.join(" ")
a = await getBuffer('https://i.pinimg.com/originals/99/65/01/99650174e0fc6ae10317cedf29cfdaab.jpg')
hx.linkwa(nae).then(res => {
teks = '```「 PROCURAR GP 」```'
for (let i of res) {
teks += `\n\n•> GRUPOS ENCONTRADOS :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: logo,
jpegThumbnail: a,
caption: teks,
footer: "© XINZZBOT ~ RISKY",
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                client.sendImage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            
            case 'shit':
m.reply('Comando Removido!\nMotivo: Lentidao')
break

            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                client.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
	 /*   case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let anu = await fetchJson(`https://sanuw-api.herokuapp.com/docs/other/igstalk?username=niviaevenne&apikey=sanuwa`)
                    if (anu.status == false) return m.reply(anu.result.message)
                    client.sendMedia(m.chat, anu.result.Profile_Pic, '', `⭔ 𝙉𝙤𝙢𝙚 : ${anu.result.Fullname}\n⭔ 𝙐𝙨𝙪𝙖𝙧𝙞𝙤 : ${anu.result.Username}\n⭔ 𝙎𝙚𝙜𝙪𝙞𝙙𝙤𝙧𝙚𝙨 : ${anu.result.Followers}\n⭔ 𝙎𝙚𝙜𝙪𝙞𝙣𝙙𝙤 : ${anu.result.Following}\n⭔ 𝙎𝙞𝙩𝙚 : ${anu.result.websites}\n⭔ 𝙑𝙚𝙧𝙞𝙛𝙞𝙘𝙖𝙙𝙤 : ${anu.result.Is_Veryfied}\n⭔ 𝙋𝙧𝙞𝙫𝙖𝙙𝙤 : ${anu.result.Is_Private}\n⭔ 𝘽𝙞𝙤 : ${anu.result.Biography}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`⭔ Name : ${anu.name}\n⭔ Version : ${Object.keys(anu.versions)}\n⭔ Created : ${tanggal(anu.time.created)}\n⭔ Modified : ${tanggal(anu.time.modified)}\n⭔ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n⭔ Description : ${anu.description}\n⭔ Homepage : ${anu.homepage}\n⭔ Keywords : ${anu.keywords}\n⭔ Author : ${anu.author.name}\n⭔ License : ${anu.license}\n⭔ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break*/
	        case 'tiktok2': case 'tiktoknowm': {
                if (!text) throw 'Digite o link, boy!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://sanuw-api.herokuapp.com/docs/download/tiktok2?url=${q}&apikey=sanuwa`)
                let buttons = [
                  {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'AUDIO'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.url },
                    caption: `Download de ${text}`,
                    footer: 'Clique para pegar apenas o audio',
                    buttons: buttons,
                    headerType: 5
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Cade o link?!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://sanuw-api.herokuapp.com/docs/download/tiktok2?url=${q}&apikey=sanuwa`)
                let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'Voltar'}, type: 1},
                ]
                let buttonMessage = {
                    text: `Download de ${text}`,
                    footer: 'Menu Principal',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await client.sendMessage(m.chat, buttonMessage, { quoted: m })
                client.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	
            case 'joox': case 'jooxdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                let msg = await client.sendImage(m.chat, anu.result.img, `⭔ Title : ${anu.result.lagu}\n⭔ Album : ${anu.result.album}\n⭔ Singer : ${anu.result.penyanyi}\n⭔ Publish : ${anu.result.publish}\n⭔ Lirik :\n${anu.result.lirik.result}`, m)
                client.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
            }
            break
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await client.sendImage(m.chat, anu.result.thumb, `⭔ Title : ${anu.result.title}\n⭔ Url : ${isUrl(text)[0]}`)
                client.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await client.sendMessage(m.chat, buttonMessage, { quoted: m })
                client.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                client.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Falta o link!!'
                m.reply(mess.wait)
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/pinterestvideo?apikey=RINTISAJA&url=${q}`)
                client.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download de ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
⭔ Title : ${anu.title}
⭔ Author : ${anu.author.name}
⭔ Like : ${anu.like}
⭔ Caption : ${anu.caption}
⭔ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: client.user.name,
			buttons,
			headerType: 4
		    }
		    client.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        client.sendMessage(m.chat, { image: { url }, caption: `⭔ Title : ${anu.title}\n⭔ Author : ${anu.author.name}\n⭔ Like : ${anu.like}\n⭔ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
                                  case 'hinataa':
client.sendMessage(m.chat, { image: { url: `https://rest-beni.herokuapp.com/api/canvas/customgfx2?teks1=${lmk}&teks2=rkbot&bg=https://i.pinimg.com/564x/70/b0/3f/70b03f17100852b02043981819adfa00.jpg` }, caption: `Feito!` }, { quoted: m })

break

case 'narutoo':
client.sendMessage(m.chat, { image: { url: `https://rest-beni.herokuapp.com/api/canvas/customgfx2?teks1=${lmk}&teks2=rkbot&bg=https://i.pinimg.com/736x/2d/a1/1c/2da11cb67f3d5a5a23a714c05fcd79ea.jpg` }, caption: `Feito!` }, { quoted: m })
break

case 'sasukee':
client.sendMessage(m.chat, { image: { url: `https://rest-beni.herokuapp.com/api/canvas/customgfx1?teks=${lmk}&bg=https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7dddf711-c78d-423a-b645-10845ef9a69c/d4qduli-f6d003c7-c472-4b11-af65-c42c80c72545.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdkZGRmNzExLWM3OGQtNDIzYS1iNjQ1LTEwODQ1ZWY5YTY5Y1wvZDRxZHVsaS1mNmQwMDNjNy1jNDcyLTRiMTEtYWY2NS1jNDJjODBjNzI1NDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.We2Ap6kZjz2WCpxWSHJ_kIBmNG_OeabiwChIod_PDvU` }, caption: `Feito!` }, { quoted: m })
break


        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		client.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'anagrama':
if(!m.isGroup) return m.reply('comando apenas para grupos')
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(!isAdmins) return m.reply('comando apenas para admins')
if(args.length == 0) return m.reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./src/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
client.sendMessage(m.chat, { text: `╭═•ೋ❀๑🎮๑❀ೋ•═╮ 
                𝐗𝐈𝐍𝐙𝐙-𝐌𝐃💎
            𝐀𝐍𝐀𝐆𝐑𝐀𝐌𝐀💬
  ╰═•ೋ❀๑🎮๑❀ೋ•═╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╭╼━═━━≺🎠≻━━═━╾╮
╎❀ۣۜۜ͜͡ ⚠️ DESCUBRA A PALAVRA
╎❀ۣۜۜ͜͡ ⛑️ ANAGRAMA: ${dataAnagrama2.embaralhada}
╎❀ۣۜۜ͜͡ ✨ DICA: ${dataAnagrama2.dica}
╰╼━═━━≺🎠≻━━═━─╯

`})} else {
fs.writeFileSync(`./src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
client.sendMessage(m.chat, { text: `╭═•ೋ❀๑🎮๑❀ೋ•═╮ 
                𝐗𝐈𝐍𝐙𝐙-𝐌𝐃💎
            𝐀𝐍𝐀𝐆𝐑𝐀𝐌𝐀💬
  ╰═•ೋ❀๑🎮๑❀ೋ•═╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​��​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​��​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
╎❀ۣۜۜ͜͡ ⚠️ DESCUBRA A PALAVRA
╎❀ۣۜۜ͜͡ ⛑️ ANAGRAMA: ${dataAnagrama2.embaralhada}
╎❀ۣۜۜ͜͡ ✨ DICA: ${dataAnagrama2.dica}
╰╼━═━━≺🎠≻━━═━─╯

`})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./src/anagrama-${from}.json`)) return m.reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./src/anagrama-${from}.json`)
m.reply("desativado com sucesso")
}
//await limitAdd(m.sender)
break 
// FIM DOS JOGOS //
		                    case 'modificador':  case 'voz': {
                let buttons = [
                    {buttonId: `menu `, buttonText: {displayText: 'Voltar'}, type: 1},
                ]
                let buttonMessage = {
                    image: { url: `https://img.utdstc.com/screen/615/e16/615e166ef81019a4cb3e64447be45483e6ca52ad0a50c8a4c42bfd96bb99fe88:200` },
                    caption: `
╔═❖•ೋ° 💎 °ೋ•❖═╗
          𝙍𝙞𝙨𝙠𝙮 𝙍𝙤𝙗𝙤𝙩
    𝙈𝙤𝙙𝙞𝙛𝙞𝙘𝙖𝙙𝙤𝙧 𝙙𝙚 𝙑𝙤𝙯
╚═❖•ೋ° 💎 °ೋ•❖═╝

╔═❖•ೋ❬ 🚀️ ❭ೋ•❖═╗
║
║⋆⃟ۣۜ🎙➣ bass
║⋆⃟ۣۜ🎙➣ soprado
║⋆⃟ۣۜ🎙➣ fundo
║⋆⃟ۣۜ🎙➣ estourado
║⋆⃟ۣۜ🎙➣ rapido
║⋆⃟ۣۜ🎙➣ gordo
║⋆⃟ۣۜ🎙➣ nightcore
║⋆⃟ۣۜ🎙➣ reverso
║⋆⃟ۣۜ🎙➣ robo
║⋆⃟ۣۜ🎙➣ lento
║⋆⃟ۣۜ🎙➣ esquilo
│
╚═❖•ೋ❬ 🔥️ ❭ೋ•❖═╝}`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: fvn })
            }
            break
                     case 'premium':  case 'vip': {
                     if (isPremium) {
                     foto = (`https://telegra.ph/file/8d8533a9f00e92c5f56ec.jpg`)
                     anu = `🗑️𝗗𝗲𝗹𝗲𝘁𝗮𝗿` 
                     poc = `d`
                     }
                     if (!isPremium) {
                     foto = (`https://telegra.ph/file/8c67c0fa817eab2c64ec5.jpg`)
                     anu = `💎𝗖𝗼𝗺𝗽𝗿𝗮𝗿` 
                     poc = `sc`
                     }
                let buttons = [
                    {buttonId: `${poc}`, buttonText: {displayText: `${anu}`}, type: 1},
                ]
                let buttonMessage = {
                    image: { url: foto },
                    caption: `
╭═•ೋ❀๑🦄๑❀ೋ•═╮ 
        🍃𝐗𝐈𝐍𝐙𝐙-𝐌𝐃🍃
    💎 𝐌𝐄𝐍𝐔-𝐏𝐑𝐄𝐌𝐈𝐔𝐌 💎
╰═•ೋ❀๑🦄๑❀ೋ•═╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

╭╼━═━━≺🌟≻━━═━╾╮
╎❀ۣۜۜ͜͡ 📸 /Ssweb
╎
╎❀ۣۜۜ͜͡ 🔈 /Acharmsc
╎
╎❀ۣۜۜ͜͡ 🌐 /Tolink
╎❀ۣۜۜ͜͡ 🌐 /Play2
╎
╎❀ۣۜۜ͜͡ 🔊 /Patolino
╎❀ۣۜۜ͜͡ 🔊 /Faustão
╎❀ۣۜۜ͜͡ 🔊 /Chapolin
╎❀ۣۜۜ͜͡ 🔊 /Negobam
╎❀ۣۜۜ͜͡ 🔊 /Eminem 
╎❀ۣۜۜ͜͡ 🔊 /Ibere 
╎
╎❀ۣۜۜ͜͡ 🍑 /Anal
╎❀ۣۜۜ͜͡ 🍑 /Buceta 
╎❀ۣۜۜ͜͡ 🍑 /Bunda 
╎❀ۣۜۜ͜͡ 🍑 /Peitos
╎❀ۣۜۜ͜͡ 🍑 /Peitos2 
╎❀ۣۜۜ͜͡ 🍑 /Porno 
╎❀ۣۜۜ͜͡ 🍑 /Tubarão
╎❀ۣۜۜ͜͡ 🍑 /Video18 
╎❀ۣۜۜ͜͡ 🍑 /Aleatorio18 
╎
╎❀ۣۜۜ͜͡ 🔞 /Xnxx
╎❀ۣۜۜ͜͡ 🔞 /Videohentai
╎❀ۣۜۜ͜͡ 🔞 /Gifhentai
╎
╎❀ۣۜۜ͜͡ ⚜ /Entrar 
╰╼━═━━≺🌟≻━━═━─╯`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: ftroli })
            }
            break

		   case 'bass': case 'soprado': case 'fundo': case 'estourado': case 'rapido': case 'gordo': case 'nightcore': case 'reverso': case 'robo': case 'lento': case 'suave': case 'esquilo':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/soprado/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/fundo/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/estourado/.test(command)) set = '-af volume=12'
                if (/rapido/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/gordo/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverso/.test(command)) set = '-filter_complex "areverse"'
                if (/robo/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/lento/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/suave/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/esquilo/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                client.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`𝙐𝙨𝙚 𝙢𝙖𝙧𝙘𝙖𝙣𝙙𝙤 𝙪𝙢 𝙖𝙪́𝙙𝙞𝙤 *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
                
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                client.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Mensagem adicionada com sucesso na lista de mensagens como '${text}'
    
Acesse com ${prefix}getmsg ${text}

Ver lista de mensagens com ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                client.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' não listado na lista de mensagens`)
		delete msgs[text.toLowerCase()]
		m.reply(`'${text}' removido com sucesso da lista de mensagens`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Recurso não pode ser usados ​​para grupos!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Começar'}, type: 1 }
                ]
                client.sendButtonText(m.chat, buttons, `\`\`\`Oii ${await client.getName(m.sender)} Bem-vindo ao chat anônimo!\n\nClique no botão abaixo para encontrar um parceiro\`\`\``, client.user.name, m)
            }
			break
            case 'sair': case 'leave': {
                if (m.isGroup) return m.reply('Recurso não pode ser usados ​​para grupos!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Começar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Você não está em uma sessão anônima, pressione o botão para encontrar um parceiro \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await client.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'começar': case 'start': {
                if (m.isGroup) return m.reply('Recurso não pode ser usados ​​para grupos!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'sair', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Você ainda está em uma sessão anônima, pressione o botão abaixo para encerrar sua sessão anônima\`\`\``, client.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'começar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await client.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, client.user.name, m)
                    room.b = m.sender
                    room.state = 'CONVERSANDO'
                    await client.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, client.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'ESPERANDO',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'sair', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Aguarde, procurando um parceiro\`\`\``, client.user.name, m)
                }
                break
            }
            case 'next': case 'proximo': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Começar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Clique no botão abaixo para encontrar um parceiro\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await client.sendText(other, `\`\`\`Parceiro Saiu da Sessão Anônima\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Pular' }, type: 1 },
                        { buttonId: 'sair', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await client.sendButtonText(room.a, buttons, `\`\`\`Parceiro encontrado com sucesso, agora você pode enviar mensagem\`\`\``, client.user.name, m)
                    room.b = m.sender
                    room.state = 'CONVERSANDO'
                    await client.sendButtonText(room.b, buttons, `\`\`\`Parceiro encontrado com sucesso, agora você pode enviar mensagem\`\`\``, client.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'ESPERANDO',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'sair', buttonText: { displayText: 'Parar' }, type: 1 }
                    ]
                    await client.sendButtonText(m.chat, buttons, `\`\`\`Aguarde, procurando um parceiro...\`\`\``, client.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                client.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                client.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
_⫹⫺ Seu Nome : ${pushname}_
_⫹⫺ Livraria : Baileys-Md_
_⫹⫺ Versao : 2.0.0_
_⫹⫺ Linguagem : Javascript_
_⫹⫺ Criador : Risky Modz_
_⫹⫺ Data :  ${moment.tz('America/Fortaleza').format('DD/MM/YY')}_
_⫹⫺ Horario : ${moment.tz('America/Fortaleza').format('HH:mm:ss')}_ 
  
Tempo de resposta em ${latensi.toFixed(4)} _Segundos_ \n ${oldd - neww} _milisegundos_\n\nTempo Online : ${runtime(process.uptime())}

💻 Info do Servidor
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memoria Usada_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_ Uso Total da CPU_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usada (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'dono': {
                client.sendContact(m.chat, global.owner1, m)
            }
            break

            case 'list': case 'menu': case 'help': {
             time22 = moment().tz('America/Fortaleza').format('HH:mm:ss')
                            try {
                    ew = 'https://picstatio.com/large/515aa2/anime-girl-holiday-fun-summer.jpg'
                } catch {
                    ew = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
                console.log(ew)
                anjay = await getBuffer(ew)
               anu = `╭═•ೋ❀๑🦄๑❀ೋ•═╮ 
          🍃𝐗𝐈𝐍𝐙𝐙-𝐌𝐃🍃
  🏖 𝐌𝐄𝐍𝐔-𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋 🏖
╰═•ೋ❀๑🦄๑❀ೋ•═╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

╭╼━═━━≺🌟≻━━═━╾╮
╎❀ۣۜۜ͜͡ 🌶 /Administrador
╎❀ۣۜۜ͜͡ 🍒 /Aplicativos
╎❀ۣۜۜ͜͡ 🍇 /Modificador
╎❀ۣۜۜ͜͡ 🍕 /ListaMaker
╎❀ۣۜۜ͜͡ 🍟 /Converter
╎❀ۣۜۜ͜͡ 🍅 /Download 
╎❀ۣۜۜ͜͡ 🍣 /Pesquisa 
╎❀ۣۜۜ͜͡ 🍫 /Premium
╎❀ۣۜۜ͜͡ 🍬 /Photoxy 
╎❀ۣۜۜ͜͡ 🍭 /Ephoto 
╎❀ۣۜۜ͜͡ ☕ /Maker 
╎❀ۣۜۜ͜͡ 🍒 /Jogos 
╰╼━═━━≺🌟≻━━═━─╯`
                let btn = [{
                                urlButton: {
                                    displayText: '🥂Grupo',
                                    url: 'https://chat.whatsapp.com/HGWgbrGPyIj4u5sxuZ4RdD'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🍨Instagram',
                                    id: 'grupoo'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🧁Lista',
                                    id: 'lista'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '🧃Comprar',
                                    id: 'sc'
                                }
                            }]
                                        client.sendMessage(m.chat, { react: { text: "🤩", key: m.key }})
                        client.send5ButImg(m.chat, anu, client.user.name+` | ${time22}`, anjay, btn)
                     }
            break
            case 'download':  case 'down': {
                let buttons = [
                    {buttonId: `menu `, buttonText: {displayText: 'Voltar'}, type: 1},
                ]
                let buttonMessage = {
                    image: { url: `https://wallpapers.com/images/high/anime-girl-izumi-sagiri-6v8q05dnzw5xyrlu.jpg` },
                    caption: `
╭═•ೋ❀๑🦄๑❀ೋ•═╮ 
         🍃𝐗𝐈𝐍𝐙𝐙-𝐌𝐃🍃
     🧃 𝐌𝐄𝐍𝐔-𝐃𝐎𝐖𝐍 🧃
╰═•ೋ❀๑🦄๑❀ೋ•═╯​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​

╭╼━═━━≺Ⓜ️≻━━═━╾╮
╎
╎❀ۣۜۜ͜͡🍭 Tiktok [url]
╎❀ۣۜۜ͜͡🍭 Instagram [url]
╎❀ۣۜۜ͜͡🍭 Twitter [url]
╎❀ۣۜۜ͜͡🍭 Twittermp3 [url]
╎❀ۣۜۜ͜͡🍭 Facebook [url]
╎❀ۣۜۜ͜͡🍭 Pinterestdl [url]
╎❀ۣۜۜ͜͡🍭 Play [url]
╎❀ۣۜۜ͜͡🍭 Play1 [texto]
╎❀ۣۜۜ͜͡🍭 Play2 [texto]
╎❀ۣۜۜ͜͡🍭 Play3 [texto]
╎❀ۣۜۜ͜͡🍭 Umma [url]
╎❀ۣۜۜ͜͡🍭 Joox [titulo]
╎❀ۣۜۜ͜͡🍭 Soundcloud [url]
╎
╰╼━═━━≺Ⓜ️≻━━═━─╯`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            // case command:
            //     es = args
            //     console.log(es)
            //     if (es === undefined){
            //         ini_url = await fetchJson(`https://api.xmrg3p5.com/?text=${command}`)
            //         console.log(`https://api.xmrg3p5.com/?text=${command}`)
            //     }else{
            //         ini_url = await fetchJson(`https://api.xmrg3p5.com/?text=${command} ${es}`)
            //         console.log(`https://api.xmrg3p5.com/?text=${command} ${es}`)

            //     }
            //     anjg = ini_url.response
            //     console.log(ini_url)
            //     if (anjg === null) {   
            //         console.log(anjg)
            //     }else{
            //         m.reply(`${ini_url.response}`)
            //     }
            // break
            case 'telesticker': case 'teles': case 'st':
            if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
                if (args.length == 0) m.reply(`Exemplo: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                ini_url = args[0]
                m.reply(`*Por favor, espere...*`)
                try{
                ini_url = await fetchJson(`https://rest-beni.herokuapp.com/api/telesticker?url=${ini_url}`)
                // ini_url = await fetchJson(`https://raw.githubusercontent.com/shoukosagiri-poi/swenson-web-vercel/main/anjime.json`)
                // console.log(ini_url)
                console.log(ini_url.result)
                ini_sticker = ini_url.result
                for (sticker_ in ini_sticker) {
                    ini_buffer = await getBuffer(ini_sticker[sticker_])
                    let encmedia = await client.sendImageAsStickernoreply(m.chat, ini_buffer, m, { packname: `⛩・Entre no nosso\ngrupo do WhatsApp:\n⤻bit.ly/WorldOfSticker\n\n🌟・Figurinha criada\nno Grupo Oficial.\n⤻Entre agora!`, author: `🇧🇷・Criada pela comunidade:\n'Xinzz - Md'\n\n💎・ Usuário Oficial\nPermanente:\n⤻${pushname}`})
                    await fs.unlinkSync(encmedia)
                }
                m.reply(`*FEITO!*`)
                }catch(e){
                console.log(e)
                m.reply('⚠️ *ERRO*: Não foi possível enviar esse pacote de figurinhas, mas você pode tentar outro.')
                }
            break
                        case 'acharmsc':
{
            if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
                                    if (/image/.test(mime)) return m.reply('🔈 Utilize o comando marcando um *áudio*!')
                                    		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                                                        let media = await client.downloadAndSaveMediaMessage(quoted)
                                    m.reply(`[ 🔎 ] Buscando por aproximidade...`)
                    let anu = await UploadFileUgu(media)
                    try{
                                    ini_url = await fetchJson(`https://violetics.pw/api/search/music-finder?apikey=beta&audio=${anu.url}`)
                console.log(ini_url.result.title)
a = `🍨 𝐃𝐀𝐃𝐎𝐒 𝐀𝐏𝐑𝐎𝐗𝐈𝐌𝐀𝐃𝐎𝐒:

⥂𝐓𝐈𝐓𝐔𝐋𝐎: ${ini_url.result.title}
⥂𝐀𝐋𝐁𝐔𝐌: ${ini_url.result.album}
⥂𝐀𝐑𝐓𝐈𝐒𝐓𝐀𝐒: ${ini_url.result.artists}
⥂𝐃𝐔𝐑𝐀𝐂𝐀𝐎: ${ini_url.result.duration}

🍭๖𝐁𝐘 - 𝐑𝐈𝐒𝐊𝐘 𝐌𝐎𝐃𝐙`
                    m.reply(a)
}catch(e){
m.reply('❌ *NÃO* foi possível encontrar resultados...')
}
                }
            break
            
                        case 'figupack':
            if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
                if (args.length == 0) m.reply(`Exemplo: ${prefix + command} anime girl`)
                ini_url = args[0]
                m.reply(`*Por favor, espere...*`)
                try{
                ini_url = await fetchJson(`https://rest-beni.herokuapp.com/api/pinterest?query=${ini_url}`)
                // ini_url = await fetchJson(`https://raw.githubusercontent.com/shoukosagiri-poi/swenson-web-vercel/main/anjime.json`)
                // console.log(ini_url)
                console.log(ini_url.result)
                ini_sticker = ini_url.result
                for (sticker_ in ini_sticker) {
                    ini_buffer = await getBuffer(ini_sticker[sticker_])
                    let encmedia = await client.sendImageAsStickernoreply(m.chat, ini_buffer, m, { packname: `⛩・Entre no nosso\ngrupo do WhatsApp:\n⤻bit.ly/WorldOfSticker\n\n🌟・Figurinha criada\nno Grupo Oficial.\n⤻Entre agora!`, author: `🇧🇷・Criada pela comunidade:\n'Xinzz - Md'\n\n💎・ Usuário Oficial\nPermanente:\n⤻${pushname}`})
                    await fs.unlinkSync(encmedia)
                }
                m.reply(`*FEITO!*`)
                }catch(e){
                console.log(e)
                m.reply('⚠️ *ERRO*: Não foi possível enviar esse pacote de figurinhas, mas você pode tentar outro.')
                }
            break
            
            case 'stickerpack': case 'spack': case 'sp':
            if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
                if (args.length == 0) throw `Exemplo: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`
                ini_url = args[0]
                m.reply(`*Por favor, espere...*`)
                try{
                ini_url = await fetchJson(`https://api.zacros.my.id/downloader/stickerpack?link=https://getstickerpack.com/stickers/pentol-7`)
                // ini_url = await fetchJson(`https://raw.githubusercontent.com/shoukosagiri-poi/swenson-web-vercel/main/anjime.json`)
                // console.log(ini_url)
                console.log(ini_url.result)
                ini_sticker = ini_url.result
                for (sticker_ in ini_sticker) {
                    ini_buffer = await getBuffer([ini_sticker])
                    let encmedia = await client.sendImageAsStickernoreply(m.chat, ini_buffer, m, { packname: `⛩・Entre no nosso\ngrupo do WhatsApp:\n⤻bit.ly/WorldOfSticker\n\n🌟・Figurinha criada\nno Grupo Oficial.\n⤻Entre agora!`, author: `🇧🇷・Criada pela comunidade:\n'Xinzz - Md'\n\n💎・ Usuário Oficial\nPermanente:\n⤻${pushname}`})
                    await fs.unlinkSync(encmedia)
                }
                m.reply(`*FEITO!*`)
                }catch(e){
                console.log(e)
                m.reply('⚠️ *ERRO*: Não foi possível enviar esse pacote de figurinhas, mas você pode tentar outro.')
                }
            break
            
             case 'attp2':
                    try{                 
                    if (args.length < 1) return m.reply(`𝘾𝙖𝙙𝙚 𝙤 𝙩𝙚𝙭𝙩𝙤, 𝙖𝙣𝙟𝙞𝙣𝙝𝙤?`)
m.reply('🚀 _Criando sua Figurinha..._')
                        await client.sendMedia(m.chat, `http://brizas-api.herokuapp.com/ttp/attp1?apikey=brizaloka&text=${text}`, m, {asSticker: true})                       
                    }catch(e){
                        console.log(e)
                         m.reply(`🐒 Servidor Offline`)
                    }
                break
                case 'attp3':
                    try{                 
                    if (args.length < 1) return m.reply(`𝘾𝙖𝙙𝙚 𝙤 𝙩𝙚𝙭𝙩𝙤, 𝙖𝙣𝙟𝙞𝙣𝙝𝙤?`)
m.reply('🚀 _Criando sua Figurinha..._')
                        await client.sendMedia(m.chat, `http://brizas-api.herokuapp.com/ttp/attp2?apikey=brizaloka&text=${text}`, m, {asSticker: true})
                    } catch {
                        m.reply(`🐒 Servidor Offline`)
                    }
                break
                case 'attp4':
                    try{                 
                    if (args.length < 1) return m.reply(`𝘾𝙖𝙙𝙚 𝙤 𝙩𝙚𝙭𝙩𝙤, 𝙖𝙣𝙟𝙞𝙣𝙝𝙤?`)
m.reply('🚀 _Criando sua Figurinha..._')
               await client.sendMedia(m.chat, `http://brizas-api.herokuapp.com/ttp/attp3?apikey=brizaloka&text=${text}`, m, {asSticker: true})
                    } catch {
                        m.reply(`🐒 Servidor Offline`)
                    }
                break
                case 'attp5':
                    try{                 
                    if (args.length < 1) return m.reply(`𝘾𝙖𝙙𝙚 𝙤 𝙩𝙚𝙭𝙩𝙤, 𝙖𝙣𝙟𝙞𝙣𝙝𝙤?`)
m.reply('🚀 _Criando sua Figurinha..._')
                        await client.sendMedia(m.chat, `http://brizas-api.herokuapp.com/ttp/attp4?apikey=brizaloka&text=${text}`, m, {asSticker: true})
                    } catch {
                        m.reply(`🐒 Servidor Offline`)
                    }
                break
                case 'attp6':
                    try{                 
                    if (args.length < 1) return m.reply(`𝘾𝙖𝙙𝙚 𝙤 𝙩𝙚𝙭𝙩𝙤, 𝙖𝙣𝙟𝙞𝙣𝙝𝙤?`)
m.reply('🚀 _Criando sua Figurinha..._')
                        await client.sendMedia(m.chat, `http://brizas-api.herokuapp.com/ttp/attp5?apikey=brizaloka&text=${text}`, m, {asSticker: true})
                    } catch {
                        m.reply(`🐒 Servidor Offline`)
                    }
                break
                case 'attp' :
                case 'sttp' :
                    if (args.length < 1) return m.reply(`ERRO: cadê o texto?? \nUso: ${prefix}attp (seu texto aqui)`)
                    try {
                    m.reply(`_🎁 Criando sua *Figurinha*..._`)
                        var chollotxt = body.slice(5).trim()
                        await client.sendMedia(m.chat, `https://api.xteam.xyz/attp?file&text=${chollotxt}`, m, {asSticker: true})
                    }
                    catch (e) {
                    console.log(e)
                        m.reply("Error: Servidor caiu")
                    }
                    break
                case 'attp7':
                    try{                 
                    if (args.length < 1) return m.reply(`𝘾𝙖𝙙𝙚 𝙤 𝙩𝙚𝙭𝙩𝙤, 𝙖𝙣𝙟𝙞𝙣𝙝𝙤?`)
m.reply('🚀 _Criando sua Figurinha..._')
                        await client.sendMedia(m.chat, `http://brizas-api.herokuapp.com/ttp/attp6?apikey=brizaloka&text=${text}`, m, {asSticker: true})
                    } catch {
                        m.reply(`🐒 Servidor Offline`)
                    }
                break
            case 'peler': {
                m.reply('Command ini hanya untuk test fitur baru')
            }
            break
            case 'app':
            if (args[0] == 'spotify' || args[0] == 'Spotify') {
 m.reply(mess.wait)
 anjay = await getBuffer('https://cdn-icons-png.flaticon.com/512/174/174872.png')
               anu = `📌Spotify Premium APK Mod
🆚 Vv8.7.26.901 📥 76 MB ⭐ 4,2
➖➖➖➖➖➖➖➖➖➖➖➖➖
⚙️ Informações MOD:
◉ Premium desbloqueado
- Atualizado: 02/05/2022
➖➖➖➖➖➖➖➖➖➖➖➖➖
✅ Download Direto
➖➖➖➖➖➖➖➖➖➖➖➖➖
🏷️ Tags: #RiskyRobbot
©️Risky Modz | | @Riskyzin
`
                let btn = [{
                                urlButton: {
                                    displayText: '𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿',
                                    url: 'https://file.techsuspect.com/uploads/Spotify-Premium-8.7.22.1125-Mod-TechGara.Com.apk'
                                }
                            }
                            ]
                        client.send5ButImg(m.chat, anu, client.user.name, anjay, btn)
                  } else if (args[0] == 'minecraft' || args[0] == 'Minecraft') {
                    m.reply(mess.wait)
 anjay = await getBuffer('https://w7.pngwing.com/pngs/875/930/png-transparent-minecraft-pocket-edition-computer-icons-video-game-mod-others-text-logo-video-game-thumbnail.png')
               anu = `📌 Minecraft Download APK Mod
🆚 Vv1.18.31.04 📥 138 MB ⭐ 5,0
➖➖➖➖➖➖➖➖➖➖➖➖➖
⚙️ Informações MOD:
◉ Itens ilimitados, Modo Deus
- Atualizado: 02/05/2022
➖➖➖➖➖➖➖➖➖➖➖➖➖
✅ Download Direto
➖➖➖➖➖➖➖➖➖➖➖➖➖
🏷️ Tags: #RiskyRobbot
©️Risky Modz | | @Riskyzin
`
                let btn = [{
                                urlButton: {
                                    displayText: '𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿',
                                    url: 'https://file.techsuspect.com/uploads/Minecraft-1.18.31.04-TechGara.Com.apk'
                                }
                            }
                            ]
                        client.send5ButImg(m.chat, anu, client.user.name, anjay, btn)
                        } else if (args[0] == 'youtube' || args[0] == 'Youtube') {
                    m.reply(mess.wait)
 anjay = await getBuffer('https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png')
               anu = `📌 YouTube Premium APK Mod
🆚 Vv17.16.33 📥 118.24 MB ⭐ 5,0
➖➖➖➖➖➖➖➖➖➖➖➖➖
⚙️ Informações MOD:
◉ Premium desbloqueado
- Atualizado: 02/05/2022
➖➖➖➖➖➖➖➖➖➖➖➖➖
✅ Download Direto
➖➖➖➖➖➖➖➖➖➖➖➖➖
🏷️ Tags: #RiskyRobbot
©️Risky Modz | | @Riskyzin
`
                let btn = [{
                                urlButton: {
                                    displayText: '𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿',
                                    url: 'https://play.googleapis.com/download/by-token/download?token=AOTCm0TSahol4txFKQe5ZY-Rpv5jS2f1dHADkk_Dl-iXVrVsvYkmCd3Wy3tSn-toXgOeko-fvAg-9ow662vscS47zj8xoutZzkDN0aH1JV74CqTM5dZKzm5TbhgKUjnnW6HDEdtc1wO4Q1Th5zH0MIqOLzHfS6WP9jQapA1pKtvKD929RlCqICGb8mNagCDj5LEpFq4UwMkjJvhk7K24YWmNs6rJqN9V_NSARq-Ojr5Y5P8nKa5UvXwro7hyZKMT73F9gG3orWYOzMufjBFhhGUGuLShdMJz4OI6Jh7vQHTbNlzvEHdpHIsP37Ntjmhr3WAmtdDhhcB79Tgg8K2xQhUP1rDwiswI5mxGv_vkY0a4W5XYluwAkhysfmWXGRbbmLFLZpkuQgP_CCW0HPGZoKkJKxVuX81WTpKp2bY&amp;cpn=QMPYWo91UgALjdHO'
                                }
                            }
                            ]
                        client.send5ButImg(m.chat, anu, client.user.name, anjay, btn)
                        } else if (args[0] == 'capcut' || args[0] == 'CapCut' || args[0] == 'Capcut') {
                    m.reply(mess.wait)
 anjay = await getBuffer('http://assets.stickpng.com/images/610686ecf172fd0004f71b5f.png')
               anu = `📌 CapCut Pro APK Mod
🆚 Vv5.8.0 📥 88 MB ⭐ 5,0
➖➖➖➖➖➖➖➖➖➖➖➖➖
⚙️ Informações MOD:
◉ Premium desbloqueado
- Atualizado: 02/05/2022
➖➖➖➖➖➖➖➖➖➖➖➖➖
✅ Download Direto
➖➖➖➖➖➖➖➖➖➖➖➖➖
🏷️ Tags: #RiskyRobbot
©️Risky Modz | | @Riskyzin
`
                let btn = [{
                                urlButton: {
                                    displayText: '𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿',
                                    url: 'https://file.techsuspect.com/uploads/CapCut-5.6.0-Mod-Techgara.Com.apk'
                                }
                            }
                            ]
                        client.send5ButImg(m.chat, anu, client.user.name, anjay, btn)
                        } else if (args[0] == 'PowerDirector' || args[0] == 'Powerdirector'|| args[0] == 'powerdirector') {
                    m.reply(mess.wait)
 anjay = await getBuffer('https://techgara.com/uploads/2021/7/powerdirector-pro-icon-150.jpg')
               anu = `📌 PowerDirector Pro APK Mod
🆚 Vv10.1.0 📥 101 MB ⭐ 5,0
➖➖➖➖➖➖➖➖➖➖➖➖➖
⚙️ Informações MOD:
◉ Premium desbloqueado
- Atualizado: 02/05/2022
➖➖➖➖➖➖➖➖➖➖➖➖➖
✅ Download Direto
➖➖➖➖➖➖➖➖➖➖➖➖➖
🏷️ Tags: #RiskyRobbot
©️Risky Modz | | @Riskyzin
`
                let btn = [{
                                urlButton: {
                                    displayText: '𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿',
                                    url: 'https://file.techsuspect.com/uploads/PowerDirector-Pro-9.12.0-Mod-TechGara.Com.apk'
                                }
                            }
                            ]
                        client.send5ButImg(m.chat, anu, client.user.name, anjay, btn)
                 } else if (args[0] == 'subwaysurfers' || args[0] == 'Subwaysurfers') {
 m.reply(mess.wait)
 anjay = await getBuffer('https://static.wikia.nocookie.net/subwaysurf/images/a/af/DubaiIcon.png/revision/latest/scale-to-width-down/250?cb=20190608194105')
               anu = `📌Subway Surfers Mod [152 MB]
🆚 Vv2.32.0 📥 XX MB ⭐ 4,3
➖➖➖➖➖➖➖➖➖➖➖➖➖
⚙️ Informações MOD:
◉ Dinheiro Infinito
- Atualizado: 02/05/2022
➖➖➖➖➖➖➖➖➖➖➖➖➖
✅ Download Direto
➖➖➖➖➖➖➖➖➖➖➖➖➖
🏷️ Tags: #RiskyRobbot
©️Risky Modz | | @Riskyzin
`
                let btn = [{
                                urlButton: {
                                    displayText: '𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿',
                                    url: 'https://file.techsuspect.com/uploads/Subway-Surfers-2.32.0-Mod-TechGara.Com.apk'
                                }
                            }
                            ]
                        client.send5ButImg(m.chat, anu, client.user.name, anjay, btn)
 } else if (args[0] == 'Amongus' || args[0] == 'Among us') {
 m.reply(mess.wait)
 anjay = await getBuffer('https://i.pinimg.com/originals/83/ee/60/83ee6035704323a86b8ed5c3179734a6.png')
               anu = `📌Among Us APK Mod
🆚 Vv8.7.26.901 📥 XX MB ⭐ 4,2
➖➖➖➖➖➖➖➖➖➖➖➖➖
⚙️ Informações MOD:
◉ Tudo liberado
- Atualizado: 02/05/2022
➖➖➖➖➖➖➖➖➖➖➖➖➖
✅ Download Direto
➖➖➖➖➖➖➖➖➖➖➖➖➖
🏷️ Tags: #RiskyRobbot
©️Risky Modz | | @Riskyzin
`
                let btn = [{
                                urlButton: {
                                    displayText: '𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿',
                                    url: 'https://file.techsuspect.com/uploads/Among-Us-2022.2.24-Mod-TechGara.Com.apk'
                                }
                            }
                            ]
                        client.send5ButImg(m.chat, anu, client.user.name, anjay, btn)
 } else if (args[0] == 'Stumbleguys' || args[0] == 'stumbleguys') {
 m.reply(mess.wait)
 anjay = await getBuffer('https://img.utdstc.com/icon/8b5/dc5/8b5dc512959077a98c429c4964dc7eb34128d6b791826286f095147c97fe7e7b:200')
               anu = `📌Stumble Guys Mod
🆚 Vv0.37 📥 98 MB ⭐ 4,2
➖➖➖➖➖➖➖➖➖➖➖➖➖
⚙️ Informações MOD:
◉ Premium desbloqueado
- Atualizado: 02/05/2022
➖➖➖➖➖➖➖➖➖➖➖➖➖
✅ Download Direto
➖➖➖➖➖➖➖➖➖➖➖➖➖
🏷️ Tags: #RiskyRobbot
©️Risky Modz | | @Riskyzin
`
                let btn = [{
                                urlButton: {
                                    displayText: '𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿',
                                    url: 'https://file.techsuspect.com/uploads/Stumble-Guys-0.37-Mod-TechGara.Com.apk'
                                }
                            }
                            ]
                        client.send5ButImg(m.chat, anu, client.user.name, anjay, btn)
                        }else{
                  m.reply(`🔥 Aplicativos disponíveis:\n\n- Spotify\n\n- Powerdirector\n\n- Minecraft\n\n- Capcut\n\n- Youtube\n\n- Among us\n\n- Subwaysurfers\n\n- Stumbleguys\n\nExemplo: ${prefix + command} Spotify`)
                }
                                               
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }
                
                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    client.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
    console.log(err)
    client.sendMessage(m.chat, { react: { text: "❌", key: m.key }})
       // m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
