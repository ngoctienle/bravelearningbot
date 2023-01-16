/*CMD
command: /setupGit
help: 
need_reply: 
auto_retry_time: 
folder: Code
answer: 
keyboard: 
aliases: 
CMD*/

var msgid = Libs.BraveCommon.getMsgid();

const _URL = Libs.Webhooks.getUrlFor({
  command: "/onGitPush",
  user_id: user.id,
});

Api.editMessageText({
  chat_id: chat.chat_id,
  text: "Github webhook: " + "\n<pre>" + _URL + "</pre>",
  parse_mode: "html",
  message_id: msgid,
  reply_markup: {
    inline_keyboard: [[{ text: "🔙 Back ", callback_data: "/adminpanel r" }]],
  },
});
