/*CMD
command: /setAttr
help: 
need_reply: 
auto_retry_time: 
folder: Global
answer: 
keyboard: 
aliases: 
CMD*/

let msgid = options.result.message_id;

User.setProperty("msgid", msgid, "integer");
