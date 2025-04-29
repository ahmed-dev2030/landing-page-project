// بسيطة الآن، يمكنك لاحقاً تضيف أنيميشن أو فورم إرسال
console.log('Landing page ready to roll!');

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Message Sent!");
  });
  