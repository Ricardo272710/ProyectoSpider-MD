let handler = async (m, { conn, command, usedPrefix }) => {
let ff = https://telegra.ph/file/0ea56fa1fba7bdbb619ae.jpg
let donarstxt = `
Felicidades tienes q donar sala
` //Aquí arriba cambiar el texto sin borrar las comillas
await conn.sendFile(m.chat, 'https://telegra.ph/file/0ea56fa1fba7bdbb619ae.jpg', 'fantasy.jpg', donarstxt.trim(),
//En esta imagen vas a poner el url de la imagen grande
 fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: Free Fire,
body: Donar Sala,
mediaType: 1,
sourceUrl: 'https://whatsapp.com/channel/0029Va8GeVFAO7REOj3qnW37',
thumbnailUrl: 'https://telegra.ph/file/0ea56fa1fba7bdbb619ae.jpg'
//Aquí arriba vas a poner el url de la imagen que irá junto a tu link de tu red social.
}}
}, { mentions: m.sender })

}
handler.command = /^(pruebakatas|donarsala)$/i
export default handler
