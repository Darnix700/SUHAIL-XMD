const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "241060322612";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_11_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDQyLFxuICAgICAgICA3NyxcbiAgICAgICAgODYsXG4gICAgICAgIDM4LFxuICAgICAgICA5MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgNzMsXG4gICAgICAgIDc5LFxuICAgICAgICA0MixcbiAgICAgICAgMjI1LFxuICAgICAgICA4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDU0LFxuICAgICAgICA4MixcbiAgICAgICAgMTk3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0LFxuICAgICAgICA0MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY1LFxuICAgICAgICAzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDYxLFxuICAgICAgICA4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU3LFxuICAgICAgICA1NixcbiAgICAgICAgMzEsXG4gICAgICAgIDkzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExLFxuICAgICAgICA1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzMsXG4gICAgICAgIDExLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMixcbiAgICAgICAgNzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInRCUFppQUZYcDNkOHpaam1sNFplN3MxZUhFcDhZVGJzdWFOS0pmdGtZaFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjQxNjAzMjI2MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ2MTg0NDEzQTBCNUNBNDExQkM3MDlCOURGQUE2OEU2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODA3MjY1OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI0MTYwMzIyNjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxN0UxOTRFN0M0MjNEQjY2OEJDMUQ4NjQ4NDI1OTFDN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjgwNzI2NThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiX2VDbk8wdTJTaU9vNUdqSTd5emR6QVwiLFxuICBcInBob25lSWRcIjogXCIwMDdiM2JmZS00MmFjLTRhMGEtODQwNS1hOTA3ZTFjYjc3MDdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICA3NyxcbiAgICAgIDEzNixcbiAgICAgIDY0LFxuICAgICAgMjEyLFxuICAgICAgNixcbiAgICAgIDIwOCxcbiAgICAgIDkyLFxuICAgICAgMTMzLFxuICAgICAgNDgsXG4gICAgICA2MyxcbiAgICAgIDE3MCxcbiAgICAgIDI0MCxcbiAgICAgIDE2MyxcbiAgICAgIDE4OCxcbiAgICAgIDUxLFxuICAgICAgMTczLFxuICAgICAgMTk3LFxuICAgICAgMTQzLFxuICAgICAgNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICAxODQsXG4gICAgICA3MixcbiAgICAgIDIyNixcbiAgICAgIDIwMSxcbiAgICAgIDI0OSxcbiAgICAgIDI0NSxcbiAgICAgIDIxLFxuICAgICAgMTY4LFxuICAgICAgMTUsXG4gICAgICAxODIsXG4gICAgICAxMixcbiAgICAgIDE1MyxcbiAgICAgIDcsXG4gICAgICAyMTgsXG4gICAgICA4OSxcbiAgICAgIDIwOCxcbiAgICAgIDEzMSxcbiAgICAgIDk2LFxuICAgICAgOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWDRCNlIyVkdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI0MTYwMzIyNjEyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQzNTU1NzQ5OTI1MTA4OjFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiVG9ueSBTdGFya1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ095NTlzTUdFTW1YZ2JnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieVA3VFJiRi9DRy9FVkQ0RytNTDg4L2ZWNFd1R3YxV1dEbEtPZmlrcWtuND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBMU1uclNkTmdhZE9lS1d5Wm55c29lN1FOTkdYZGJCclVWVHBLMHpVb0QrUUxVcUd3eXZJY2FkTTR2cGFHMllzWHhnU3FEWEQvdTNtMHkvMk1xZGpEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGM1hQTGZ1a0V1aEZzUHMvYWxtbXBJWkRwOXU0WXNKTTBmeVVMNkhYRkRrTmcrcHk0aHowQjRCOEw5Z0cxeFdqS2VCUVhRWExHVEpNSmVibFlobU5nUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNDE2MDMyMjYxMjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MDcyNjUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDdJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMN0kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCVzdVcVRkL1Q2Y3BtUzFrdndVQmVnNE5NcWxMZmNxQVZrVFUvejVhWFFRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NTMwNjI2MzYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyODA3MjY1NTQwMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
