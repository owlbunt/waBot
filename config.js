const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "botsatwork892@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://casinobot:123johniphone@cluster0.nfztvsi.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/WHIZBOT1/WHIZBOTMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VacWsSl3LdQOmWZrBj0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/95ce6ad6559693eba92d2.jpg";
global.devs = "18763351213";
global.sudo = process.env.SUDO || "18763351213";
global.owner = process.env.OWNER_NUMBER || "18763351213";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "18763351214";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0xRMFBKUmFQcC9tRmtMalE0Y1I1WllpeC9RVitJbk1GZHJONTdwUDQzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDk2Q0J4VmNVMFllWXgrQWdxSU80TENrZU5Oc2JNeEtXanFiaHZLL1B4MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJS29DK0prbXNVd0lRaUN5RGxhTTF2a041MzhZUjVMRnFYYnhpVC9uTmtBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwem1HcnhKeElraGx1c2FXb3ZNSURGbDRNZHBHQnFSUjFSaW1HTVdxWW53PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitNYVNRRFZITUNjdEltY3BuZXpuWi9tWWUvTElXZUlhWEhiREp2K2QwRnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVoWGxWaFJIL2lYaG5HK05HK0hNSlZHamV4amdNQnRwN3oydGZ2Z1J6WEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0d3cWtVL0JmQjZNQW12NkhiOWU1MzRtWDVvV01GMTVRWHRVSVozaEkxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkpTZDJMWkRxckxYTUdZUEtCZ3Z3TW81MHh0Zlk0bmVUK213bHJUMWRGST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZJT2xGNVkxVnExTERIaDIxek9kTzlQOE9FNUc3aDdyMW15S2ZrcWp3VmhUSHNuQXVwY2g4cmptbHgxNm04bXgwdzQxWHpvaVhtTGNPUXR0ejlGUGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE0LCJhZHZTZWNyZXRLZXkiOiJPU2Y0RnZ3R1FrU3prbWFNQUNaUmJlMVdKSSt6S3JweDI4T0liV004aUNFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxOTM5NTE5MzE4NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQUJGODg4MzUzNUQ4QzlCRDdERCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE4NTU0MjU5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTkzOTUxOTMxODZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0FBMEE5QjMxNEQ1RUNEQUNBRjUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODU1NDI2MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE5Mzk1MTkzMTg2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNBQUQxOEZCRjIwN0QwRDQyOTU5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MTg1NTQyNjF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZXZ3dYTnl2UTFlY1kycWpyNm56b1EiLCJwaG9uZUlkIjoiOTBmOWI3ZTEtNDIxZC00ODc0LWI4NTAtMWJiYTc4MTdlNDJkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFCQ1MrT1k2aVlkcmdlaVA4VkRFWmdUWjJ3bz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRk9zR3JyWkdueG9WTW5QUUVBV01zN3hRbGk4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHEvbTg4TUVKQ2R2TE1HR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoicm5mVVpZdEhOU0piR2NLUFpYZ2xSUXZUZ2I1TWtiZmhvUTdYc0cxOFFtbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibEE2ckNzdDFFVmJyaDZxQWtRcVp1enJMaXhHWGkvZ1ByZzJDbmxEWDVxVXAvRTVVVVZlSVNudU41Ym9kY0F4QUVHQjh2K3hTOEV0ZTBqaGxHQlhaaGc9PSIsImRldmljZVNpZ25hdHVyZSI6ImlFZDNlSGlWT1BFM1lmT05YdFExZlZGM0hnMy92VVJtSW5EYWxVWXUxbTVQQWhnVGZmL05yeXFVNm5FNEgzbTVtbE40MDBLVmM4djVCdTJURlRweGlBPT0ifSwibWUiOnsiaWQiOiI5MTkzOTUxOTMxODY6NTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiUkFIVUwifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5Mzk1MTkzMTg2OjU1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmE1MzFHV0xSelVpV3huQ2oyVjRKVVVMMDRHK1RKRzM0YUVPMTdCdGZFSnEifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxODU1NDI1OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJSFoifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©️ 𝛲𝛩𝑊𝛯𝑅𝐷 𝐵𝑌 𝑊𝛨𝛪𝛧𝐵𝛩𝑇-𝛭𝐷",
  author: process.env.PACK_AUTHER || "WHIZBOT-ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "WHIZBOT-MD",
  ownername: process.env.OWNER_NAME || "JAY BOTS",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "EyqbCCWYTc8b49cmWM0KT3BlbkFJ0NRSC7K1BiTJo3ikuriW",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "JAY").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
