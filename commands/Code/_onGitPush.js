/*CMD
command: /onGitPush
help: 
need_reply: 
auto_retry_time: 
folder: Code
answer: 
keyboard: 
aliases: 
CMD*/

var msgid = Libs.BraveCommon.getMsgid();

Api.editMessageText({
  chat_id: chat.chatid,
  text: `<code>Code is importing from Github...</code>`,
  parse_mode: "html",
  message_id: msgid,
});

Bot.importGit({
  branch: "master",
  success: Bot.runCommand("/onGitImportCompleted"),
});
