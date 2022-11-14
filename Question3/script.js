const senderInput = document.getElementById("sender");
const messageInput = document.getElementById("message");
const sendButton = document.querySelector(".btn");

class Message {
  constructor(sender, message) {
    this.sender = sender;
    this.message = message;
    this.time = gettime();
  }
  toHtml() {
    return `<p>${this.time} ${this.sender}: ${this.message}</p></b>`;
  }
}

class Messenger {
  constructor() {
    this.history = [];
    this.historyelement = document.querySelector(`.history`);
  }

  show_history() {
    this.history.forEach((message) => {
      console.log(message.toString());
    });
  }

  send(sender, text) {
    const message = new Message(sender, text);
    this.history.push(message);
    const p = document.createElement("p");
    p.innerHTML = message.toHtml();
    this.historyelement.appendChild(p);
  }
}

function gettime() {
  let now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}

let messenger = new Messenger("messenger");

sendButton.addEventListener("click", () => {
  const sender = senderInp.value;
  const message = messageInp.value;
  if (!sender || !message) {
    console.error("sender or message is empty");
    return;
  }

  messenger.send(sender, message);
  senderInp.value = "";
  messageInp.value = "";
});