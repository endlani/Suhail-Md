const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_06_04_10_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMEhvdVBkQjRRNGQ2K0Q1YTNDQ2hKbDBFd0IwTXh5bk0zVHhtejdMc3UxST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlhtOEh2dG1GSXpyS3dUVUlnenFBZU1UQzNscFlQc3gyRk5tbW5zRGQzRGM9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQUxQRE5GNnpNM21lVG4va0pORklRZ3BKK3NwaEUrcnRxNFdQd3JvTzhHQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlcydThQb254OHQ1TWxLRnRQVzVvekU0NERWOTdUMEVPTTdsU0tsMXczVk09XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiK0FiTml1Yk5lV2RXV3A4WjJWNHhYM0FkbHMwbFJQZ21FRnNSMk8yeG4yQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkxTcFBRaGxXbDZTei80SXJLRU8zVW9DeVdFaE1NQ1d1cHJSRkhwekY5eE09XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJtS3pNaVlhRm5XYmxyTklkQ2w4YVYvSXQwTTJxanV6d3NnNXk3TEpTcFcwPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaGVXRHZKNWhPRDBjMzU5S3NSakpoWVA3VkgyZkcweWFDTXJFRmdGVTVqQT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJEL0UveUc5bmhVdEJ3RnU4cStDUFVOc3g2OXJWb3NnTzRLZ2ZISFcxdFgxVU1ZOFdlUTJjMGhreUVBWklqaWYxVlJkaE9FYzlXWTN2enNkbUJXd25nUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTcsXCJhZHZTZWNyZXRLZXlcIjpcIlZwWWF4SnlMTVp4b3l4cDlCR3hVb0VPaGJabU1TVTFpTlFxV2FDc05MYTA9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyNjM3MTYwOTE1MDlAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiM0VEQ0ZDREYwN0FFNjlCNzgyMDkyMjU0MTRGQ0VFOUNcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMjc0NzIwM30se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyNjM3MTYwOTE1MDlAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiOTI2QzY0NDRGMEUyQzE1MTNCODhFMDZFNDBFQzNCQ0VcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMjc0NzIwNH1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MSxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIlpUQ2Qta01DUjdHdUNQcmxudVJPWndcIixcInBob25lSWRcIjpcImZhZDNjYzRiLTRjNWUtNDZiMy1hZjBiLWM4ZjY4ZGMxZjc0NlwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiLzRVVkp0TG5lUjhMaVhQL3hFWFRuSUJibldnPVwifSxcInJlZ2lzdGVyZWRcIjp0cnVlLFwiYmFja3VwVG9rZW5cIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInpuZU9FVGttWFRZekgxdWlsN09Od1NKdzRuZz1cIn0sXCJyZWdpc3RyYXRpb25cIjp7fSxcInBhaXJpbmdDb2RlXCI6XCJZNkw0OFNKN1wiLFwibWVcIjp7XCJpZFwiOlwiMjYzNzE2MDkxNTA5OjQxQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjIwMTc5MDgzNDQwMTM0Njo0MUBsaWRcIixcIm5hbWVcIjpcIuKcsCDhtI3KgCBz4bSEyarhtIfJtOG0m8mqc+G0myAg4pywXCJ9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNLaTAwSU1HRUxubDJiQUdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiY0RlSHNFS2tRN0VRTFNNUWw5dmJ6TkdzUldwcVQwTDVtOXRzcmt5QkR4ST1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIkpKQ1NxdE1RSVdGdXpjVE1oQk45OFY4ZlUzTzRqc3ptcXJkMW1XUEtCd0dNbEdBb2Qwb0xZc1lwMEZrREpaK0Z4eTVqeTR2NjFWamtsUG5ESis3RkN3PT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwiWUg2RmF2RjlKdmVyVFdJNmZjMFBIQ2tHQUJhUzJJa2srOUhQQS90ZGVhVmxYKzVzem1Kdll0bzZmZnVLOGVHZUxVU0llSklXamVDTHpJRkVBTFhRaVE9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjI2MzcxNjA5MTUwOTo0MUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJYQTNoN0JDcEVPeEVDMGpFSmZiMjh6UnJFVnFhazlDK1p2YmJLNU1nUThTXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMjc0NzE5NyxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFJYVdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJYVcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpNVcwSnI4bFYvaGx5eDdyMnFvdG05cmZCK2pFOGVkejFKbWo4WGZOOHlrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MTgyMjE2MDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjc0NzIwMDM0MlwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "*Mr Scientist Technogy Ai*" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Tsitneisc.m_r",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Tsitneisc.m_r",
  ownername:process.env.OWNER_NAME|| "It' Ehlani",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "puplic",
  LANG: ( process.env.THEME ||  "GOKU"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
