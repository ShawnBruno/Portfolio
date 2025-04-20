// 1. Theme Toggle (Dark/Light)
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  themeToggle.textContent = document.body.classList.contains('light-mode')
    ? 'Switch to Dark Mode'
    : 'Switch to Light Mode';
});

// 2. Show Current Date & Time in Footer
function updateDateTime() {
  const now = new Date();
  const datetimeElement = document.getElementById('datetime');
  datetimeElement.textContent = now.toLocaleString();
}
setInterval(updateDateTime, 1000); // update every second
updateDateTime(); // initial call

// 3. Typing Animation for Name
const nameElement = document.getElementById('typing-name');
const fullText = nameElement.textContent;
nameElement.textContent = "";
let index = 0;
function typeWriter() {
  if (index < fullText.length) {
    nameElement.textContent += fullText.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // typing speed
  }
}
typeWriter();

// 4. Contact Form Validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent actual form submission
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields.");
  } else if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email.");
  } else {
    alert("Message sent successfully! (Please wait for me to contact you 20:57 13-04-2025)");
    form.reset();
  }
});
