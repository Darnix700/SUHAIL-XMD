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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "24160322612";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_37_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDg3LFxuICAgICAgICAzMixcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk0LFxuICAgICAgICA4MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc2LFxuICAgICAgICA0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAxOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDkzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcsXG4gICAgICAgIDM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNixcbiAgICAgICAgMjAwLFxuICAgICAgICA2NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA1MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICA4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkzLFxuICAgICAgICA0MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIyLFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzAsXG4gICAgICAgIDkyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDQyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDczLFxuICAgICAgICA4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwLFxuICAgICAgICAzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDksXG4gICAgICAgIDg1LFxuICAgICAgICA1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDM5LFxuICAgICAgICA5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDk4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAwLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWNWV0dlVSTHVxU1BoV0FUaUJXVlNjMW44SjBNY1A4TVBKVzVpYk1zWGQ4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwU2pYa2JobFJqZU1tdlRZMXMtdkR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQ3ODVmM2Y5LWQ2NDQtNDAxOS04YmY4LTFhYTliMzA1ZGU3NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NixcbiAgICAgIDEzNixcbiAgICAgIDE2NixcbiAgICAgIDIwMyxcbiAgICAgIDE4MixcbiAgICAgIDIwNSxcbiAgICAgIDU0LFxuICAgICAgMTEwLFxuICAgICAgMyxcbiAgICAgIDE0MCxcbiAgICAgIDEzNCxcbiAgICAgIDE5LFxuICAgICAgMjIyLFxuICAgICAgMTU1LFxuICAgICAgMTcwLFxuICAgICAgMTM5LFxuICAgICAgNzUsXG4gICAgICA0MixcbiAgICAgIDE1OSxcbiAgICAgIDIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzOSxcbiAgICAgIDIwMyxcbiAgICAgIDE2NyxcbiAgICAgIDQ2LFxuICAgICAgMTQzLFxuICAgICAgNjUsXG4gICAgICAxNzksXG4gICAgICAyMDQsXG4gICAgICAxMDYsXG4gICAgICAxODUsXG4gICAgICAyMzQsXG4gICAgICAzLFxuICAgICAgNzUsXG4gICAgICAxMDAsXG4gICAgICAxNTMsXG4gICAgICA4MixcbiAgICAgIDkzLFxuICAgICAgMTcwLFxuICAgICAgMTMwLFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUNaMVc0SkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI0MTYwMzIyNjEyOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQzNTU1NzQ5OTI1MTA4OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3k1OXNNR0VJK0NoYmdHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5UDdUUmJGL0NHL0VWRDRHK01MODgvZlY0V3VHdjFXV0RsS09maWtxa240PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkIxR2xlZ1ZreXNuSTQvck1WU2tucXpyOW9EMHliYlFzSElVWTJnai9kYW1XUzUvUXFyZWJtMGpXb3lkVVV6aGhWQzRiZWQ2bnk4THRrQjdZQjNBL0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdaZExBNXJ6bWJpNFgrSGJPZFY1LzFzOWh5UGZnT2hKSkJnQ2dFRWY0akF4S3NFL3lTa2FkeEpTeXhiR2NtVXRxcXlOS1h5akJNR3Jpb0NLODNiUWdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI0MTYwMzIyNjEyOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgxMzU0NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMN0lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw3SS5qc29uIjogIntcImtleURhdGFcIjpcIkJXN1VxVGQvVDZjcG1TMWt2d1VCZWc0Tk1xbExmY3FBVmtUVS96NWFYUVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc1MzA2MjYzNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI4MDcyNjU1NDAwXCJ9Igp9"  // PUT your SESSION_ID 


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
