
const Navbar=document.querySelector('.Navbar')

window.addEventListener('scroll',function(){
    var scroll =this.window.scrollY;
    if(scroll>100){
        Navbar.classList.add('sticky');
    }
        else{
            Navbar.classList.remove('sticky');

        }
    
})
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // remove this line if you want it to trigger every time on scroll
      }
    });
  }, {
    threshold: 0.3 // adjust based on when you want animation to trigger
  });

  const boxes = document.querySelectorAll('.service-box');
  boxes.forEach(box => observer.observe(box));
});

function openForm() {
  document.getElementById("formPopup").classList.add("show");
  document.getElementById("mainContent").classList.add("blur");
}

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.form-pop-up').classList.remove('show');
    document.getElementById('mainContent')?.classList.remove('blur');
  });


document.querySelector('.submit-btn').addEventListener('click', function () {
    document.querySelector('.form-pop-up').classList.remove('show');
    document.getElementById('mainContent')?.classList.remove('blur');
  });

// document.querySelector(".view-details").addEventListener("click", function () {
//   window.open("rishikesh.html", "_blank");
// });

function openRishikeshDetails() {
  window.open('rishikesh.html', '_blank'); // opens in new tab
}
function openLadakhDetails() {
  window.open('ladakh.html', '_blank'); // opens in new tab
}
function openSpitiDetails() {
  window.open('spiti.html', '_blank'); // opens in new tab
}
function openZiroDetails() {
  window.open('ziro.html', '_blank'); // opens in new tab
}
function openbooknow() {
  window.open('booknow.html', '_blank'); // opens in new tab
}

function scrollToServices() {
  document.getElementById("services").scrollIntoView({
    behavior: "smooth"
  });
}
function scrollToTestimonials() {
  document.getElementById("testimonials").scrollIntoView({
    behavior: "smooth"
  });
}
function scrollToTestimonials() {
  document.getElementById("destinations").scrollIntoView({
    behavior: "smooth"
  });
}
function scrollToTestimonials() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}

function scrollToDestinations() {
  document.getElementById("destinations").scrollIntoView({
    behavior: "smooth"
  });
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





