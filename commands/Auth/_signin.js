/*CMD
command: /signin
help: 
need_reply: 
auto_retry_time: 
folder: Auth
answer: 
keyboard: 
aliases: 
CMD*/

let msgid = User.getProperty("msgid");
var signInTxt = Bot.getProperty("signInTxt", "No Text At The Moment");
