// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animate nav active link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const secTop = section.offsetTop - 80;
    if (pageYOffset >= secTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

// Mobile nav menu
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.navbar ul');
mobileMenu && mobileMenu.addEventListener('click', () => {
  navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
  navList.style.flexDirection = 'column';
  navList.style.background = '#111';
  navList.style.position = 'absolute';
  navList.style.top = '54px';
  navList.style.right = '0';
  navList.style.width = '60vw';
  navList.style.borderRadius = '0 0 0 12px';
});

// Animate icon press/clicks
document.querySelectorAll('.icon').forEach(icon => {
  icon.addEventListener('mousedown', () => {
    icon.style.transform = 'scale(0.92)';
  });
  icon.addEventListener('mouseup', () => {
    icon.style.transform = '';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = '';
  });
});

// Section fade-in on scroll
const fadeEls = document.querySelectorAll('section, .band-card, .video-item, .press-quote, .gallery-grid img');
const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.9;
  fadeEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.style.opacity = 1;
    else el.style.opacity = 0.25;
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
