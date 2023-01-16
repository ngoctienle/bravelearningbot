/*CMD
command: /start
help: 
need_reply: 
auto_retry_time: 
folder: 
answer: 
keyboard: 
aliases: 
CMD*/

var welcomeTxt = Bot.getProperty("welcomeTxt", "No Text At The Moment");
var welcomeBtn = [
  [
    {
      text: "Dashboard",
      callback_data: "/dashboard",
    },
    {
      text: "Introduction",
      callback_data: "/intro",
    },
  ],
  [
    {
      text: "Support",
      callback_data: "/contact",
    },
  ],
];

if (params && params == "r") {
  Api.editMessageText({
    chat_id: chat.chatid,
    text: welcomeTxt,
    message_id: msgid,
    parse_mode: "html",
    reply_markup: {
      inline_keyboard: welcomeBtn,
    },
  });
}

let msgid = User.getProperty("msgid");
if (!msgid) {
  Libs.BraveCommon.CallBackDeleteMsg();
}

Api.sendMessage({
  chat_id: chat.chat_id,
  text: welcomeTxt,
  parse_mode: "html",
  reply_markup: {
    inline_keyboard: welcomeBtn,
  },
  on_result: "/setAttr",
});
