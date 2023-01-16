/*CMD
command: /adminpanel
help: 
need_reply: 
auto_retry_time: 
folder: Admin
answer: 
keyboard: 
aliases: 
CMD*/

var msgid = Libs.BraveCommon.getMsgid();
var adminTxt = "Hello admin!";
var adminBtn = [
  [
    { text: " ⚙ Main Settings", callback_data: "/adminmainsettings01" },
    { text: "👤 User Settings", callback_data: "/adminusersettings01" },
  ],
  [
    { text: "📡 Mass Message", callback_data: "/adminmassmessage01" },
    { text: "📋 User History", callback_data: "/adminuserhistory01" },
  ],
  [
    { text: "📲 Push Code", callback_data: "/onGitPush" },
    { text: "🔶 Text Settings", callback_data: "/configText" },
  ],
  [
    { text: "🔘 Webhooks", callback_data: "/setupGit" },
    { text: "🔙 Back ", callback_data: "/start r" },
  ],
];

if (params) {
  if (params == "r") {
    Api.editMessageText({
      chat_id: chat.chatid,
      text: adminTxt,
      message_id: msgid,
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: adminBtn,
      },
    });
  }
} else {
  Api.editMessageText({
    chat_id: chat.chatid,
    text: adminTxt,
    message_id: msgid,
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: adminBtn,
    },
  });
}
