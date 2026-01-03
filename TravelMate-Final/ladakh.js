document.addEventListener("DOMContentLoaded", () => {

  /* ========= TIMELINE DOTS ========= */
  const dots = document.querySelectorAll('.timeline-dot');

  window.addEventListener('scroll', () => {
    dots.forEach(dot => {
      const rect = dot.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        dot.classList.add('active');
      }
    });
  });

  /* ========= TIMELINE LINE ========= */
  const line = document.querySelector('.timeline-line');
  const items = document.querySelectorAll('.timeline-item');
  const timeline = document.querySelector('.timeline');

  if (line && timeline) {
    window.addEventListener('scroll', () => {
      const timelineRect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progress = (windowHeight - timelineRect.top) / timelineRect.height;
      progress = Math.max(0, Math.min(1, progress));

      line.style.height = (progress * timelineRect.height) + "px";

      items.forEach(item => {
        const itemRect = item.getBoundingClientRect();
        if (itemRect.top < windowHeight - 100) {
          item.classList.add('active');
        }
      });
    });
  }

  /* ========= INTERSECTION OBSERVER ========= */
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
document.body.classList.add("popup-open");
document.body.classList.remove("popup-open");

  document.querySelectorAll('.timeline-content')
    .forEach(box => observer.observe(box));

  /* ========= SIGN IN POPUP ========= */
  const formPopup = document.getElementById("formPopup");
  const mainContent = document.getElementById("mainContent");
  const closeBtn = document.getElementById("closeBtn");

  window.openForm = function () {
    if (!formPopup || !mainContent) return;
    formPopup.classList.add("show");
    mainContent.classList.add("blur");
  };

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      formPopup.classList.remove("show");
      mainContent.classList.remove("blur");
    });
  }

});

/* ========= BOOK NOW ========= */
function openbooknow() {
  window.location.href = "booknow.html";
}


const chatbotBtn = document.getElementById("chatbot-btn");
const chatbot = document.getElementById("chatbot");
const closeChat = document.getElementById("closeChat");
const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");

chatbotBtn.onclick = () => chatbot.style.display = "flex";
closeChat.onclick = () => chatbot.style.display = "none";

function sendMessage() {
  const msg = userInput.value.trim();
  if (!msg) return;

  addMessage(msg, "user");
  userInput.value = "";

  setTimeout(() => {
    botReply(msg);
  }, 600);
}

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.className = sender;
  div.innerText = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function botReply(msg) {
  let reply = "Sorry, I didn't understand. Can you rephrase?";

  msg = msg.toLowerCase();

  if (msg.includes("ladakh")) {
    reply = "Ladakh tour costs ₹13,000/person for 6 days. Want the itinerary?";
  }
  else if (msg.includes("price") || msg.includes("cost")) {
    reply = "Our tours start from ₹9,999. Prices vary by destination.";
  }
  else if (msg.includes("book")) {
    reply = "You can book by clicking the BOOK TOUR button on the page.";
  }
  else if (msg.includes("contact")) {
    reply = "You can reach us via the contact form or sign in.";
  }
  else if (msg.includes("hello") || msg.includes("hi")) {
    reply = "Hello 😊 How can I help you plan your trip?";
  }

  addMessage(reply, "bot");
}
