/*CMD
command: /onGitImportCompleted
help: 
need_reply: 
auto_retry_time: 
folder: Code
answer: 
keyboard: 
aliases: 
CMD*/

var msgid = Libs.BraveCommon.getMsgid();
var text = `<code>Imported Successfully!!</code>`;
var button = [
  [{ text: "🔙 Return To Admin Panel", callback_data: "/adminpanel r" }],
];

Api.editMessageText({
  chat_id: chat.chatid,
  text: text,
  parse_mode: "html",
  message_id: msgid,
  reply_markup: { inline_keyboard: button },
});
