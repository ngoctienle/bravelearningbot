/*CMD
command: /dashboard
help: 
need_reply: 
auto_retry_time: 
folder: 
answer: 
keyboard: 
aliases: 
CMD*/

var msgid = Libs.BraveCommon.getMsgid();
var dashboardTxt = Bot.getProperty("dashboardTxt", "No Setup At The Moment");
var dashboardBtn = [
  [
    { text: "Profile", callback_data: "/profile" },
    { text: "Deposit", callback_data: "/deposit" },
  ],
  [
    { text: "Package", callback_data: "/package" },
    { text: "Investment", callback_data: "/investment" },
  ],
  [{ text: "Admin Panel", callback_data: "/adminpanel" }],
];

Api.editMessageText({
  chat_id: chat.chatid,
  text: dashboardTxt,
  message_id: msgid,
  parse_mode: "html",
  reply_markup: {
    inline_keyboard: dashboardBtn,
  },
});
