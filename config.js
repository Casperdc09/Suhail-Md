const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347057177591";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_04_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAzMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY1LFxuICAgICAgICA5MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzLFxuICAgICAgICA1LFxuICAgICAgICAzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNixcbiAgICAgICAgNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAzLFxuICAgICAgICA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MixcbiAgICAgICAgOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDc3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDc2LFxuICAgICAgICA1MixcbiAgICAgICAgMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgNzcsXG4gICAgICAgIDI5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhxaW54ajJLcC9WWktpMHNGQ3BlbXpvay9xZmtadWdlT0I2bzQ3VlM4RE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi1NTHNKUnRaUjNHQVMtbGkxSEdCQ3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDNmMzU4NmEtYTQxOS00ZTFiLThlZmUtMDkwMjllYjQ1ZTQxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMyxcbiAgICAgIDE2LFxuICAgICAgMTk3LFxuICAgICAgMTA4LFxuICAgICAgODAsXG4gICAgICA0MixcbiAgICAgIDIzOCxcbiAgICAgIDIxMyxcbiAgICAgIDIwMyxcbiAgICAgIDEyOSxcbiAgICAgIDg2LFxuICAgICAgMjE2LFxuICAgICAgMTU5LFxuICAgICAgODIsXG4gICAgICAyNSxcbiAgICAgIDIxOCxcbiAgICAgIDEwNyxcbiAgICAgIDM4LFxuICAgICAgMTU3LFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDIzNCxcbiAgICAgIDE5MSxcbiAgICAgIDE0NCxcbiAgICAgIDIzMixcbiAgICAgIDIzMyxcbiAgICAgIDE0OSxcbiAgICAgIDIzOSxcbiAgICAgIDIxMixcbiAgICAgIDEzMSxcbiAgICAgIDk5LFxuICAgICAgMzYsXG4gICAgICAyMzIsXG4gICAgICAzOCxcbiAgICAgIDE4NyxcbiAgICAgIDU1LFxuICAgICAgMTE2LFxuICAgICAgOTksXG4gICAgICAxOTIsXG4gICAgICAxODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkJZTERaRUhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNTcxNzc1OTE6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ0MTk5MzkxNzU2NDU3OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTY1MjRnQkVNUHgyTElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHU3BiaEdJSEczYzNuNXF2b080eXBuRUtkK2l4ODcwSnBhRm9UQ01LdUZJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpTa1ZjdWRLZDlwem1OQWdIMlN1ZFJrOVh2bjIxQzJTdGRIVHJMM29KNWNqQmNpRjRxU1VlSGEyVENIc1J6dkRJQzQ4Wm5ody9qbW1qVU1nZXFhdkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFsYzBBQ1hnKzdyemM5NjU2azUvUXZqNGlEcVN0di90eHhWUllnQjdibVVwN1V5dWN0N1AxOGlrYW5IelUzVm5jd3IvekYyajRtazhieWRJcmZJSkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNTcxNzc1OTE6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2OTI2NjYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSzRPXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLNE8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4WnI1VlkwOW4xSWhScG1MT29JNEg1ak4vQ0VKYlBJY0o2OUNlU1Y4VDNZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI4NjcxMDk4OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjkwNTI3NjUyM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
