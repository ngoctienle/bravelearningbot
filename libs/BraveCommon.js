function CallBackDeleteMsg() {
  Api.deleteMessage({
    chat_id: chat.chatid,
    message_id: request.message_id,
  });
}

function getMsgid() {
  let msgid = User.getProperty("msgid");
  if (!msgid) {
    return request.message.message_id;
  }
  return msgid;
}

publish({
  CallBackDeleteMsg: CallBackDeleteMsg,
  getMsgid: getMsgid,
});
