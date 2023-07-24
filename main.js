const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");
const BOT_IMG = "bot.png";
const PERSON_IMG = "user.png";
const BOT_NAME = "BOT";
const PERSON_NAME = "User";
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["bye", "good bye", "goodbye", "see you later"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"],
  ["i am interested"]
]
const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  ["Bye", "Goodbye", "See you later"],
  ["Please say something "],
  ["Haha!", "Good one!"],
  ["Thank you, please let me know what questions you may have, are you looking to plan an event?"]
 
 ];
const alternative = [
  "Go on...",
  "Try again",
  "I'm listening...",
  "I don't understand."
]
const robot = ["How do you do, fellow human", "I am not a bot"];
msgerForm.addEventListener("submit", event => {
  event.preventDefault();
  const msgText = msgerInput.value;
  if (!msgText) return;
  msgerInput.value = "";
  addChat(PERSON_NAME, PERSON_IMG, "right", msgText);
  output(msgText);
});
function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")  
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");
  if (compare(prompts, replies, text)) {
    product = compare(prompts, replies, text);
  } else if (text.match(/thank/gi)) {
    product = "You're welcome!"
  } else if (text.match(/(robot|bot|robo)/gi)) {
    product = robot[Math.floor(Math.random() * robot.length)];
  } else if(text.match(/florist/gi)){
    product="Thank you for reaching out, one of our team members will be in touch shortly, what is the best email address?"
  } else if(text.match(/located/gi)){
    product="greatEvent is a unique event booking platform that has direct access to event calendar of all the hotels, venues and service providers. We have over 8,000 hotels and venues, 5,000 photographers, 3,000 florists and 3,000 caterers listed on our platform.  Are you looking to plan an upcoming event? We would love to assist, please contact sales@greatevent.com for additional details."
  } else if(text.match(/cost/gi)){
    product="Thank you for reaching out, we have a variety of wedding services do you have a set date? Would you mind registering at www.greatevent.com and one of our team members will reach out to you."
  }  else if(text.match(/business/gi)){
    product="greatEvent is an online platform allowing consumers like you to search for a variety of services based on your location which will simplify the entire booking process for you. There is no cost to utilize our services. May we reach out to you with additional questions? "
  } else if(text.match(/host/gi)){
    product="Thank you for inquiring, greatEvent has many venues and other services that will help simplify the entire booking process. Are you available for one of our team members to contact you to discuss the details?"
  } else if(text.match(/sign/gi)){
    product="Thank you, signing up is a very simple process, please go to www.greatevent.com click register and follow the few steps."
  } else if(text.match(/(host|party)/gi)){
    product="Thank you, greatEvent makes the process simple. Please go to  www.greatevent.com and follow the few prompts. You can then access the platform to search for a variety of service providers. "
  } else if(text.match(/hours/gi)){
    product="You can access the platform 24hrs, please feel free to go to www.greatevent.com click register and this will allow you to access the platform."
  } else if(text.match(/assistance/gi)){
    product="We would love to assist! Can you please register at www.greatevent.com and this will allow me to access additional details needed to help simplify your event?"
  } else if(text.match(/book/gi)){
    product="Absolutely! We can assist with many types of groups; do you have a date? You can register by going to www.greatevent.com and this will allow you to search for a variety of venues based on your needs."
  } else if(text.match(/service/gi)){
    product="greatEvent simplifies your entire booking process when looking for a hotels, venues, florist, photographers, and many other service providers. May we contact you with details? "
  } else if(text.match(/cost/gi)){
    product="Absolutely, no cost to utilize our platform we are here to help make the booking process easier.  Please register by going to www.greatevent.com click register and you can access the platform."
  } else if(text.match(/cities/gi)){
    product="We cover all locations in the US, is there a certain state you are looking to have your event? You can access the platform by going to www.greatevent.com and click register. This will allow you to search for a variety of services."
  }

   else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }
  const delay = input.split(" ").length * 100;
  setTimeout(() => {
    addChat(BOT_NAME, BOT_IMG, "left", product);
  }, delay);
}
function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}
function addChat(name, img, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>
      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;
  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}
function get(selector, root = document) {
  return root.querySelector(selector);
}
function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();
  return `${h.slice(-2)}:${m.slice(-2)}`;
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function openimp() {
  document.getElementById("imp").style.width = "100%";
}

function closeimp() {
  document.getElementById("imp").style.width = "0%";
}