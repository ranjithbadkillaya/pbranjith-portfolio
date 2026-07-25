// ============ Footer year ============
document.getElementById('year').textContent = new Date().getFullYear();

// ============ Typewriter effect ============
const roles = [
  'the people who use them.',
  'speed and clarity.',
  'accessibility first.',
  'React & modern JS.',
  'real users, not demos.'
];

const typewriterEl = document.getElementById('typewriter');
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop(){
  const current = roles[roleIndex];

  if (!deleting){
    charIndex++;
    typewriterEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length){
      deleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    charIndex--;
    typewriterEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0){
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  const speed = deleting ? 35 : 55;
  setTimeout(typeLoop, speed);
}

typeLoop();

// ============ Mobile nav toggle ============
const menuToggle = document.getElementById('menuToggle');
const navTabs = document.getElementById('navTabs');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  navTabs.classList.toggle('mobile-open');
});

navTabs.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    menuToggle.classList.remove('open');
    navTabs.classList.remove('mobile-open');
  });
});

// ============ Active section highlighting in nav ============
const sections = document.querySelectorAll('main section[id], footer[id]');
const tabs = document.querySelectorAll('.nav-tabs .tab');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      const id = entry.target.getAttribute('id');
      tabs.forEach(tab => {
        tab.classList.toggle('active', tab.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));

// ============ Nav background on scroll ============
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10 ? '0 8px 24px -12px rgba(0,0,0,0.5)' : 'none';
}, { passive: true });

// ============ Ambient cursor glow (desktop only) ============
const cursorGlow = document.getElementById('cursorGlow');
let glowActive = window.matchMedia('(min-width: 901px)').matches;

if (glowActive){
  window.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  }, { passive: true });
}
